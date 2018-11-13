import MetadataSection from "./MetadataSection";
import Lang from 'lodash'

export default class AllergiesSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
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
        };
    }
    
    getItemListForAllergies = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        const allergies = patient.getAllergyIntolerancesSortedBySeverity();
        return allergies.map((a) => {
            return [    { value: a.name }, 
                        { value: a.severity },
                        { value: a.manifestation }];
        });
    }

    getItemListForNoKnownAllergies = (patient, currentConditionEntry) => {
        if (Lang.isNull(patient) || Lang.isNull(currentConditionEntry)) return [];
        let noKnownAllergies = patient.getNoKnownAllergies();
        return noKnownAllergies.map((a) => {
            return {value: a.noKnownAllergy};
        });
    }
}