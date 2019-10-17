import MetadataSection from "./MetadataSection";
import _ from 'lodash';
// import moment from 'moment';

export default class RecentLabResultsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Most Recent Lab Results",
            itemsFunction: this.getItemListForLabResults
        };
    }

    getItemListForLabResults = (patient, currentConditionEntry) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];

        const labResultsInOrder = currentConditionEntry.getMostRecentLabResultOfEachType();

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