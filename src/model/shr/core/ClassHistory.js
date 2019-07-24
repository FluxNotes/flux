// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ClassHistory.
 */
class ClassHistory {

  /**
   * Get the EncounterClass.
   * @returns {EncounterClass} The shr.core.EncounterClass
   */
  get encounterClass() {
    return this._encounterClass;
  }

  /**
   * Set the EncounterClass.
   * This field/value is required.
   * @param {EncounterClass} encounterClass - The shr.core.EncounterClass
   */
  set encounterClass(encounterClass) {
    this._encounterClass = encounterClass;
  }

  /**
   * Set the EncounterClass and return 'this' for chaining.
   * This field/value is required.
   * @param {EncounterClass} encounterClass - The shr.core.EncounterClass
   * @returns {ClassHistory} this.
   */
  withEncounterClass(encounterClass) {
    this.encounterClass = encounterClass; return this;
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
   * @returns {ClassHistory} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClassHistory class.
   * The JSON must be valid against the ClassHistory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClassHistory} An instance of ClassHistory populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ClassHistory');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ClassHistory class to a JSON object.
   * The JSON is expected to be valid against the ClassHistory JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ClassHistory' } };
    if (this.encounterClass != null) {
      inst['EncounterClass'] = typeof this.encounterClass.toJSON === 'function' ? this.encounterClass.toJSON() : this.encounterClass;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ClassHistory class.
   * The FHIR must be valid against the ClassHistory FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ClassHistory} An instance of ClassHistory populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ClassHistory');
    const inst = new klass();
    return inst;
  }

}
export default ClassHistory;
