import Lang from 'lodash'
import _ from 'lodash'
import moment from 'moment';
import EncounterPerformed from '../model/shr/encounter/EncounterPerformed';
import FluxTumorDimensions from '../model/oncology/FluxTumorDimensions';
import FluxTumorMargins from '../model/oncology/FluxTumorMargins';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList.jsx';
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

export default class SummaryMetadata {
    constructor(setForceRefresh) {
        this.setForceRefresh = setForceRefresh;
        this.trialDisplayMissingCriteria = "";
        this.hardCodedMetadata = {
            "http://snomed.info/sct/408643008": {
                sections: [
                    {
                        name: "Visit Reason",
                        shortName: "Reason",
                        clinicalEvents: ["pre-encounter"],
                        type: "NarrativeOnly",
                        narrative: [
                            {
                                defaultTemplate: "${Reason.Reason}",
                                dataMissingTemplate: "No recent ${Reason.Reason}",
                                useDataMissingTemplateCriteria: [
                                    "Reason.Reason"
                                ]
                            },
                        ],
                        data: [
                            {
                                name: "Reason",
                                items: [
                                    {
                                        name: "Reason",
                                        value: (patient, currentConditionEntry) => {
                                            const nextEncounter = patient.getNextEncounter();
                                            if (Lang.isUndefined(nextEncounter)) return ["No upcoming appointments", false];
                                            return [patient.getNextEncounterReasonAsText(), patient.isUnsigned(nextEncounter), this.determineSource(patient, nextEncounter)];
                                        },
                                        shortcut: "@reason for next visit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Visit Reason",
                        shortName: "Reason",
                        clinicalEvents: ["post-encounter"],
                        type: "NarrativeOnly",
                        narrative: [
                            {
                                defaultTemplate: "${Reason.Reason}",
                                dataMissingTemplate: "No recent ${Reason.Reason}",
                                useDataMissingTemplateCriteria: [
                                    "Reason.Reason"
                                ]
                            },
                        ],
                        data: [
                            {
                                name: "Reason",
                                items: [
                                    {
                                        name: "Reason",
                                        value: (patient, currentConditionEntry) => {
                                            const previousEncounter = patient.getPreviousEncounter();
                                            if (Lang.isUndefined(previousEncounter)) return ["No recent appointments", false];
                                            return [patient.getPreviousEncounterReasonAsText(), patient.isUnsigned(previousEncounter), this.determineSource(patient, previousEncounter)] ;
                                        },
                                        shortcut: "@reason for previous visit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Summary",
                        shortName: "Summary",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Patient has ${.Name} laterality ${.Laterality} stage ${.Stage} diagnosed on ${Key Dates.Diagnosis}."
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
                                defaultTemplate: "${Key Toxicities.Peripheral motor neuropathy} peripheral motor neuropathy,",
                                dataMissingTemplate: "no peripheral motor neuropathy,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Peripheral motor neuropathy"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Blood clots} blood clots,",
                                dataMissingTemplate: "no blood clots,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Blood clots"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Neutropenia} neutropenia,",
                                dataMissingTemplate: "no neutropenia,",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Neutropenia"
                                ]
                            },
                            {
                                defaultTemplate: "${Key Toxicities.Nausea/Vomiting} nausea/vomiting.",
                                dataMissingTemplate: "no nausea/vomiting.",
                                useDataMissingTemplateCriteria: [
                                    "Key Toxicities.Nausea/Vomiting"
                                ]
                            },
                            {
                                defaultTemplate: "Patient is ER ${Receptor Status.ER}, PR ${Receptor Status.PR}, and HER2 ${Receptor Status.HER2}.",
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Name",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.type, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Laterality",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.laterality, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
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
                                        name: "Peripheral motor neuropathy",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10034580"]);
                                        }

                                    },
                                    {
                                        name: "Blood clots",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10042554", "10036206","10013442"]);
                                        }
                                    },
                                    {
                                        name: "Neutropenia",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10016288"]);
                                        }
                                    },
                                    {
                                        name: "Nausea/Vomiting",
                                        value: (patient, currentConditionEntry) => {
                                            return this.getKeyToxicityAndUnsignedFromCodes(patient, currentConditionEntry, ["10028813", "10047700", "10013946", "10018043", "10001598", "10047386"]);
                                        }
                                    }
                                ]
                            },
                            {
                                name: "Recent Lab Results",
                                itemsFunction: this.getItemListForLabResults
                            },
                            {
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
                            },
                            {
                                name: "Receptor Status",
                                items: [
                                    {
                                        name: "ER",
                                        value: (patient, currentConditionEntry) => {
                                            let er = currentConditionEntry.getMostRecentERReceptorStatus();
                                            if (Lang.isNull(er)) {
                                                return null;
                                            } else {
                                                return [er.status, patient.isUnsigned(er), this.determineSource(patient, er)];
                                            }
                                        }
                                    },
                                    {
                                        name: "PR",
                                        value: (patient, currentConditionEntry) => {
                                            let pr = currentConditionEntry.getMostRecentPRReceptorStatus();
                                            if (Lang.isNull(pr)) {
                                                return null;
                                            } else {
                                                return [pr.status, patient.isUnsigned(pr), this.determineSource(patient, pr)];
                                            }
                                        }
                                    },
                                    {
                                        name: "HER2",
                                        value: (patient, currentConditionEntry) => {
                                            let her2 = currentConditionEntry.getMostRecentHER2ReceptorStatus();
                                            if (Lang.isNull(her2)) {
                                                return null;
                                            } else {
                                                return [her2.status, patient.isUnsigned(her2), this.determineSource(patient, her2)];
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: "Most Recent Visit",
                                items: [
                                    {
                                        name: "Date of Last Visit with You",
                                        value: (patient, currentConditionEntry, user) => {
                                            const encounters = patient.getEncountersChronologicalOrder();
                                            const filteredEncounters = encounters.filter(e => e.practitioner === user.getUserName());

                                            if (filteredEncounters.length === 0) return [null, false];
                                            const expectedPerformanceTime = new moment(filteredEncounters.slice(-1)[0].expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                                            return [expectedPerformanceTime, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Date of Last Visit Here",
                                        value: (patient, currentConditionEntry, user) => {
                                            const encounters = patient.getEncountersChronologicalOrder();
                                            const filteredEncounters = encounters.filter(e => e.serviceProvider === user.serviceProvider);

                                            if (filteredEncounters.length === 0) return [null, false];
                                            const expectedPerformanceTime = new moment(filteredEncounters.slice(-1)[0].expectedPerformanceTime, 'D MMM YYYY').format('D MMM YYYY');
                                            return [expectedPerformanceTime, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Who Last Visited Here",
                                        value: (patient, currentConditionEntry, user) => {
                                            const encounters = patient.getEncountersChronologicalOrder();
                                            const filteredEncounters = encounters.filter(e => e.serviceProvider === user.serviceProvider);

                                            if (filteredEncounters.length === 0) return [null, false];
                                            return [filteredEncounters.slice(-1)[0].practitioner, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        name: "Procedures",
                        shortName: "Procedures",
                        type: "Columns",
                        data: [
                            {
                                name: "",
                                headings: ["Procedure", "When"],
                                itemsFunction: this.getItemListForProcedures
                            }
                        ]
                    },
                    {
                        name: "Active Conditions",
                        shortName: "Conditions",
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Condition", "Diagnosed", "Body Site"],
                                itemsFunction: this.getItemListForConditions,
                                shortcut: "@condition"
                            }
                        ]
                    },
                    {
                        name: "Disease Status",
                        shortName: "Disease",
                        clinicalEvents: ["pre-encounter"],
                        type: "DiseaseStatusValues",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getProgressions,
                            }
                        ]
                    },
                    {
                        name: "Labs",
                        shortName: "Labs",
                        clinicalEvents: ["pre-encounter"],
                        type: "ValueOverTime",
                        data: [
                            {
                                name: "White blood cell count",
                                code: "C0023508",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.cancer.org/treatment/understanding-your-diagnosis/tests/understanding-your-lab-test-results.html
                                // Source: https://www.mayoclinic.org/symptoms/low-white-blood-cell-count/basics/definition/sym-20050615
                                bands: [
                                    {
                                        low: 0,
                                        high: 3,
                                        assessment: 'bad'
                                    },
                                    {
                                        low: 3,
                                        high: 10,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 10,
                                        high: 'max',
                                        assessment: 'bad'
                                    }
                                ]
                            },
                            {
                                name: "Neutrophil count",
                                code: "C0027950",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.healthline.com/health/neutrophils#anc
                                // Source: https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_4.03_2010-06-14_QuickReference_8.5x11.pdf page 42
                                bands: [
                                    {
                                        low: 0,
                                        high: 1,
                                        assessment: 'bad'
                                    },
                                    {
                                        low: 1,
                                        high: 8,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 8,
                                        // Only draws if an element is captured in this range
                                        high: 'max',
                                        assessment: 'bad'
                                    }
                                ]
                            },
                            {
                                name: "Hemoglobin",
                                code: "C0019046",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
                                // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
                                bands: [
                                    {
                                        low: 0,
                                        high: 12,
                                        assessment: 'bad'
                                    },

                                    {
                                        low: 12,
                                        high: 16,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 16,
                                        high: 20,
                                        assessment: 'bad'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Medications",
                        shortName: "Meds",
                        clinicalEvents: ["pre-encounter"],
                        defaultVisualizer: "chart",
                        type: "Medications",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getItemListForMedications,
                            }
                        ]
                    },
                    {
                        name: "Pathology",
                        shortName: "Pathology",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Primary tumor color is ${.Color}, weight is ${.Weight}, and size is ${.Size}."
                            },
                            {
                                defaultTemplate: "Tumor margins are ${.Tumor Margins}. Histological grade is ${.Histological Grade}."
                            },
                            {
                                defaultTemplate: "ER-${.Receptor Status ER} PR-${.Receptor Status PR} HER2-${.Receptor Status HER2}."
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [

                                    // TODO: When return value for items that are currently null, need to also return patient.isUnsigned(currentConditionEntry)
                                    {
                                        name: "Color",
                                        value: null
                                    },
                                    {
                                        name: "Weight",
                                        value: null
                                    },
                                    {
                                        name: "Size",
                                        value: (patient, currentConditionEntry) => {
                                            let list = currentConditionEntry.getObservationsOfType(FluxTumorDimensions);
                                            if (list.length === 0) return null;
                                            return [list[0].quantity.value + " " + list[0].quantity.unit, patient.isUnsigned(list[0]), this.determineSource(patient, list[0])];
                                        }
                                    },
                                    {
                                        name: "Tumor Margins",
                                        value: null
                                    },
                                    {
                                        name: "Histological Grade",
                                        value: (patient, currentConditionEntry) => {
                                            let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                            return [ histologicalGrade.grade, patient.isUnsigned(histologicalGrade), this.determineSource(patient, histologicalGrade) ];
                                        }
                                    },
                                    {
                                        name: "Receptor Status ER",
                                        value: (patient, currentConditionEntry) => {
                                            let er = currentConditionEntry.getMostRecentERReceptorStatus();
                                            if (Lang.isNull(er)) {
                                                return null;
                                            } else {
                                                return [er.status, patient.isUnsigned(er), this.determineSource(patient, er)];
                                            }
                                        }
                                    },
                                    {
                                        name: "Receptor Status PR",
                                        value: (patient, currentConditionEntry) => {
                                            let pr = currentConditionEntry.getMostRecentPRReceptorStatus();
                                            if (Lang.isNull(pr)) {
                                                return null;
                                            } else {
                                                return [pr.status, patient.isUnsigned(pr), this.determineSource(patient, pr)];
                                            }
                                        }
                                    },
                                    {
                                        name: "Receptor Status HER2",
                                        value: (patient, currentConditionEntry) => {
                                            let her2 = currentConditionEntry.getMostRecentHER2ReceptorStatus();
                                            if (Lang.isNull(her2)) {
                                                return null;
                                            } else {
                                                return [her2.status, patient.isUnsigned(her2), this.determineSource(patient, her2)];
                                            }
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Genetics",
                        shortName: "Genetics",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Oncotype DX Recurrence Score is ${.Oncotype DX Recurrence Score}."
                            },
                            {
                                defaultTemplate: "Genetic Testing is ${.Genetic Testing}."
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Oncotype DX Recurrence Score",
                                        value: null
                                    },
                                    {
                                        name: "Genetic Testing",
                                        value: (patient, currentConditionEntry) => {
                                            const panels = patient.getBreastCancerGeneticAnalysisPanelsChronologicalOrder();
                                            if (!panels || panels.length === 0) return null;
                                            const panel = panels.pop();
                                            return [panel.members.map((item) => {
                                                const v = item.value === 'Positive' ? '+' : '-';
                                                return item.abbreviatedName + v;
                                            }).join(","), patient.isUnsigned(panel), this.determineSource(patient, panel)];
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Clinical Trials",
                        shortName: "Trials",
                        clinicalEvents: ["pre-encounter"],
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "Enrolled",
                                headings: ["Name", "When Enrolled", "When Left", "Description"],
                                itemsFunction: this.getItemListForEnrolledClinicalTrials
                            },
                            {
                                name: "Potential to enroll",
                                headings: ["Name", "Criteria Fit", "Opened", "Description"],
                                itemsFunction: this.getItemListForClinicalTrialEligibility,
                                actions: [
                                    {
                                        handler: this.handleViewMissingCriteria,
                                        text: "Missing Criteria",
                                        icon: "clipboard",
                                        whenToDisplay: {
                                            valueExists: true,
                                            existingValueSigned: "either",
                                            editableNoteOpen: "either", 
                                            displayForColumns: [0, 1]
                                        }
                                    }
                                ]
                            },
                            {   nameFunction: this.getMissingCriteriaSubsectionName, 
                                itemsFunction: this.getItemListToDisplayMissingCriteria,
                                displayFunction: this.getMissingCriteriaDisplay
                            }
                        ]   
                    },
                    {
                        name: "Allergies",
                        shortName: "Allergies",
                        clinicalEvents: ["pre-encounter"],
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Allergy", "Severity", "Effects"],
                                itemsFunction: this.getItemListForAllergies,
                                preTableCount: "allergies",
                                postTableList: this.getItemListForNoKnownAllergies,
                            }
                        ]
                    },
                    {
                        name: "Timeline",
                        shortName: "Timeline",
                        type: "Events",
                        resetData: this.resetTimelineData,
                        data: [
                            {
                                name: "Medications",
                                itemsFunction: this.getMedicationItems
                            },
                            {
                                name: "Procedures",
                                itemsFunction: this.getProcedureItems
                            },
                            {
                                name: "Key Events",
                                itemsFunction: this.getEventItems
                            },
                            {
                                name: "Progressions",
                                itemsFunction: this.getProgressionItems
                            }
                        ]
                    },
                    // adding new section for treatment options
                    {
                        name: "Treatment Options",
                        shortName: "Treatment Options",
                        type: "ClusterPoints",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getTreatmentData
                            }
                        ]
                    }
                ]
            },
            "http://snomed.info/sct/420120006": {
                sections: [
                    {
                        name: "Visit Reason",
                        shortName: "Reason",
                        clinicalEvents: ["pre-encounter"],
                        type: "NarrativeOnly",
                        narrative: [
                            {
                                defaultTemplate: "${Reason.Reason}",
                                dataMissingTemplate: "No recent ${Reason.Reason}",
                                useDataMissingTemplateCriteria: [
                                    "Reason.Reason"
                                ]
                            },
                        ],
                        data: [
                            {
                                name: "Reason",
                                items: [
                                    {
                                        name: "Reason",
                                        value: (patient, currentConditionEntry) => {
                                            const nextEncounter = patient.getNextEncounter();
                                            if (Lang.isUndefined(nextEncounter)) return ["No upcoming appointments", false];
                                            return [patient.getNextEncounterReasonAsText(), patient.isUnsigned(nextEncounter), this.determineSource(patient, nextEncounter)];
                                        },
                                        shortcut: "@reason for next visit"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Visit Reason",
                        shortName: "Reason",
                        clinicalEvents: ["post-encounter"],
                        type: "NarrativeOnly",
                        narrative: [
                            {
                                defaultTemplate: "${Reason.Reason}",
                                dataMissingTemplate: "No recent ${Reason.Reason}",
                                useDataMissingTemplateCriteria: [
                                    "Reason.Reason"
                                ]
                            },
                        ],
                        data: [
                            {
                                name: "Reason",
                                items: [
                                    {
                                        name: "Reason",
                                        value: (patient, currentConditionEntry) => {
                                            const previousEncounter = patient.getPreviousEncounter();
                                            if (Lang.isUndefined(previousEncounter)) return ["No recent appointments", false];
                                            return [patient.getPreviousEncounterReasonAsText(), patient.isUnsigned(previousEncounter), this.determineSource(patient, previousEncounter)] ;
                                        },
                                        shortcut: "@reason for previous visit"
                                    }
                                ]
                            }
                        ]
                    },
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
                            {
                                name: "Recent Lab Results",
                                itemsFunction: this.getItemListForLabResults
                            },
                            {
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
                            },
                            {
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
                                            const filteredEncounters = encounters.filter(e => e.serviceProvider === user.serviceProvider);

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
                                            const filteredEncounters = encounters.filter(e => e.serviceProvider === user.serviceProvider);

                                            if (filteredEncounters.length === 0) return [null, false];
                                            const mostRecentFilteredEncounter = filteredEncounters.slice(-1)[0];
                                            return [mostRecentFilteredEncounter.practitioner, patient.isUnsigned(mostRecentFilteredEncounter), this.determineSource(patient, mostRecentFilteredEncounter)];
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Procedures",
                        shortName: "Procedures",
                        type: "Columns",
                        data: [
                            {
                                name: "",
                                headings: ["Procedure", "When"],
                                itemsFunction: this.getItemListForProcedures
                            }
                        ]
                    },
                    {
                        name: "Active Conditions",
                        shortName: "Conditions",
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Condition", "Diagnosed", "Body Site"],
                                itemsFunction: this.getItemListForConditions,
                                shortcut: "@condition"
                            }
                        ]
                    },
                    {
                        name: "Disease Status",
                        shortName: "Disease",
                        clinicalEvents: ["pre-encounter"],
                        type: "DiseaseStatusValues",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getProgressions,
                            }
                        ]
                    },
                    {
                        name: "Labs",
                        shortName: "Labs",
                        clinicalEvents: ["pre-encounter"],
                        type: "ValueOverTime",
                        data: [
                            {
                                name: "White blood cell count",
                                code: "C0023508",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.cancer.org/treatment/understanding-your-diagnosis/tests/understanding-your-lab-test-results.html
                                // Source: https://www.mayoclinic.org/symptoms/low-white-blood-cell-count/basics/definition/sym-20050615
                                bands: [
                                    {
                                        low: 0,
                                        high: 3,
                                        assessment: 'bad'
                                    },
                                    {
                                        low: 3,
                                        high: 10,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 10,
                                        high: 'max',
                                        assessment: 'bad'
                                    }
                                ]
                            },
                            {
                                name: "Neutrophil count",
                                code: "C0027950",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.healthline.com/health/neutrophils#anc
                                // Source: https://evs.nci.nih.gov/ftp1/CTCAE/CTCAE_4.03_2010-06-14_QuickReference_8.5x11.pdf page 42
                                bands: [
                                    {
                                        low: 0,
                                        high: 1,
                                        assessment: 'bad'
                                    },
                                    {
                                        low: 1,
                                        high: 8,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 8,
                                        // Only draws if an element is captured in this range
                                        high: 'max',
                                        assessment: 'bad'
                                    }
                                ]
                            },
                            {
                                name: "Hemoglobin",
                                code: "C0019046",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.emedicinehealth.com/hemoglobin_levels/page2_em.htm
                                // Source: https://www.quora.com/What-is-the-percentage-of-haemoglobin-in-blood
                                bands: [
                                    {
                                        low: 0,
                                        high: 12,
                                        assessment: 'bad'
                                    },

                                    {
                                        low: 12,
                                        high: 16,
                                        assessment: 'good'
                                    },
                                    {
                                        low: 16,
                                        high: 20,
                                        assessment: 'bad'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Medications",
                        shortName: "Meds",
                        clinicalEvents: ["pre-encounter"],
                        defaultVisualizer: "chart",
                        type: "Medications",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getItemListForMedications,
                            }
                        ]
                    },
                    {
                        name: "Pathology",
                        shortName: "Pathology",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Primary tumor color is ${.Color}, weight is ${.Weight}, and size is ${.Size}."
                            },
                            {
                                defaultTemplate: "Tumor margins are ${.Tumor Margins}. Histological grade is ${.Histological Grade}."
                            }

                        ],
                        data: [
                            {
                                name: "",
                                items: [

                                    // TODO: When return value for items that are currently null, need to also return patient.isUnsigned(currentConditionEntry)
                                    {
                                        name: "Color",
                                        value: null
                                    },
                                    {
                                        name: "Weight",
                                        value: null
                                    },
                                    {
                                        name: "Size",
                                        value: (patient, currentConditionEntry) => {
                                            const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorDimensions);
                                            if (list.length === 0) return null;
                                            const size = list.pop(); // last is most recent
                                            return [size.quantity.value + " " + size.quantity.unit, patient.isUnsigned(size), this.determineSource(patient, size)];
                                        }
                                    },
                                    {
                                        name: "Tumor Margins",
                                        value: (patient, currentConditionEntry) => {
                                            const list = currentConditionEntry.getObservationsOfTypeChronologicalOrder(FluxTumorMargins);
                                            if (list.length === 0) return null;
                                            const margins = list.pop(); // last is most recent
                                            return [margins.value, patient.isUnsigned(margins), this.determineSource(patient, margins)];
                                        }
                                    },
                                    {
                                        name: "Histological Grade",
                                        value: (patient, currentConditionEntry) => {
                                            let histologicalGrade = currentConditionEntry.getMostRecentHistologicalGrade();
                                            return [ histologicalGrade.grade, patient.isUnsigned(histologicalGrade), this.determineSource(patient, histologicalGrade) ];
                                        }
                                    },               
                                ]
                            }
                        ]
                    },
                    {
                        name: "Genetics",
                        shortName: "Genetics",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Genetic Testing is ${.Genetic Testing}."
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Genetic Testing",
                                        value: (patient, currentConditionEntry) => {
                                            const panels = patient.getGastrointestinalStromalTumorCancerGeneticAnalysisPanelsChronologicalOrder();
                                            if (!panels || panels.length === 0) return null;
                                            const panel = panels.pop();
                                            return [panel.members.map((item) => {
                                                const v = item.value === 'Positive' ? '+' : '-';
                                                return item.abbreviatedName + v;
                                            }).join(","), patient.isUnsigned(panel), this.determineSource(patient, panel)];
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Clinical Trials",
                        shortName: "Trials",
                        clinicalEvents: ["pre-encounter"],
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "Enrolled",
                                headings: ["Name", "When Enrolled", "When Left", "Description"],
                                itemsFunction: this.getItemListForEnrolledClinicalTrials
                            },
                            {
                                name: "Potential to enroll",
                                headings: ["Name", "Criteria Fit", "Opened", "Description"],
                                itemsFunction: this.getItemListForClinicalTrialEligibility,
                                actions: [
                                    {
                                        handler: this.handleViewMissingCriteria,
                                        text: "Missing Criteria",
                                        icon: "clipboard",
                                        whenToDisplay: {
                                            valueExists: true,
                                            existingValueSigned: "either",
                                            editableNoteOpen: "either", 
                                            displayForColumns: [0, 1]
                                        }
                                    }
                                ]
                            },
                            {   nameFunction: this.getMissingCriteriaSubsectionName, 
                                itemsFunction: this.getItemListToDisplayMissingCriteria,
                                displayFunction: this.getMissingCriteriaDisplay
                            }
                        ]   
                    },
                    {
                        name: "Allergies",
                        shortName: "Allergies",
                        clinicalEvents: ["pre-encounter"],
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Allergy", "Severity", "Effects"],
                                itemsFunction: this.getItemListForAllergies,
                                preTableCount: "allergies",
                                postTableList: this.getItemListForNoKnownAllergies,
                            }
                        ]
                    },
                    {
                        name: "Timeline",
                        shortName: "Timeline",
                        type: "Events",
                        resetData: this.resetTimelineData,
                        data: [
                            {
                                name: "Medications",
                                itemsFunction: this.getMedicationItems
                            },
                            {
                                name: "Procedures",
                                itemsFunction: this.getProcedureItems
                            },
                            {
                                name: "Key Events",
                                itemsFunction: this.getEventItems
                            },
                            {
                                name: "Progressions",
                                itemsFunction: this.getProgressionItems
                            }
                        ]
                    },
                    // adding new section for treatment options
                    {
                        name: "Treatment Options",
                        shortName: "Treatment Options",
                        type: "ClusterPoints",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getTreatmentData
                            }
                        ]
                    }
                ]                
            },
            "default": {
                sections: [
                    {
                        name: "Condition",
                        shortName: "Condition",
                        type: "NameValuePairs",
                        /*eslint no-template-curly-in-string: "off"*/
                        narrative: [
                            {
                                defaultTemplate: "Patient has ${.Name} diagnosed on ${.Diagnosis Date}."
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Name",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.type, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Diagnosis Date",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Where",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.bodySite, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Clinical Status",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.clinicalStatus, patient.isUnsigned(currentConditionEntry), this.determineSource(patient, currentConditionEntry)];
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Procedures",
                        shortName: "Procedures",
                        type: "Columns",
                        data: [
                            {
                                name: "",
                                headings: ["Procedure", "When"],
                                itemsFunction: this.getItemListForProcedures
                            }
                        ]
                    },
                    {
                        name: "Labs",
                        shortName: "Labs",
                        type: "ValueOverTime",
                        data: [
                            {
                                name: "White blood cell count",
                                code: "C0023508",
                                itemsFunction: this.getTestsForSubSection,

                                // Source: https://www.cancer.org/treatment/understanding-your-diagnosis/tests/understanding-your-lab-test-results.html
                                // Source: https://www.mayoclinic.org/symptoms/low-white-blood-cell-count/basics/definition/sym-20050615

                                bands: [
                                    {low: 0, high: 3, assessment: 'bad'},
                                    {low: 3, high: 5, assessment: 'average'},
                                    {low: 5, high: 10, assessment: 'good'}
                                ]
                            }
                        ]
                    },
                    {
                        name: "Medications",
                        shortName: "Meds",
                        clinicalEvents: ["pre-encounter"],
                        defaultVisualizer: "chart",
                        type: "Columns",
                        data: [
                            {
                                name: "",
                                headings: ["Medication", "Dosage", "Timing", "Start", "End"],
                                itemsFunction: this.getItemListForMedications,

                            }
                        ]
                    },
                    {
                        name: "Active Conditions",
                        shortName: "Conditions",
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Condition", "Diagnosed", "Body Site"],
                                itemsFunction: this.getItemListForConditions,
                                shortcut: "@condition"
                            }
                        ]
                    },
                    {
                        name: "Allergies",
                        clinicalEvents: ["pre-encounter"],
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Allergy", "Severity", "Effects"],
                                itemsFunction: this.getItemListForAllergies,
                                preTableCount: "allergies",
                                postTableList: this.getItemListForNoKnownAllergies,
                            }
                        ]
                    },
                    {
                        name: "Timeline",
                        shortName: "Timeline",
                        type: "Events",
                        resetData: this.resetTimelineData,
                        data: [
                            {
                                name: "Medications",
                                itemsFunction: this.getMedicationItems
                            },
                            {
                                name: "Procedures",
                                itemsFunction: this.getProcedureItems
                            },
                            {
                                name: "Key Events",
                                itemsFunction: this.getEventItems
                            },
                            {
                                name: "Progressions",
                                itemsFunction: this.getProgressionItems
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
        if (entry.sourceClinicalNoteReference) return entry.sourceClinicalNoteReference;
        
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

    getItemListForConditions = (patient, currentConditionEntry, subsection) => {
        const conditions = patient.getActiveConditions();
        return conditions.map((c, i) => {
            return [
                {    value: c.type, 
                     isUnsigned: patient.isUnsigned(c),
                     source: this.determineSource(patient, c),
                     shortcut: subsection.shortcut
                }, 
                {   value: c.diagnosisDate
                },
                {   value: c.bodySite
                }
            ];
        });
    }

    getItemListForProcedures = (patient, currentConditionEntry) => {
        const procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
        return procedures.map((p, i) => {
            // Ensure that each array for a given data type (e.g. Procedures in this case) contains the same number of elements (e.g. here it is 2 elements).
            // Or add to the end of the array, that looks okay too
            let result = [
                {   value: p.name, 
                    isUnsigned: patient.isUnsigned(p),
                    source:  this.determineSource(patient, p),
                    shortcut: "@procedure"
                }];
            if (typeof p.occurrenceTime !== 'string') {
                result.push(
                    {   value: p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd }
                );
            } else {
                result.push(
                    {   value: p.occurrenceTime }
                );
            }
            return result;
        });
    }

    // TODO: fix bug. not displaying medication change in targeted data panel. make sure we are getting medication
    getItemListForMedications = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        
        // Only showing active medications
        let meds = patient.getActiveAndRecentlyStoppedMedicationsForConditionChronologicalOrder(condition);
        const medicationChanges = patient.getMedicationChangesForConditionChronologicalOrder(condition);

        // For every medication in meds, create a new medToVisualize object that has the medication object and a medicationChange object
        let medsToVisualize = meds.map((med) => {
            return {
                "medication": med,
                "medicationChange": null
            };
        })

        medicationChanges.forEach(change => {
            const clinicalNoteUnsigned = patient.isUnsigned(change);

            // If medicationChange has both medicationAfterChange and medicationBeforeChange
            if (change.medicationAfterChange && change.medicationBeforeChange) {

                const medAfterChangeRef = change.medicationAfterChange.reference;
                // Determine if the medAfterChange corresponds to a med
                // Get that med if it exists, undefined otherwise
                const medToViz = medsToVisualize.find((medToVizObject) => {
                    return medToVizObject.medication.entryId === medAfterChangeRef.entryId;
                });
                

                if (medToViz) {

                    // Retrieving clinical note for medication change
                    let sourceClinicalNote;
                    if (change.entryInfo.sourceClinicalNote) {
                        sourceClinicalNote = change.entryInfo.sourceClinicalNote;
                    }
                    
                    // Add the medBeforeChange to the med, for use in visualization
                    const medBeforeChangeRef = change.medicationBeforeChange.reference;
                    const medBeforeChange = patient.getEntryFromReference(medBeforeChangeRef);
                   
                    // medAfterChange.medicationBeforeChange = medBeforeChange;
                    medToViz.medicationChange = {
                        type: change.type,
                        date: change.whenChanged,
                        medBeforeChange: medBeforeChange,
                        medAfterChange: medToViz.medication,
                        sourceClinicalNote: sourceClinicalNote,
                        unsigned: clinicalNoteUnsigned,
                    }
                    
                    // Remove the before-medication from vis
                    medsToVisualize = medsToVisualize.filter((medToVizObject) => {
                        return medToVizObject.medication.entryId !== medBeforeChangeRef.entryId;
                    })
                }
            }
            // If medication change only has medicationBeforeChange (does not have medicationAfterChange)
            else if (change.medicationBeforeChange && !change.medicationAfterChange) {
                
                // Retrieving clinical note for medication change
                let sourceClinicalNote;
                if (change.entryInfo.sourceClinicalNote) {
                    sourceClinicalNote = change.entryInfo.sourceClinicalNote;
                }
                const medBeforeChangeRef = change.medicationBeforeChange.reference;
                const medToViz = medsToVisualize.find((medToVizObject) => {
                    return medToVizObject.medication.entryId === medBeforeChangeRef.entryId;
                });

                if (medToViz) {
                    medToViz.medicationChange = {
                        type: change.type,
                        date: change.whenChanged,
                        medBeforeChange: medToViz.medication,
                        sourceClinicalNote: sourceClinicalNote,
                        unsigned: clinicalNoteUnsigned,
                    }
                }
            }
        });
        
        // instead of returning meds, return list of medsToVisualize
        return medsToVisualize;
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

    getItemListForEnrolledClinicalTrials = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        const clinicalTrials = patient.getEnrolledClinicalTrials();
        if (clinicalTrials.length === 0) {
            return [];
        } else {
            return clinicalTrials.filter((c) => {
                return (c.title) && (c.status !== 'Candidate');
            }).map((c, i) => {
                return [
                    {
                        value: c.title, 
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: (c.status === 'Candidate') ? 'N/A' : c.enrollmentDate,
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: (c.status === 'Candidate' || c.status === 'Enrolled' || c.status === 'Active') ? 'N/A' : c.endDate, 
                        isUnsigned: patient.isUnsigned(c), 
                        source: c.sourceClinicalNoteReference
                    },
                    {
                        value: c.details
                    }
                ]; 
            });
        }
    }

    getItemListForClinicalTrialEligibility = (patient, currentConditionEntry) => {
        let clinicalTrialsAndCriteriaList = patient.getEligibleClinicalTrials(currentConditionEntry, this.getItemListForEnrolledClinicalTrials(patient, currentConditionEntry));
        let eligibleTrials = [];
        clinicalTrialsAndCriteriaList.forEach((trial) => {
            eligibleTrials.push([   { value: trial.info.name }, 
                                    { value: (trial.numSatisfiedCriteria + " of " + trial.numTotalCriteria) }, 
                                    { value: trial.info.studyStartDate }, 
                                    { value: trial.info.description }
            ]);
        });
        this.eligibleTrials = eligibleTrials;
        this.refreshClinicalTrials = false;
        return this.eligibleTrials;
    }

    handleViewMissingCriteria = (item, rowId) => {
        // rowId is the name of the current section or item - in this case the name of the clinical trial displayed)
        this.trialDisplayMissingCriteria = rowId;
        this.setForceRefresh(true);
    }

    getMissingCriteriaSubsectionName = () => {
        return (this.trialDisplayMissingCriteria !== "") ? (`Missing ${this.trialDisplayMissingCriteria} Criteria`) : "Missing Criteria";
    }

    getMissingCriteriaDisplay = () => {
        return this.trialDisplayMissingCriteria !== "";
    }

    getItemListToDisplayMissingCriteria = () => {
       let trialsList = new ClinicalTrialsList();
        if (this.trialDisplayMissingCriteria !== "") {
            this.missingEligibleTrialData = trialsList.getMissingCriteriaListTrialEligibility(this.trialDisplayMissingCriteria);
            return this.missingEligibleTrialData.map((data) => {
                return [{value : data}]
            });
       }
       return [];
    }

    getItemListForAllergies = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const allergies = patient.getAllergyIntolerancesSortedBySeverity();
        return allergies.map((a) => {
            return [    { value: a.name }, 
                        { value: a.severity },
                        { value: a.manifestation }];
        });
    }

    getItemListForNoKnownAllergies = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        let noKnownAllergies = patient.getNoKnownAllergies();
        return noKnownAllergies.map((a) => {
            return {value: a.noKnownAllergy};
        });
    }

    getTestsForSubSection = (patient, currentConditionEntry, subsection) => { 
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const labResults = currentConditionEntry.getLabResultsChronologicalOrder();
        const labs = labResults.filter((lab, i) => {
            return lab.codeableConceptCode === subsection.code;
        }).map((lab, i) => {
            const processedLab = {};
            processedLab["start_time"] = lab.clinicallyRelevantTime;
            processedLab[subsection.name] = lab.quantity.number;
            processedLab["unit"] = lab.quantity.unit;

            return processedLab;
        });

        return labs;
    }

    getProgressions = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const progressions = patient.getProgressionsForConditionChronologicalOrder(condition);

        const processedProgressions = progressions.map((prog, i) => {
            const status = prog.status;
            const code = prog.statusAsCode
            const focalCondition = patient.getFocalConditionForProgression(prog);
            const focalConditionName = focalCondition.type;
            return {
                "start_time" : prog.asOfDate,
                "disease_status_code" : code,
                "disease_status_string": status,
                "evidence": prog.evidence.join(', '),
            };
        });

        const potentialDiagnosisDates = condition.getPotentialDiagnosisDates()
        return {
            progressions: processedProgressions, 
            potentialDiagnosisDates: potentialDiagnosisDates,
        };
    }

    // Gets progression items for timeline view
    getProgressionItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const progressions = patient.getProgressionsForConditionChronologicalOrder(condition);
        let items = [];

        progressions.forEach((prog) => {
            const assignedGroup = this.assignItemToGroup(items, prog.clinicallyRelevantTime);

            let classes = 'progression-item';
            // Do not include progression on timeline if status not set
            if (!prog.status) return;

            let startDate = new moment(prog.asOfDate, "D MMM YYYY");
            let hoverText = `${startDate.format('MM/DD/YYYY')}`;
            let endDate = startDate.clone().add(1, 'day');
            classes += ' point-in-time';

            let focalCondition = patient.getFocalConditionForProgression(prog);
            let focalConditionName = focalCondition.type;

            let hoverTitle = focalConditionName + " is " + prog.status + " based on " + prog.evidence.join();

            items.push({
                group: assignedGroup,
                icon: 'heartbeat',
                className: classes,
                hoverTitle: hoverTitle,
                hoverText: hoverText,
                start_time: startDate,
                end_time: endDate
            });
        });

        return items;
    }

    getMedicationItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const meds = patient.getMedicationsForConditionChronologicalOrder(condition);
        let items = [];

        meds.forEach((med) => {
            const ept = med.expectedPerformanceTime;
            if (Lang.isNull(ept)) return;
            const startTime = new moment(med.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
            let endTime = new moment(med.expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
            if (!endTime.isValid()) {
                endTime = new moment();
            }
            const assignedGroup = this.assignItemToGroup(items, startTime, endTime);
            const name = med.medication;
            let dosage;
            if (!med.amountPerDose) {
                dosage = "not specified";
            } else {
                dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + med.timingOfDoses.value + " " + (med.timingOfDoses.units ? med.timingOfDoses.units : "");
            }

            items.push({
                group: assignedGroup,
                title: name,
                details: dosage,
                hoverTitle: name,
                hoverText: dosage,
                className: 'medication-item',
                start_time: startTime,
                end_time: endTime
            });
        });
        return items;
    }

    getProcedureItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const procedures = patient.getProceduresForConditionChronologicalOrder(condition);
        let items = [];

        if (procedures.length > 0) this.incrementGroupNumber();
        procedures.forEach((proc) => {
            let startTime = new moment(typeof proc.occurrenceTime === 'string' ? proc.occurrenceTime : proc.occurrenceTime.timePeriodStart, "D MMM YYYY");
            let endTime = proc.occurrenceTime.timePeriodStart ? (!Lang.isNull(proc.occurrenceTime.timePeriodEnd) ? new moment(proc.occurrenceTime.timePeriodEnd, "D MMM YYYY") : null) : null;
            const assignedGroup = this.assignItemToGroup(items, startTime, endTime);

            let classes = 'event-item';
            //let endDate = proc.endDate;
            let hoverText = '';

            if (!Lang.isNull(endTime)) {
                hoverText = `${startTime.format('MM/DD/YYYY')} ― ${endTime.format('MM/DD/YYYY')}`;
            } else {
                hoverText = `${startTime.format('MM/DD/YYYY')}`;
                endTime = startTime.clone().add(1, 'day');
                classes += ' point-in-time';
            }

            if (proc.name) {
                hoverText += ` : ${proc.name}`;
            }

            items.push({
                group: assignedGroup,
                icon: 'hospital-o',
                className: classes,
                hoverTitle: proc.name,
                hoverText: hoverText,
                start_time: startTime,
                end_time: endTime
            });
        });

        return items;
    }

    getEventItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const events = patient.getKeyEventsForConditionChronologicalOrder(condition);
        let items = [];

        if (events.length > 0) this.incrementGroupNumber();
        events.forEach((evt) => {
            const assignedGroup = this.assignItemToGroup(items, evt.start_time, evt.end_time);

            let classes = 'progression-item';
            let startDate = new moment(evt.start_time, "D MMM YYYY");
            let endDate = null;
            let hoverText = '';
            let hoverTitle = '';

            if (evt.end_time) {
                endDate = new moment(evt.end_time, "D MMM YYYY");
                hoverText = `${startDate.format('MM/DD/YYYY')} ― ${endDate.format('MM/DD/YYYY')}`;
            } else {
                hoverText = `${startDate.format('MM/DD/YYYY')}`;
                endDate = startDate.clone().add(1, 'day');
                classes += ' point-in-time';
            }

            hoverTitle = evt.name;

            items.push({
                group: assignedGroup,
                icon: 'heartbeat',
                className: classes,
                hoverTitle: hoverTitle,
                hoverText: hoverText,
                start_time: startDate,
                end_time: endDate
            });
        });

        return items;
    }

    nextGroupNumber = 1;

    resetTimelineData = () => {
        this.nextGroupNumber = 1;
    }

    incrementGroupNumber = () => {
        this.nextGroupNumber++;
    }

    // Assigns a new timeline item to a group in the timeline, avoiding conflicts with
    // existing timeline items. If firstAvailableGroup is provided, the group assigned
    // will not be less than the firstAvailableGroup.
    assignItemToGroup = (existingItems, startTime, endTime = null) => {
        let availableGroup = this.nextGroupNumber || 1;
        let assignedGroup = null;

        while (!assignedGroup) {
            const existingItemsInGroup = this.filterItemsByGroup(existingItems, availableGroup);
            let conflict = false;

            for (let i = 0; i < existingItemsInGroup.length; i++) {
                const existingItem = existingItemsInGroup[i];
                // endTime not always guarentted; perform our check conditionally here 
                const doesEndTimeConflictWithExistingItem = (endTime ? endTime < existingItem.end_time && endTime >= existingItem.start_time : false);
                const doesStartTimeConflictWithExistingItem = startTime < existingItem.end_time && startTime >= existingItem.start_time;
                const doesNewCoverOld = endTime ? startTime <= existingItem.start_time && endTime >= existingItem.end_time : false;

                // At the current group level, the new item conflicts with an existing item
                if (doesEndTimeConflictWithExistingItem || doesStartTimeConflictWithExistingItem || doesNewCoverOld) {
                    conflict = true;
                    break;
                }
            }
            if (conflict) {
                availableGroup += 1;
                conflict = false;
            } else {
                assignedGroup = availableGroup;
            }
        }
        this.nextGroupNumber = assignedGroup;
        return assignedGroup;
    }

    filterItemsByGroup = (items, group) => {
        let subset = [];

        items.forEach((item) => {
            if (item.group === group) {
                subset.push(item);
            }
        });
        
        return subset;
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
            const data = api.findTreatmentOptionsByPatientStats(condition.codeURL, {race: this.toFirstLetterCapital(patient.getPatient().race), dxGrade: condition.getMostRecentHistologicalGrade().getGradeAsSimpleNumber()});
            //const data = api.findTreatmentOptionsByPatientStats("http://snomed.info/sct/399068003", {race: "Black"});
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

