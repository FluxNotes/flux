import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.action.ActionContext.
 */
class ActionContext {

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.core.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.core.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.core.Reason array
   * @returns {ActionContext} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionContext class.
   * The JSON must be valid against the ActionContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionContext} An instance of ActionContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ActionContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ActionContext class to a JSON object.
   * The JSON is expected to be valid against the ActionContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/action/ActionContext' } };
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ActionContext class to a FHIR object.
   * The FHIR is expected to be valid against the ActionContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.reason.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-action-ActionContext-extension';
    }
    return inst;
  }
}
export default ActionContext;
