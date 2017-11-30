import Lang from 'lodash'
import moment from 'moment';
import FluxHistologicGrade from '../model/oncology/FluxHistologicGrade';
import FluxTumorSize from '../model/oncology/FluxTumorSize';

class SummaryMetadata {
    hardCodedMetadata = {
        "http://snomed.info/sct/408643008": {
            sections: [
                {
                    name: "Summary",
                    type: "NameValuePairs",
                    narrative: 
                    "Patient is presenting with ${Current Diagnosis.Name} stage ${Current Diagnosis.Stage}. Most recently, disease is ${Current Diagnosis.Progression} based on ${Current Diagnosis.Rationale}.",
                    data: [
                        {
                            name: "Current Diagnosis",
                            items: [
                                {
                                    name: "Name",
                                    value: (patient, currentConditionEntry) => {
                                        //return currentConditionEntry.specificType.value.coding[0].displayText.value;
                                        return currentConditionEntry.type;
                                        
                                    },
                                    shortcut: "@condition"
                                },
                                {
                                    name: "Stage",
                                    value: (patient, currentConditionEntry) => {
                                        //let s = patient.getMostRecentStagingForCondition(currentConditionEntry);
                                        let s = currentConditionEntry.getMostRecentStaging();
                                        if (s && s.stage && s.stage.length > 0) {
                                            return s.stage;
                                        } else {
                                            return null;
                                        }
                                    },
                                    shortcut: "@stage"
                                },
                                {
                                    name: "Progression",
                                    value: (patient, currentConditionEntry) => {
                                        let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(12, 'months'));
                                        if (Lang.isNull(p)) {
                                            return null;
                                        } else {
                                            return p.status;
                                        }
                                    }
                                },
                                {
                                    name: "Rationale",
                                    value: (patient, currentConditionEntry) => {
                                        let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(12, 'months'));
                                        if (Lang.isNull(p)) {
                                            return null;
                                        } else {
                                            return p.evidence.map(function (ev) {
                                                return ev;
                                            }).join(', ');
                                        }
                                    }
                                }
                            ]
                        },
                        {
                            name: "Recent Lab Results",
                            itemsFunction: this.getItemListForLabResults
                        }
                    ]
                },
                // {
                //     name: "Current Diagnosis",
                //     collections: [
                //         {
                //             name: "",
                //             items:  [
                //                 {
                //                     name: "Name",
                //                     value: (patient, currentConditionEntry) => {
                //                         return currentConditionEntry.specificType.value.coding[0].displayText.value;
                //                     },
                //                     shortcut: "@condition"
                //                 }, {
                //                     name: "Stage",
                //                     value: (patient, currentConditionEntry) => {
                //                         let s = patient.getMostRecentStagingForCondition(currentConditionEntry);
                //                         if (s && s.value.coding[0].displayText.value && s.value.coding[0].displayText.value.length > 0) {
                //                             return s.value.coding[0].displayText.value + " (" + s.t_Stage.value.coding[0].displayText.value + s.n_Stage.value.coding[0].displayText.value + s.m_Stage.value.coding[0].displayText.value + ")";
                //                         } else {
                //                             return null;
                //                         }
                //                     },
                //                     shortcut: "@stage"
                //                 }
                //             ]
                //         }
                //     ]
                // },
                // {
                //     name: "Disease Status",
                //     collections: [
                //         {
                //             name: "",
                //             items:  [
                //                 {
                //                     name: "Most Recent Status",
                //                     value: (patient, currentConditionEntry) => {
                //                         let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                //                         if (Lang.isNull(p)) {
                //                             return null;
                //                         } else {
                //                             return p.value.coding[0].displayText.value;
                //                         }
                //                     }
                //                 },
                //                 {
                //                     name: "Date of Most Recent Status",
                //                     value: (patient, currentConditionEntry) => {
                //                         let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                //                         if (Lang.isNull(p)) {
                //                             return null;
                //                         } else {
                //                             return p.asOfDate;
                //                         }
                //                     }
                //                 },
                //                 {
                //                     name: "Basis for Disease Status",
                //                     value: (patient, currentConditionEntry) => {
                //                         let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                //                         if (Lang.isNull(p)) {
                //                             return null;
                //                         } else {
                //                             return p.evidence.map(function(ev){
                //                                 return ev.value.coding[0].displayText.value;
                //                             }).join();
                //                         }
                //                     }
                //                 }
                //             ]
                //         }
                //     ]
                // },
                {
                    name: "Key Dates",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            items:  [
                                {
                                    name: "Diagnosis",
                                    value: (patient, currentConditionEntry) => {
                                        return currentConditionEntry.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
                                    }
                                },
                                {
                                    name: "Recurrence",
                                    value: (patient, currentConditionEntry) => {
                                        return null;
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Procedures",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            itemsFunction: this.getItemListForProcedures
                        }
                    ]
                },
                {
                    name: "Pathology Results (Initial Diagnosis)",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            items:  [
                                {
                                    name: "Color",
                                    value: null
                                },
                                {
                                    name: "Weight",
                                    value: null },
                                {
                                    name: "Size",
                                    value: (patient, currentConditionEntry) => {
                                        let list = patient.getObservationsForCondition(currentConditionEntry, FluxTumorSize);
                                        return list[0].quantity.value + " " + list[0].quantity.unit;
                                    }
                                },
                                {
                                    name: "Tumor Margins",
                                    value: null
                                },
                                {
                                    name: "Histological Grade",
                                    value: (patient, currentConditionEntry) => {
                                        let list = patient.getObservationsForCondition(currentConditionEntry, FluxHistologicGrade);
                                        return list[0].grade;
                                    }
                                },
                                {
                                    name: "Receptor Status ER",
                                    value: (patient, currentConditionEntry) => {
                                        let er = patient.getReceptorStatus(currentConditionEntry, "23307004");
                                        if (Lang.isNull(er)) {
                                            return null;
                                        } else {
                                            return er.value.coding[0].displayText.value.value;
                                        }
                                    }
                                },
                                {
                                    name: "Receptor Status PR",
                                    value: (patient, currentConditionEntry) => {
                                        let pr = patient.getReceptorStatus(currentConditionEntry, "C0034833");
                                        if (Lang.isNull(pr)) {
                                            return null;
                                        } else {
                                            return pr.value.coding[0].displayText.value.value;
                                        }
                                    }
                                },
                                {
                                    name: "Receptor Status HER2",
                                    value: (patient, currentConditionEntry) => {
                                        let her2 = patient.getReceptorStatus(currentConditionEntry, "C0069515");
                                        if (Lang.isNull(her2)) {
                                            return null;
                                        } else {
                                            return her2.value.coding[0].displayText.value.value;
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Genetics",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            items:  [
                                {
                                    name: "Oncotype DX Recurrence Score",
                                    value: null
                                },
                                {
                                    name: "Genetic Testing",
                                    value: null
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "default": {
            sections: [
                {
                    name: "Current Diagnosis",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            items:  [
                                {
                                    name: "Name",
                                    value: (patient, currentConditionEntry) => {
                                        return currentConditionEntry.specificType.value.coding[0].displayText.value;
                                    },
                                    shortcut: "@condition"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Key Dates",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            items:  [
                                {
                                    name: "Diagnosis",
                                    value: (patient, currentConditionEntry) => {
                                        return currentConditionEntry.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Procedures",
                    type: "NameValuePairs",
                    data: [
                        {
                            name: "",
                            itemsFunction: this.getItemListForProcedures
                        }
                    ]
                },
            ]
        }
    };

    constructor() {
        this.metadata = this.hardCodedMetadata;
    }

    getMetadata() {
        return this.metadata;
    }

    getItemListForProcedures(patient, currentConditionEntry) {
        const procedures = patient.getProceduresForConditionChronologicalOrder(currentConditionEntry);
        return procedures.map((p, i) => {
            if (typeof p.occurrenceTime !== 'string') {
                return {name: p.specificType.value.coding[0].displayText.value, value: p.occurrenceTime.timePeriodStart + " to " + p.occurrenceTime.timePeriodEnd};
            } else {
                return {name: p.specificType.value.coding[0].displayText.value, value: p.occurrenceTime };
            }


        });
    }

    getItemListForLabResults(patient, currentConditionEntry) {
        const labResults = patient.getTestsForCondition(currentConditionEntry);

        return labResults.map((l, i) => {
            const value = `${l.quantity.number} ${l.quantity.unit}`;

            return {
                name: l.specificType.value.coding[0].displayText.value,
                value: value
            };
        });
    }
}

export default SummaryMetadata;