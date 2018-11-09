import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for shr.base.ActionRequested.
 * @extends ActionStatement
 */
class ActionRequested extends ActionStatement {

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {ActionRequested} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the RequestIntent.
   * @returns {RequestIntent} The shr.base.RequestIntent
   */
  get requestIntent() {
    return this._requestIntent;
  }

  /**
   * Set the RequestIntent.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.base.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Set the RequestIntent and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.base.RequestIntent
   * @returns {ActionRequested} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The shr.base.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.base.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.base.ExpectedPerformanceTime
   * @returns {ActionRequested} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
  }

  /**
   * Get the ExpectedPerformerType.
   * @returns {ExpectedPerformerType} The shr.base.ExpectedPerformerType
   */
  get expectedPerformerType() {
    return this._expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.base.ExpectedPerformerType
   */
  set expectedPerformerType(expectedPerformerType) {
    this._expectedPerformerType = expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType and return 'this' for chaining.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.base.ExpectedPerformerType
   * @returns {ActionRequested} this.
   */
  withExpectedPerformerType(expectedPerformerType) {
    this.expectedPerformerType = expectedPerformerType; return this;
  }

  /**
   * Get the ExpectedPerformer.
   * @returns {ExpectedPerformer} The shr.base.ExpectedPerformer
   */
  get expectedPerformer() {
    return this._expectedPerformer;
  }

  /**
   * Set the ExpectedPerformer.
   * @param {ExpectedPerformer} expectedPerformer - The shr.base.ExpectedPerformer
   */
  set expectedPerformer(expectedPerformer) {
    this._expectedPerformer = expectedPerformer;
  }

  /**
   * Set the ExpectedPerformer and return 'this' for chaining.
   * @param {ExpectedPerformer} expectedPerformer - The shr.base.ExpectedPerformer
   * @returns {ActionRequested} this.
   */
  withExpectedPerformer(expectedPerformer) {
    this.expectedPerformer = expectedPerformer; return this;
  }

  /**
   * Get the ExpectedMethod.
   * @returns {ExpectedMethod} The shr.base.ExpectedMethod
   */
  get expectedMethod() {
    return this._expectedMethod;
  }

  /**
   * Set the ExpectedMethod.
   * @param {ExpectedMethod} expectedMethod - The shr.base.ExpectedMethod
   */
  set expectedMethod(expectedMethod) {
    this._expectedMethod = expectedMethod;
  }

  /**
   * Set the ExpectedMethod and return 'this' for chaining.
   * @param {ExpectedMethod} expectedMethod - The shr.base.ExpectedMethod
   * @returns {ActionRequested} this.
   */
  withExpectedMethod(expectedMethod) {
    this.expectedMethod = expectedMethod; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {ActionRequested} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
  }

  /**
   * Get the PerformerInstructions.
   * @returns {PerformerInstructions} The shr.base.PerformerInstructions
   */
  get performerInstructions() {
    return this._performerInstructions;
  }

  /**
   * Set the PerformerInstructions.
   * @param {PerformerInstructions} performerInstructions - The shr.base.PerformerInstructions
   */
  set performerInstructions(performerInstructions) {
    this._performerInstructions = performerInstructions;
  }

  /**
   * Set the PerformerInstructions and return 'this' for chaining.
   * @param {PerformerInstructions} performerInstructions - The shr.base.PerformerInstructions
   * @returns {ActionRequested} this.
   */
  withPerformerInstructions(performerInstructions) {
    this.performerInstructions = performerInstructions; return this;
  }

  /**
   * Get the PatientInstructions.
   * @returns {PatientInstructions} The shr.base.PatientInstructions
   */
  get patientInstructions() {
    return this._patientInstructions;
  }

  /**
   * Set the PatientInstructions.
   * @param {PatientInstructions} patientInstructions - The shr.base.PatientInstructions
   */
  set patientInstructions(patientInstructions) {
    this._patientInstructions = patientInstructions;
  }

  /**
   * Set the PatientInstructions and return 'this' for chaining.
   * @param {PatientInstructions} patientInstructions - The shr.base.PatientInstructions
   * @returns {ActionRequested} this.
   */
  withPatientInstructions(patientInstructions) {
    this.patientInstructions = patientInstructions; return this;
  }

  /**
   * Get the CommunicationMethod.
   * @returns {CommunicationMethod} The shr.base.CommunicationMethod
   */
  get communicationMethod() {
    return this._communicationMethod;
  }

  /**
   * Set the CommunicationMethod.
   * @param {CommunicationMethod} communicationMethod - The shr.base.CommunicationMethod
   */
  set communicationMethod(communicationMethod) {
    this._communicationMethod = communicationMethod;
  }

  /**
   * Set the CommunicationMethod and return 'this' for chaining.
   * @param {CommunicationMethod} communicationMethod - The shr.base.CommunicationMethod
   * @returns {ActionRequested} this.
   */
  withCommunicationMethod(communicationMethod) {
    this.communicationMethod = communicationMethod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionRequested class.
   * The JSON must be valid against the ActionRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionRequested} An instance of ActionRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionRequested class to a JSON object.
   * The JSON is expected to be valid against the ActionRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ActionRequested' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
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
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
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

  /**
   * Serializes an instance of the ActionRequested class to a FHIR object.
   * The FHIR is expected to be valid against the ActionRequested FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.reason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.reason.toFHIR === 'function' ? this.reason.toFHIR(true) : this.reason);
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.status.toFHIR === 'function' ? this.status.toFHIR(true) : this.status);
    }
    if (this.requestIntent != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.requestIntent.toFHIR === 'function' ? this.requestIntent.toFHIR(true) : this.requestIntent);
    }
    if (this.expectedPerformanceTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedPerformanceTime.toFHIR === 'function' ? this.expectedPerformanceTime.toFHIR(true) : this.expectedPerformanceTime);
    }
    if (this.expectedPerformerType != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedPerformerType.toFHIR === 'function' ? this.expectedPerformerType.toFHIR(true) : this.expectedPerformerType);
    }
    if (this.expectedPerformer != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedPerformer.toFHIR === 'function' ? this.expectedPerformer.toFHIR(true) : this.expectedPerformer);
    }
    if (this.expectedMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedMethod.toFHIR === 'function' ? this.expectedMethod.toFHIR(true) : this.expectedMethod);
    }
    if (this.priorityRank != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.priorityRank.toFHIR === 'function' ? this.priorityRank.toFHIR(true) : this.priorityRank);
    }
    if (this.performerInstructions != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.performerInstructions.toFHIR === 'function' ? this.performerInstructions.toFHIR(true) : this.performerInstructions);
    }
    if (this.patientInstructions != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patientInstructions.toFHIR === 'function' ? this.patientInstructions.toFHIR(true) : this.patientInstructions);
    }
    if (this.communicationMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.communicationMethod.toFHIR === 'function' ? this.communicationMethod.toFHIR(true) : this.communicationMethod);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionRequested class.
   * The FHIR must be valid against the ActionRequested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ActionRequested} An instance of ActionRequested populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ActionRequested();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension');
      if (match != null) {
        inst.category = createInstanceFromFHIR('shr.core.Category', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension');
      if (match != null) {
        inst.patient = createInstanceFromFHIR('shr.entity.Patient', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Reason-extension');
      if (match != null) {
        inst.reason = createInstanceFromFHIR('shr.base.Reason', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Status-extension');
      if (match != null) {
        inst.status = createInstanceFromFHIR('shr.core.Status', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RequestIntent-extension');
      if (match != null) {
        inst.requestIntent = createInstanceFromFHIR('shr.base.RequestIntent', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformanceTime-extension');
      if (match != null) {
        inst.expectedPerformanceTime = createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformerType-extension');
      if (match != null) {
        inst.expectedPerformerType = createInstanceFromFHIR('shr.base.ExpectedPerformerType', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformer-extension');
      if (match != null) {
        inst.expectedPerformer = createInstanceFromFHIR('shr.base.ExpectedPerformer', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedMethod-extension');
      if (match != null) {
        inst.expectedMethod = createInstanceFromFHIR('shr.base.ExpectedMethod', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-PriorityRank-extension');
      if (match != null) {
        inst.priorityRank = createInstanceFromFHIR('shr.core.PriorityRank', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-PerformerInstructions-extension');
      if (match != null) {
        inst.performerInstructions = createInstanceFromFHIR('shr.base.PerformerInstructions', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-PatientInstructions-extension');
      if (match != null) {
        inst.patientInstructions = createInstanceFromFHIR('shr.base.PatientInstructions', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-CommunicationMethod-extension');
      if (match != null) {
        inst.communicationMethod = createInstanceFromFHIR('shr.base.CommunicationMethod', match, true);
      }
    }
    return inst;
  }

}
export default ActionRequested;
