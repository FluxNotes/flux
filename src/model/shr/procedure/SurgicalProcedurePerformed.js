import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ProcedurePerformed from './ProcedurePerformed';

/**
 * Generated class for shr.procedure.SurgicalProcedurePerformed.
 * @extends ProcedurePerformed
 */
class SurgicalProcedurePerformed extends ProcedurePerformed {

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
   * @returns {SurgicalProcedurePerformed} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ProcedureCode.
   * @returns {ProcedureCode} The shr.procedure.ProcedureCode
   */
  get procedureCode() {
    return this._procedureCode;
  }

  /**
   * Set the ProcedureCode.
   * This field/value is required.
   * @param {ProcedureCode} procedureCode - The shr.procedure.ProcedureCode
   */
  set procedureCode(procedureCode) {
    this._procedureCode = procedureCode;
  }

  /**
   * Set the ProcedureCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ProcedureCode} procedureCode - The shr.procedure.ProcedureCode
   * @returns {SurgicalProcedurePerformed} this.
   */
  withProcedureCode(procedureCode) {
    this.procedureCode = procedureCode; return this;
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
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/SurgicalProcedurePerformed' };
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
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.procedureCode != null) {
      inst['ProcedureCode'] = typeof this.procedureCode.toJSON === 'function' ? this.procedureCode.toJSON() : this.procedureCode;
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
    if (this.device != null) {
      inst['Device'] = this.device.map(f => f.toJSON());
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
   * Deserializes FHIR JSON data to an instance of the SurgicalProcedurePerformed class.
   * The FHIR must be valid against the SurgicalProcedurePerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SurgicalProcedurePerformed} An instance of SurgicalProcedurePerformed populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new SurgicalProcedurePerformed();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/procedure/SurgicalProcedurePerformed');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/body-site-instance') {
        inst.anatomicalLocation = inst.anatomicalLocation || [];
        const inst_anatomicalLocation = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', {}, shrId);
        inst.anatomicalLocation.push(inst_anatomicalLocation);
        inst_anatomicalLocation.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/procedure-approachBodySite') {
        inst.indirectSite = inst.indirectSite || [];
        const inst_indirectSite = FHIRHelper.createInstanceFromFHIR('shr.procedure.IndirectSite', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.indirectSite.push(inst_indirectSite);
        inst.surgicalApproach = inst.surgicalApproach || [];
        const inst_surgicalApproach = FHIRHelper.createInstanceFromFHIR('shr.procedure.SurgicalApproach', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.surgicalApproach.push(inst_surgicalApproach);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/procedure-targetBodySite') {
        inst.directSite = inst.directSite || [];
        const inst_directSite = FHIRHelper.createInstanceFromFHIR('shr.procedure.DirectSite', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.directSite.push(inst_directSite);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension') {
        inst.method = FHIRHelper.createInstanceFromFHIR('shr.base.Method', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Device-extension') {
        inst.device = inst.device || [];
        const inst_device = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Device', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
        inst.device.push(inst_device);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-DirectSiteCode-extension') {
        inst.directSiteCode = inst.directSiteCode || [];
        const inst_directSiteCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.DirectSiteCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.directSiteCode.push(inst_directSiteCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-IndirectSiteCode-extension') {
        inst.indirectSiteCode = inst.indirectSiteCode || [];
        const inst_indirectSiteCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.IndirectSiteCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.indirectSiteCode.push(inst_indirectSiteCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-Access-extension') {
        inst.access = inst.access || [];
        const inst_access = FHIRHelper.createInstanceFromFHIR('shr.procedure.Access', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.access.push(inst_access);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-UsingDevice-extension') {
        inst.usingDevice = inst.usingDevice || [];
        const inst_usingDevice = FHIRHelper.createInstanceFromFHIR('shr.procedure.UsingDevice', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.usingDevice.push(inst_usingDevice);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-UsingDeviceCode-extension') {
        inst.usingDeviceCode = inst.usingDeviceCode || [];
        const inst_usingDeviceCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.UsingDeviceCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.usingDeviceCode.push(inst_usingDeviceCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-UsingAccessDevice-extension') {
        inst.usingAccessDevice = inst.usingAccessDevice || [];
        const inst_usingAccessDevice = FHIRHelper.createInstanceFromFHIR('shr.procedure.UsingAccessDevice', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.usingAccessDevice.push(inst_usingAccessDevice);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-UsingAccessDeviceCode-extension') {
        inst.usingAccessDeviceCode = inst.usingAccessDeviceCode || [];
        const inst_usingAccessDeviceCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.UsingAccessDeviceCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.usingAccessDeviceCode.push(inst_usingAccessDeviceCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-IndirectDevice-extension') {
        inst.indirectDevice = inst.indirectDevice || [];
        const inst_indirectDevice = FHIRHelper.createInstanceFromFHIR('shr.procedure.IndirectDevice', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.indirectDevice.push(inst_indirectDevice);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-IndirectDeviceCode-extension') {
        inst.indirectDeviceCode = inst.indirectDeviceCode || [];
        const inst_indirectDeviceCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.IndirectDeviceCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.indirectDeviceCode.push(inst_indirectDeviceCode);
      }
    }
    if (fhir['basedOn'] != null && fhir['basedOn'][0] != null) {
      inst.relatedRequest = inst.relatedRequest || FHIRHelper.createInstanceFromFHIR('shr.base.RelatedRequest', {}, shrId);
      const entryId = fhir['basedOn'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.procedure.ProcedureRequested', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.relatedRequest.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/procedure/ProcedureRequested';
        inst.relatedRequest.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['partOf'] != null && fhir['partOf'][0] != null) {
      const entryId = fhir['partOf'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.procedure.ProcedurePerformed', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.partOf = mappedResources[entryId];
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.procedureCode = FHIRHelper.createInstanceFromFHIR('shr.procedure.ProcedureCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['context'] != null) {
      const entryId = fhir['context']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.encounter = mappedResources[entryId];
    }
    if (fhir['performedDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['performedPeriod'] != null) {
      inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedPeriod'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_performer of fhir['performer'] || []) {
      inst.participation = inst.participation || [];
      const inst_participation = FHIRHelper.createInstanceFromFHIR('shr.base.Participation', fhir_performer, shrId, allEntries, mappedResources, referencesOut, false);
      inst.participation.push(inst_participation);
      if (fhir_performer['role'] != null) {
        inst_participation.participationType = FHIRHelper.createInstanceFromFHIR('shr.base.ParticipationType', fhir_performer['role'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_performer['actor'] != null) {
        const entryId = fhir_performer['actor']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_participation.participant = mappedResources[entryId];
      }
      if (fhir_performer['onBehalfOf'] != null) {
        const entryId = fhir_performer['onBehalfOf']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_participation.onBehalfOf = mappedResources[entryId];
      }
    }
    if (fhir['location'] != null) {
      const entryId = fhir['location']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Facility', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.facility = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/entity/Facility';
        inst.facility = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    for (const fhir_reasonCode of fhir['reasonCode'] || []) {
      inst.reason = inst.reason || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_reasonCode, shrId, allEntries, mappedResources, referencesOut, false);
      inst.reason.push(inst_reason);
    }
    for (const fhir_bodySite of fhir['bodySite'] || []) {
      inst.anatomicalLocation = inst.anatomicalLocation || [];
      const inst_anatomicalLocation = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', {}, shrId);
      inst.anatomicalLocation.push(inst_anatomicalLocation);
      inst_anatomicalLocation.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationPrecoordinated', fhir_bodySite, shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['outcome'] != null) {
      inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.base.Outcome', fhir['outcome'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_note of fhir['note'] || []) {
      inst.annotation = inst.annotation || [];
      const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_note, shrId, allEntries, mappedResources, referencesOut, false);
      inst.annotation.push(inst_annotation);
    }
    return inst;
  }

}
export default SurgicalProcedurePerformed;
