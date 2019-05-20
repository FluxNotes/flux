import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.Participant.
 */
class Participant {

  /**
   * Get the value (aliases entityOrRole).
   * @returns {Reference} The shr.entity.EntityOrRole reference
   */
  get value() {
    return this._entityOrRole;
  }

  /**
   * Set the value (aliases entityOrRole).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.EntityOrRole reference
   */
  set value(value) {
    this._entityOrRole = value;
  }

  /**
   * Set the value (aliases entityOrRole) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.EntityOrRole reference.
   * @returns {Reference} The shr.entity.EntityOrRole reference
   */
  get entityOrRole() {
    return this._entityOrRole;
  }

  /**
   * Set the shr.entity.EntityOrRole reference.
   * This field/value is required.
   * @param {Reference} entityOrRole - The shr.entity.EntityOrRole reference
   */
  set entityOrRole(entityOrRole) {
    this._entityOrRole = entityOrRole;
  }

  /**
   * Set the shr.entity.EntityOrRole reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} entityOrRole - The shr.entity.EntityOrRole reference
   * @returns {Participant} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Participant class.
   * The JSON must be valid against the Participant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Participant} An instance of Participant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Participant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Participant class to a JSON object.
   * The JSON is expected to be valid against the Participant JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Participant' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Participant class.
   * The FHIR must be valid against the Participant FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Participant} An instance of Participant populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Participant();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.EntityOrRole', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Participant;
