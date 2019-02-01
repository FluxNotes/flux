import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
   * Get the Requester.
   * @returns {Requester} The shr.base.Requester
   */
  get requester() {
    return this._requester;
  }

  /**
   * Set the Requester.
   * @param {Requester} requester - The shr.base.Requester
   */
  set requester(requester) {
    this._requester = requester;
  }

  /**
   * Set the Requester and return 'this' for chaining.
   * @param {Requester} requester - The shr.base.Requester
   * @returns {ActionRequested} this.
   */
  withRequester(requester) {
    this.requester = requester; return this;
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
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
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
    if (this.requester != null) {
      inst['Requester'] = typeof this.requester.toJSON === 'function' ? this.requester.toJSON() : this.requester;
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
   * Deserializes FHIR JSON data to an instance of the ActionRequested class.
   * The FHIR must be valid against the ActionRequested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionRequested} An instance of ActionRequested populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ActionRequested();
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension') {
        inst.patient = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Reason-extension') {
        inst.reason = inst.reason || [];
        const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.reason.push(inst_reason);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Requester-extension') {
        inst.requester = FHIRHelper.createInstanceFromFHIR('shr.base.Requester', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RequestIntent-extension') {
        inst.requestIntent = FHIRHelper.createInstanceFromFHIR('shr.base.RequestIntent', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformanceTime-extension') {
        inst.expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformerType-extension') {
        inst.expectedPerformerType = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformerType', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformer-extension') {
        inst.expectedPerformer = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformer', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedMethod-extension') {
        inst.expectedMethod = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-PriorityRank-extension') {
        inst.priorityRank = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRank', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-PerformerInstructions-extension') {
        inst.performerInstructions = FHIRHelper.createInstanceFromFHIR('shr.base.PerformerInstructions', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-PatientInstructions-extension') {
        inst.patientInstructions = FHIRHelper.createInstanceFromFHIR('shr.base.PatientInstructions', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-CommunicationMethod-extension') {
        inst.communicationMethod = FHIRHelper.createInstanceFromFHIR('shr.base.CommunicationMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ActionRequested;
