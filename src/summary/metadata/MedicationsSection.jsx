import MetadataSection from "./MetadataSection";
import Lang from 'lodash';

export default class MedicationsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Medications",
            shortName: "Meds",
            clinicalEvents: ["pre-encounter"],
            defaultVisualizer: "chart",
            type: "Medications",
            data: [
                {
                    name: "",
                    itemsFunction: this.getItemListForMedications,
                }
            ]
        };
    }

    // TODO: fix bug. not displaying medication change in targeted data panel. make sure we are getting medication
    getItemListForMedications = (patient, condition) => {
        if (Lang.isNull(patient) || Lang.isNull(condition)) return [];

        // Only showing active medications
        const meds = patient.getActiveAndRecentlyStoppedMedicationsForConditionReverseChronologicalOrder(condition);
        const medicationChanges = patient.getMedicationChangesForConditionChronologicalOrder(condition).filter(change => {
            // Filter reduced medication changes that don't have medBefore and medAfter
            if (change.type === 'reduced') return change.relatedRequest && change.medicationCodeOrReference;
            return true;
        });

        // For every medication in meds, create a new medToVisualize object that has the medication object and a medicationChange object
        let medsToVisualize = meds.map((med) => {
            return {
                medication: med,
                medicationChange: null
            };
        });

        medicationChanges.forEach(change => {
            const isUnsigned = patient.isUnsigned(change);
            const source = this.determineSource(patient, change);

            // If medicationChange has both medicationCodeOrReference and relatedRequest
            if (change.medicationCodeOrReference && change.relatedRequest) {
                // Determine if the medAfterChange corresponds to a med
                // Get that med if it exists, undefined otherwise
                const medToViz = medsToVisualize.find(medToVizObject => medToVizObject.medication.entryId === change.entryId);

                if (medToViz) {
                    // Add the medBeforeChange to the med, for use in visualization
                    const medBeforeChangeRef = change.relatedRequest;
                    const medBeforeChange = patient.getEntryFromReference(medBeforeChangeRef);

                    // medAfterChange.relatedRequest = medBeforeChange;
                    medToViz.medicationChange = {
                        isUnsigned,
                        source,
                        type: change.type,
                        date: change.whenChanged,
                        medBeforeChange: medBeforeChange,
                        medAfterChange: medToViz.medication,
                    };

                    // Remove the before-medication from vis
                    medsToVisualize = medsToVisualize.filter((medToVizObject) => {
                        return medToVizObject.medication.entryId !== medBeforeChangeRef.entryId;
                    });
                }
            }
            // If medication change only has relatedRequest (does not have medicationCodeOrReference)
            else if (change.relatedRequest && !change.medicationCodeOrReference) {
                const medBeforeChangeRef = change.relatedRequest;
                const medToViz = medsToVisualize.find(medToVizObject => medToVizObject.medication.entryId === medBeforeChangeRef.entryId);

                if (medToViz) {
                    medToViz.medicationChange = {
                        isUnsigned,
                        source,
                        type: change.type,
                        date: change.whenChanged,
                        medBeforeChange: medToViz.medication,
                    };
                }
            }
        });

        // instead of returning meds, return list of medsToVisualize
        return medsToVisualize;
    }
}