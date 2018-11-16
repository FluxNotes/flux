import MetadataSection from "./MetadataSection";

export default class ActiveConditionsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Active Conditions",
            shortName: "Conditions",
            type: "Columns",
            notFiltered: true,
            data: [
                {
                    name: "",
                    headings: ["Condition", "Diagnosed", "Body Site"],
                    itemsFunction: this.getItemListForConditions,
                }
            ]
        };
    }

    getItemListForConditions = (patient, currentConditionEntry, section, subsection) => {
        const conditions = patient.getActiveConditions();
        return conditions.map((c, i) => {
            return [
                {    value: c.type, 
                     isUnsigned: patient.isUnsigned(c),
                     source: this.determineSource(patient, c),
                     shortcutData: {
                        shortcut: '@condition',
                        entryId: c.entryInfo.entryId,
                    }
                }, 
                {   value: c.diagnosisDate
                },
                {   value: c.bodySite
                }
            ];
        });
    }
}
