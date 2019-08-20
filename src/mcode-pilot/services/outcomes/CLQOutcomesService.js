import request from "request";
import IOutcomesService from './IOutcomesService';
import _ from 'lodash';

import find_race_code from './race_codes';

export default class CLQOutcomesService extends IOutcomesService {
    constructor(params) {
        super();
        this.serviceUrl = params.serviceUrl;
        this.timescale = params.timescale || [];
        this.apiKey = params.apiKey;
        this.filters = params.filters;
    }

    _genderMapping(gender) {
        let lowered = gender ? _.toLower(gender) : null;
        let code = 'UNK';
        let display = 'UNKOWN';
        if (lowered === "female" || lowered === 'f') {
            code = '703118005';
            display = 'Female';
        } else if (lowered === 'male' || lowered === 'm') {
            code = '703117000';
            display = 'Male';
        }
        return {
            code: code,
            displayName: display,
            codeSystem: 'SNOMEDCT'
        };
    }

    __raceCodeMapping(race) {
        let code = find_race_code(race);
        if (code) {
            // if the value is one of the codes from the code system make sure it is one that clq supports
            if (!['2028-9', '2106-3', '2054-5', '2131-1'].indexOf(code.code)) {
                code = {
                    code: '2131-1',
                    text: 'Other Race'
                };
            }
            return {
                "codeSystemName": "HL7 v3 Code System Race",
                "codeSystem": "2.16.840.1.113883.5.104",
                "code": code.code,
                "displayName": code.text
            };
        }

        return {
            "codeSystemName": "HL7 v3 Code System Race",
            "codeSystem": "2.16.840.1.113883.5.104",
            "code": 'UNK'
        };

    }
    /* Build the CLQ demograpchics filter section based off of the Compass filter criteria
     */
    buildDemographicsFilter(activeFilterValues) {
        const filter = {};
        const gender = activeFilterValues["shr.core.BirthSex"];
        const race = activeFilterValues["shr.core.Race"];
        const age = activeFilterValues["shr.core.DateOfBirth"];
        const age_at_diagnosis = activeFilterValues["shr.core.DateOfDiagnosis"];
        if (gender) {
            filter.gender = this._genderMapping(gender.value);
        }
        if (age) {
            filter.age = {
                min: age.minValue,
                max: age.maxValue
            };
        }
        if (age_at_diagnosis) {
            filter.age_at_diagnosis = {
                min: age_at_diagnosis.minValue,
                max: age_at_diagnosis.maxValue
            };
        }
        if (race) {
            filter.race = this.__raceCodeMapping(race.value);
        }

        if (ethnicity) {
            let ethCode = ethnicity.value;
            filter.ethnicity = {
                "codeSystemName": "HL7 v3 Code System Ethnicity",
                "codeSystem": "2.16.840.1.113883.5.50",
                "code": ethCode
            };
        }
        return filter;
    }

    /* Build the CLQ diagnosis filter based off of the Comapss Filter options
     */
    buildDiagnosisFilter(activeFilterValues) {
        const filter = {};
        const stage = activeFilterValues["onco.core.TNMClinicalStageGroup"];
        const t = activeFilterValues["onco.core.TNMClinicalPrimaryTumorCategory"];
        const n = activeFilterValues["onco.core.TNMClinicalRegionalNodesCategory"];
        const m = activeFilterValues["onco.core.TNMClinicalDistantMetastasesCategory"];
        const grade = activeFilterValues["onco.core.CancerHistologicGrade"];
        if (stage) {
            filter.stage = stage.reference.stage;
        }
        if (grade) {
            filter.grade = grade.reference.getGradeAsSimpleNumber();
        }
        filter.tnm = {};
        if (t) {
            filter.tnm.t = t.value;
        }
        if (n) {
            filter.tnm.n = n.value;
        }
        if (m) {
            filter.tnm.m = m.value;
        }
        return filter;
    }

    /* Build the CLQ tumor markers filter sections based off the tumor makrkers found in the similar
    patient properties
    */
    buildTumorMarkersFilter(activeFilterValues) {
        const filter = [];
        // loop over options look for tumor markers and add to filter
        let markers = activeFilterValues["onco.core.TumorMarkerTest"];
        if (!_.isEmpty(markers) && !Array.isArray(markers)) {
            markers = [markers];
        }
        for (const x in markers) {
            const option = markers[x];
            const code = option.reference.receptorTypeCodeableConcept;
            const value = option.value;
            filter.push({
                code: code.code.value,
                codeSystem: code.codeSystem.value,
                displayName: code.displayText.value,
                value: _.startCase(_.toLower(value))
            });
        }
        return filter;
    }

    /* Process a filter generated by Compass.  This method will map the Compass filter items
    into a filter that is expected by the CLQ service and then call the service and process the
    response into a format that is used by the Compass UI */
    processSimilarPatientOutcomes(fOptions) {
        const filter = {};
        const activeFilterValues = fOptions.getAllActiveValuesByMcodeElement();
        filter.demographics = this.buildDemographicsFilter(activeFilterValues);
        filter.diagnosis = this.buildDiagnosisFilter(activeFilterValues);
        filter.tumorMarkers = this.buildTumorMarkersFilter(activeFilterValues);
        filter.outcomes = {
            survival: this.timescale.map((ts) => { return { "value": ts * 12, "interval": "months" }; })
        };
        return new Promise((accept, reject) => {
            request({
                url: this.serviceUrl,
                method: "POST",
                headers: {
                    'Authorization': this.apiKey
                },
                json: filter
            }, (err, _response, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    data.timescale = this.timescale;
                    accept(data);
                } catch (ex) {
                    reject(ex);
                }
            });

        });
    }
}
