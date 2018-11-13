import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Role from '../shr/entity/Role';

/**
 * Generated class for odh.Employer.
 * @extends Role
 */
class Employer extends Role {

  /**
   * Get the choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference.
   * @returns {Reference} The choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: odh.EmployerPerson reference, odh.EmployerOrganization reference
   * @returns {Employer} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Employer class.
   * The JSON must be valid against the Employer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Employer} An instance of Employer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Employer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Employer class to a JSON object.
   * The JSON is expected to be valid against the Employer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/Employer' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Employer class to a FHIR object.
   * The FHIR is expected to be valid against the Employer FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/odh-Employer-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Employer class.
   * The FHIR must be valid against the Employer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Employer} An instance of Employer populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Employer();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Employer;
