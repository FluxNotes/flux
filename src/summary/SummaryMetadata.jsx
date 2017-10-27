import Lang from 'lodash'
import moment from 'moment';
import HistologicGrade from '../model/shr/oncology/HistologicGrade';
import TimePeriod from '../model/shr/core/TimePeriod';
import TumorSize from '../model/shr/oncology/TumorSize';

class SummaryMetadata {
    hardCodedMetadata = {
        "http://snomed.info/sct/408643008" : {
            sections: [
                {
                    name: "Current Diagnosis",
                    items:  [
                        {
                            name: "Name",
                            value: (patient, currentConditionEntry) => {
                                return currentConditionEntry.specificType.value.coding.displayText.value;
                            },
                            shortcut: "@condition"
                        }, {
                             name: "Stage",
                             value: (patient, currentConditionEntry) => {
                                let s = patient.getMostRecentStagingForCondition(currentConditionEntry);
                                if (s && s.value.coding.displayText.value.length > 0) {
                                    return s.value.coding.displayText.value + " (" + s.tStage.coding.displayText.value + s.nStage.coding.displayText.value + s.mStage.coding.displayText.value + ")";
                                } else {
                                    return null;
                                }
                            },
                            shortcut: "@stage"
                        }
                    ]
                },
                {
                    name: "Disease Status",
                    items:  [
                        {
                            name: "Most Recent Status",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p)) {
                                    return null;
                                } else {
                                    return p.value.coding.displayText.value;
                                }
                            }
                        },
                        {
                            name: "Date of Most Recent Status",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p)) {
                                    return null;
                                } else {
                                    return p.asOfDate;
                                }
                            }
                        },
                        {
                            name: "Basis for Disease Status",
                            value: (patient, currentConditionEntry) => {
                                let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                if (Lang.isNull(p)) {
                                    return null;
                                } else {
                                    return p.evidence.map(function(ev){
                                        return ev.value.coding.displayText.value;
                                    }).join();
                                }
                            }
                        }
                    ]
                },
                {
                    name: "Key Dates",
                    items:  [
                        {
                            name: "Diagnosis",
                            value: (patient, currentConditionEntry) => {
                                return currentConditionEntry.whenClinicallyRecognized.value.value.value.timePeriodStart.value;
                            }
                        },
                        {
                            name: "Recurence",
                            value: (patient, currentConditionEntry) => {
                                return null;
                            }
                        }
                    ]
                },
                {
                    name: "Procedures",
                    itemsFunction: this.getItemListForProcedures
                },
                {
                    name: "Pathology Results (Initial Diagnosis)",
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
                                let list = patient.getObservationsForCondition(currentConditionEntry, TumorSize);
                                return list[0].value.value + " " + list[0].value.units.value.value;
                            }
                        },
                        {
                            name: "Tumor Margins",
                            value: null
                        },
                        {
                            name: "Histological Grade",
                            value: (patient, currentConditionEntry) => {
                                let list = patient.getObservationsForCondition(currentConditionEntry, HistologicGrade);
                                return list[0].value.coding.displayText.value;
                            }
                        },
                        {
                            name: "Receptor Status ER",
                            value: (patient, currentConditionEntry) => {
                                let er = patient.getReceptorStatus(currentConditionEntry, "23307004");
                                if (Lang.isNull(er)) {
                                    return null;
                                } else {
                                    return er.value.coding.displayText.value.value;
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
                                    return pr.value.coding.displayText.value.value;
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
                                    return her2.value.coding.displayText.value.value;
                                }
                            }
                        }
                    ]
                },
                {
                    name: "Genetics",
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
        },
        "default": {
            sections: [
                {
                    name: "Current Diagnosis",
                    items:  [
                        {
                            name: "Name",
                            value: (patient, currentConditionEntry) => {
                                return currentConditionEntry.specificType.value.coding.displayText.value;
                            },
                            shortcut: "@condition"
                        }
                    ]
                },
                {
                    name: "Key Dates",
                    items:  [
                        {
                            name: "Diagnosis",
                            value: (patient, currentConditionEntry) => {
                                return currentConditionEntry.whenClinicallyRecognized.generalizedTemporalContext.timePeriodStart.value;
                            }
                        }
                    ]
                },
                {
                    name: "Procedures",
                    itemsFunction: this.getItemListForProcedures
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
            //console.log(p.specificType.value.coding.displayText.value);
            if (p.occurrenceTime.value instanceof TimePeriod) {
                //console.log(p.occurrenceTime.value.timePeriodStart.value);
                //console.log(p.occurrenceTime.value.timePeriodEnd.value);
                return {name: p.specificType.value.coding.displayText.value, value: p.occurrenceTime.value.timePeriodStart.value + " to " + p.occurrenceTime.value.timePeriodEnd.value};
            } else {
                //console.log(p.occurrenceTime.value);
                return {name: p.specificType.value.coding.displayText.value, value: p.occurrenceTime.value };
            }
        });
    }
}

export default SummaryMetadata;