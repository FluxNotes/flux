import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import State from './State';

/**
 * Generated class for shr.core.UnitedStatesState.
 * @extends State
 */
class UnitedStatesState extends State {

  /**
   * Deserializes JSON data to an instance of the UnitedStatesState class.
   * The JSON must be valid against the UnitedStatesState JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitedStatesState} An instance of UnitedStatesState populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UnitedStatesState();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the UnitedStatesState class to a JSON object.
   * The JSON is expected to be valid against the UnitedStatesState JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/UnitedStatesState' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the UnitedStatesState class.
   * The FHIR must be valid against the UnitedStatesState FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {UnitedStatesState} An instance of UnitedStatesState populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new UnitedStatesState();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default UnitedStatesState;
