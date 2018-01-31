import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for shr.action.PerformedContext.
 * @extends ActionContext
 */
class PerformedContext extends ActionContext {

  /**
   * Get the OccurrenceTimeOrPeriod.
   * @returns {OccurrenceTimeOrPeriod} The shr.core.OccurrenceTimeOrPeriod
   */
  get occurrenceTimeOrPeriod() {
    return this._occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   */
  set occurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this._occurrenceTimeOrPeriod = occurrenceTimeOrPeriod;
  }

  /**
   * Get the Participant array.
   * @returns {Array<Participant>} The shr.action.Participant array
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the Participant array.
   * @param {Array<Participant>} participant - The shr.action.Participant array
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Get the Method.
   * @returns {Method} The shr.action.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Set the Method.
   * @param {Method} method - The shr.action.Method
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The shr.action.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The shr.action.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Get the RelatedPlan.
   * @returns {RelatedPlan} The shr.action.RelatedPlan
   */
  get relatedPlan() {
    return this._relatedPlan;
  }

  /**
   * Set the RelatedPlan.
   * @param {RelatedPlan} relatedPlan - The shr.action.RelatedPlan
   */
  set relatedPlan(relatedPlan) {
    this._relatedPlan = relatedPlan;
  }

  /**
   * Get the shr.entity.Facility reference array.
   * @returns {Array<Reference>} The shr.entity.Facility reference array
   */
  get facility() {
    return this._facility;
  }

  /**
   * Set the shr.entity.Facility reference array.
   * @param {Array<Reference>} facility - The shr.entity.Facility reference array
   */
  set facility(facility) {
    this._facility = facility;
  }

  /**
   * Get the Outcome array.
   * @returns {Array<Outcome>} The shr.action.Outcome array
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome array.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Deserializes JSON data to an instance of the PerformedContext class.
   * The JSON must be valid against the PerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PerformedContext} An instance of PerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PerformedContext;
