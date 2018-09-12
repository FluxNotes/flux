import { getNamespaceAndName } from '../../json-helper';
import PatientEntry from './PatientEntry';
import Deceased from './Deceased';
import PhotoNote from './PhotoNote';
import ComplexExtension from './ComplexExtension';
import PatientDirectMapEntry from './PatientDirectMapEntry';
import PractitionerEntry from './PractitionerEntry';

/**
 * Generated object factory for the shr.fhir namespace.
 */
export default class ShrFhirObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.fhir') {
      throw new Error(`Unsupported type in ShrFhirObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'PatientEntry': return PatientEntry.fromJSON(json);
      case 'Deceased': return Deceased.fromJSON(json);
      case 'PhotoNote': return PhotoNote.fromJSON(json);
      case 'ComplexExtension': return ComplexExtension.fromJSON(json);
      case 'PatientDirectMapEntry': return PatientDirectMapEntry.fromJSON(json);
      case 'PractitionerEntry': return PractitionerEntry.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrFhirObjectFactory: ${type}`);
    }
  }
}
