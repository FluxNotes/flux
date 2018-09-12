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
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.action.RelatedRequest
   * @returns {NotPerformedContext} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
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
   * Set the RelatedPlan and return 'this' for chaining.
   * @param {RelatedPlan} relatedPlan - The shr.action.RelatedPlan
   * @returns {NotPerformedContext} this.
   */
  withRelatedPlan(relatedPlan) {
    this.relatedPlan = relatedPlan; return this;
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
   * Set the OccurrenceTimeOrPeriod and return 'this' for chaining.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   * @returns {NotPerformedContext} this.
   */
  withOccurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this.occurrenceTimeOrPeriod = occurrenceTimeOrPeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NotPerformedContext class.
   * The JSON must be valid against the NotPerformedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NotPerformedContext} An instance of NotPerformedContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NotPerformedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NotPerformedContext class to a JSON object.
   * The JSON is expected to be valid against the NotPerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/action/NotPerformedContext' } };
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.relatedPlan != null) {
      inst['RelatedPlan'] = typeof this.relatedPlan.toJSON === 'function' ? this.relatedPlan.toJSON() : this.relatedPlan;
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the NotPerformedContext class to a FHIR object.
   * The FHIR is expected to be valid against the NotPerformedContext FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.reason.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedRequest.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedPlan.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.occurrenceTimeOrPeriod.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-action-NotPerformedContext-extension';
    }
    return inst;
  }
}
export default NotPerformedContext;
