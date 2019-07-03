import MetadataSection from "./MetadataSection";

export default class DetailedTreatmentOptionsSection extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            name: "Treatment Options",
            shortName: "Treatments",
            type: "TreatmentOptions",
            data: []
        };
    }
}
