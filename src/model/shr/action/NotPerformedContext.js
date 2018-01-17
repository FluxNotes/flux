import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for shr.action.NotPerformedContext.
 * @extends ActionContext
 */
class NotPerformedContext extends ActionContext {

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
   * Deserializes JSON data to an instance of the NotPerformedContext class.
   * The JSON must be valid against the NotPerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NotPerformedContext} An instance of NotPerformedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NotPerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NotPerformedContext;
