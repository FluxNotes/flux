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
   * @returns {RequestedContext} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * Set the Informant and return 'this' for chaining.
   * @param {Informant} informant - The shr.base.Informant
   * @returns {RequestedContext} this.
   */
  withInformant(informant) {
    this.informant = informant; return this;
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
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.action.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Set the RequestIntent and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.action.RequestIntent
   * @returns {RequestedContext} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
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
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.action.ExpectedPerformanceTime
   * @returns {RequestedContext} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
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
   * Set the ExpectedPerformerType and return 'this' for chaining.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.action.ExpectedPerformerType
   * @returns {RequestedContext} this.
   */
  withExpectedPerformerType(expectedPerformerType) {
    this.expectedPerformerType = expectedPerformerType; return this;
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
   * Set the ExpectedPerformer and return 'this' for chaining.
   * @param {ExpectedPerformer} expectedPerformer - The shr.action.ExpectedPerformer
   * @returns {RequestedContext} this.
   */
  withExpectedPerformer(expectedPerformer) {
    this.expectedPerformer = expectedPerformer; return this;
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
   * Set the ExpectedMethod and return 'this' for chaining.
   * @param {ExpectedMethod} expectedMethod - The shr.action.ExpectedMethod
   * @returns {RequestedContext} this.
   */
  withExpectedMethod(expectedMethod) {
    this.expectedMethod = expectedMethod; return this;
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
   * Set the Priority and return 'this' for chaining.
   * @param {Priority} priority - The shr.core.Priority
   * @returns {RequestedContext} this.
   */
  withPriority(priority) {
    this.priority = priority; return this;
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
   * Set the PerformerInstructions and return 'this' for chaining.
   * @param {PerformerInstructions} performerInstructions - The shr.action.PerformerInstructions
   * @returns {RequestedContext} this.
   */
  withPerformerInstructions(performerInstructions) {
    this.performerInstructions = performerInstructions; return this;
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
   * Set the PatientInstructions and return 'this' for chaining.
   * @param {PatientInstructions} patientInstructions - The shr.action.PatientInstructions
   * @returns {RequestedContext} this.
   */
  withPatientInstructions(patientInstructions) {
    this.patientInstructions = patientInstructions; return this;
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
   * Set the CommunicationMethod and return 'this' for chaining.
   * @param {CommunicationMethod} communicationMethod - The shr.action.CommunicationMethod
   * @returns {RequestedContext} this.
   */
  withCommunicationMethod(communicationMethod) {
    this.communicationMethod = communicationMethod; return this;
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
  /**
   * Serializes an instance of the RequestedContext class to a JSON object.
   * The JSON is expected to be valid against the RequestedContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/action/RequestedContext' } };
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.requestIntent != null) {
      inst['RequestIntent'] = typeof this.requestIntent.toJSON === 'function' ? this.requestIntent.toJSON() : this.requestIntent;
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = typeof this.expectedPerformanceTime.toJSON === 'function' ? this.expectedPerformanceTime.toJSON() : this.expectedPerformanceTime;
    }
    if (this.expectedPerformerType != null) {
      inst['ExpectedPerformerType'] = typeof this.expectedPerformerType.toJSON === 'function' ? this.expectedPerformerType.toJSON() : this.expectedPerformerType;
    }
    if (this.expectedPerformer != null) {
      inst['ExpectedPerformer'] = typeof this.expectedPerformer.toJSON === 'function' ? this.expectedPerformer.toJSON() : this.expectedPerformer;
    }
    if (this.expectedMethod != null) {
      inst['ExpectedMethod'] = typeof this.expectedMethod.toJSON === 'function' ? this.expectedMethod.toJSON() : this.expectedMethod;
    }
    if (this.priority != null) {
      inst['Priority'] = typeof this.priority.toJSON === 'function' ? this.priority.toJSON() : this.priority;
    }
    if (this.performerInstructions != null) {
      inst['PerformerInstructions'] = typeof this.performerInstructions.toJSON === 'function' ? this.performerInstructions.toJSON() : this.performerInstructions;
    }
    if (this.patientInstructions != null) {
      inst['PatientInstructions'] = typeof this.patientInstructions.toJSON === 'function' ? this.patientInstructions.toJSON() : this.patientInstructions;
    }
    if (this.communicationMethod != null) {
      inst['CommunicationMethod'] = typeof this.communicationMethod.toJSON === 'function' ? this.communicationMethod.toJSON() : this.communicationMethod;
    }
    return inst;
  }
}
export default RequestedContext;
