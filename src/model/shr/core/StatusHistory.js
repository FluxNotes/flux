// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.StatusHistory.
 */
class StatusHistory {

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
   * @returns {StatusHistory} this.
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
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {StatusHistory} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StatusHistory class.
   * The JSON must be valid against the StatusHistory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StatusHistory} An instance of StatusHistory populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'StatusHistory');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the StatusHistory class to a JSON object.
   * The JSON is expected to be valid against the StatusHistory JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/StatusHistory' } };
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the StatusHistory class.
   * The FHIR must be valid against the StatusHistory FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {StatusHistory} An instance of StatusHistory populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'StatusHistory');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension');
      if (match_3 != null) {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TimePeriod-extension');
      if (match_4 != null) {
        inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default StatusHistory;
