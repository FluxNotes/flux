import MetadataSection from "./MetadataSection";
import GeneralCancerSummarySection from './GeneralCancerSummarySection';
import DetailedTreatmentOptionsSection from './DetailedTreatmentOptionsSection';
import DiseaseStatusSection from './DiseaseStatusSection';
import ProceduresSection from './ProceduresSection';
import MedicationsSection from './MedicationsSection';
import ActiveConditionsSection from "./ActiveConditionsSection";

export default class McodeMetadata extends MetadataSection {
    getMetadata(preferencesManager, patient, condition, roleType, role, specialty) {
        return { // sarcoma
            sections: this.buildMetadataSections(preferencesManager, patient, condition, roleType, role, specialty,
                GeneralCancerSummarySection,
                ActiveConditionsSection,
                ProceduresSection,
                MedicationsSection,
                DiseaseStatusSection,
                DetailedTreatmentOptionsSection
            )
        };
    }
}