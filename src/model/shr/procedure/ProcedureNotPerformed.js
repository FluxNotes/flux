import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionNotPerformed from '../base/ActionNotPerformed';

/**
 * Generated class for shr.procedure.ProcedureNotPerformed.
 * @extends ActionNotPerformed
 */
class ProcedureNotPerformed extends ActionNotPerformed {

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
   * @returns {ProcedureNotPerformed} this.
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
   * @returns {ProcedureNotPerformed} this.
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
   * @returns {ProcedureNotPerformed} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The shr.base.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   * @returns {ProcedureNotPerformed} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the AnatomicalLocation array.
   * @returns {Array<AnatomicalLocation>} The shr.core.AnatomicalLocation array
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The shr.core.AnatomicalLocation array
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array and return 'this' for chaining.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The shr.core.AnatomicalLocation array
   * @returns {ProcedureNotPerformed} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
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
   * @returns {ProcedureNotPerformed} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
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
   * @returns {ProcedureNotPerformed} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureNotPerformed class.
   * The JSON must be valid against the ProcedureNotPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureNotPerformed} An instance of ProcedureNotPerformed populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ProcedureNotPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ProcedureNotPerformed class to a JSON object.
   * The JSON is expected to be valid against the ProcedureNotPerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/ProcedureNotPerformed' };
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
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['NonOccurrenceTimeOrPeriod'] = typeof this.nonOccurrenceTimeOrPeriod.toJSON === 'function' ? this.nonOccurrenceTimeOrPeriod.toJSON() : this.nonOccurrenceTimeOrPeriod;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ProcedureNotPerformed class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedureNotPerformed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Procedure';
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.nonOccurrenceTimeOrPeriod.toFHIR === 'function' ? this.nonOccurrenceTimeOrPeriod.toFHIR(true) : this.nonOccurrenceTimeOrPeriod);
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.status.toFHIR === 'function' ? this.status.toFHIR(true) : this.status);
    }
    if (this.relatedRequest != null && this.relatedRequest.actionRequested != null) {
      inst['basedOn'] = inst['basedOn'] || [];
      inst['basedOn'].push(typeof this.relatedRequest.actionRequested.toFHIR === 'function' ? this.relatedRequest.actionRequested.toFHIR() : this.relatedRequest.actionRequested);
    }
    if (this.reason != null) {
      inst['notDoneReason'] = inst['notDoneReason'] || [];
      inst['notDoneReason'] = inst['notDoneReason'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
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
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['bodySite'] = inst['bodySite'] || [];
      inst['bodySite'] = inst['bodySite'].concat(this.anatomicalLocation.anatomicalLocationOrLandmarkCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.annotation != null) {
      inst['note'] = inst['note'] || [];
      inst['note'] = inst['note'].concat(this.annotation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ProcedureNotPerformed class.
   * The FHIR must be valid against the ProcedureNotPerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ProcedureNotPerformed} An instance of ProcedureNotPerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new ProcedureNotPerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['basedOn'] != null) {
      if (inst.relatedRequest === null) {
        inst.relatedRequest = createInstanceFromFHIR('shr.base.RelatedRequest', {});
      }
      inst.relatedRequest.value = createInstanceFromFHIR('shr.base.ActionRequested', fhir['basedOn'][0]);
    }
    if (fhir['notDoneReason'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['notDoneReason'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
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
    if (fhir['bodySite'] != null) {
      if (inst.anatomicalLocation === null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['bodySite'][0]);
    }
    if (fhir['note'] != null) {
      inst.annotation = inst.annotation || [];
      inst.annotation = inst.annotation.concat(fhir['note'].map(f => createInstanceFromFHIR('shr.core.Annotation', f)));
    }
    return inst;
  }

}
export default ProcedureNotPerformed;
