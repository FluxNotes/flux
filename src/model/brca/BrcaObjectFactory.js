import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../json-helper';
import BreastSite from './BreastSite';
import BreastSpecimen from './BreastSpecimen';
import ColdIschemiaTime from './ColdIschemiaTime';
import MorphologyBehavior from './MorphologyBehavior';
import BreastCancerDisorderPresent from './BreastCancerDisorderPresent';
import BreastCancerStagePanel from './BreastCancerStagePanel';
import HER2ReceptorStatus from './HER2ReceptorStatus';
import HER2byIHC from './HER2byIHC';
import CompleteMembraneStainingPercent from './CompleteMembraneStainingPercent';
import HER2byFISH from './HER2byFISH';
import AverageHER2SignalsPerCell from './AverageHER2SignalsPerCell';
import AverageCEP17SignalsPerCell from './AverageCEP17SignalsPerCell';
import HER2toCEP17Ratio from './HER2toCEP17Ratio';
import EstrogenReceptorStatus from './EstrogenReceptorStatus';
import ProgesteroneReceptorStatus from './ProgesteroneReceptorStatus';
import NuclearPositivity from './NuclearPositivity';
import AverageStainingIntensity from './AverageStainingIntensity';
import DCISNuclearGrade from './DCISNuclearGrade';
import BreastCancerHistologicGrade from './BreastCancerHistologicGrade';
import TubuleFormationScore from './TubuleFormationScore';
import NuclearPleomorphismScore from './NuclearPleomorphismScore';
import MitoticCountScore from './MitoticCountScore';
import OncotypeDxInvasiveRecurrenceScore from './OncotypeDxInvasiveRecurrenceScore';
import OncotypeDxDCISRecurrenceScore from './OncotypeDxDCISRecurrenceScore';
import ProsignaRecurrenceScore from './ProsignaRecurrenceScore';
import MammaprintRecurrenceScore from './MammaprintRecurrenceScore';

/**
 * Generated object factory for the brca namespace.
 */
export default class BrcaObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'brca') {
      throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'BreastSite': return BreastSite.fromJSON(json);
    case 'BreastSpecimen': return BreastSpecimen.fromJSON(json);
    case 'ColdIschemiaTime': return ColdIschemiaTime.fromJSON(json);
    case 'MorphologyBehavior': return MorphologyBehavior.fromJSON(json);
    case 'BreastCancerDisorderPresent': return BreastCancerDisorderPresent.fromJSON(json);
    case 'BreastCancerStagePanel': return BreastCancerStagePanel.fromJSON(json);
    case 'HER2ReceptorStatus': return HER2ReceptorStatus.fromJSON(json);
    case 'HER2byIHC': return HER2byIHC.fromJSON(json);
    case 'CompleteMembraneStainingPercent': return CompleteMembraneStainingPercent.fromJSON(json);
    case 'HER2byFISH': return HER2byFISH.fromJSON(json);
    case 'AverageHER2SignalsPerCell': return AverageHER2SignalsPerCell.fromJSON(json);
    case 'AverageCEP17SignalsPerCell': return AverageCEP17SignalsPerCell.fromJSON(json);
    case 'HER2toCEP17Ratio': return HER2toCEP17Ratio.fromJSON(json);
    case 'EstrogenReceptorStatus': return EstrogenReceptorStatus.fromJSON(json);
    case 'ProgesteroneReceptorStatus': return ProgesteroneReceptorStatus.fromJSON(json);
    case 'NuclearPositivity': return NuclearPositivity.fromJSON(json);
    case 'AverageStainingIntensity': return AverageStainingIntensity.fromJSON(json);
    case 'DCISNuclearGrade': return DCISNuclearGrade.fromJSON(json);
    case 'BreastCancerHistologicGrade': return BreastCancerHistologicGrade.fromJSON(json);
    case 'TubuleFormationScore': return TubuleFormationScore.fromJSON(json);
    case 'NuclearPleomorphismScore': return NuclearPleomorphismScore.fromJSON(json);
    case 'MitoticCountScore': return MitoticCountScore.fromJSON(json);
    case 'OncotypeDxInvasiveRecurrenceScore': return OncotypeDxInvasiveRecurrenceScore.fromJSON(json);
    case 'OncotypeDxDCISRecurrenceScore': return OncotypeDxDCISRecurrenceScore.fromJSON(json);
    case 'ProsignaRecurrenceScore': return ProsignaRecurrenceScore.fromJSON(json);
    case 'MammaprintRecurrenceScore': return MammaprintRecurrenceScore.fromJSON(json);
    default: throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
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
    if (namespace !== 'brca') {
      throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'BreastSite': return BreastSite.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'BreastSpecimen': return BreastSpecimen.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ColdIschemiaTime': return ColdIschemiaTime.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'MorphologyBehavior': return MorphologyBehavior.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'BreastCancerDisorderPresent': return BreastCancerDisorderPresent.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'BreastCancerStagePanel': return BreastCancerStagePanel.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'HER2ReceptorStatus': return HER2ReceptorStatus.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'HER2byIHC': return HER2byIHC.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CompleteMembraneStainingPercent': return CompleteMembraneStainingPercent.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'HER2byFISH': return HER2byFISH.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AverageHER2SignalsPerCell': return AverageHER2SignalsPerCell.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AverageCEP17SignalsPerCell': return AverageCEP17SignalsPerCell.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'HER2toCEP17Ratio': return HER2toCEP17Ratio.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'EstrogenReceptorStatus': return EstrogenReceptorStatus.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProgesteroneReceptorStatus': return ProgesteroneReceptorStatus.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'NuclearPositivity': return NuclearPositivity.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AverageStainingIntensity': return AverageStainingIntensity.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DCISNuclearGrade': return DCISNuclearGrade.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'BreastCancerHistologicGrade': return BreastCancerHistologicGrade.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TubuleFormationScore': return TubuleFormationScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'NuclearPleomorphismScore': return NuclearPleomorphismScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'MitoticCountScore': return MitoticCountScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'OncotypeDxInvasiveRecurrenceScore': return OncotypeDxInvasiveRecurrenceScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'OncotypeDxDCISRecurrenceScore': return OncotypeDxDCISRecurrenceScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProsignaRecurrenceScore': return ProsignaRecurrenceScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'MammaprintRecurrenceScore': return MammaprintRecurrenceScore.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in BrcaObjectFactory: ${type}`);
    }
  }
}
