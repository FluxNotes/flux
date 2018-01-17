import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.allergy.AdverseReaction.
 */
class AdverseReaction {

  /**
   * Get the AllergenIrritant.
   * @returns {AllergenIrritant} The shr.allergy.AllergenIrritant
   */
  get allergenIrritant() {
    return this._allergenIrritant;
  }

  /**
   * Set the AllergenIrritant.
   * @param {AllergenIrritant} allergenIrritant - The shr.allergy.AllergenIrritant
   */
  set allergenIrritant(allergenIrritant) {
    this._allergenIrritant = allergenIrritant;
  }

  /**
   * Get the Manifestation.
   * @returns {Manifestation} The shr.allergy.Manifestation
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Set the Manifestation.
   * @param {Manifestation} manifestation - The shr.allergy.Manifestation
   */
  set manifestation(manifestation) {
    this._manifestation = manifestation;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.condition.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.condition.Severity
   */
  set severity(severity) {
    this._severity = severity;
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
   * Deserializes JSON data to an instance of the AdverseReaction class.
   * The JSON must be valid against the AdverseReaction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseReaction} An instance of AdverseReaction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseReaction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AdverseReaction;
