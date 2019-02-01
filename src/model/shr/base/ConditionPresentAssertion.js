import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import PresenceAssertion from './PresenceAssertion';

/**
 * Generated class for shr.base.ConditionPresentAssertion.
 * @extends PresenceAssertion
 */
class ConditionPresentAssertion extends PresenceAssertion {

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
   * @returns {ConditionPresentAssertion} this.
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
   * @returns {ConditionPresentAssertion} this.
   */
  withMetadata(metadata) {
    this.metadata = metadata; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
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
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   * @returns {ConditionPresentAssertion} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.base.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.base.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.base.Severity
   * @returns {ConditionPresentAssertion} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the StageInformation.
   * @returns {StageInformation} The shr.base.StageInformation
   */
  get stageInformation() {
    return this._stageInformation;
  }

  /**
   * Set the StageInformation.
   * @param {StageInformation} stageInformation - The shr.base.StageInformation
   */
  set stageInformation(stageInformation) {
    this._stageInformation = stageInformation;
  }

  /**
   * Set the StageInformation and return 'this' for chaining.
   * @param {StageInformation} stageInformation - The shr.base.StageInformation
   * @returns {ConditionPresentAssertion} this.
   */
  withStageInformation(stageInformation) {
    this.stageInformation = stageInformation; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The shr.base.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The shr.base.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The shr.base.Abatement
   * @returns {ConditionPresentAssertion} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionPresentAssertion class.
   * The JSON must be valid against the ConditionPresentAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionPresentAssertion} An instance of ConditionPresentAssertion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ConditionPresentAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ConditionPresentAssertion class to a JSON object.
   * The JSON is expected to be valid against the ConditionPresentAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ConditionPresentAssertion' };
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
    if (this.objectIdentifier != null) {
      inst['ObjectIdentifier'] = typeof this.objectIdentifier.toJSON === 'function' ? this.objectIdentifier.toJSON() : this.objectIdentifier;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.stageInformation != null) {
      inst['StageInformation'] = typeof this.stageInformation.toJSON === 'function' ? this.stageInformation.toJSON() : this.stageInformation;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ConditionPresentAssertion class.
   * The FHIR must be valid against the ConditionPresentAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ConditionPresentAssertion} An instance of ConditionPresentAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ConditionPresentAssertion();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/base/ConditionPresentAssertion');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/StructureDefinition/condition-targetBodySite') {
        inst.anatomicalLocation = inst.anatomicalLocation || [];
        const inst_anatomicalLocation = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', {}, shrId);
        inst.anatomicalLocation.push(inst_anatomicalLocation);
        inst_anatomicalLocation.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-PresentOrAbsent-extension') {
        inst.presentOrAbsent = FHIRHelper.createInstanceFromFHIR('shr.base.PresentOrAbsent', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['identifier'] != null && fhir['identifier'][0] != null) {
      inst.objectIdentifier = FHIRHelper.createInstanceFromFHIR('shr.base.ObjectIdentifier', fhir['identifier'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['clinicalStatus'] != null) {
      inst.clinicalStatus = FHIRHelper.createInstanceFromFHIR('shr.base.ClinicalStatus', fhir['clinicalStatus'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['verificationStatus'] != null) {
      inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir['verificationStatus'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null && fhir['category'][0] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['severity'] != null) {
      inst.severity = FHIRHelper.createInstanceFromFHIR('shr.base.Severity', fhir['severity'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.conditionOrDiagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.base.ConditionOrDiagnosisCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_bodySite of fhir['bodySite'] || []) {
      inst.anatomicalLocation = inst.anatomicalLocation || [];
      const inst_anatomicalLocation = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocation', {}, shrId);
      inst.anatomicalLocation.push(inst_anatomicalLocation);
      inst_anatomicalLocation.value = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationPrecoordinated', fhir_bodySite, shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['abatementDateTime'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementAge'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementAge'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementBoolean'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementBoolean'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementPeriod'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementPeriod'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementRange'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementRange'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementString'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.base.Abatement', fhir['abatementString'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['assertedDate'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      inst.metadata.authoredDateTime = FHIRHelper.createInstanceFromFHIR('shr.base.AuthoredDateTime', fhir['assertedDate'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['asserter'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      const entryId = fhir['asserter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.metadata.informationSource = mappedResources[entryId];
    }
    if (fhir['stage'] != null) {
      inst.stageInformation = FHIRHelper.createInstanceFromFHIR('shr.base.StageInformation', fhir['stage'], shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['stage']['summary'] != null) {
        inst.stageInformation.stageSummary = FHIRHelper.createInstanceFromFHIR('shr.base.StageSummary', fhir['stage']['summary'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['stage']['assessment'] != null && fhir['stage']['assessment'][0] != null) {
        const entryId = fhir['stage']['assessment'][0]['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.base.Observation', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst.stageInformation.stageDetail = mappedResources[entryId];
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default ConditionPresentAssertion;
