import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Finding from '../base/Finding';

/**
 * Generated class for shr.allergy.AllergyIntolerance.
 * @extends Finding
 */
class AllergyIntolerance extends Finding {

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
   * @returns {AllergyIntolerance} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Metadata.
   * @returns {Metadata} The shr.base.Metadata
   */
  get metadata() {
    return this._metadata;
  }

  /**
   * Set the Metadata.
   * @param {Metadata} metadata - The shr.base.Metadata
   */
  set metadata(metadata) {
    this._metadata = metadata;
  }

  /**
   * Set the Metadata and return 'this' for chaining.
   * @param {Metadata} metadata - The shr.base.Metadata
   * @returns {AllergyIntolerance} this.
   */
  withMetadata(metadata) {
    this.metadata = metadata; return this;
  }

  /**
   * Get the FindingResult.
   * @returns {FindingResult} The shr.base.FindingResult
   */
  get findingResult() {
    return this._findingResult;
  }

  /**
   * Set the FindingResult.
   * This field/value is required.
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   */
  set findingResult(findingResult) {
    this._findingResult = findingResult;
  }

  /**
   * Set the FindingResult and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   * @returns {AllergyIntolerance} this.
   */
  withFindingResult(findingResult) {
    this.findingResult = findingResult; return this;
  }

  /**
   * Get the FindingTopicCode.
   * @returns {FindingTopicCode} The shr.base.FindingTopicCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the FindingTopicCode.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the FindingTopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   * @returns {AllergyIntolerance} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the Patient.
   * @returns {Patient} The shr.entity.Patient
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the Patient.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {AllergyIntolerance} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the FindingStatus.
   * @returns {FindingStatus} The shr.base.FindingStatus
   */
  get findingStatus() {
    return this._findingStatus;
  }

  /**
   * Set the FindingStatus.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.base.FindingStatus
   */
  set findingStatus(findingStatus) {
    this._findingStatus = findingStatus;
  }

  /**
   * Set the FindingStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.base.FindingStatus
   * @returns {AllergyIntolerance} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
  }

  /**
   * Get the SpecificFocusOfFinding.
   * @returns {SpecificFocusOfFinding} The shr.base.SpecificFocusOfFinding
   */
  get specificFocusOfFinding() {
    return this._specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   */
  set specificFocusOfFinding(specificFocusOfFinding) {
    this._specificFocusOfFinding = specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding and return 'this' for chaining.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   * @returns {AllergyIntolerance} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
  }

  /**
   * Get the SubstanceCategory.
   * @returns {SubstanceCategory} The shr.allergy.SubstanceCategory
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Set the SubstanceCategory.
   * @param {SubstanceCategory} substanceCategory - The shr.allergy.SubstanceCategory
   */
  set substanceCategory(substanceCategory) {
    this._substanceCategory = substanceCategory;
  }

  /**
   * Set the SubstanceCategory and return 'this' for chaining.
   * @param {SubstanceCategory} substanceCategory - The shr.allergy.SubstanceCategory
   * @returns {AllergyIntolerance} this.
   */
  withSubstanceCategory(substanceCategory) {
    this.substanceCategory = substanceCategory; return this;
  }

  /**
   * Get the Onset.
   * @returns {Onset} The shr.base.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The shr.base.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The shr.base.Onset
   * @returns {AllergyIntolerance} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the AllergyIntoleranceType.
   * @returns {AllergyIntoleranceType} The shr.allergy.AllergyIntoleranceType
   */
  get allergyIntoleranceType() {
    return this._allergyIntoleranceType;
  }

  /**
   * Set the AllergyIntoleranceType.
   * @param {AllergyIntoleranceType} allergyIntoleranceType - The shr.allergy.AllergyIntoleranceType
   */
  set allergyIntoleranceType(allergyIntoleranceType) {
    this._allergyIntoleranceType = allergyIntoleranceType;
  }

  /**
   * Set the AllergyIntoleranceType and return 'this' for chaining.
   * @param {AllergyIntoleranceType} allergyIntoleranceType - The shr.allergy.AllergyIntoleranceType
   * @returns {AllergyIntolerance} this.
   */
  withAllergyIntoleranceType(allergyIntoleranceType) {
    this.allergyIntoleranceType = allergyIntoleranceType; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The shr.base.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   * @returns {AllergyIntolerance} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The shr.base.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The shr.base.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The shr.base.Criticality
   * @returns {AllergyIntolerance} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the MostRecentOccurrenceTime.
   * @returns {MostRecentOccurrenceTime} The shr.allergy.MostRecentOccurrenceTime
   */
  get mostRecentOccurrenceTime() {
    return this._mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.allergy.MostRecentOccurrenceTime
   */
  set mostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this._mostRecentOccurrenceTime = mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime and return 'this' for chaining.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.allergy.MostRecentOccurrenceTime
   * @returns {AllergyIntolerance} this.
   */
  withMostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this.mostRecentOccurrenceTime = mostRecentOccurrenceTime; return this;
  }

  /**
   * Get the AllergyIntoleranceReaction array.
   * @returns {Array<AllergyIntoleranceReaction>} The shr.allergy.AllergyIntoleranceReaction array
   */
  get allergyIntoleranceReaction() {
    return this._allergyIntoleranceReaction;
  }

  /**
   * Set the AllergyIntoleranceReaction array.
   * @param {Array<AllergyIntoleranceReaction>} allergyIntoleranceReaction - The shr.allergy.AllergyIntoleranceReaction array
   */
  set allergyIntoleranceReaction(allergyIntoleranceReaction) {
    this._allergyIntoleranceReaction = allergyIntoleranceReaction;
  }

  /**
   * Set the AllergyIntoleranceReaction array and return 'this' for chaining.
   * @param {Array<AllergyIntoleranceReaction>} allergyIntoleranceReaction - The shr.allergy.AllergyIntoleranceReaction array
   * @returns {AllergyIntolerance} this.
   */
  withAllergyIntoleranceReaction(allergyIntoleranceReaction) {
    this.allergyIntoleranceReaction = allergyIntoleranceReaction; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AllergyIntolerance class.
   * The JSON must be valid against the AllergyIntolerance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AllergyIntolerance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AllergyIntolerance class to a JSON object.
   * The JSON is expected to be valid against the AllergyIntolerance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/allergy/AllergyIntolerance' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.findingResult != null) {
      inst['FindingResult'] = typeof this.findingResult.toJSON === 'function' ? this.findingResult.toJSON() : this.findingResult;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.substanceCategory != null) {
      inst['SubstanceCategory'] = typeof this.substanceCategory.toJSON === 'function' ? this.substanceCategory.toJSON() : this.substanceCategory;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.allergyIntoleranceType != null) {
      inst['AllergyIntoleranceType'] = typeof this.allergyIntoleranceType.toJSON === 'function' ? this.allergyIntoleranceType.toJSON() : this.allergyIntoleranceType;
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['MostRecentOccurrenceTime'] = typeof this.mostRecentOccurrenceTime.toJSON === 'function' ? this.mostRecentOccurrenceTime.toJSON() : this.mostRecentOccurrenceTime;
    }
    if (this.allergyIntoleranceReaction != null) {
      inst['AllergyIntoleranceReaction'] = this.allergyIntoleranceReaction.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AllergyIntolerance class.
   * The FHIR must be valid against the AllergyIntolerance FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AllergyIntolerance();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/allergy/AllergyIntolerance');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension') {
        inst.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension') {
        inst.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ReferenceRange-extension') {
        inst.referenceRange = FHIRHelper.createInstanceFromFHIR('shr.base.ReferenceRange', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['clinicalStatus'] != null) {
      inst.clinicalStatus = FHIRHelper.createInstanceFromFHIR('shr.base.ClinicalStatus', fhir['clinicalStatus'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['verificationStatus'] != null) {
      inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir['verificationStatus'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.allergyIntoleranceType = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceType', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null && fhir['category'][0] != null) {
      inst.substanceCategory = FHIRHelper.createInstanceFromFHIR('shr.allergy.SubstanceCategory', fhir['category'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['criticality'] != null) {
      inst.criticality = FHIRHelper.createInstanceFromFHIR('shr.base.Criticality', fhir['criticality'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['patient'] != null) {
      const entryId = fhir['patient']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['onsetDateTime'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.base.Onset', fhir['onsetDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetAge'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.base.Onset', fhir['onsetAge'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetPeriod'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.base.Onset', fhir['onsetPeriod'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetRange'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.base.Onset', fhir['onsetRange'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetString'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.base.Onset', fhir['onsetString'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['assertedDate'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      inst.metadata.authoredDateTime = FHIRHelper.createInstanceFromFHIR('shr.base.AuthoredDateTime', fhir['assertedDate'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['recorder'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      const entryId = fhir['recorder']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.metadata.informationRecorder = mappedResources[entryId];
    }
    if (fhir['asserter'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      const entryId = fhir['asserter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.metadata.informationSource = mappedResources[entryId];
    }
    if (fhir['lastOccurrence'] != null) {
      inst.mostRecentOccurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.allergy.MostRecentOccurrenceTime', fhir['lastOccurrence'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['reaction'] != null && fhir['reaction'][0] != null) {
      if (fhir['reaction'][0]['substance'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.substanceCode = FHIRHelper.createInstanceFromFHIR('shr.allergy.SubstanceCode', fhir['reaction'][0]['substance'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_reaction_0_manifestation of fhir['reaction'][0]['manifestation'] || []) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.manifestation = inst_allergyIntoleranceReaction.manifestation || [];
        const inst_allergyIntoleranceReaction_manifestation = FHIRHelper.createInstanceFromFHIR('shr.allergy.Manifestation', fhir_reaction_0_manifestation, shrId, allEntries, mappedResources, referencesOut, false);
        inst_allergyIntoleranceReaction.manifestation.push(inst_allergyIntoleranceReaction_manifestation);
      }
      if (fhir['reaction'][0]['description'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['reaction'][0]['description'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['onset'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.beginDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['reaction'][0]['onset'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['severity'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.severity = FHIRHelper.createInstanceFromFHIR('shr.base.Severity', fhir['reaction'][0]['severity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['reaction'][0]['exposureRoute'] != null) {
        inst.allergyIntoleranceReaction = inst.allergyIntoleranceReaction || [];
        const inst_allergyIntoleranceReaction = FHIRHelper.createInstanceFromFHIR('shr.allergy.AllergyIntoleranceReaction', {}, shrId);
        inst.allergyIntoleranceReaction.push(inst_allergyIntoleranceReaction);
        inst_allergyIntoleranceReaction.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['reaction'][0]['exposureRoute'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default AllergyIntolerance;
