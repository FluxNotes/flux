import Lang from 'lodash'
import moment from 'moment';
import FluxTumorDimensions from '../model/oncology/FluxTumorDimensions';

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
                                items           The list of data items in the format dictated by the type
                                itemsFunction   A function that returns the list of data items in the format dictated by the type
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
    constructor() {
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
                                            return [patient.getNextEncounterReasonAsText(), patient.isUnsigned(nextEncounter)];
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
                                            return [patient.getPreviousEncounterReasonAsText(), patient.isUnsigned(previousEncounter)] ;
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
                                defaultTemplate: "Patient has ${Current Diagnosis.Name} laterality ${Current Diagnosis.Laterality} stage ${Current Diagnosis.Stage} diagnosed on ${Key Dates.Diagnosis}"
                            },
                            {
                                defaultTemplate: "As of ${Current Diagnosis.As Of Date}, disease is ${Current Diagnosis.Disease Status} based on ${Current Diagnosis.Rationale}",
                                dataMissingTemplate: "No recent ${disease status}",
                                useDataMissingTemplateCriteria: [
                                    "Current Diagnosis.As Of Date",
                                    "Current Diagnosis.Disease Status",
                                    "Current Diagnosis.Rationale"
                                ]
                            },
                            {
                                defaultTemplate: "Recent lab results include ${Recent Lab Results}",
                                dataMissingTemplate: "No recent ${lab results}",
                                useDataMissingTemplateCriteria: [
                                    "Recent Lab Results"
                                ]
                            }
                        ],
                        data: [
                            {
                                name: "Current Diagnosis",
                                items: [
                                    {
                                        name: "Name",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.type, patient.isUnsigned(currentConditionEntry)];
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Laterality",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.laterality, patient.isUnsigned(currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Stage",
                                        value: (patient, currentConditionEntry) => {
                                            let s = currentConditionEntry.getMostRecentStaging();
                                            if (s && s.stage && s.stage.length > 0) {
                                                return [s.stage, patient.isUnsigned(s)];
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
                                                return [p.status, patient.isUnsigned(p)];
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
                                                return [p.asOfDate, patient.isUnsigned(p)];
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
                                                }).join(', '), patient.isUnsigned(p)];
                                            }
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
                                            return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry)] ;
                                        }
                                    },
                                    {
                                        name: "Recurrence",
                                        value: (patient, currentConditionEntry) => {
                                            if (currentConditionEntry.clinicalStatus.value === "recurrence") {
                                                return null;
                                            } else {
                                                return ["N/A", patient.isUnsigned(currentConditionEntry)];
                                            } // TODO: actually get date once we know where it is in SHR
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
                        itemsFunction: this.getProgressions,
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
                                        high: 5,
                                        assessment: 'average'
                                    },
                                    {
                                        low: 5,
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
                                        high: 1.5,
                                        assessment: 'average'
                                    },
                                    {
                                        low: 1.5,
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
                                defaultTemplate: "Primary tumor color is ${.Color}, weight is ${.Weight}, and size is ${.Size}"
                            },
                            {
                                defaultTemplate: "Tumor margins are ${.Tumor Margins}. Histological grade is ${.Histological Grade}"
                            },
                            {
                                defaultTemplate: "ER-${.Receptor Status ER} PR-${.Receptor Status PR} HER2-${.Receptor Status HER2}"
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
                                            return [list[0].quantity.value + " " + list[0].quantity.unit, patient.isUnsigned(list[0])];
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
                                            return [ histologicalGrade.grade, patient.isUnsigned(histologicalGrade) ];
                                        }
                                    },
                                    {
                                        name: "Receptor Status ER",
                                        value: (patient, currentConditionEntry) => {
                                            let er = currentConditionEntry.getMostRecentERReceptorStatus();
                                            if (Lang.isNull(er)) {
                                                return null;
                                            } else {
                                                return [er.status, patient.isUnsigned(er)];
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
                                                return [pr.status, patient.isUnsigned(pr)];
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
                                                return [her2.status, patient.isUnsigned(her2)];
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
                                defaultTemplate: "Oncotype DX Recurrence Score is ${.Oncotype DX Recurrence Score}"
                            },
                            {
                                defaultTemplate: "Genetic Testing is ${.Genetic Testing}"
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
                                            }).join(","), patient.isUnsigned(panel)];
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
                                name: "",
                                headings: ["Name", "When Enrolled", "When Left", "Description"],
                                itemsFunction: this.getItemListForEnrolledClinicalTrials
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
                        data: [
                            {
                                name: "Medications",
                                eventsFunction: this.getMedicationItems
                            },
                            {
                                name: "Procedures",
                                eventsFunction: this.getProcedureItems
                            },
                            {
                                name: "Key Events",
                                eventsFunction: this.getEventItems
                            },
                            {
                                name: "Progressions",
                                eventsFunction: this.getProgressionItems
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
                                defaultTemplate: "Patient has ${.Name} diagnosed on ${.Diagnosis Date}"
                            }
                        ],
                        data: [
                            {
                                name: "",
                                items: [
                                    {
                                        name: "Name",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.type, patient.isUnsigned(currentConditionEntry)];
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Diagnosis Date",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.diagnosisDate, patient.isUnsigned(currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Where",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.bodySite, patient.isUnsigned(currentConditionEntry)];
                                        }
                                    },
                                    {
                                        name: "Clinical Status",
                                        value: (patient, currentConditionEntry) => {
                                            return [currentConditionEntry.clinicalStatus, patient.isUnsigned(currentConditionEntry)];
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
                        data: [
                            {
                                name: "Medications",
                                eventsFunction: this.getMedicationItems
                            },
                            {
                                name: "Procedures",
                                eventsFunction: this.getProcedureItems
                            },
                            {
                                name: "Key Events",
                                eventsFunction: this.getEventItems
                            },
                            {
                                name: "Progressions",
                                eventsFunction: this.getProgressionItems
                            }
                        ]
                    }
                ]
            }
        };
    }

    getMetadata = () => {
        return this.hardCodedMetadata;
    }

    getItemListForConditions = (patient, currentConditionEntry, subsection) => {
        const conditions = patient.getActiveConditions();
        return conditions.map((c, i) => {
            return [{value: c.type, shortcut: subsection.shortcut}, c.diagnosisDate, c.bodySite];
        });
    }

    getItemListForProcedures = (patient, currentConditionEntry) => {
        const procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
        return procedures.map((p, i) => {
            // Ensure that each array for a given data type (e.g. Procedures in this case) contains the same number of elements (e.g. here it is 2 elements).
            // Or add to the end of the array, that looks okay too
            if (typeof p.occurrenceTime !== 'string') {
                return [
                    {
                        value: p.name,
                        shortcut: "@procedure",
                    },
                    p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd
                ];
            } else {
                return [
                    {
                        value: p.name,
                        shortcut: "@procedure",
                    },
                    p.occurrenceTime
                ];
            }
        });
    }

    getItemListForMedications = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        return patient.getMedicationsForConditionChronologicalOrder(condition);
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

            return {
                name: name,
                value: [value, patient.isUnsigned(l)]
            };
        });
    }

    getItemListForEnrolledClinicalTrials = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];

        const clinicalTrials = patient.getClinicalTrials(currentConditionEntry);
        if (clinicalTrials.length === 0) {
            return [];
        } else {
            return clinicalTrials.filter((c) => {
                return (c.title) && (c.status !== 'Candidate');
            }).map((c, i) => {
                return [
                    {
                        value: [c.title, patient.isUnsigned(c)]
                    },
                    {
                        value: [(c.status === 'Candidate') ? 'N/A' : c.enrollmentDate, patient.isUnsigned(c)]
                    },
                    {
                        value: [(c.status === 'Candidate' || c.status === 'Enrolled' || c.status === 'Active') ? 'N/A' : c.endDate, patient.isUnsigned(c)]
                    },
                    c.details
                ]; 
            });
        }
    }

    getItemListForAllergies = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const allergies = patient.getAllergyIntolerancesSortedBySeverity();
        return allergies.map((a) => {
            return [{value: a.name}, a.severity, a.manifestation];
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

        return progressions.map((prog, i) => {

            const status = prog.status;
            const code = prog.statusAsCode
            const focalCondition = patient.getFocalConditionForProgression(prog);
            const focalConditionName = focalCondition.type;
            const tooltipText = focalConditionName + " is " + status + " based on " + prog.evidence.join();

            return {
                "start_time" : prog.asOfDate,
                "Disease status" : code,
                "tooltipText" : tooltipText,
            };
        });
    }

    // Gets progression items for timeline view
    getProgressionItems = (patient, condition, groupStartIndex) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const progressions = patient.getProgressionsForConditionChronologicalOrder(condition);
        let items = [];

        progressions.forEach((prog) => {
            const assignedGroup = this.assignItemToGroup(items, prog.clinicallyRelevantTime, groupStartIndex);

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
            const endTime = new moment(med.expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
            const assignedGroup = this.assignItemToGroup(items, startTime, 1);
            const name = med.medication;
            let dosage;
            if (!med.amountPerDose) {
                dosage = "not specified";
            } else {
                dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + med.timingOfDoses.value + " " + med.timingOfDoses.units;
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

    getProcedureItems = (patient, condition, groupStartIndex) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const procedures = patient.getProceduresForConditionChronologicalOrder(condition);
        let items = [];

        procedures.forEach((proc) => {
            let startTime = new moment(typeof proc.occurrenceTime === 'string' ? proc.occurrenceTime : proc.occurrenceTime.timePeriodStart, "D MMM YYYY");
            let endTime = proc.occurrenceTime.timePeriodStart ? (!Lang.isNull(proc.occurrenceTime.timePeriodEnd) ? new moment(proc.occurrenceTime.timePeriodEnd, "D MMM YYYY") : null) : null;
            const assignedGroup = this.assignItemToGroup(items, startTime, groupStartIndex);

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

    getEventItems = (patient, condition, groupStartIndex) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const events = patient.getKeyEventsForConditionChronologicalOrder(condition);
        let items = [];

        events.forEach((evt) => {
            const assignedGroup = this.assignItemToGroup(items, evt.start_time, groupStartIndex);

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

    // Assigns a new timeline item to a group in the timeline, avoiding conflicts with
    // existing timeline items. If firstAvailableGroup is provided, the group assigned
    // will not be less than the firstAvailableGroup.
    assignItemToGroup = (existingItems, startTime, firstAvailableGroup) => {
        let availableGroup = firstAvailableGroup || 1;
        let assignedGroup = null;

        while (!assignedGroup) {
            const existingItemsInGroup = this.filterItemsByGroup(existingItems, availableGroup);
            let conflict = false;

            for (let i = 0; i < existingItemsInGroup.length; i++) {
                const existingItem = existingItemsInGroup[i];
                // At the current group level, the new item conflicts with an existing item
                if (startTime < existingItem.end_time && startTime >= existingItem.start_time) {
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
}
