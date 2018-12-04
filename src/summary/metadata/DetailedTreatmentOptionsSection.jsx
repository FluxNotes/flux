import MetadataSection from "./MetadataSection";
import _ from 'lodash';

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
