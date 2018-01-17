import { setPropertiesFromJSON } from '../../json-helper';

import ActionContext from './ActionContext';

/**
 * Generated class for shr.action.RequestedContext.
 * @extends ActionContext
 */
class RequestedContext extends ActionContext {

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
   * Get the Informant.
   * @returns {Informant} The shr.base.Informant
   */
  get informant() {
    return this._informant;
  }

  /**
   * Set the Informant.
   * @param {Informant} informant - The shr.base.Informant
   */
  set informant(informant) {
    this._informant = informant;
  }

  /**
   * Get the RequestIntent.
   * @returns {RequestIntent} The shr.action.RequestIntent
   */
  get requestIntent() {
    return this._requestIntent;
  }

  /**
   * Set the RequestIntent.
   * @param {RequestIntent} requestIntent - The shr.action.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The shr.action.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.action.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Get the ExpectedPerformerType.
   * @returns {ExpectedPerformerType} The shr.action.ExpectedPerformerType
   */
  get expectedPerformerType() {
    return this._expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.action.ExpectedPerformerType
   */
  set expectedPerformerType(expectedPerformerType) {
    this._expectedPerformerType = expectedPerformerType;
  }

  /**
   * Get the ExpectedPerformer.
   * @returns {ExpectedPerformer} The shr.action.ExpectedPerformer
   */
  get expectedPerformer() {
    return this._expectedPerformer;
  }

  /**
   * Set the ExpectedPerformer.
   * @param {ExpectedPerformer} expectedPerformer - The shr.action.ExpectedPerformer
   */
  set expectedPerformer(expectedPerformer) {
    this._expectedPerformer = expectedPerformer;
  }

  /**
   * Get the ExpectedMethod.
   * @returns {ExpectedMethod} The shr.action.ExpectedMethod
   */
  get expectedMethod() {
    return this._expectedMethod;
  }

  /**
   * Set the ExpectedMethod.
   * @param {ExpectedMethod} expectedMethod - The shr.action.ExpectedMethod
   */
  set expectedMethod(expectedMethod) {
    this._expectedMethod = expectedMethod;
  }

  /**
   * Get the Priority.
   * @returns {Priority} The shr.core.Priority
   */
  get priority() {
    return this._priority;
  }

  /**
   * Set the Priority.
   * @param {Priority} priority - The shr.core.Priority
   */
  set priority(priority) {
    this._priority = priority;
  }

  /**
   * Get the PerformerInstructions.
   * @returns {PerformerInstructions} The shr.action.PerformerInstructions
   */
  get performerInstructions() {
    return this._performerInstructions;
  }

  /**
   * Set the PerformerInstructions.
   * @param {PerformerInstructions} performerInstructions - The shr.action.PerformerInstructions
   */
  set performerInstructions(performerInstructions) {
    this._performerInstructions = performerInstructions;
  }

  /**
   * Get the PatientInstructions.
   * @returns {PatientInstructions} The shr.action.PatientInstructions
   */
  get patientInstructions() {
    return this._patientInstructions;
  }

  /**
   * Set the PatientInstructions.
   * @param {PatientInstructions} patientInstructions - The shr.action.PatientInstructions
   */
  set patientInstructions(patientInstructions) {
    this._patientInstructions = patientInstructions;
  }

  /**
   * Get the CommunicationMethod.
   * @returns {CommunicationMethod} The shr.action.CommunicationMethod
   */
  get communicationMethod() {
    return this._communicationMethod;
  }

  /**
   * Set the CommunicationMethod.
   * @param {CommunicationMethod} communicationMethod - The shr.action.CommunicationMethod
   */
  set communicationMethod(communicationMethod) {
    this._communicationMethod = communicationMethod;
  }

  /**
   * Deserializes JSON data to an instance of the RequestedContext class.
   * The JSON must be valid against the RequestedContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RequestedContext} An instance of RequestedContext populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RequestedContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default RequestedContext;
