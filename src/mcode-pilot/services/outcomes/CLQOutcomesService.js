import request from "request";
import _ from 'lodash';
import IOutcomesService from './IOutcomesService';
export default class CLQOutcomesService extends IOutcomesService {
    constructor(params) {
        super();
        this.serviceUrl = params.serviceUrl;
    }

    /*
    Based off of the mcode namespace find the elements that match it in the filter
    */
    findMcodeElements(props, mcodeType, single = false) {
        let found = [];
        _.forIn(props, function (value, key) {
            if (value.mcodeElement === mcodeType && value.selected) {
                found.push(value);
            }
        });
        return single ? found[0] : found;
    }

    /* Build the CLQ demograpchics filter section based off of the Compass filter criteria
     */
    buildDemographicsFilter(similarPatientProps) {
        let demoProps = similarPatientProps.demographic.options;
        let filter = {};
        let gender = this.findMcodeElements(demoProps, "shr.core.BirthSex", true);
        let race = this.findMcodeElements(demoProps, "shr.core.Race", true);
        let age = this.findMcodeElements(demoProps, "shr.core.DateOfBirth", true);
        let age_at_diagnosis = this.findMcodeElements(demoProps, "shr.core.DateOfDiagnosis", true);
        if (gender) {
            filter.gender = {
                codeSystemName: "AdministrativeGender",
                codeSystem: "2.16.840.1.113883.4.642.2.1",
                code: gender.value
            };
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
            filter.race = {
                "codeSystemName": "HL7 v3 Code System Race",
                "codeSystem": "2.16.840.1.113883.5.104",
                "code": race.value
            };
        }
        return filter;
    }

    /* Build the CLQ diagnosis filter based off of the Comapss Filter options
     */
    buildDiagnosisFilter(similarPatientProps) {
        let pathologyProps = similarPatientProps.pathology.options;
        let filter = {};
        let stage = this.findMcodeElements(pathologyProps, "onco.core.TNMClinicalStageGroup", true);
        let t = this.findMcodeElements(pathologyProps, "onco.core.TNMClinicalPrimaryTumorCategory", true);
        let n = this.findMcodeElements(pathologyProps, "onco.core.TNMClinicalRegionalNodesCategory", true);
        let m = this.findMcodeElements(pathologyProps, "onco.core.TNMClinicalDistantMetastasesCategory", true);
        let grade = this.findMcodeElements(pathologyProps, "onco.core.CancerHistologicGrade", true);
        if (stage) {
            filter.stage = stage.reference.stage;
        }
        if (grade) {
            filter.grade = grade.reference.getGradeAsSimpleNumber();
        }
        filter.tmn = {};
        if (t) {
            filter.tmn.t = t.value;
        }
        if (n) {
            filter.tmn.n = n.value;
        }
        if (m) {
            filter.tmn.m = m.value;
        }

        return filter;
    }

    /* Build the CLQ tumor markers filter sections based off the tumor makrkers found in the similar
    patient properties
    */
    buildTumorMakersFilter(similarPatientProps) {
        let pathologyProps = similarPatientProps.pathology.options;
        let filter = [];
        // loop over options look for tumor markers and add to filter
        let markers = this.findMcodeElements(pathologyProps, "onco.core.TumorMarkerTest");
        for (let x in markers) {
            let option = markers[x];
            let code = option.reference.receptorTypeCodeableConcept;
            let value = option.value;
            filter.push({
                code: code.code.code,
                codeSystem: code.codeSystem.uri,
                displayName: code.displayText.string,
                value: value
            });
        }
        return filter;
    }

    /*
    Initialize a row of treatment data. This sets the fields that would be expected by the
    Compass UI to inital default values.
    */
    initializeTreatmentData(displayName, treatments) {
        return {
            id: _.uniqueId('row_'),
            displayName,
            treatments,
            totalPatients: 0,
            oneYrSurvival: 0,
            threeYrSurvival: 0,
            fiveYrSurvival: 0,
            sideEffects: {
                totalReporting: 0,
                effects: {}
            }
        };
    }

    /* Generate a display name for the Compass Data row based off of a set of treatments*/
    generateTreatmentDisplayName(treatments) {
        return treatments.map((treatment) => {
            return treatment.displayName;
        }).join(" & ");
    }

    /* Map an individual CLQ service resonse for a set of treatments into the internal format
    expected by the Compass UI components. */
    generateOutcomeData(data) {
        return data.map((item) => {
            if (item.total === 0 || !item.sufficiency) {
                return null;
            }
            let row = this.initializeTreatmentData(this.generateTreatmentDisplayName(item.treatments), item.treatments);
            row.totalPatients = item.total;
            item.outcomes.forEach((outcome) => {
                /* eslint-disable */
                if (outcome.survivalRate == '12') {
                    row.oneYrSurvival = outcome.total;
                } 
                /* eslint-disable */
                else if (outcome.survivalRate == '36') {
                    row.threeYrSurvival = outcome.total;
                /* eslint-disable */
                } else if (outcome.survivalRate == '60') {
                    row.fiveYrSurvival = outcome.total;
                }
            });
            return row;
        }).filter((x) => x);
    }

    /* Process the entire CLQ service response. */
    processResults(data) {
        let similarPatientTreatmentsData = this.generateOutcomeData(data.outcomes.survival.data);
        let similarPatientTreatments = [];
        similarPatientTreatmentsData.forEach((row) => {
            row.treatments.forEach((treatment) => {
                // dealing with coded values so need to do an inspection
                // of each to ensure they are not already in there
                if (!similarPatientTreatments.find((st) => _.isEqual(st, treatment))) {
                    similarPatientTreatments.push(treatment);
                }

            });
        });

        return {
            similarPatientTreatmentsData,
            similarPatientTreatments,
            totalPatients: data.total,
            totalSimilarPatients: data.outcomes.survival.total
        };
    }

    /* Process a filter generated by Compass.  This method will map the Compass filter items
    into a filter that is expected by the CLQ service and then call the service and process the
    response into a format that is used by the Compass UI */
    processSimilarPatientOutcomes(similarPatientProps) {
        let filter = {};
        filter.demographics = this.buildDemographicsFilter(similarPatientProps);
        filter.diagnosis = this.buildDiagnosisFilter(similarPatientProps);
        filter.tumorMarkers = this.buildTumorMakersFilter(similarPatientProps);
        return new Promise((accept, reject) => {
            request({
                url: this.serviceUrl,
                method: "POST",
                json: filter
            }, (err, _response, data) => {
                if (err) {
                    reject(err);
                }
                try {
                    let outcomes = this.processResults(data);
                    accept(outcomes);
                } catch (ex) {
                    reject(ex);
                }
            });

        });
    }
}