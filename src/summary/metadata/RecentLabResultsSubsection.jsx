import MetadataSection from "./MetadataSection";
import Lang from 'lodash'
import moment from 'moment';

export default class RecentLabResultsSubsection extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return {
            name: "Recent Lab Results",
            itemsFunction: this.getItemListForLabResults
        };
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
                {   value: name, 
                    isInsertable: false
                },
                {   value:  {   value: value, 
                                isUnsigned: patient.isUnsigned(l)
                            },
                    shortcut: null
                }
            ];
        });
    }
}