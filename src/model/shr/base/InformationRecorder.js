import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.InformationRecorder.
 */
class InformationRecorder {

  /**
   * Get the value (aliases participant).
   * @returns {Participant} The shr.base.Participant
   */
  get value() {
    return this._participant;
  }

  /**
   * Set the value (aliases participant).
   * This field/value is required.
   * @param {Participant} value - The shr.base.Participant
   */
  set value(value) {
    this._participant = value;
  }

  /**
   * Set the value (aliases participant) and return 'this' for chaining.
   * This field/value is required.
   * @param {Participant} value - The shr.base.Participant
   * @returns {InformationRecorder} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Participant.
   * @returns {Participant} The shr.base.Participant
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the Participant.
   * This field/value is required.
   * @param {Participant} participant - The shr.base.Participant
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Set the Participant and return 'this' for chaining.
   * This field/value is required.
   * @param {Participant} participant - The shr.base.Participant
   * @returns {InformationRecorder} this.
   */
  withParticipant(participant) {
    this.participant = participant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the InformationRecorder class.
   * The JSON must be valid against the InformationRecorder JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {InformationRecorder} An instance of InformationRecorder populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new InformationRecorder();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the InformationRecorder class to a JSON object.
   * The JSON is expected to be valid against the InformationRecorder JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/InformationRecorder' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the InformationRecorder class.
   * The FHIR must be valid against the InformationRecorder FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {InformationRecorder} An instance of InformationRecorder populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new InformationRecorder();
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.base.Participant', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default InformationRecorder;
