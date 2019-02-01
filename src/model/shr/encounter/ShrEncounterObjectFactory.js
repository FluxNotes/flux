import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import Encounter from './Encounter';
import EncounterClass from './EncounterClass';
import EncounterType from './EncounterType';
import Diagnosis from './Diagnosis';
import DiagnosisCode from './DiagnosisCode';
import DetailedEncounter from './DetailedEncounter';
import ConsultRequested from './ConsultRequested';

/**
 * Generated object factory for the shr.encounter namespace.
 */
export default class ShrEncounterObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.encounter') {
      throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Encounter': return Encounter.fromJSON(json);
    case 'EncounterClass': return EncounterClass.fromJSON(json);
    case 'EncounterType': return EncounterType.fromJSON(json);
    case 'ConsultRequested': return ConsultRequested.fromJSON(json);
    case 'Diagnosis': return Diagnosis.fromJSON(json);
    case 'DiagnosisCode': return DiagnosisCode.fromJSON(json);
    case 'DetailedEncounter': return DetailedEncounter.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
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
    if (namespace !== 'shr.encounter') {
      throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'Encounter': return Encounter.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'EncounterClass': return EncounterClass.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'EncounterType': return EncounterType.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ConsultRequested': return ConsultRequested.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'Diagnosis': return Diagnosis.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DiagnosisCode': return DiagnosisCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DetailedEncounter': return DetailedEncounter.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in ShrEncounterObjectFactory: ${type}`);
    }
  }
}
