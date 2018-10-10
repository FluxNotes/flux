import MetadataSection from "./MetadataSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import TreatmentOptionsSection from './TreatmentOptionsSection';

export default class SarcomaCoreCancerPilotMetadata extends MetadataSection {
    getMetadata(preferencesManager, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, condition, roleType, role, 
                SarcomaSummarySection,
                TreatmentOptionsSection
            )                
        };
    }
}