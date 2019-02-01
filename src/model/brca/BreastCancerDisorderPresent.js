import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import CancerDisorderPresent from '../oncocore/CancerDisorderPresent';

/**
 * Generated class for brca.BreastCancerDisorderPresent.
 * @extends CancerDisorderPresent
 */
class BreastCancerDisorderPresent extends CancerDisorderPresent {

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
   * @returns {BreastCancerDisorderPresent} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ConditionOrDiagnosisCode.
   * @returns {ConditionOrDiagnosisCode} The shr.base.ConditionOrDiagnosisCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the ConditionOrDiagnosisCode.
   * This field/value is required.
   * @param {ConditionOrDiagnosisCode} findingTopicCode - The shr.base.ConditionOrDiagnosisCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the ConditionOrDiagnosisCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ConditionOrDiagnosisCode} findingTopicCode - The shr.base.ConditionOrDiagnosisCode
   * @returns {BreastCancerDisorderPresent} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
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
   * @returns {BreastCancerDisorderPresent} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
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
   * @returns {BreastCancerDisorderPresent} this.
   */
  withStageInformation(stageInformation) {
    this.stageInformation = stageInformation; return this;
  }

  /**
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.base.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   * @returns {BreastCancerDisorderPresent} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
  }

  /**
   * Get the MorphologyBehavior.
   * @returns {MorphologyBehavior} The brca.MorphologyBehavior
   */
  get morphologyBehavior() {
    return this._morphologyBehavior;
  }

  /**
   * Set the MorphologyBehavior.
   * @param {MorphologyBehavior} morphologyBehavior - The brca.MorphologyBehavior
   */
  set morphologyBehavior(morphologyBehavior) {
    this._morphologyBehavior = morphologyBehavior;
  }

  /**
   * Set the MorphologyBehavior and return 'this' for chaining.
   * @param {MorphologyBehavior} morphologyBehavior - The brca.MorphologyBehavior
   * @returns {BreastCancerDisorderPresent} this.
   */
  withMorphologyBehavior(morphologyBehavior) {
    this.morphologyBehavior = morphologyBehavior; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerDisorderPresent class.
   * The JSON must be valid against the BreastCancerDisorderPresent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerDisorderPresent} An instance of BreastCancerDisorderPresent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BreastCancerDisorderPresent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BreastCancerDisorderPresent class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerDisorderPresent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/brca/BreastCancerDisorderPresent' };
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
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.morphologyBehavior != null) {
      inst['MorphologyBehavior'] = typeof this.morphologyBehavior.toJSON === 'function' ? this.morphologyBehavior.toJSON() : this.morphologyBehavior;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the BreastCancerDisorderPresent class.
   * The FHIR must be valid against the BreastCancerDisorderPresent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BreastCancerDisorderPresent} An instance of BreastCancerDisorderPresent populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new BreastCancerDisorderPresent();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/brca/BreastCancerDisorderPresent');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingMethod-extension') {
        inst.findingMethod = FHIRHelper.createInstanceFromFHIR('shr.base.FindingMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/brca-MorphologyBehavior-extension') {
        inst.morphologyBehavior = FHIRHelper.createInstanceFromFHIR('brca.MorphologyBehavior', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
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
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('brca.BreastCancerStagePanel', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst.stageInformation.stageDetail = mappedResources[entryId];
      }
    }
    return inst;
  }

}
export default BreastCancerDisorderPresent;
