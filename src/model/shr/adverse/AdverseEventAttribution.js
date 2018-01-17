import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.adverse.AdverseEventAttribution.
 */
class AdverseEventAttribution {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.action.Action reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.action.Action reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.action.Action reference.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.action.Action reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The shr.core.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * @param {Certainty} certainty - The shr.core.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEventAttribution class.
   * The JSON must be valid against the AdverseEventAttribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEventAttribution} An instance of AdverseEventAttribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseEventAttribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AdverseEventAttribution;
