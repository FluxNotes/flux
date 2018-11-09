import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.StateOfIssue.
 */
class StateOfIssue {

  /**
   * Get the value (aliases state).
   * @returns {State} The shr.core.State
   */
  get value() {
    return this._state;
  }

  /**
   * Set the value (aliases state).
   * This field/value is required.
   * @param {State} value - The shr.core.State
   */
  set value(value) {
    this._state = value;
  }

  /**
   * Set the value (aliases state) and return 'this' for chaining.
   * This field/value is required.
   * @param {State} value - The shr.core.State
   * @returns {StateOfIssue} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the State.
   * @returns {State} The shr.core.State
   */
  get state() {
    return this._state;
  }

  /**
   * Set the State.
   * This field/value is required.
   * @param {State} state - The shr.core.State
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Set the State and return 'this' for chaining.
   * This field/value is required.
   * @param {State} state - The shr.core.State
   * @returns {StateOfIssue} this.
   */
  withState(state) {
    this.state = state; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StateOfIssue class.
   * The JSON must be valid against the StateOfIssue JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StateOfIssue} An instance of StateOfIssue populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StateOfIssue();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the StateOfIssue class to a JSON object.
   * The JSON is expected to be valid against the StateOfIssue JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/StateOfIssue' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the StateOfIssue class to a FHIR object.
   * The FHIR is expected to be valid against the StateOfIssue FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the StateOfIssue class.
   * The FHIR must be valid against the StateOfIssue FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {StateOfIssue} An instance of StateOfIssue populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new StateOfIssue();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.State', fhir);
    }
    return inst;
  }

}
export default StateOfIssue;
