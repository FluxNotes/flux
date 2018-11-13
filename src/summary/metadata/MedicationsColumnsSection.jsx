import MedicationsSection from "./MedicationsSection";

export default class MedicationsColumnsSection extends MedicationsSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Medications",
            shortName: "Meds",
            clinicalEvents: ["pre-encounter"],
            defaultVisualizer: "tabular",
            type: "Columns",
            data: [
                {
                    name: "",
                    headings: ["Medication", "Dosage", "Timing", "Start", "End"],
                    itemsFunction: this.getItemListForMedications,
                }
            ]
        };
    }
}