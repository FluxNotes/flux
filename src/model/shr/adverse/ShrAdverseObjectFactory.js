import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import Seriousness from './Seriousness';
import AdverseEvent from './AdverseEvent';
import AdverseEventCondition from './AdverseEventCondition';
import CausalAttribution from './CausalAttribution';
import PossibleCause from './PossibleCause';
import CauseCategory from './CauseCategory';
import ActionTaken from './ActionTaken';
import AssociatedStudy from './AssociatedStudy';
import AdverseDrugReaction from './AdverseDrugReaction';
import PossibleDrugCause from './PossibleDrugCause';
import ToxicAdverseDrugReaction from './ToxicAdverseDrugReaction';

/**
 * Generated object factory for the shr.adverse namespace.
 */
export default class ShrAdverseObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.adverse') {
      throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Seriousness': return Seriousness.fromJSON(json);
    case 'AdverseEvent': return AdverseEvent.fromJSON(json);
    case 'AdverseEventCondition': return AdverseEventCondition.fromJSON(json);
    case 'CausalAttribution': return CausalAttribution.fromJSON(json);
    case 'PossibleCause': return PossibleCause.fromJSON(json);
    case 'CauseCategory': return CauseCategory.fromJSON(json);
    case 'ActionTaken': return ActionTaken.fromJSON(json);
    case 'AssociatedStudy': return AssociatedStudy.fromJSON(json);
    case 'AdverseDrugReaction': return AdverseDrugReaction.fromJSON(json);
    case 'PossibleDrugCause': return PossibleDrugCause.fromJSON(json);
    case 'ToxicAdverseDrugReaction': return ToxicAdverseDrugReaction.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
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
    if (namespace !== 'shr.adverse') {
      throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Seriousness': return Seriousness.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AdverseEvent': return AdverseEvent.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AdverseEventCondition': return AdverseEventCondition.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CausalAttribution': return CausalAttribution.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'PossibleCause': return PossibleCause.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'CauseCategory': return CauseCategory.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ActionTaken': return ActionTaken.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AssociatedStudy': return AssociatedStudy.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AdverseDrugReaction': return AdverseDrugReaction.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'PossibleDrugCause': return PossibleDrugCause.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ToxicAdverseDrugReaction': return ToxicAdverseDrugReaction.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in ShrAdverseObjectFactory: ${type}`);
    }
  }
}
