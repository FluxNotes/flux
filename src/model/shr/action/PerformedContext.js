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
   * Set the OccurrenceTimeOrPeriod and return 'this' for chaining.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   * @returns {PerformedContext} this.
   */
  withOccurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this.occurrenceTimeOrPeriod = occurrenceTimeOrPeriod; return this;
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
   * Set the Participant array and return 'this' for chaining.
   * @param {Array<Participant>} participant - The shr.action.Participant array
   * @returns {PerformedContext} this.
   */
  withParticipant(participant) {
    this.participant = participant; return this;
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
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   * @returns {PerformedContext} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * Set the Method and return 'this' for chaining.
   * @param {Method} method - The shr.action.Method
   * @returns {PerformedContext} this.
   */
  withMethod(method) {
    this.method = method; return this;
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
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.action.RelatedRequest
   * @returns {PerformedContext} this.
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
   * @returns {PerformedContext} this.
   */
  withRelatedPlan(relatedPlan) {
    this.relatedPlan = relatedPlan; return this;
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
   * Set the shr.entity.Facility reference array and return 'this' for chaining.
   * @param {Array<Reference>} facility - The shr.entity.Facility reference array
   * @returns {PerformedContext} this.
   */
  withFacility(facility) {
    this.facility = facility; return this;
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
   * Set the Outcome array and return 'this' for chaining.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   * @returns {PerformedContext} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
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
  /**
   * Serializes an instance of the PerformedContext class to a JSON object.
   * The JSON is expected to be valid against the PerformedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/PerformedContext' } };
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participant != null) {
      inst['Participant'] = this.participant.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.relatedPlan != null) {
      inst['RelatedPlan'] = typeof this.relatedPlan.toJSON === 'function' ? this.relatedPlan.toJSON() : this.relatedPlan;
    }
    if (this.facility != null) {
      inst['Facility'] = this.facility.map(f => f.toJSON());
    }
    if (this.outcome != null) {
      inst['Outcome'] = this.outcome.map(f => f.toJSON());
    }
    return inst;
  }
}
export default PerformedContext;
