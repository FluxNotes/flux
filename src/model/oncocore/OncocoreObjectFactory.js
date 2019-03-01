import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../json-helper';
import CancerDisorderPresent from './CancerDisorderPresent';
import CancerStagePanel from './CancerStagePanel';
import CancerHistologicGrade from './CancerHistologicGrade';
import GeneticMarkerAnalysisResult from './GeneticMarkerAnalysisResult';
import GenomicSourceClass from './GenomicSourceClass';
import GeneName from './GeneName';
import DNARegionName from './DNARegionName';
import DNASequenceVariantName from './DNASequenceVariantName';
import DNASequenceVariantId from './DNASequenceVariantId';
import DNASequenceVariantType from './DNASequenceVariantType';
import TumorMarker from './TumorMarker';
import CancerGeneticMarkerAnalysisResult from './CancerGeneticMarkerAnalysisResult';
import RadiationProcedurePerformed from './RadiationProcedurePerformed';
import RadiationDosePerFraction from './RadiationDosePerFraction';
import RadiationFractionsDelivered from './RadiationFractionsDelivered';
import TotalRadiationDoseDelivered from './TotalRadiationDoseDelivered';
import CancerHistologicType from './CancerHistologicType';
import CancerProgression from './CancerProgression';
import CancerProgressionEvidence from './CancerProgressionEvidence';
import ECOGPerformanceStatus from './ECOGPerformanceStatus';
import KarnofskyPerformanceStatus from './KarnofskyPerformanceStatus';
import CancerStageTiming from './CancerStageTiming';
import CancerStageSuffix from './CancerStageSuffix';
import CancerStagingSystem from './CancerStagingSystem';
import CancerStagePanelMember from './CancerStagePanelMember';
import TNMStagePanelMember from './TNMStagePanelMember';
import TNMClinicalPrognosticStagePanel from './TNMClinicalPrognosticStagePanel';
import TNMClinicalStageGroup from './TNMClinicalStageGroup';
import TNMClinicalPrimaryTumorClassification from './TNMClinicalPrimaryTumorClassification';
import TNMClinicalRegionalNodesClassification from './TNMClinicalRegionalNodesClassification';
import TNMClinicalDistantMetastasesClassification from './TNMClinicalDistantMetastasesClassification';
import TNMPathologicPrognosticStagePanel from './TNMPathologicPrognosticStagePanel';
import TNMPathologicStageGroup from './TNMPathologicStageGroup';

/**
 * Generated object factory for the oncocore namespace.
 */
export default class OncocoreObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'oncocore') {
      throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'CancerDisorderPresent': return CancerDisorderPresent.fromJSON(json);
    case 'CancerStagePanel': return CancerStagePanel.fromJSON(json);
    case 'CancerHistologicGrade': return CancerHistologicGrade.fromJSON(json);
    case 'GeneticMarkerAnalysisResult': return GeneticMarkerAnalysisResult.fromJSON(json);
    case 'GenomicSourceClass': return GenomicSourceClass.fromJSON(json);
    case 'GeneName': return GeneName.fromJSON(json);
    case 'DNARegionName': return DNARegionName.fromJSON(json);
    case 'DNASequenceVariantName': return DNASequenceVariantName.fromJSON(json);
    case 'DNASequenceVariantId': return DNASequenceVariantId.fromJSON(json);
    case 'DNASequenceVariantType': return DNASequenceVariantType.fromJSON(json);
    case 'TumorMarker': return TumorMarker.fromJSON(json);
    case 'CancerGeneticMarkerAnalysisResult': return CancerGeneticMarkerAnalysisResult.fromJSON(json);
    case 'RadiationProcedurePerformed': return RadiationProcedurePerformed.fromJSON(json);
    case 'RadiationDosePerFraction': return RadiationDosePerFraction.fromJSON(json);
    case 'RadiationFractionsDelivered': return RadiationFractionsDelivered.fromJSON(json);
    case 'TotalRadiationDoseDelivered': return TotalRadiationDoseDelivered.fromJSON(json);
    case 'CancerHistologicType': return CancerHistologicType.fromJSON(json);
    case 'CancerProgression': return CancerProgression.fromJSON(json);
    case 'CancerProgressionEvidence': return CancerProgressionEvidence.fromJSON(json);
    case 'ECOGPerformanceStatus': return ECOGPerformanceStatus.fromJSON(json);
    case 'KarnofskyPerformanceStatus': return KarnofskyPerformanceStatus.fromJSON(json);
    case 'CancerStageTiming': return CancerStageTiming.fromJSON(json);
    case 'CancerStageSuffix': return CancerStageSuffix.fromJSON(json);
    case 'CancerStagingSystem': return CancerStagingSystem.fromJSON(json);
    case 'CancerStagePanelMember': return CancerStagePanelMember.fromJSON(json);
    case 'TNMStagePanelMember': return TNMStagePanelMember.fromJSON(json);
    case 'TNMClinicalPrognosticStagePanel': return TNMClinicalPrognosticStagePanel.fromJSON(json);
    case 'TNMClinicalStageGroup': return TNMClinicalStageGroup.fromJSON(json);
    case 'TNMClinicalPrimaryTumorClassification': return TNMClinicalPrimaryTumorClassification.fromJSON(json);
    case 'TNMClinicalRegionalNodesClassification': return TNMClinicalRegionalNodesClassification.fromJSON(json);
    case 'TNMClinicalDistantMetastasesClassification': return TNMClinicalDistantMetastasesClassification.fromJSON(json);
    case 'TNMPathologicPrognosticStagePanel': return TNMPathologicPrognosticStagePanel.fromJSON(json);
    case 'TNMPathologicStageGroup': return TNMPathologicStageGroup.fromJSON(json);
    default: throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'oncocore') {
      throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'CancerDisorderPresent': return CancerDisorderPresent.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerStagePanel': return CancerStagePanel.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerHistologicGrade': return CancerHistologicGrade.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'GeneticMarkerAnalysisResult': return GeneticMarkerAnalysisResult.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'GenomicSourceClass': return GenomicSourceClass.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'GeneName': return GeneName.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DNARegionName': return DNARegionName.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DNASequenceVariantName': return DNASequenceVariantName.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DNASequenceVariantId': return DNASequenceVariantId.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DNASequenceVariantType': return DNASequenceVariantType.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorMarker': return TumorMarker.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerGeneticMarkerAnalysisResult': return CancerGeneticMarkerAnalysisResult.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'RadiationProcedurePerformed': return RadiationProcedurePerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'RadiationDosePerFraction': return RadiationDosePerFraction.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'RadiationFractionsDelivered': return RadiationFractionsDelivered.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TotalRadiationDoseDelivered': return TotalRadiationDoseDelivered.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerHistologicType': return CancerHistologicType.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerProgression': return CancerProgression.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerProgressionEvidence': return CancerProgressionEvidence.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ECOGPerformanceStatus': return ECOGPerformanceStatus.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'KarnofskyPerformanceStatus': return KarnofskyPerformanceStatus.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerStageTiming': return CancerStageTiming.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerStageSuffix': return CancerStageSuffix.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerStagingSystem': return CancerStagingSystem.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CancerStagePanelMember': return CancerStagePanelMember.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMStagePanelMember': return TNMStagePanelMember.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMClinicalPrognosticStagePanel': return TNMClinicalPrognosticStagePanel.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMClinicalStageGroup': return TNMClinicalStageGroup.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMClinicalPrimaryTumorClassification': return TNMClinicalPrimaryTumorClassification.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMClinicalRegionalNodesClassification': return TNMClinicalRegionalNodesClassification.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMClinicalDistantMetastasesClassification': return TNMClinicalDistantMetastasesClassification.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMPathologicPrognosticStagePanel': return TNMPathologicPrognosticStagePanel.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TNMPathologicStageGroup': return TNMPathologicStageGroup.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
    }
  }
}
