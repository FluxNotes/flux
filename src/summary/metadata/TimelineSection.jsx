import MetadataSection from "./MetadataSection";
import Lang from 'lodash'
import moment from 'moment';

export default class TimelineSection extends MetadataSection {
    getMetadata() {
        const overTheCounter = 'OverTheCounterMedications';

        return {
            name: "Timeline",
            shortName: "Timeline",
            type: "Events",
            resetData: this.resetTimelineData,
            data: [
                {
                    name: "Medications",

                    filters: [
                        {
                            name: 'Over The Counter Medications',
                            id: overTheCounter,
                        }
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
        const items = [];

        progressions.forEach((prog) => {
            const group = this.assignItemToGroup(items, prog.relevantTime);
            let classes = 'progression-item';

            // Do not include progression on timeline if status not set
            if (!prog.status) return;

            const startDate = new moment(prog.asOfDate, 'D MMM YYYY');
            const hoverText = `${startDate.format('MM/DD/YYYY')}`;
            const endDate = startDate.clone().add(1, 'day');
            classes += ' point-in-time';
            const focalCondition = patient.getFocalConditionForProgression(prog);
            const focalConditionName = focalCondition.type;
            const hoverTitle = `${focalConditionName} is ${prog.status} based on ${prog.evidence.join(', ')}`;
            const source = this.determineSource(patient, prog);

            items.push({
                group,
                hoverTitle,
                hoverText,
                source,
                icon: 'heartbeat',
                className: classes,
                start_time: startDate,
                end_time: endDate,
            });
        });

        return items;
    }

    getMedicationItems = (patient, condition, subsection, getFilterValue) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        let meds = patient.getMedicationsForConditionReverseChronologicalOrder(condition);
        if (subsection.filters) {
            subsection.filters.forEach(filter => {
                switch (filter.name) {
                case 'Over The Counter Medications':
                    // If Show Over The Counter meds is not selected, need to filter them out.
                    if (getFilterValue(filter, subsection.name) === false) {
                        meds = meds.filter((med) => {
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

        const items = [];
        meds.forEach((med) => {
            const startDate = med.startDate;
            if (Lang.isNull(startDate)) return;
            const startTime = new moment(med.startDate, "D MMM YYYY");
            let endTime = new moment(med.endDate, "D MMM YYYY");
            if (!endTime.isValid()) {
                endTime = new moment();
            }

            const group = this.assignItemToGroup(items, startTime, endTime);
            const name = med.medication;
            let dosage;
            if (!med.amountPerDose) {
                dosage = "not specified";
            } else {
                const timingOfDoses = med.timingOfDoses || {};
                dosage = med.amountPerDose.value + " " + med.amountPerDose.units + " " + (timingOfDoses.value || med.doseInstructionsText) + " " + (timingOfDoses.units || "");
            }

            const source = this.determineSource(patient, med);
            items.push({
                group,
                source,
                title: name,
                details: dosage,
                hoverTitle: name,
                hoverText: dosage,
                className: 'medication-item',
                start_time: startTime,
                end_time: endTime,
            });
        });

        return items;
    }

    getProcedureItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const procedures = patient.getProceduresForConditionChronologicalOrder(condition);
        const items = [];

        if (procedures.length > 0) this.incrementGroupNumber();
        procedures.forEach((proc) => {
            const startTime = new moment(typeof proc.occurrenceTime === 'string' ? proc.occurrenceTime : proc.occurrenceTime.timePeriodStart, "D MMM YYYY");
            let endTime = proc.occurrenceTime.timePeriodStart ? (!Lang.isNull(proc.occurrenceTime.timePeriodEnd) ? new moment(proc.occurrenceTime.timePeriodEnd, "D MMM YYYY") : null) : null;
            const group = this.assignItemToGroup(items, startTime, endTime);

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
            const source = this.determineSource(patient, proc);

            items.push({
                group,
                hoverText,
                source,
                icon: 'hospital-o',
                className: classes,
                hoverTitle: proc.name,
                start_time: startTime,
                end_time: endTime,
            });
        });

        return items;
    }

    getEventItems = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];
        const events = patient.getKeyEventsForConditionChronologicalOrder(condition);
        const items = [];

        if (events.length > 0) this.incrementGroupNumber();
        events.forEach((evt) => {
            const group = this.assignItemToGroup(items, evt.start_time, evt.end_time);

            let classes = 'progression-item';
            const startDate = new moment(evt.start_time, "D MMM YYYY");
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
                group,
                hoverTitle,
                hoverText,
                icon: 'heartbeat',
                className: classes,
                start_time: startDate,
                end_time: endDate,
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
