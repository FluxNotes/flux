// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import HeadlessLaboratoryPanel from '../core/HeadlessLaboratoryPanel';

/**
 * Generated class for shr.lab.ComprehensiveMetabolic2000SerumOrPlasmaPanel.
 * @extends HeadlessLaboratoryPanel
 */
class ComprehensiveMetabolic2000SerumOrPlasmaPanel extends HeadlessLaboratoryPanel {

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
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} this.
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
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} this.
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
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} this.
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
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ComprehensiveMetabolic2000SerumOrPlasmaPanel class.
   * The JSON must be valid against the ComprehensiveMetabolic2000SerumOrPlasmaPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} An instance of ComprehensiveMetabolic2000SerumOrPlasmaPanel populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.lab', 'ComprehensiveMetabolic2000SerumOrPlasmaPanel');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ComprehensiveMetabolic2000SerumOrPlasmaPanel class to a JSON object.
   * The JSON is expected to be valid against the ComprehensiveMetabolic2000SerumOrPlasmaPanel JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/lab/ComprehensiveMetabolic2000SerumOrPlasmaPanel' };
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
   * Deserializes FHIR JSON data to an instance of the ComprehensiveMetabolic2000SerumOrPlasmaPanel class.
   * The FHIR must be valid against the ComprehensiveMetabolic2000SerumOrPlasmaPanel FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ComprehensiveMetabolic2000SerumOrPlasmaPanel} An instance of ComprehensiveMetabolic2000SerumOrPlasmaPanel populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.lab', 'ComprehensiveMetabolic2000SerumOrPlasmaPanel');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/lab/ComprehensiveMetabolic2000SerumOrPlasmaPanel', 'uri');
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
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GlobulinMCncPtSerQnCalculatedLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GlobulinMCncPtSerQnCalculatedLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GlobulinMCncPtSerQnCalculatedLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AlanineAminotransferaseCCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AlanineAminotransferaseCCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AlanineAminotransferaseCCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AlbuminMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AlbuminMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AlbuminMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AlbuminGlobulinMRtoPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AlbuminGlobulinMRtoPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AlbuminGlobulinMRtoPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-CalciumMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.CalciumMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/CalciumMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AspartateAminotransferaseCCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AspartateAminotransferaseCCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AspartateAminotransferaseCCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-BilirubinMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.BilirubinMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/BilirubinMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-CarbonDioxideSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.CarbonDioxideSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/CarbonDioxideSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ChlorideSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ChlorideSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ChlorideSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-CreatinineMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.CreatinineMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/CreatinineMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GlucoseMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GlucoseMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GlucoseMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-PotassiumSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.PotassiumSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/PotassiumSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-ProteinMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.ProteinMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/ProteinMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-SodiumSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.SodiumSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/SodiumSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-UreaNitrogenMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.UreaNitrogenMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/UreaNitrogenMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-UreaNitrogenCreatinineMRtoPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.UreaNitrogenCreatinineMRtoPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/UreaNitrogenCreatinineMRtoPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AlkalinePhosphataseCCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AlkalinePhosphataseCCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AlkalinePhosphataseCCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GFR173sqMPredArVRatPtSerPlasQnMDRDLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GFR173sqMPredArVRatPtSerPlasQnMDRDLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GFR173sqMPredArVRatPtSerPlasQnMDRDLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GFR173sqMPredFemaleArVRatPtSerPlasBldQnMDRDLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GFR173sqMPredFemaleArVRatPtSerPlasBldQnMDRDLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GFR173sqMPredFemaleArVRatPtSerPlasBldQnMDRDLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GFR173sqMPredNonBlackArVRatPtSerPlasBldQnMDRDLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GFR173sqMPredNonBlackArVRatPtSerPlasBldQnMDRDLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GFR173sqMPredNonBlackArVRatPtSerPlasBldQnMDRDLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-GFR173sqMPredBlackArVRatPtSerPlasBldQnMDRDLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.GFR173sqMPredBlackArVRatPtSerPlasBldQnMDRDLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/GFR173sqMPredBlackArVRatPtSerPlasBldQnMDRDLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-BilirubinDirectMCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.BilirubinDirectMCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/BilirubinDirectMCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-BicarbonateSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.BicarbonateSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/BicarbonateSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => e.fullUrl === fhir_related['target']['reference']), 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-lab-AniongapSCncPtSerPlasQnLabObs')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.lab.AniongapSCncPtSerPlasQnLabObs', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/lab/AniongapSCncPtSerPlasQnLabObs';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
    }
    return inst;
  }

}
export default ComprehensiveMetabolic2000SerumOrPlasmaPanel;
