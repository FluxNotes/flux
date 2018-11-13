import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

/**
 * Generated class for odh.EmployerOrganization.
 */
class EmployerOrganization {

  /**
   * Deserializes JSON data to an instance of the EmployerOrganization class.
   * The JSON must be valid against the EmployerOrganization JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EmployerOrganization} An instance of EmployerOrganization populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EmployerOrganization();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EmployerOrganization class to a JSON object.
   * The JSON is expected to be valid against the EmployerOrganization JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/EmployerOrganization' } };
    return inst;
  }

  /**
   * Serializes an instance of the EmployerOrganization class to a FHIR object.
   * The FHIR is expected to be valid against the EmployerOrganization FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EmployerOrganization class.
   * The FHIR must be valid against the EmployerOrganization FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EmployerOrganization} An instance of EmployerOrganization populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new EmployerOrganization();
    return inst;
  }

}
export default EmployerOrganization;
