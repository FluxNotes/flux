import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for shr.entity.Role.
 * @extends EntityOrRole
 */
class Role extends EntityOrRole {

  /**
   * Deserializes JSON data to an instance of the Role class.
   * The JSON must be valid against the Role JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Role} An instance of Role populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Role();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Role class to a JSON object.
   * The JSON is expected to be valid against the Role JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Role' } };
    return inst;
  }

  /**
   * Serializes an instance of the Role class to a FHIR object.
   * The FHIR is expected to be valid against the Role FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Role class.
   * The FHIR must be valid against the Role FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Role} An instance of Role populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Role();
    return inst;
  }

}
export default Role;
