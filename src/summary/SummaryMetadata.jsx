import FluxHistologicGrade from '../model/oncology/FluxHistologicGrade';
import FluxTumorDimensions from '../model/oncology/FluxTumorDimensions';
import Lang from 'lodash'
import moment from 'moment';

class SummaryMetadata {
    constructor() {
        this.hardCodedMetadata = {
            "http://snomed.info/sct/408643008": {
                sections: [
                    {
                        name: "Visit Reason",
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
                                            if (Lang.isUndefined(nextEncounter)) return "No upcoming appointments";
                                            return patient.getNextEncounter().reason;
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Summary",
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
                                            return currentConditionEntry.type;
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Laterality",
                                        value: (patient, currentConditionEntry) => {
                                            return currentConditionEntry.laterality;
                                        }
                                    },                                    
                                    {
                                        name: "Stage",
                                        value: (patient, currentConditionEntry) => {
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
                                        name: "Disease Status",
                                        value: (patient, currentConditionEntry) => {
                                            let p = patient.getMostRecentProgressionForCondition(currentConditionEntry, moment().subtract(6, 'months'));
                                            if (Lang.isNull(p) || !p.status) {
                                                return null;
                                            } else {
                                                return p.status;
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
                                                return p.asOfDate;
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
                            },
                            {
                                name: "Key Dates",
                                items: [
                                    {
                                        name: "Diagnosis",
                                        value: (patient, currentConditionEntry) => {
                                            return currentConditionEntry.diagnosisDate;
                                        }
                                    },
                                    {
                                        name: "Recurrence",
                                        value: (patient, currentConditionEntry) => {
                                            if (currentConditionEntry.clinicalStatus.value === "recurrence") {
                                                return null;
                                            } else {
                                                return "N/A";
                                            } // TODO: actually get date once we know where it is in SHR
                                        }
                                    }
                                ]
                            }
                            
                        ]
                    },
                    {
                        name: "Procedures",
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
                        clinicalEvents: ["pre-encounter"],
                        type: "DiseaseStatusValues",
                        itemsFunction: this.getProgressions,
                    },
                    {
                        name: "Labs",
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
                        clinicalEvents: ["pre-encounter"],
                        type: "Medications",
                        data: [
                            {
                                name: "",
                                itemsFunction: this.getItemListForMedications,
                            }
                        ]
                    },
                    {
                        name: "Pathology Results",
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
                                            let list = currentConditionEntry.getObservationsOfType(FluxHistologicGrade);
                                            return list[0].grade;
                                        }
                                    },
                                    {
                                        name: "Receptor Status ER",
                                        value: (patient, currentConditionEntry) => {
                                            let er = currentConditionEntry.getERReceptorStatus();
                                            if (Lang.isNull(er)) {
                                                return null;
                                            } else {
                                                return er.status;
                                            }
                                        }
                                    },
                                    {
                                        name: "Receptor Status PR",
                                        value: (patient, currentConditionEntry) => {
                                            let pr = currentConditionEntry.getPRReceptorStatus();
                                            if (Lang.isNull(pr)) {
                                                return null;
                                            } else {
                                                return pr.status;
                                            }
                                        }
                                    },
                                    {
                                        name: "Receptor Status HER2",
                                        value: (patient, currentConditionEntry) => {
                                            let her2 = currentConditionEntry.getHER2ReceptorStatus();
                                            if (Lang.isNull(her2)) {
                                                return null;
                                            } else {
                                                return her2.status;
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
                                        value: null
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Timeline",
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
                                            return currentConditionEntry.type;
                                        },
                                        shortcut: "@condition"
                                    },
                                    {
                                        name: "Diagnosis Date",
                                        value: (patient, currentConditionEntry) => {
                                            return currentConditionEntry.diagnosisDate;
                                        }
                                    },
                                    {
                                        name: "Where",
                                        value: (patient, currentConditionEntry) => {
                                            return currentConditionEntry.bodySite;
                                        }
                                    },
                                    {
                                        name: "Clinical Status",
                                        value: (patient, currentConditionEntry) => {
                                            return currentConditionEntry.clinicalStatus;
                                        }
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Procedures",
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
                        clinicalEvents: ["pre-encounter"],
                        type: "ListType",
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
                        type: "Columns",
                        notFiltered: true,
                        data: [
                            {
                                name: "",
                                headings: ["Condition", "Diagnosed"],
                                itemsFunction: this.getItemListForConditions,
                                shortcut: "@condition"
                            }
                        ]
                    },
                    {
                        name: "Timeline",
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
                value: value
            };
        });
    }

    getTestsForSubSection = (patient, currentConditionEntry, subsection) => { 
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const labResults = currentConditionEntry.getTests();
        labResults.sort(currentConditionEntry._labResultsTimeSorter);

        const labs = labResults.filter((lab, i) => {
            return lab.codeableConceptCode === subsection.code;
        }).map((lab, i) => {
            const processedLab = {};
            processedLab["start_time"] = lab.clinicallyRelevantTime;
            processedLab[subsection.name] = lab.quantity.number;
            processedLab["unit"] = lab.quantity.unit;

            return processedLab
        });

        return labs
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
            const startTime = new moment(med.expectedPerformanceTime.timePeriodStart, "D MMM YYYY");
            const endTime = new moment(med.expectedPerformanceTime.timePeriodEnd, "D MMM YYYY");
            const assignedGroup = this.assignItemToGroup(items, startTime, 1);
            const name = med.medication;
            const dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + med.timingOfDoses.value + " " + med.timingOfDoses.units;

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

export default SummaryMetadata;