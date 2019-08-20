import MedicationsSection from "./MedicationsSection";

export default class MedicationsColumnsSection extends MedicationsSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Medications",
            shortName: "Meds",
            clinicalEvents: ["pre-encounter"],
            defaultVisualizer: "tabular",
            type: "Medications",
            data: [
                {
                    name: "",
                    // NOTE: Nearly positive that this doesn't get used. When we use this section to retreieve a visualizer from VisualizerManager,
                    //       a transformation function, transformMedicationsToColumns, gets called to translate section.data -- i.e. this object here -- into
                    //       a format that the can be visualized and indexed properly. The VisualizerManager also specifies that the renderedFormat is Columns,
                    //       which is also the format that gets used to index the data. Long way of saying that I don't see this heading information being
                    //       used anywhere in the app, since the transformMedicationsToColumns function uses it's own headings.
                    headings: ["Medication", "Dosage", "Timing", "Start", "End"],
                    itemsFunction: this.getItemListForMedications,
                }
            ]
        };
    }
}