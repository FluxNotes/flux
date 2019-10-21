import MetadataSection from "./MetadataSection";
import _ from 'lodash';

export default class ActiveConditionsSubsection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Active Conditions",
            itemsFunction: this.getItemListForConditions
        };
    }

    // Returns conditions in the correct format to be displayed in the summary section
    getItemListForConditions = (patient, currentConditionEntry) => {
        if (_.isNull(patient) || _.isNull(currentConditionEntry)) return [];

        const conditions = patient.getActiveConditions();

        return conditions.map(c => {
            const value = this.getValue(c,patient);
            const name = c.type;
            return {
                name,
                value
            };
        });
    }

    // Returns the supplementary info for the condition (i.e. location and diagnosis date)
    getValue = (condition, patient) => {
        const val = condition.bodySite;
        const unsigned = patient.isUnsigned(condition);
        const source = this.determineSource(patient, condition);
        const when = condition.diagnosisDate;
        return {
            source,
            when,
            value: val,
            isUnsigned: unsigned,
        };
    }
}
