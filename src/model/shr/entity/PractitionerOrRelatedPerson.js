import { setPropertiesFromJSON } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for shr.entity.PractitionerOrRelatedPerson.
 * @extends EntityOrRole
 */
class PractitionerOrRelatedPerson extends EntityOrRole {

  /**
   * Get the choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference.
   * @returns {Reference} The choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.entity.Practitioner reference, shr.entity.RelatedPerson reference
   * @returns {PractitionerOrRelatedPerson} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PractitionerOrRelatedPerson class.
   * The JSON must be valid against the PractitionerOrRelatedPerson JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PractitionerOrRelatedPerson} An instance of PractitionerOrRelatedPerson populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PractitionerOrRelatedPerson();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the PractitionerOrRelatedPerson class to a JSON object.
   * The JSON is expected to be valid against the PractitionerOrRelatedPerson JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/PractitionerOrRelatedPerson' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the PractitionerOrRelatedPerson class to a FHIR object.
   * The FHIR is expected to be valid against the PractitionerOrRelatedPerson FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the PractitionerOrRelatedPerson class.
   * The FHIR must be valid against the PractitionerOrRelatedPerson FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {PractitionerOrRelatedPerson} An instance of PractitionerOrRelatedPerson populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new PractitionerOrRelatedPerson();
    return inst;
  }

}
export default PractitionerOrRelatedPerson;
