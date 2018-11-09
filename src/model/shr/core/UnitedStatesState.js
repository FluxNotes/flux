import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Serializes an instance of the UnitedStatesState class to a FHIR object.
   * The FHIR is expected to be valid against the UnitedStatesState FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the UnitedStatesState class.
   * The FHIR must be valid against the UnitedStatesState FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {UnitedStatesState} An instance of UnitedStatesState populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new UnitedStatesState();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default UnitedStatesState;
