// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ActionStatement from './ActionStatement';

/**
 * Generated class for shr.core.ActionRequested.
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
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {ActionRequested} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the RequestIntent.
   * @returns {RequestIntent} The shr.core.RequestIntent
   */
  get requestIntent() {
    return this._requestIntent;
  }

  /**
   * Set the RequestIntent.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.core.RequestIntent
   */
  set requestIntent(requestIntent) {
    this._requestIntent = requestIntent;
  }

  /**
   * Set the RequestIntent and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestIntent} requestIntent - The shr.core.RequestIntent
   * @returns {ActionRequested} this.
   */
  withRequestIntent(requestIntent) {
    this.requestIntent = requestIntent; return this;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The shr.core.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.core.ExpectedPerformanceTime
   * @returns {ActionRequested} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
  }

  /**
   * Get the ExpectedPerformerType.
   * @returns {ExpectedPerformerType} The shr.core.ExpectedPerformerType
   */
  get expectedPerformerType() {
    return this._expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.core.ExpectedPerformerType
   */
  set expectedPerformerType(expectedPerformerType) {
    this._expectedPerformerType = expectedPerformerType;
  }

  /**
   * Set the ExpectedPerformerType and return 'this' for chaining.
   * @param {ExpectedPerformerType} expectedPerformerType - The shr.core.ExpectedPerformerType
   * @returns {ActionRequested} this.
   */
  withExpectedPerformerType(expectedPerformerType) {
    this.expectedPerformerType = expectedPerformerType; return this;
  }

  /**
   * Get the Recipient.
   * @returns {Recipient} The shr.core.Recipient
   */
  get recipient() {
    return this._recipient;
  }

  /**
   * Set the Recipient.
   * @param {Recipient} recipient - The shr.core.Recipient
   */
  set recipient(recipient) {
    this._recipient = recipient;
  }

  /**
   * Set the Recipient and return 'this' for chaining.
   * @param {Recipient} recipient - The shr.core.Recipient
   * @returns {ActionRequested} this.
   */
  withRecipient(recipient) {
    this.recipient = recipient; return this;
  }

  /**
   * Get the PriorityCode.
   * @returns {PriorityCode} The shr.core.PriorityCode
   */
  get priorityCode() {
    return this._priorityCode;
  }

  /**
   * Set the PriorityCode.
   * @param {PriorityCode} priorityCode - The shr.core.PriorityCode
   */
  set priorityCode(priorityCode) {
    this._priorityCode = priorityCode;
  }

  /**
   * Set the PriorityCode and return 'this' for chaining.
   * @param {PriorityCode} priorityCode - The shr.core.PriorityCode
   * @returns {ActionRequested} this.
   */
  withPriorityCode(priorityCode) {
    this.priorityCode = priorityCode; return this;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   * @returns {ActionRequested} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the CommunicationMethod.
   * @returns {CommunicationMethod} The shr.core.CommunicationMethod
   */
  get communicationMethod() {
    return this._communicationMethod;
  }

  /**
   * Set the CommunicationMethod.
   * @param {CommunicationMethod} communicationMethod - The shr.core.CommunicationMethod
   */
  set communicationMethod(communicationMethod) {
    this._communicationMethod = communicationMethod;
  }

  /**
   * Set the CommunicationMethod and return 'this' for chaining.
   * @param {CommunicationMethod} communicationMethod - The shr.core.CommunicationMethod
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
    const klass = ClassRegistry.get('shr.core', 'ActionRequested');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionRequested class to a JSON object.
   * The JSON is expected to be valid against the ActionRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ActionRequested' } };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.careContext != null) {
      inst['CareContext'] = typeof this.careContext.toJSON === 'function' ? this.careContext.toJSON() : this.careContext;
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = this.reasonCode.map(f => f.toJSON());
    }
    if (this.reasonReference != null) {
      inst['ReasonReference'] = this.reasonReference.map(f => f.toJSON());
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
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
    if (this.recipient != null) {
      inst['Recipient'] = typeof this.recipient.toJSON === 'function' ? this.recipient.toJSON() : this.recipient;
    }
    if (this.priorityCode != null) {
      inst['PriorityCode'] = typeof this.priorityCode.toJSON === 'function' ? this.priorityCode.toJSON() : this.priorityCode;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
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
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionRequested} An instance of ActionRequested populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ActionRequested');
    const inst = new klass();
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SubjectOfRecord-extension') {
        inst.subjectOfRecord = FHIRHelper.createInstanceFromFHIR('shr.core.SubjectOfRecord', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonCode-extension') {
        inst.reasonCode = inst.reasonCode || [];
        const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonCode.push(inst_reasonCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonReference-extension') {
        inst.reasonReference = inst.reasonReference || [];
        const inst_reasonReference = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonReference.push(inst_reasonReference);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RequestIntent-extension') {
        inst.requestIntent = FHIRHelper.createInstanceFromFHIR('shr.core.RequestIntent', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpectedPerformanceTime-extension') {
        inst.expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformanceTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpectedPerformerType-extension') {
        inst.expectedPerformerType = FHIRHelper.createInstanceFromFHIR('shr.core.ExpectedPerformerType', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Recipient-extension') {
        inst.recipient = FHIRHelper.createInstanceFromFHIR('shr.core.Recipient', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PriorityCode-extension') {
        inst.priorityCode = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Annotation-extension') {
        inst.annotation = inst.annotation || [];
        const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.annotation.push(inst_annotation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CommunicationMethod-extension') {
        inst.communicationMethod = FHIRHelper.createInstanceFromFHIR('shr.core.CommunicationMethod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ActionRequested;
