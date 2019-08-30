// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.EncounterLocation.
 */
class EncounterLocation {

  /**
   * Get the shr.core.Location reference.
   * @returns {Reference} The shr.core.Location reference
   */
  get location() {
    return this._location;
  }

  /**
   * Set the shr.core.Location reference.
   * This field/value is required.
   * @param {Reference} location - The shr.core.Location reference
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the shr.core.Location reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} location - The shr.core.Location reference
   * @returns {EncounterLocation} this.
   */
  withLocation(location) {
    this.location = location; return this;
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
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.core.Status
   * @returns {EncounterLocation} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {EncounterLocation} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EncounterLocation class.
   * The JSON must be valid against the EncounterLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EncounterLocation} An instance of EncounterLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'EncounterLocation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EncounterLocation class to a JSON object.
   * The JSON is expected to be valid against the EncounterLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EncounterLocation' } };
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EncounterLocation class.
   * The FHIR must be valid against the EncounterLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EncounterLocation} An instance of EncounterLocation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'EncounterLocation');
    const inst = new klass();
    return inst;
  }

}
export default EncounterLocation;
