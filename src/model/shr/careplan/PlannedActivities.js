import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.careplan.PlannedActivities.
 */
class PlannedActivities {

  /**
   * Get the value (aliases action).
   * @returns {Reference} The shr.action.Action reference
   */
  get value() {
    return this._action;
  }

  /**
   * Set the value (aliases action).
   * This field/value is required.
   * @param {Reference} value - The shr.action.Action reference
   */
  set value(value) {
    this._action = value;
  }

  /**
   * Set the value (aliases action) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.action.Action reference
   * @returns {PlannedActivities} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.action.Action reference.
   * @returns {Reference} The shr.action.Action reference
   */
  get action() {
    return this._action;
  }

  /**
   * Set the shr.action.Action reference.
   * This field/value is required.
   * @param {Reference} action - The shr.action.Action reference
   */
  set action(action) {
    this._action = action;
  }

  /**
   * Set the shr.action.Action reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} action - The shr.action.Action reference
   * @returns {PlannedActivities} this.
   */
  withAction(action) {
    this.action = action; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PlannedActivities class.
   * The JSON must be valid against the PlannedActivities JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PlannedActivities} An instance of PlannedActivities populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PlannedActivities();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PlannedActivities class to a JSON object.
   * The JSON is expected to be valid against the PlannedActivities JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/careplan/PlannedActivities' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PlannedActivities class to a FHIR object.
   * The FHIR is expected to be valid against the PlannedActivities FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-careplan-PlannedActivities-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default PlannedActivities;
