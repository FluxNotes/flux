// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import HeadlessLaboratoryPanel from '../core/HeadlessLaboratoryPanel';

/**
 * Generated class for shr.lab.CBCWAutoDifferentialPanel.
 * @extends HeadlessLaboratoryPanel
 */
class CBCWAutoDifferentialPanel extends HeadlessLaboratoryPanel {

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
   * @returns {CBCWAutoDifferentialPanel} this.
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
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   * @returns {CBCWAutoDifferentialPanel} this.
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
   * @returns {CBCWAutoDifferentialPanel} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The shr.core.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * @param {PanelMembers} panelMembers - The shr.core.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * @param {PanelMembers} panelMembers - The shr.core.PanelMembers
   * @returns {CBCWAutoDifferentialPanel} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CBCWAutoDifferentialPanel class.
   * The JSON must be valid against the CBCWAutoDifferentialPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CBCWAutoDifferentialPanel} An instance of CBCWAutoDifferentialPanel populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.lab', 'CBCWAutoDifferentialPanel');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CBCWAutoDifferentialPanel class to a JSON object.
   * The JSON is expected to be valid against the CBCWAutoDifferentialPanel JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/lab/CBCWAutoDifferentialPanel' };
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
    if (this.dataValue != null) {
      inst['DataValue'] = typeof this.dataValue.toJSON === 'function' ? this.dataValue.toJSON() : this.dataValue;
    }
    if (this.dataAbsentReason != null) {
      inst['DataAbsentReason'] = typeof this.dataAbsentReason.toJSON === 'function' ? this.dataAbsentReason.toJSON() : this.dataAbsentReason;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.performer != null) {
      inst['Performer'] = this.performer.map(f => f.toJSON());
    }
    if (this.bodyLocation != null) {
      inst['BodyLocation'] = typeof this.bodyLocation.toJSON === 'function' ? this.bodyLocation.toJSON() : this.bodyLocation;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.components != null) {
      inst['Components'] = typeof this.components.toJSON === 'function' ? this.components.toJSON() : this.components;
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CBCWAutoDifferentialPanel class.
   * The FHIR must be valid against the CBCWAutoDifferentialPanel FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CBCWAutoDifferentialPanel} An instance of CBCWAutoDifferentialPanel populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.lab', 'CBCWAutoDifferentialPanel');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/lab/CBCWAutoDifferentialPanel', 'uri');
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
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
      if (false) {
      }
      if (false) {
      }
      if (false) {
      }
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
    for (const fhir_performer of fhir['performer'] || []) {
      inst.performer = inst.performer || [];
      const entryId = fhir_performer['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_performer = mappedResources[entryId];
      inst.performer.push(inst_performer);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = FHIRHelper.createInstanceFromFHIR('shr.core.Interpretation', fhir['interpretation'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comments'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comments'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['method'] != null) {
      inst.method = FHIRHelper.createInstanceFromFHIR('shr.core.Method', fhir['method'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['specimen'] != null) {
      const entryId = fhir['specimen']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Specimen', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.specimen = mappedResources[entryId];
    }
    for (const fhir_related of fhir['related'] || []) {
      inst.panelMembers = FHIRHelper.createInstanceFromFHIR('shr.core.PanelMembers', fhir_related, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LeukocytesNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LeukocytesNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LeukocytesNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocytesNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocytesNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocytesNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-HemoglobinMCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.HemoglobinMCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/HemoglobinMCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-HematocritVFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.HematocritVFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/HematocritVFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-MeanCorpuscularVolumeEntVolPtRBCQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.MeanCorpuscularVolumeEntVolPtRBCQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/MeanCorpuscularVolumeEntVolPtRBCQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocyteMCHEntMassPtRBCQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocyteMCHEntMassPtRBCQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocyteMCHEntMassPtRBCQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocyteMCHCMCncPtRBCQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocyteMCHCMCncPtRBCQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocyteMCHCMCncPtRBCQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PlateletsNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PlateletsNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PlateletsNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Neutrophils100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Neutrophils100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Neutrophils100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-NeutrophilsNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.NeutrophilsNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/NeutrophilsNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocyteDistributionWidthRatioPtRBCQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocyteDistributionWidthRatioPtRBCQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocyteDistributionWidthRatioPtRBCQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Lymphocytes100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Lymphocytes100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Lymphocytes100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Monocytes100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Monocytes100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Monocytes100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Eosinophils100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Eosinophils100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Eosinophils100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Basophils100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Basophils100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Basophils100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LymphocytesNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LymphocytesNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LymphocytesNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-MonocytesNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.MonocytesNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/MonocytesNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-EosinophilsNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.EosinophilsNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/EosinophilsNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-BasophilsNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.BasophilsNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/BasophilsNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-NeutrophilsBandForm100WBCNFrPtBldQnManCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.NeutrophilsBandForm100WBCNFrPtBldQnManCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/NeutrophilsBandForm100WBCNFrPtBldQnManCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Metamyelocytes100WBCNFrPtBldQnManCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Metamyelocytes100WBCNFrPtBldQnManCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Metamyelocytes100WBCNFrPtBldQnManCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Myelocytes100WBCNFrPtBldQnManCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Myelocytes100WBCNFrPtBldQnManCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Myelocytes100WBCNFrPtBldQnManCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Promyelocytes100WBCNFrPtBldQnManCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Promyelocytes100WBCNFrPtBldQnManCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Promyelocytes100WBCNFrPtBldQnManCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PromyelocytesNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PromyelocytesNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PromyelocytesNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LymphocytesVariant100WBCNFrPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LymphocytesVariant100WBCNFrPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LymphocytesVariant100WBCNFrPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Blasts100WBCNFrPtBldQnManCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Blasts100WBCNFrPtBldQnManCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Blasts100WBCNFrPtBldQnManCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-BlastsNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.BlastsNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/BlastsNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocytesNucleated100WBCRatioPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocytesNucleated100WBCRatioPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocytesNucleated100WBCRatioPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocytesNucleatedNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocytesNucleatedNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocytesNucleatedNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PlateletMeanVolumeEntVolPtBldQnReesEckerLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PlateletMeanVolumeEntVolPtBldQnReesEckerLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PlateletMeanVolumeEntVolPtBldQnReesEckerLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-MyelocytesNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.MyelocytesNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/MyelocytesNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-MetamyelocytesNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.MetamyelocytesNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/MetamyelocytesNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-NeutrophilsBandFormNCncPtBldQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.NeutrophilsBandFormNCncPtBldQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/NeutrophilsBandFormNCncPtBldQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GranulocytesImmature100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GranulocytesImmature100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GranulocytesImmature100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GranulocytesImmatureNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GranulocytesImmatureNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GranulocytesImmatureNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocytesNucleated100WBCRatioPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocytesNucleated100WBCRatioPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocytesNucleated100WBCRatioPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-MorphologyImpPtBldNarLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.MorphologyImpPtBldNarLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/MorphologyImpPtBldNarLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ErythrocyteDistributionWidthEntVolPtRBCQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ErythrocyteDistributionWidthEntVolPtRBCQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ErythrocyteDistributionWidthEntVolPtRBCQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PlateletDistributionWidthEntVolPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PlateletDistributionWidthEntVolPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PlateletDistributionWidthEntVolPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PlateletMeanVolumeEntVolPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PlateletMeanVolumeEntVolPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PlateletMeanVolumeEntVolPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-NeutrophilsBandForm100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.NeutrophilsBandForm100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/NeutrophilsBandForm100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-Granulocytes100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.Granulocytes100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/Granulocytes100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LymphocytesVariant100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LymphocytesVariant100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LymphocytesVariant100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-OtherCells100WBCNFrPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.OtherCells100WBCNFrPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/OtherCells100WBCNFrPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-NeutrophilsBandFormNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.NeutrophilsBandFormNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/NeutrophilsBandFormNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LymphocytesVariantNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LymphocytesVariantNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LymphocytesVariantNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-LeukocytesOtherNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.LeukocytesOtherNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/LeukocytesOtherNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-OtherCellsNCncPtBldQnAutoCntLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.OtherCellsNCncPtBldQnAutoCntLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/OtherCellsNCncPtBldQnAutoCntLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
    }
    return inst;
  }

}
export default CBCWAutoDifferentialPanel;
