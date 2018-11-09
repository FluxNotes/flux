import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../json-helper';
import MedicationTreatmentPerformed from './MedicationTreatmentPerformed';
import RadiationTreatmentPerformed from './RadiationTreatmentPerformed';
import SurgicalTreatmentPerformed from './SurgicalTreatmentPerformed';
import TreatmentIntent from './TreatmentIntent';
import LineOfTherapy from './LineOfTherapy';
import RegimenIdentifier from './RegimenIdentifier';
import RegimenName from './RegimenName';
import RegimenStartDate from './RegimenStartDate';
import RegimenStopDate from './RegimenStopDate';
import RadiationModality from './RadiationModality';
import RadiationDosePerFraction from './RadiationDosePerFraction';
import RadiationFractionsDelivered from './RadiationFractionsDelivered';
import TotalRadiationDoseDelivered from './TotalRadiationDoseDelivered';
import CancerDisorder from './CancerDisorder';
import CancerHistologicType from './CancerHistologicType';
import CancerHistologicGrade from './CancerHistologicGrade';
import CancerProgression from './CancerProgression';
import CancerStage from './CancerStage';
import StageTiming from './StageTiming';
import StagingSystem from './StagingSystem';
import StageGroup from './StageGroup';
import TNMClinicalPrimaryTumorClassification from './TNMClinicalPrimaryTumorClassification';
import StageSuffix from './StageSuffix';
import TNMClinicalRegionalNodesClassification from './TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassification from './TNMClinicalDistantMetastasesClassification';
import TNMPathologicPrimaryTumorClassification from './TNMPathologicPrimaryTumorClassification';
import TNMPathologicRegionalNodesClassification from './TNMPathologicRegionalNodesClassification';
import TNMPathologicDistantMetastasesClassification from './TNMPathologicDistantMetastasesClassification';
import Tumor from './Tumor';
import PrimaryTumorIndicator from './PrimaryTumorIndicator';
import ECOGPerformanceStatus from './ECOGPerformanceStatus';
import ECOGPerformanceStatusScore from './ECOGPerformanceStatusScore';
import ECOGPerformanceStatusInterpretation from './ECOGPerformanceStatusInterpretation';
import KarnofskyPerformanceStatus from './KarnofskyPerformanceStatus';
import KarnofskyPerformanceStatusScore from './KarnofskyPerformanceStatusScore';
import KarnofskyPerformanceStatusInterpretation from './KarnofskyPerformanceStatusInterpretation';

/**
 * Generated object factory for the mcode namespace.
 */
export default class McodeObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'mcode') {
      throw new Error(`Unsupported type in McodeObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'MedicationTreatmentPerformed': return MedicationTreatmentPerformed.fromJSON(json);
    case 'RadiationTreatmentPerformed': return RadiationTreatmentPerformed.fromJSON(json);
    case 'SurgicalTreatmentPerformed': return SurgicalTreatmentPerformed.fromJSON(json);
    case 'TreatmentIntent': return TreatmentIntent.fromJSON(json);
    case 'LineOfTherapy': return LineOfTherapy.fromJSON(json);
    case 'RegimenIdentifier': return RegimenIdentifier.fromJSON(json);
    case 'RegimenName': return RegimenName.fromJSON(json);
    case 'RegimenStartDate': return RegimenStartDate.fromJSON(json);
    case 'RegimenStopDate': return RegimenStopDate.fromJSON(json);
    case 'RadiationModality': return RadiationModality.fromJSON(json);
    case 'RadiationDosePerFraction': return RadiationDosePerFraction.fromJSON(json);
    case 'RadiationFractionsDelivered': return RadiationFractionsDelivered.fromJSON(json);
    case 'TotalRadiationDoseDelivered': return TotalRadiationDoseDelivered.fromJSON(json);
    case 'CancerDisorder': return CancerDisorder.fromJSON(json);
    case 'CancerHistologicType': return CancerHistologicType.fromJSON(json);
    case 'CancerHistologicGrade': return CancerHistologicGrade.fromJSON(json);
    case 'CancerProgression': return CancerProgression.fromJSON(json);
    case 'CancerStage': return CancerStage.fromJSON(json);
    case 'StageTiming': return StageTiming.fromJSON(json);
    case 'StagingSystem': return StagingSystem.fromJSON(json);
    case 'StageGroup': return StageGroup.fromJSON(json);
    case 'TNMClinicalPrimaryTumorClassification': return TNMClinicalPrimaryTumorClassification.fromJSON(json);
    case 'StageSuffix': return StageSuffix.fromJSON(json);
    case 'TNMClinicalRegionalNodesClassification': return TNMClinicalRegionalNodesClassification.fromJSON(json);
    case 'TNMClinicalDistantMetastasesClassification': return TNMClinicalDistantMetastasesClassification.fromJSON(json);
    case 'TNMPathologicPrimaryTumorClassification': return TNMPathologicPrimaryTumorClassification.fromJSON(json);
    case 'TNMPathologicRegionalNodesClassification': return TNMPathologicRegionalNodesClassification.fromJSON(json);
    case 'TNMPathologicDistantMetastasesClassification': return TNMPathologicDistantMetastasesClassification.fromJSON(json);
    case 'Tumor': return Tumor.fromJSON(json);
    case 'PrimaryTumorIndicator': return PrimaryTumorIndicator.fromJSON(json);
    case 'ECOGPerformanceStatus': return ECOGPerformanceStatus.fromJSON(json);
    case 'ECOGPerformanceStatusScore': return ECOGPerformanceStatusScore.fromJSON(json);
    case 'ECOGPerformanceStatusInterpretation': return ECOGPerformanceStatusInterpretation.fromJSON(json);
    case 'KarnofskyPerformanceStatus': return KarnofskyPerformanceStatus.fromJSON(json);
    case 'KarnofskyPerformanceStatusScore': return KarnofskyPerformanceStatusScore.fromJSON(json);
    case 'KarnofskyPerformanceStatusInterpretation': return KarnofskyPerformanceStatusInterpretation.fromJSON(json);
    default: throw new Error(`Unsupported type in McodeObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'mcode') {
      throw new Error(`Unsupported type in McodeObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'MedicationTreatmentPerformed': return MedicationTreatmentPerformed.fromFHIR(fhir, asExtension);
    case 'RadiationTreatmentPerformed': return RadiationTreatmentPerformed.fromFHIR(fhir, asExtension);
    case 'SurgicalTreatmentPerformed': return SurgicalTreatmentPerformed.fromFHIR(fhir, asExtension);
    case 'TreatmentIntent': return TreatmentIntent.fromFHIR(fhir, asExtension);
    case 'LineOfTherapy': return LineOfTherapy.fromFHIR(fhir, asExtension);
    case 'RegimenIdentifier': return RegimenIdentifier.fromFHIR(fhir, asExtension);
    case 'RegimenName': return RegimenName.fromFHIR(fhir, asExtension);
    case 'RegimenStartDate': return RegimenStartDate.fromFHIR(fhir, asExtension);
    case 'RegimenStopDate': return RegimenStopDate.fromFHIR(fhir, asExtension);
    case 'RadiationModality': return RadiationModality.fromFHIR(fhir, asExtension);
    case 'RadiationDosePerFraction': return RadiationDosePerFraction.fromFHIR(fhir, asExtension);
    case 'RadiationFractionsDelivered': return RadiationFractionsDelivered.fromFHIR(fhir, asExtension);
    case 'TotalRadiationDoseDelivered': return TotalRadiationDoseDelivered.fromFHIR(fhir, asExtension);
    case 'CancerDisorder': return CancerDisorder.fromFHIR(fhir, asExtension);
    case 'CancerHistologicType': return CancerHistologicType.fromFHIR(fhir, asExtension);
    case 'CancerHistologicGrade': return CancerHistologicGrade.fromFHIR(fhir, asExtension);
    case 'CancerProgression': return CancerProgression.fromFHIR(fhir, asExtension);
    case 'CancerStage': return CancerStage.fromFHIR(fhir, asExtension);
    case 'StageTiming': return StageTiming.fromFHIR(fhir, asExtension);
    case 'StagingSystem': return StagingSystem.fromFHIR(fhir, asExtension);
    case 'StageGroup': return StageGroup.fromFHIR(fhir, asExtension);
    case 'TNMClinicalPrimaryTumorClassification': return TNMClinicalPrimaryTumorClassification.fromFHIR(fhir, asExtension);
    case 'StageSuffix': return StageSuffix.fromFHIR(fhir, asExtension);
    case 'TNMClinicalRegionalNodesClassification': return TNMClinicalRegionalNodesClassification.fromFHIR(fhir, asExtension);
    case 'TNMClinicalDistantMetastasesClassification': return TNMClinicalDistantMetastasesClassification.fromFHIR(fhir, asExtension);
    case 'TNMPathologicPrimaryTumorClassification': return TNMPathologicPrimaryTumorClassification.fromFHIR(fhir, asExtension);
    case 'TNMPathologicRegionalNodesClassification': return TNMPathologicRegionalNodesClassification.fromFHIR(fhir, asExtension);
    case 'TNMPathologicDistantMetastasesClassification': return TNMPathologicDistantMetastasesClassification.fromFHIR(fhir, asExtension);
    case 'Tumor': return Tumor.fromFHIR(fhir, asExtension);
    case 'PrimaryTumorIndicator': return PrimaryTumorIndicator.fromFHIR(fhir, asExtension);
    case 'ECOGPerformanceStatus': return ECOGPerformanceStatus.fromFHIR(fhir, asExtension);
    case 'ECOGPerformanceStatusScore': return ECOGPerformanceStatusScore.fromFHIR(fhir, asExtension);
    case 'ECOGPerformanceStatusInterpretation': return ECOGPerformanceStatusInterpretation.fromFHIR(fhir, asExtension);
    case 'KarnofskyPerformanceStatus': return KarnofskyPerformanceStatus.fromFHIR(fhir, asExtension);
    case 'KarnofskyPerformanceStatusScore': return KarnofskyPerformanceStatusScore.fromFHIR(fhir, asExtension);
    case 'KarnofskyPerformanceStatusInterpretation': return KarnofskyPerformanceStatusInterpretation.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in McodeObjectFactory: ${type}`);
    }
  }
}
