import MetadataSection from "./MetadataSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import DetailedTreatmentOptionsSection from './DetailedTreatmentOptionsSection';

export default class SarcomaCompassAppMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                SarcomaSummarySection,
                DetailedTreatmentOptionsSection
            )
        };
    }
}