// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.AppointmentParticipation.
 */
class AppointmentParticipation {

  /**
   * Get the ParticipationType array.
   * @returns {Array<ParticipationType>} The shr.core.ParticipationType array
   */
  get participationType() {
    return this._participationType;
  }

  /**
   * Set the ParticipationType array.
   * This field/value is required.
   * @param {Array<ParticipationType>} participationType - The shr.core.ParticipationType array
   */
  set participationType(participationType) {
    this._participationType = participationType;
  }

  /**
   * Set the ParticipationType array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<ParticipationType>} participationType - The shr.core.ParticipationType array
   * @returns {AppointmentParticipation} this.
   */
  withParticipationType(participationType) {
    this.participationType = participationType; return this;
  }

  /**
   * Get the AppointmentParticipant.
   * @returns {AppointmentParticipant} The shr.core.AppointmentParticipant
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the AppointmentParticipant.
   * @param {AppointmentParticipant} participant - The shr.core.AppointmentParticipant
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Set the AppointmentParticipant and return 'this' for chaining.
   * @param {AppointmentParticipant} participant - The shr.core.AppointmentParticipant
   * @returns {AppointmentParticipation} this.
   */
  withParticipant(participant) {
    this.participant = participant; return this;
  }

  /**
   * Get the Need.
   * @returns {Need} The shr.core.Need
   */
  get need() {
    return this._need;
  }

  /**
   * Set the Need.
   * @param {Need} need - The shr.core.Need
   */
  set need(need) {
    this._need = need;
  }

  /**
   * Set the Need and return 'this' for chaining.
   * @param {Need} need - The shr.core.Need
   * @returns {AppointmentParticipation} this.
   */
  withNeed(need) {
    this.need = need; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {AppointmentParticipation} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AppointmentParticipation class.
   * The JSON must be valid against the AppointmentParticipation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AppointmentParticipation} An instance of AppointmentParticipation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'AppointmentParticipation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AppointmentParticipation class to a JSON object.
   * The JSON is expected to be valid against the AppointmentParticipation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/AppointmentParticipation' } };
    if (this.participationType != null) {
      inst['ParticipationType'] = this.participationType.map(f => f.toJSON());
    }
    if (this.participant != null) {
      inst['Participant'] = typeof this.participant.toJSON === 'function' ? this.participant.toJSON() : this.participant;
    }
    if (this.need != null) {
      inst['Need'] = typeof this.need.toJSON === 'function' ? this.need.toJSON() : this.need;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AppointmentParticipation class.
   * The FHIR must be valid against the AppointmentParticipation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AppointmentParticipation} An instance of AppointmentParticipation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'AppointmentParticipation');
    const inst = new klass();
    return inst;
  }

}
export default AppointmentParticipation;
