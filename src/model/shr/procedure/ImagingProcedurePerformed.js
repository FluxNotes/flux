import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ProcedurePerformed from './ProcedurePerformed';

/**
 * Generated class for shr.procedure.ImagingProcedurePerformed.
 * @extends ProcedurePerformed
 */
class ImagingProcedurePerformed extends ProcedurePerformed {

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
   * @returns {ImagingProcedurePerformed} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ImagingSubstance array.
   * @returns {Array<ImagingSubstance>} The shr.procedure.ImagingSubstance array
   */
  get imagingSubstance() {
    return this._imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   */
  set imagingSubstance(imagingSubstance) {
    this._imagingSubstance = imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array and return 'this' for chaining.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   * @returns {ImagingProcedurePerformed} this.
   */
  withImagingSubstance(imagingSubstance) {
    this.imagingSubstance = imagingSubstance; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImagingProcedurePerformed class.
   * The JSON must be valid against the ImagingProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingProcedurePerformed} An instance of ImagingProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ImagingProcedurePerformed class to a JSON object.
   * The JSON is expected to be valid against the ImagingProcedurePerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/ImagingProcedurePerformed' };
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
    if (this.imagingSubstance != null) {
      inst['ImagingSubstance'] = this.imagingSubstance.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ImagingProcedurePerformed class.
   * The FHIR must be valid against the ImagingProcedurePerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ImagingProcedurePerformed} An instance of ImagingProcedurePerformed populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ImagingProcedurePerformed();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/procedure/ImagingProcedurePerformed');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension') {
        inst.method = FHIRHelper.createInstanceFromFHIR('shr.base.Method', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Device-extension') {
        inst.device = inst.device || [];
        const inst_device = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Device', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
        inst.device.push(inst_device);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-procedure-ImagingSubstance-extension') {
        inst.imagingSubstance = inst.imagingSubstance || [];
        const inst_imagingSubstance = FHIRHelper.createInstanceFromFHIR('shr.procedure.ImagingSubstance', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.imagingSubstance.push(inst_imagingSubstance);
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
export default ImagingProcedurePerformed;
