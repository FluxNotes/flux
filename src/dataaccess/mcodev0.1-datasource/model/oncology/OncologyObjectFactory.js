import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../json-helper';

/**
 * Generated object factory for the oncology namespace.
 */
export default class OncologyObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'oncology') {
      throw new Error(`Unsupported type in OncologyObjectFactory: ${type}`);
    }
    switch (elementName) {
    default: throw new Error(`Unsupported type in OncologyObjectFactory: ${type}`);
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
    if (namespace !== 'oncology') {
      throw new Error(`Unsupported type in OncologyObjectFactory: ${type}`);
    }
    switch (elementName) {
    default: throw new Error(`Unsupported type in OncologyObjectFactory: ${type}`);
    }
  }
}
