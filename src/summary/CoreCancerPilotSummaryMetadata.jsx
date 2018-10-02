import Lang from 'lodash'
import _ from 'lodash'
import moment from 'moment';
import EncounterPerformed from '../model/shr/encounter/EncounterPerformed';
import FluxNotesTreatmentOptionsRestClient from 'flux_notes_treatment_options_rest_client';
const api = new FluxNotesTreatmentOptionsRestClient.DefaultApi();

/*
    Each section has the following properties:
        name                Displayed at the top of the section and in the mini-map
        shortName           Displayed in the mini-map when the name is too long to fit -- max 10 characters
        type                Dictates the format of the data section described later. Visualizers are implemented to support specific data types.
        narrative           This section is only used if the section will be displayed using a narrative visualizer. It provides templates for
                            turning the data into sentences.
        data                Provides the retrieval of the source data to be displayed in the section in the format dictated by the type property
                            above. The data is a list of subsections which each have the following possible properties:
                                name            The name of the subsection. Some visualizers display the subsection names.
                                nameFunction    Used to dynamically name the subsection.  Tabular list visualizer uses this when included.
                                items           The list of data items in the format dictated by the type
                                itemsFunction   A function that returns the list of data items in the format dictated by the type
                                displayFunction A function that returns a boolean indicating whether or not data should be displayed.
                                headings        Indicates the a set of column heading labels for tabular visualizers
                                shortcut        Indicates a shortcut name to use for the first column of insertable data.
                                code            Indicates a code to be used by an itemsFunction. This allows multiple sections to share the same
                                                itemsFunction
                                bands           Indicates a set of value ranges and the assessment for that range. Some visualizers display bands
                                preTableCount   Indicates type of items in table, e.g. Allergies.  Will show count of number of items in table.
                                postTableList   Provide list of structured data to be displayed after the table.
        defaultVisualizer   Indicates the visualizer type for the default visualizer to use for the section. The following ways to specify the
                            default are supported:
                                "tabular"                                               The specified visualizer type will be the default
                                                                                        visualizer for the section if supported by the data type.
                                {clinicalEvent: X, defaultVisualizer: Y}                The specified visualizer type Y will be used if the current
                                                                                        clinical event is X otherwise the first visualizer
                                                                                        registered for the data type will be used.
                                ["X", {clinicalEvent: Y, defaultVisualizer: Z}, ...]    A list of options allowing an overall default X that is used
                                                                                        if one of the specific clinical events (e.g. Y) doesn't match
                                                                                        the currently selected one. If a specific one matches, it
                                                                                        uses the corresponding default visualizer (e.g. Z)
*/

export default class CoreCancerPilotSummaryMetadata {
    constructor(setForceRefresh) {
        this.setForceRefresh = setForceRefresh;
        const recentLabResultsSubsection = {
            name: "Recent Lab Results",
            itemsFunction: this.getItemListForLabResults
        };
        const keyDatesSubsection = {
            name: "Key Dates",
            items: [
                {
                    name: "Diagnosis",
                    value: (patient, currentConditionEntry) => {
                        return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)] ;
                    }
                },
                {
                    name: "Recurrence",
                    value: (patient, currentConditionEntry) => {
                        if (currentConditionEntry.clinicalStatus === "recurrence") {
                            return null;
                        } else {
                            return ["N/A", patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                        } // TODO: actually get date once we know where it is in SHR
                    }
                }
            ]
        };
        const mostRecentVisitSubsection = {
            name: "Most Recent Visit",
            items: [
                {
                    name: "Date of Last Visit with You",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.practitioner === user.getUserName());
        
                        if (filteredEncounters.length === 0) return [null, false];
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        const expectedPerformanceTime = new moment(mostRecentFilteredEncounter.expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                        return [expectedPerformanceTime, patient.isUnsigned(mostRecentFilteredEncounter), this.determineSource(patient, mostRecentFilteredEncounter)];
                    }
                },
                {
                    name: "Date of Last Visit Here",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.provider === user.provider);
        
                        if (filteredEncounters.length === 0) return [null, false];
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        const expectedPerformanceTime = new moment(mostRecentFilteredEncounter.expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                        return [expectedPerformanceTime, patient.isUnsigned(mostRecentFilteredEncounter), this.determineSource(patient, mostRecentFilteredEncounter)];
                    }
                },
                {
                    name: "Who Last Visited Here",
                    value: (patient, currentConditionEntry, user) => {
                        const encounters = patient.getEncountersChronologicalOrder();
                        const filteredEncounters = encounters.filter(e => e.provider === user.provider);
        
                        if (filteredEncounters.length === 0) return [null, false];
                        const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                        return [mostRecentFilteredEncounter.practitioner, patient.isUnsigned(mostRecentFilteredEncounter), this.determineSource(patient, mostRecentFilteredEncounter)];
                    }
                }
            ]
        }
        this.hardCodedMetadata = {
            "default": {
                sections: [
                    {
                        name: "Summary",
                        shortName: "Summary",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Patient has ${.Name} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
                            },
                            {
                                defaultTemplate: "Mitosis is ${.Mitosis}.",
                                dataMissingTemplate: "Mitosis is ${.Mitosis}.",
                                useDataMissingTemplateCriteria: [
                                    ".Mitosis"
                                ]
                            },
                            {
                                defaultTemplate: "You last saw this patient on ${Most Recent Visit.Date of Last Visit with You}.",
                                dataMissingTemplate: "There are no recorded encounters for you with this patient.",
                                useDataMissingTemplateCriteria: [
                                    "Most Recent Visit.Date of Last Visit with You"
                                ]
                            },
                            {
                                defaultTemplate: "This patient was last seen in your facility by ${Most Recent Visit.Who Last Visited Here} on ${Most Recent Visit.Date of Last Visit Here}.",
                                dataMissingTemplate: "No recent visits to this facility are on record.",
                                useDataMissingTemplateCriteria: [
                                    "Most Recent Visit.Who Last Visited Here",
                                    "Most Recent Visit.Date of Last Visit Here"
                                ]
                            },
                            {
                                defaultTemplate: "As of ${.As Of Date}, disease is ${.Disease Status} based on ${.Rationale}.",
                                dataMissingTemplate: "No recent ${disease status}.",
                                useDataMissingTemplateCriteria: [
                                    ".As Of Date",
                                    ".Disease Status",
                                    ".Rationale"
                                ]
                            },
                            {
                                defaultTemplate: "Recent lab results include ${Recent Lab Results}.",
                                dataMissingTemplate: "No recent ${lab results}.",
                                useDataMissingTemplateCriteria: [
                                    "Recent Lab Results"
                                ]
                            },
                            {
                                defaultTemplate: "Key toxicities include",
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Headaches} headaches,",
                                dataMissingTemplate: "no headaches,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Headaches"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Skin Rashes} skin rashes,",
                                dataMissingTemplate: "no skin rashes,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Skin Rashes"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Vomiting} vomiting,",
                                dataMissingTemplate: "no vomiting,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Vomiting"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Diarrhea} diarrhea,",
                                dataMissingTemplate: "no diarrhea,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Diarrhea"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Muscle Pains} muscle pains.",
                                dataMissingTemplate: "no muscle pains.",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Muscle Pains"
                                ]
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Name",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.type, 
                                                    patient.isUnsigned(currentConditionEntry), 
                                                    this.determineSource(patient, currentConditionEntry)
                                                ];
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Stage",
                                        value: (patient, currentConditionEntry) => {
                                            let s = currentConditionEntry.getMostRecentStaging();
                                            if (s && s.stage && s.stage.length > 0) {
                                                return [s.stage, patient.isUnsigned(s), this.determineSource(patient, s)];
                                            } else {
                                                return null;
                                            }
                                        },
                                        // shortcut: "@stage"
                                    },
                                    {
                                        name: "Mitosis",
                                        value: (patient, currentConditionEntry) => {
                                            let mr = currentConditionEntry.getMostRecentMitosis();
                                            if (mr) {
                                                return [mr.quantity.number + " " + mr.quantity.unit, patient.isUnsigned(mr), this.determineSource(patient, mr)];
                                            } else {
                                                return null;
                                            }
                                        },
                                        // shortcut: "@stage"
                                    },
                                    {
                                        name: "Disease Status",
                                        value: (patient, currentConditionEntry) => {
                                            let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                            if (Lang.isNull(p) || !p.status) {
                                                return null;
                                            } else {
                                                return [p.status, patient.isUnsigned(p), this.determineSource(patient, p)];
                                            }
                                        }
                                    },
                                    {
                                        name: "As Of Date",
                                        value: (patient, currentConditionEntry) => {
                                            let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                            if (Lang.isNull(p) || !p.status) {
                                                return null;
                                            } else {
                                                return [p.asOfDate, patient.isUnsigned(p), this.determineSource(patient, p)];
                                            }
                                        }
                                    },
                                    {
                                        name: "Rationale",
                                        value: (patient, currentConditionEntry) => {
                                            let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                            if (Lang.isNull(p) || !p.status) {
                                                return null;
                                            } else {
                                                return [p.evidence.map(function (ev) {
                                                    return ev;
                                                }).join(', '), patient.isUnsigned(p), this.determineSource(patient, p)];
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: "Key Toxicities",
                                items: [
                                    {
                                        name: "Headaches",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10019211", "10019231"]);
                                        }

                                    },
                                    {
                                        name: "Skin Rashes",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10037868"]);
                                        }
                                    },
                                    {
                                        name: "Vomiting",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10047700"]);
                                        }
                                    },
                                    {
                                        name: "Diarrhea",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10012735", "10012727"]);
                                        }
                                    },
                                    {
                                        name: "Muscle Pains",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10028323", "10028411"]);
                                        }
                                    }
                                ]
                            },
                            recentLabResultsSubsection,
                            keyDatesSubsection,
                            mostRecentVisitSubsection
                        ]
                    },
                    {
                        name: "Treatment Options",
                        shortName: "Treatments",
                        type: "ClusterPoints",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getTreatmentData
                            }
                        ]
                    }
                ]
            }
        };

        this.missingEligibleTrialData = null;
    }

    getMetadata = () => {
        return this.hardCodedMetadata;
    }

    determineSource = (patient, entry) => {
        if (entry.sourceClinicalNoteReference) {
            return {
                entryId: entry.entryInfo.entryId,
                note: entry.sourceClinicalNoteReference,
            };
        }
        let result = "";
        if (entry.author && entry.informant && entry.author === entry.informant) {
            result += "Recorded and informed by " + entry.author;
        } else {
            if (entry.author) result += "Recorded by " + entry.author;
            if (entry.informant) result += (result.length > 0 ? " b" : "B") + "ased on information from " + entry.informant;
        }
        if (entry.relatedEncounterReference) {
            const relatedEncounter = patient.getEntryFromReference(entry.relatedEncounterReference);
            if (relatedEncounter instanceof EncounterPerformed) {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.actionContext.occurrenceTimeOrPeriod.timePeriod.timePeriodStart.value, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            } else {
                result += (result.length > 0 ? " f" : "F") + "rom encounter on " + new moment(relatedEncounter.expectedPerformanceTime, 'D MMM YYY HH:mm Z').format('D MMM YYY hh:mm a');
            }
        } else if (entry.creationTime) {
            result += (result.length > 0 ? " o" : "O") + "n " + entry.creationTime.format('D MMM YYY hh:mm a');
        } else if (entry.diagnosisDate) {
            result += (result.length > 0 ? " c" : "C") + "linically recognized on " + new moment(entry.diagnosisDate, 'D MMM YYYY').format('D MMM YYYY');
        }

        return result;
    }

    getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, codes) {
        const tox = currentConditionEntry.getToxicitiesByCodes(codes);
        let val, unsigned, source;
        if (tox.length > 0) {
            val = tox[0].adverseEventGrade;
            unsigned = patient.isUnsigned(tox[0]);
            source = this.determineSource(patient, tox[0]);
        } else {
            val = 'None';
            unsigned = false;
            source = null;
        }
        return [val, unsigned, source];
    }

    getItemListForLabResults = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        // Set the max number of months prior to today that a lab result can be
        const numberOfMonths = 6;

        // labResultsInOrder contains all lab results within a specified number of months from today
        const labResultsInOrder = currentConditionEntry.getLabResultsChronologicalOrder(moment().subtract(numberOfMonths, 'months'));
        return labResultsInOrder.map((l, i) => {
            const value = `${l.quantity.number} ${l.quantity.unit} (${l.clinicallyRelevantTime})`;
            const name = `${l.name}`;
            return [
                {value: name, isInsertable: false},
                {value: [value, patient.isUnsigned(l)], shortcut: null}
            ];
        });
    }

    toFirstLetterCapital = (text) => {
        return text.charAt(0).toUpperCase() + text.substr(1);
    }

    getTreatmentData = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        try {
            // If we have cached data, use that instead of making an API call
            if (subsection.data_cache) return subsection.data_cache;
            // Commenting out the api call with actual patient criteria til we get patient data
            //const data = api.findTreatmentOptionsByPatientStats(condition.codeURL, {race: this.toFirstLetterCapital(patient.getPatient().race), dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber()});
            const data = api.findTreatmentOptionsByPatientStats("http://snomed.info/sct/399068003", {race: "Black" });
            const parsedData = JSON.parse(data);
            if(parsedData[0].length === 0 && parsedData[1].length === 0){
                return "No relevant data found for patient";
            }
            return parsedData;
        }
        catch(error) {
            return "Server unavailable";
        }
    }
}

