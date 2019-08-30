// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DiagnosticReport from '../../shr/core/DiagnosticReport';

/**
 * Generated class for onco.core.GenomicsReport.
 * @extends DiagnosticReport
 */
class GenomicsReport extends DiagnosticReport {

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
   * @returns {GenomicsReport} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PatientSubjectOfRecord.
   * @returns {PatientSubjectOfRecord} The shr.core.PatientSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord and return 'this' for chaining.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   * @returns {GenomicsReport} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the Code.
   * @returns {Code} The shr.core.Code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code and return 'this' for chaining.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   * @returns {GenomicsReport} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the Category.
   * @returns {Category} The shr.core.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category.
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   * @returns {GenomicsReport} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the shr.core.Observation reference array.
   * @returns {Array<Reference>} The shr.core.Observation reference array
   */
  get observation() {
    return this._observation;
  }

  /**
   * Set the shr.core.Observation reference array.
   * @param {Array<Reference>} observation - The shr.core.Observation reference array
   */
  set observation(observation) {
    this._observation = observation;
  }

  /**
   * Set the shr.core.Observation reference array and return 'this' for chaining.
   * @param {Array<Reference>} observation - The shr.core.Observation reference array
   * @returns {GenomicsReport} this.
   */
  withObservation(observation) {
    this.observation = observation; return this;
  }

  /**
   * Get the SpecimenType.
   * @returns {SpecimenType} The shr.core.SpecimenType
   */
  get specimenType() {
    return this._specimenType;
  }

  /**
   * Set the SpecimenType.
   * @param {SpecimenType} specimenType - The shr.core.SpecimenType
   */
  set specimenType(specimenType) {
    this._specimenType = specimenType;
  }

  /**
   * Set the SpecimenType and return 'this' for chaining.
   * @param {SpecimenType} specimenType - The shr.core.SpecimenType
   * @returns {GenomicsReport} this.
   */
  withSpecimenType(specimenType) {
    this.specimenType = specimenType; return this;
  }

  /**
   * Get the RegionStudied array.
   * @returns {Array<RegionStudied>} The onco.core.RegionStudied array
   */
  get regionStudied() {
    return this._regionStudied;
  }

  /**
   * Set the RegionStudied array.
   * @param {Array<RegionStudied>} regionStudied - The onco.core.RegionStudied array
   */
  set regionStudied(regionStudied) {
    this._regionStudied = regionStudied;
  }

  /**
   * Set the RegionStudied array and return 'this' for chaining.
   * @param {Array<RegionStudied>} regionStudied - The onco.core.RegionStudied array
   * @returns {GenomicsReport} this.
   */
  withRegionStudied(regionStudied) {
    this.regionStudied = regionStudied; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GenomicsReport class.
   * The JSON must be valid against the GenomicsReport JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GenomicsReport} An instance of GenomicsReport populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('onco.core', 'GenomicsReport');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the GenomicsReport class to a JSON object.
   * The JSON is expected to be valid against the GenomicsReport JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/onco/core/GenomicsReport' };
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
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.participation != null) {
      inst['Participation'] = typeof this.participation.toJSON === 'function' ? this.participation.toJSON() : this.participation;
    }
    if (this.specimen != null) {
      inst['Specimen'] = this.specimen.map(f => f.toJSON());
    }
    if (this.observation != null) {
      inst['Observation'] = this.observation.map(f => f.toJSON());
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.conclusion != null) {
      inst['Conclusion'] = typeof this.conclusion.toJSON === 'function' ? this.conclusion.toJSON() : this.conclusion;
    }
    if (this.diagnosisCode != null) {
      inst['DiagnosisCode'] = this.diagnosisCode.map(f => f.toJSON());
    }
    if (this.originalReport != null) {
      inst['OriginalReport'] = this.originalReport.map(f => f.toJSON());
    }
    if (this.specimenType != null) {
      inst['SpecimenType'] = typeof this.specimenType.toJSON === 'function' ? this.specimenType.toJSON() : this.specimenType;
    }
    if (this.regionStudied != null) {
      inst['RegionStudied'] = this.regionStudied.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the GenomicsReport class.
   * The FHIR must be valid against the GenomicsReport FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {GenomicsReport} An instance of GenomicsReport populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('onco.core', 'GenomicsReport');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/onco/core/GenomicsReport', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SpecimenType-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SpecimenType-extension') {
        inst.specimenType = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenType', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.specimenType.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/onco-core-RegionStudied-extension') {
        inst.regionStudied = inst.regionStudied || [];
        const inst_regionStudied = FHIRHelper.createInstanceFromFHIR('onco.core.RegionStudied', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.regionStudied.push(inst_regionStudied);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.subjectOfRecord = mappedResources[entryId];
    }
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.careContext = mappedResources[entryId];
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.core.RelevantTime', fhir['effectiveDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['issued'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['issued'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['performer'] != null) {
      inst.participation = inst.participation || FHIRHelper.createInstanceFromFHIR('shr.core.Participation', {}, null, shrId);
      const entryId = fhir['performer']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.participation.participant = mappedResources[entryId];
    }
    for (const fhir_request of fhir['request'] || []) {
      inst.relatedRequest = inst.relatedRequest || [];
      const entryId = fhir_request['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.ProcedureRequest', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_relatedRequest = mappedResources[entryId];
      inst.relatedRequest.push(inst_relatedRequest);
    }
    for (const fhir_specimen of fhir['specimen'] || []) {
      inst.specimen = inst.specimen || [];
      const entryId = fhir_specimen['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Specimen', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      let inst_specimen;
      if (mappedResources[entryId]) {
        inst_specimen = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Specimen';
        inst_specimen = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
      inst.specimen.push(inst_specimen);
    }
    for (const fhir_result of fhir['result'] || []) {
      inst.observation = inst.observation || [];
      const entryId = fhir_result['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Observation', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      let inst_observation;
      if (mappedResources[entryId]) {
        inst_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Observation';
        inst_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
      inst.observation.push(inst_observation);
      if (false) {
      }
      if (false) {
      }
    }
    for (const fhir_image of fhir['image'] || []) {
      if (fhir_image['link'] != null) {
        inst.media = inst.media || [];
        const entryId = fhir_image['link']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Media', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        let inst_media;
        if (mappedResources[entryId]) {
          inst_media = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
        }
        else {
          const entryType = 'http://standardhealthrecord.org/spec/shr/core/Media';
          inst_media = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
        }
        inst.media.push(inst_media);
      }
    }
    if (fhir['conclusion'] != null) {
      inst.conclusion = FHIRHelper.createInstanceFromFHIR('shr.core.Conclusion', fhir['conclusion'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_codedDiagnosis of fhir['codedDiagnosis'] || []) {
      inst.diagnosisCode = inst.diagnosisCode || [];
      const inst_diagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.core.DiagnosisCode', fhir_codedDiagnosis, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.diagnosisCode.push(inst_diagnosisCode);
    }
    for (const fhir_presentedForm of fhir['presentedForm'] || []) {
      inst.originalReport = inst.originalReport || [];
      const inst_originalReport = FHIRHelper.createInstanceFromFHIR('shr.core.OriginalReport', fhir_presentedForm, 'Attachment', shrId, allEntries, mappedResources, referencesOut, false);
      inst.originalReport.push(inst_originalReport);
    }
    return inst;
  }

}
export default GenomicsReport;
