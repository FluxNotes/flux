import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import AllergyIntolerance from './AllergyIntolerance';
import SubstanceCategory from './SubstanceCategory';
import AllergyIntoleranceType from './AllergyIntoleranceType';
import MostRecentOccurrenceTime from './MostRecentOccurrenceTime';
import AllergyIntoleranceReaction from './AllergyIntoleranceReaction';
import SubstanceCode from './SubstanceCode';
import Manifestation from './Manifestation';

/**
 * Generated object factory for the shr.allergy namespace.
 */
export default class ShrAllergyObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.allergy') {
      throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'AllergyIntolerance': return AllergyIntolerance.fromJSON(json);
    case 'SubstanceCategory': return SubstanceCategory.fromJSON(json);
    case 'AllergyIntoleranceType': return AllergyIntoleranceType.fromJSON(json);
    case 'MostRecentOccurrenceTime': return MostRecentOccurrenceTime.fromJSON(json);
    case 'AllergyIntoleranceReaction': return AllergyIntoleranceReaction.fromJSON(json);
    case 'SubstanceCode': return SubstanceCode.fromJSON(json);
    case 'Manifestation': return Manifestation.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
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
    if (namespace !== 'shr.allergy') {
      throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'AllergyIntolerance': return AllergyIntolerance.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SubstanceCategory': return SubstanceCategory.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AllergyIntoleranceType': return AllergyIntoleranceType.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'MostRecentOccurrenceTime': return MostRecentOccurrenceTime.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AllergyIntoleranceReaction': return AllergyIntoleranceReaction.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SubstanceCode': return SubstanceCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'Manifestation': return Manifestation.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in ShrAllergyObjectFactory: ${type}`);
    }
  }
}
