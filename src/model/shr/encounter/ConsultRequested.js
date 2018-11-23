import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionRequested from '../base/ActionRequested';

/**
 * Generated class for shr.encounter.ConsultRequested.
 * @extends ActionRequested
 */
class ConsultRequested extends ActionRequested {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {ConsultRequested} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The shr.base.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   * @returns {ConsultRequested} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.base.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   * @returns {ConsultRequested} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

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
   * @returns {ConsultRequested} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * @returns {ConsultRequested} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {ConsultRequested} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
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
   * @returns {ConsultRequested} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the Location.
   * @returns {Location} The shr.entity.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * @param {Location} location - The shr.entity.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the Location and return 'this' for chaining.
   * @param {Location} location - The shr.entity.Location
   * @returns {ConsultRequested} this.
   */
  withLocation(location) {
    this.location = location; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConsultRequested class.
   * The JSON must be valid against the ConsultRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConsultRequested} An instance of ConsultRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConsultRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ConsultRequested class to a JSON object.
   * The JSON is expected to be valid against the ConsultRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/encounter/ConsultRequested' };
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
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ConsultRequested class to a FHIR object.
   * The FHIR is expected to be valid against the ConsultRequested FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'ConsultRequest';
    if (this.expectedMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedMethod.toFHIR === 'function' ? this.expectedMethod.toFHIR(true) : this.expectedMethod);
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
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.annotation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.annotation.toFHIR === 'function' ? this.annotation.toFHIR(true) : this.annotation);
    }
    if (this.location != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.location.toFHIR === 'function' ? this.location.toFHIR(true) : this.location);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.requestIntent != null) {
      inst['intent'] = typeof this.requestIntent.toFHIR === 'function' ? this.requestIntent.toFHIR() : this.requestIntent;
    }
    if (this.priorityRank != null) {
      inst['priority'] = typeof this.priorityRank.toFHIR === 'function' ? this.priorityRank.toFHIR() : this.priorityRank;
    }
    if (this.category != null) {
      inst['category'] = typeof this.category.toFHIR === 'function' ? this.category.toFHIR() : this.category;
    }
    if (this.topicCode != null) {
      inst['code'] = typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR() : this.topicCode;
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.expectedPerformanceTime != null) {
      inst['occurrence[x]'] = typeof this.expectedPerformanceTime.toFHIR === 'function' ? this.expectedPerformanceTime.toFHIR() : this.expectedPerformanceTime;
    }
    if (this.expectedPerformerType != null) {
      inst['performerType'] = typeof this.expectedPerformerType.toFHIR === 'function' ? this.expectedPerformerType.toFHIR() : this.expectedPerformerType;
    }
    if (this.expectedPerformer != null) {
      inst['performer'] = typeof this.expectedPerformer.toFHIR === 'function' ? this.expectedPerformer.toFHIR() : this.expectedPerformer;
    }
    if (this.reason != null) {
      inst['reasonCode'] = inst ['reasonCode'] || [];
      inst['reasonCode'] = inst['reasonCode'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ConsultRequested class.
   * The FHIR must be valid against the ConsultRequested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ConsultRequested} An instance of ConsultRequested populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ConsultRequested();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedMethod-extension');
      if (match != null) {
        inst.expectedMethod = createInstanceFromFHIR('shr.base.ExpectedMethod', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['intent'] != null) {
      inst.requestIntent = createInstanceFromFHIR('shr.base.RequestIntent', fhir['intent']);
    }
    if (fhir['priority'] != null) {
      inst.priorityRank = createInstanceFromFHIR('shr.core.PriorityRank', fhir['priority']);
    }
    if (fhir['category'] != null) {
      inst.category = createInstanceFromFHIR('shr.core.Category', fhir['category']);
    }
    if (fhir['code'] != null) {
      inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', fhir['code']);
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['occurrenceDateTime'] != null) {
      inst.expectedPerformanceTime = createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir['occurrenceDateTime']);
    }
    if (fhir['occurrencePeriod'] != null) {
      inst.expectedPerformanceTime = createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir['occurrencePeriod']);
    }
    if (fhir['occurrenceTiming'] != null) {
      inst.expectedPerformanceTime = createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir['occurrenceTiming']);
    }
    if (fhir['performerType'] != null) {
      inst.expectedPerformerType = createInstanceFromFHIR('shr.base.ExpectedPerformerType', fhir['performerType']);
    }
    if (fhir['performer'] != null) {
      inst.expectedPerformer = createInstanceFromFHIR('shr.base.ExpectedPerformer', fhir['performer']);
    }
    if (fhir['reasonCode'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonCode'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    return inst;
  }

}
export default ConsultRequested;
