import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ProcedurePerformed from './ProcedurePerformed';

/**
 * Generated class for shr.procedure.SurgicalProcedurePerformed.
 * @extends ProcedurePerformed
 */
class SurgicalProcedurePerformed extends ProcedurePerformed {

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
   * @returns {SurgicalProcedurePerformed} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the DirectSite array.
   * @returns {Array<DirectSite>} The shr.procedure.DirectSite array
   */
  get directSite() {
    return this._directSite;
  }

  /**
   * Set the DirectSite array.
   * @param {Array<DirectSite>} directSite - The shr.procedure.DirectSite array
   */
  set directSite(directSite) {
    this._directSite = directSite;
  }

  /**
   * Set the DirectSite array and return 'this' for chaining.
   * @param {Array<DirectSite>} directSite - The shr.procedure.DirectSite array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withDirectSite(directSite) {
    this.directSite = directSite; return this;
  }

  /**
   * Get the DirectSiteCode array.
   * @returns {Array<DirectSiteCode>} The shr.procedure.DirectSiteCode array
   */
  get directSiteCode() {
    return this._directSiteCode;
  }

  /**
   * Set the DirectSiteCode array.
   * @param {Array<DirectSiteCode>} directSiteCode - The shr.procedure.DirectSiteCode array
   */
  set directSiteCode(directSiteCode) {
    this._directSiteCode = directSiteCode;
  }

  /**
   * Set the DirectSiteCode array and return 'this' for chaining.
   * @param {Array<DirectSiteCode>} directSiteCode - The shr.procedure.DirectSiteCode array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withDirectSiteCode(directSiteCode) {
    this.directSiteCode = directSiteCode; return this;
  }

  /**
   * Get the IndirectSite array.
   * @returns {Array<IndirectSite>} The shr.procedure.IndirectSite array
   */
  get indirectSite() {
    return this._indirectSite;
  }

  /**
   * Set the IndirectSite array.
   * @param {Array<IndirectSite>} indirectSite - The shr.procedure.IndirectSite array
   */
  set indirectSite(indirectSite) {
    this._indirectSite = indirectSite;
  }

  /**
   * Set the IndirectSite array and return 'this' for chaining.
   * @param {Array<IndirectSite>} indirectSite - The shr.procedure.IndirectSite array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withIndirectSite(indirectSite) {
    this.indirectSite = indirectSite; return this;
  }

  /**
   * Get the IndirectSiteCode array.
   * @returns {Array<IndirectSiteCode>} The shr.procedure.IndirectSiteCode array
   */
  get indirectSiteCode() {
    return this._indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The shr.procedure.IndirectSiteCode array
   */
  set indirectSiteCode(indirectSiteCode) {
    this._indirectSiteCode = indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array and return 'this' for chaining.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The shr.procedure.IndirectSiteCode array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withIndirectSiteCode(indirectSiteCode) {
    this.indirectSiteCode = indirectSiteCode; return this;
  }

  /**
   * Get the SurgicalApproach array.
   * @returns {Array<SurgicalApproach>} The shr.procedure.SurgicalApproach array
   */
  get surgicalApproach() {
    return this._surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array.
   * @param {Array<SurgicalApproach>} surgicalApproach - The shr.procedure.SurgicalApproach array
   */
  set surgicalApproach(surgicalApproach) {
    this._surgicalApproach = surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array and return 'this' for chaining.
   * @param {Array<SurgicalApproach>} surgicalApproach - The shr.procedure.SurgicalApproach array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withSurgicalApproach(surgicalApproach) {
    this.surgicalApproach = surgicalApproach; return this;
  }

  /**
   * Get the Access array.
   * @returns {Array<Access>} The shr.procedure.Access array
   */
  get access() {
    return this._access;
  }

  /**
   * Set the Access array.
   * @param {Array<Access>} access - The shr.procedure.Access array
   */
  set access(access) {
    this._access = access;
  }

  /**
   * Set the Access array and return 'this' for chaining.
   * @param {Array<Access>} access - The shr.procedure.Access array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withAccess(access) {
    this.access = access; return this;
  }

  /**
   * Get the UsingDevice array.
   * @returns {Array<UsingDevice>} The shr.procedure.UsingDevice array
   */
  get usingDevice() {
    return this._usingDevice;
  }

  /**
   * Set the UsingDevice array.
   * @param {Array<UsingDevice>} usingDevice - The shr.procedure.UsingDevice array
   */
  set usingDevice(usingDevice) {
    this._usingDevice = usingDevice;
  }

  /**
   * Set the UsingDevice array and return 'this' for chaining.
   * @param {Array<UsingDevice>} usingDevice - The shr.procedure.UsingDevice array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withUsingDevice(usingDevice) {
    this.usingDevice = usingDevice; return this;
  }

  /**
   * Get the UsingDeviceCode array.
   * @returns {Array<UsingDeviceCode>} The shr.procedure.UsingDeviceCode array
   */
  get usingDeviceCode() {
    return this._usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The shr.procedure.UsingDeviceCode array
   */
  set usingDeviceCode(usingDeviceCode) {
    this._usingDeviceCode = usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The shr.procedure.UsingDeviceCode array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withUsingDeviceCode(usingDeviceCode) {
    this.usingDeviceCode = usingDeviceCode; return this;
  }

  /**
   * Get the UsingAccessDevice array.
   * @returns {Array<UsingAccessDevice>} The shr.procedure.UsingAccessDevice array
   */
  get usingAccessDevice() {
    return this._usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The shr.procedure.UsingAccessDevice array
   */
  set usingAccessDevice(usingAccessDevice) {
    this._usingAccessDevice = usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array and return 'this' for chaining.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The shr.procedure.UsingAccessDevice array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withUsingAccessDevice(usingAccessDevice) {
    this.usingAccessDevice = usingAccessDevice; return this;
  }

  /**
   * Get the UsingAccessDeviceCode array.
   * @returns {Array<UsingAccessDeviceCode>} The shr.procedure.UsingAccessDeviceCode array
   */
  get usingAccessDeviceCode() {
    return this._usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The shr.procedure.UsingAccessDeviceCode array
   */
  set usingAccessDeviceCode(usingAccessDeviceCode) {
    this._usingAccessDeviceCode = usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The shr.procedure.UsingAccessDeviceCode array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withUsingAccessDeviceCode(usingAccessDeviceCode) {
    this.usingAccessDeviceCode = usingAccessDeviceCode; return this;
  }

  /**
   * Get the IndirectDevice array.
   * @returns {Array<IndirectDevice>} The shr.procedure.IndirectDevice array
   */
  get indirectDevice() {
    return this._indirectDevice;
  }

  /**
   * Set the IndirectDevice array.
   * @param {Array<IndirectDevice>} indirectDevice - The shr.procedure.IndirectDevice array
   */
  set indirectDevice(indirectDevice) {
    this._indirectDevice = indirectDevice;
  }

  /**
   * Set the IndirectDevice array and return 'this' for chaining.
   * @param {Array<IndirectDevice>} indirectDevice - The shr.procedure.IndirectDevice array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withIndirectDevice(indirectDevice) {
    this.indirectDevice = indirectDevice; return this;
  }

  /**
   * Get the IndirectDeviceCode array.
   * @returns {Array<IndirectDeviceCode>} The shr.procedure.IndirectDeviceCode array
   */
  get indirectDeviceCode() {
    return this._indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The shr.procedure.IndirectDeviceCode array
   */
  set indirectDeviceCode(indirectDeviceCode) {
    this._indirectDeviceCode = indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array and return 'this' for chaining.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The shr.procedure.IndirectDeviceCode array
   * @returns {SurgicalProcedurePerformed} this.
   */
  withIndirectDeviceCode(indirectDeviceCode) {
    this.indirectDeviceCode = indirectDeviceCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedurePerformed class.
   * The JSON must be valid against the SurgicalProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedurePerformed} An instance of SurgicalProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SurgicalProcedurePerformed class to a JSON object.
   * The JSON is expected to be valid against the SurgicalProcedurePerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/SurgicalProcedurePerformed' } };
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.inputFinding != null) {
      inst['InputFinding'] = this.inputFinding.map(f => f.toJSON());
    }
    if (this.indication != null) {
      inst['Indication'] = this.indication.map(f => f.toJSON());
    }
    if (this.device != null) {
      inst['Device'] = this.device.map(f => f.toJSON());
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.outputFinding != null) {
      inst['OutputFinding'] = this.outputFinding.map(f => f.toJSON());
    }
    if (this.directSite != null) {
      inst['DirectSite'] = this.directSite.map(f => f.toJSON());
    }
    if (this.directSiteCode != null) {
      inst['DirectSiteCode'] = this.directSiteCode.map(f => f.toJSON());
    }
    if (this.indirectSite != null) {
      inst['IndirectSite'] = this.indirectSite.map(f => f.toJSON());
    }
    if (this.indirectSiteCode != null) {
      inst['IndirectSiteCode'] = this.indirectSiteCode.map(f => f.toJSON());
    }
    if (this.surgicalApproach != null) {
      inst['SurgicalApproach'] = this.surgicalApproach.map(f => f.toJSON());
    }
    if (this.access != null) {
      inst['Access'] = this.access.map(f => f.toJSON());
    }
    if (this.usingDevice != null) {
      inst['UsingDevice'] = this.usingDevice.map(f => f.toJSON());
    }
    if (this.usingDeviceCode != null) {
      inst['UsingDeviceCode'] = this.usingDeviceCode.map(f => f.toJSON());
    }
    if (this.usingAccessDevice != null) {
      inst['UsingAccessDevice'] = this.usingAccessDevice.map(f => f.toJSON());
    }
    if (this.usingAccessDeviceCode != null) {
      inst['UsingAccessDeviceCode'] = this.usingAccessDeviceCode.map(f => f.toJSON());
    }
    if (this.indirectDevice != null) {
      inst['IndirectDevice'] = this.indirectDevice.map(f => f.toJSON());
    }
    if (this.indirectDeviceCode != null) {
      inst['IndirectDeviceCode'] = this.indirectDeviceCode.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the SurgicalProcedurePerformed class to a FHIR object.
   * The FHIR is expected to be valid against the SurgicalProcedurePerformed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.indirectSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indirectSite.toFHIR === 'function' ? this.indirectSite.toFHIR(true) : this.indirectSite);
    }
    if (this.directSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.directSite.toFHIR === 'function' ? this.directSite.toFHIR(true) : this.directSite);
    }
    if (this.method != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.method.toFHIR === 'function' ? this.method.toFHIR(true) : this.method);
    }
    if (this.precondition != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.precondition.toFHIR === 'function' ? this.precondition.toFHIR(true) : this.precondition);
    }
    if (this.inputFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.inputFinding.toFHIR === 'function' ? this.inputFinding.toFHIR(true) : this.inputFinding);
    }
    if (this.indication != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indication.toFHIR === 'function' ? this.indication.toFHIR(true) : this.indication);
    }
    if (this.device != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.device.toFHIR === 'function' ? this.device.toFHIR(true) : this.device);
    }
    if (this.location != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.location.toFHIR === 'function' ? this.location.toFHIR(true) : this.location);
    }
    if (this.outputFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outputFinding.toFHIR === 'function' ? this.outputFinding.toFHIR(true) : this.outputFinding);
    }
    if (this.directSiteCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.directSiteCode.toFHIR === 'function' ? this.directSiteCode.toFHIR(true) : this.directSiteCode);
    }
    if (this.indirectSiteCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indirectSiteCode.toFHIR === 'function' ? this.indirectSiteCode.toFHIR(true) : this.indirectSiteCode);
    }
    if (this.access != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.access.toFHIR === 'function' ? this.access.toFHIR(true) : this.access);
    }
    if (this.usingDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.usingDevice.toFHIR === 'function' ? this.usingDevice.toFHIR(true) : this.usingDevice);
    }
    if (this.usingDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.usingDeviceCode.toFHIR === 'function' ? this.usingDeviceCode.toFHIR(true) : this.usingDeviceCode);
    }
    if (this.usingAccessDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.usingAccessDevice.toFHIR === 'function' ? this.usingAccessDevice.toFHIR(true) : this.usingAccessDevice);
    }
    if (this.usingAccessDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.usingAccessDeviceCode.toFHIR === 'function' ? this.usingAccessDeviceCode.toFHIR(true) : this.usingAccessDeviceCode);
    }
    if (this.indirectDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indirectDevice.toFHIR === 'function' ? this.indirectDevice.toFHIR(true) : this.indirectDevice);
    }
    if (this.indirectDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indirectDeviceCode.toFHIR === 'function' ? this.indirectDeviceCode.toFHIR(true) : this.indirectDeviceCode);
    }
    if (this.relatedRequest != null && this.relatedRequest.actionRequested != null) {
      inst['basedOn'] = inst ['basedOn'] || [];
      inst['basedOn'] = inst['basedOn'].concat(this.relatedRequest.actionRequested.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.partOf != null) {
      inst['partOf'] = inst ['partOf'] || [];
      inst['partOf'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR() : this.partOf);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['performed[x]'] = typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null && this.participation.participationType != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['role'] = inst ['performer']['role'] || [];
      inst['performer']['role'] = inst['performer']['role'].concat(this.participation.participationType.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.participation != null && this.participation.participant != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['actor'] = inst ['performer']['actor'] || [];
      inst['performer']['actor'] = inst['performer']['actor'].concat(this.participation.participant.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.participation != null && this.participation.onBehalfOf != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['onBehalfOf'] = inst ['performer']['onBehalfOf'] || [];
      inst['performer']['onBehalfOf'] = inst['performer']['onBehalfOf'].concat(this.participation.onBehalfOf.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.facility != null) {
      inst['location'] = typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR() : this.facility;
    }
    if (this.reason != null) {
      inst['reasonCode'] = inst ['reasonCode'] || [];
      inst['reasonCode'] = inst['reasonCode'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['bodySite'] = inst ['bodySite'] || [];
      inst['bodySite'] = inst['bodySite'].concat(this.anatomicalLocation.anatomicalLocationOrLandmarkCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.outcome != null) {
      inst['outcome'] = typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR() : this.outcome;
    }
    if (this.annotation != null) {
      inst['note'] = inst ['note'] || [];
      inst['note'] = inst['note'].concat(this.annotation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SurgicalProcedurePerformed class.
   * The FHIR must be valid against the SurgicalProcedurePerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SurgicalProcedurePerformed} An instance of SurgicalProcedurePerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SurgicalProcedurePerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/StructureDefinition/procedure-approachBodySite');
      if (match != null) {
        inst.indirectSite = createInstanceFromFHIR('shr.procedure.IndirectSite', match, true);
      }
    }
    if (fhir['basedOn'] != null) {
      if(inst.relatedRequest == null) {
        inst.relatedRequest = createInstanceFromFHIR('shr.base.RelatedRequest', {});
      }
      inst.relatedRequest.value = createInstanceFromFHIR('shr.base.ActionRequested', fhir['basedOn'][0]);
    }
    if (fhir['partOf'] != null) {
      inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', fhir['partOf'][0]);
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
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
    if (fhir['performedDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedDateTime']);
    }
    if (fhir['performedPeriod'] != null) {
      inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedPeriod']);
    }
    if (fhir['performer'] != null && fhir['performer']['role'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.participationType = createInstanceFromFHIR('shr.base.ParticipationType', fhir['performer']['role']);
    }
    if (fhir['performer'] != null && fhir['performer']['actor'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.participant = createInstanceFromFHIR('shr.base.Participant', fhir['performer']['actor']);
    }
    if (fhir['performer'] != null && fhir['performer']['onBehalfOf'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.onBehalfOf = createInstanceFromFHIR('shr.core.OnBehalfOf', fhir['performer']['onBehalfOf']);
    }
    if (fhir['location'] != null) {
      inst.facility = createInstanceFromFHIR('shr.entity.Facility', fhir['location']);
    }
    if (fhir['reasonCode'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonCode'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    if (fhir['bodySite'] != null) {
      if(inst.anatomicalLocation == null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['bodySite'][0]);
    }
    if (fhir['outcome'] != null) {
      inst.outcome = createInstanceFromFHIR('shr.base.Outcome', fhir['outcome']);
    }
    if (fhir['note'] != null) {
      inst.annotation = inst.annotation || [];
      inst.annotation = inst.annotation.concat(fhir['note'].map(f => createInstanceFromFHIR('shr.core.Annotation', f)));
    }
    return inst;
  }

}
export default SurgicalProcedurePerformed;
