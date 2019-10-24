import MetadataSection from './MetadataSection';
import _ from 'lodash';
import moment from 'moment';

export default class RecentLabResultsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Recent Labs (last 6 Months)",
            itemsFunction: this.getItemListForLabResults
        };
    }

    getItemListForLabResults = (patient, currentConditionEntry) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];

        // set a const for the number of months that dictates most recent lab results
        const numberOfMonths = 6;
        const labResultsInOrder = currentConditionEntry.getLabResultsChronologicalOrder(moment().subtract(numberOfMonths, 'months'));

        return labResultsInOrder.map((l, i) => {
            const value = `${l.quantity.number} ${l.quantity.unit} (${l.relevantTime})`;
            const name = `${l.name}`;
            return {    name: name,
                value: {value},
                shortcut: null
            };
        });
    }
}