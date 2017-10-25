import Action from './Action';

/** Generated from SHR definition for shr.base.Request */
class Request extends Action {

  /**
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.base.RequestedPerformanceTime
   */
  get requestedPerformanceTime() {
    return this._requestedPerformanceTime;
  }

  /**
   * Setter for shr.base.RequestedPerformanceTime
   */
  set requestedPerformanceTime(requestedPerformanceTimeVal) {
    this._requestedPerformanceTime = requestedPerformanceTimeVal;
  }

  /**
   * Getter for shr.core.Reason
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
  }

  /**
   * Getter for shr.base.PriorityOfRequest
   */
  get priorityOfRequest() {
    return this._priorityOfRequest;
  }

  /**
   * Setter for shr.base.PriorityOfRequest
   */
  set priorityOfRequest(priorityOfRequestVal) {
    this._priorityOfRequest = priorityOfRequestVal;
  }

  /**
   * Getter for shr.base.RequestedPerformerType (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get requestedPerformerType() {
    return this._requestedPerformerTypeOrRequestedPerformer;
  }

  /**
   * Setter for shr.base.RequestedPerformerType (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set requestedPerformerType(requestedPerformerTypeVal) {
    this._requestedPerformerTypeOrRequestedPerformer = requestedPerformerTypeVal;
  }
  /**
   * Getter for shr.base.RequestedPerformer (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  get requestedPerformer() {
    return this._requestedPerformerTypeOrRequestedPerformer;
  }

  /**
   * Setter for shr.base.RequestedPerformer (option in a choice field).
   * NOTE: Choice fields are deprecated.  This is a stop-gap solution.
   */
  set requestedPerformer(requestedPerformerVal) {
    this._requestedPerformerTypeOrRequestedPerformer = requestedPerformerVal;
  }

  /**
   * Getter for shr.base.PerformerInstructions
   */
  get performerInstructions() {
    return this._performerInstructions;
  }

  /**
   * Setter for shr.base.PerformerInstructions
   */
  set performerInstructions(performerInstructionsVal) {
    this._performerInstructions = performerInstructionsVal;
  }

  /**
   * Getter for shr.base.PatientInstructions
   */
  get patientInstructions() {
    return this._patientInstructions;
  }

  /**
   * Setter for shr.base.PatientInstructions
   */
  set patientInstructions(patientInstructionsVal) {
    this._patientInstructions = patientInstructionsVal;
  }

}

export default Request;
