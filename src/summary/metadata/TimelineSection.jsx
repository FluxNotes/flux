import MetadataSection from "./MetadataSection";
import Lang from 'lodash'
import moment from 'moment';

export default class TimelineSection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Timeline",
            shortName: "Timeline",
            type: "Events",
            resetData: this.resetTimelineData,
            data: [
                {
                    name: "Medications",
                    filters: [
                        { name: 'Over The Counter Medications', value: true }
                    ],
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
        };
    }

    nextGroupNumber = 1;

    resetTimelineData = () => {
        this.nextGroupNumber = 1;
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

            let hoverTitle = focalConditionName + " is " + prog.status + " based on " + prog.evidence.join(", ");

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

    getMedicationItems = (patient, condition, subsection) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        let meds = patient.getMedicationsForConditionReverseChronologicalOrder(condition);

        if (subsection.filters) {
            subsection.filters.forEach(filter => {
                switch (filter.name) {
                    case 'Over The Counter Medications':
                    // If Show Over The Counter meds is not selected, need to filter them out.
                    if (filter.value === false) {
                            meds = meds.filter(med => {
                                // Don't filter out medications if we don't know if they are OTC or not.
                                if (med.overTheCounter === undefined) {
                                    return true;
                                }
                                return !med.overTheCounter;
                            });
                        }
                        break;
                    default:
                        break;
                }
            });
        }
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
                dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + (med.timingOfDoses.value || med.doseInstructionsText) + " " + (med.timingOfDoses.units ? med.timingOfDoses.units : "");
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
}