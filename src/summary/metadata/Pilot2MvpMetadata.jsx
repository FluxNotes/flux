import MetadataSection from "./MetadataSection";
import SarcomaSummarySection from './SarcomaSummarySection';
import TimelineSection from './TimelineSection';

export default class Pilot2MvpMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return {
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                SarcomaSummarySection,
                TimelineSection
            )
        };
    }
}