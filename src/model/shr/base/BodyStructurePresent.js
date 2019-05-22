/* eslint-disable */
import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import PresenceAssertion from './PresenceAssertion';

/**
 * Generated class for shr.base.BodyStructurePresent.
 * @extends PresenceAssertion
 */
class BodyStructurePresent extends PresenceAssertion {

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
   * @returns {BodyStructurePresent} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {BodyStructurePresent} this.
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
   * @returns {BodyStructurePresent} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
  }

  /**
   * Get the AnatomicalLocationStructured.
   * @returns {AnatomicalLocationStructured} The shr.core.AnatomicalLocationStructured
   */
  get anatomicalLocationStructured() {
    return this._anatomicalLocationStructured;
  }

  /**
   * Set the AnatomicalLocationStructured.
   * @param {AnatomicalLocationStructured} anatomicalLocationStructured - The shr.core.AnatomicalLocationStructured
   */
  set anatomicalLocationStructured(anatomicalLocationStructured) {
    this._anatomicalLocationStructured = anatomicalLocationStructured;
  }

  /**
   * Set the AnatomicalLocationStructured and return 'this' for chaining.
   * @param {AnatomicalLocationStructured} anatomicalLocationStructured - The shr.core.AnatomicalLocationStructured
   * @returns {BodyStructurePresent} this.
   */
  withAnatomicalLocationStructured(anatomicalLocationStructured) {
    this.anatomicalLocationStructured = anatomicalLocationStructured; return this;
  }

  /**
   * Get the Media array.
   * @returns {Array<Media>} The shr.core.Media array
   */
  get media() {
    return this._media;
  }

  /**
   * Set the Media array.
   * @param {Array<Media>} media - The shr.core.Media array
   */
  set media(media) {
    this._media = media;
  }

  /**
   * Set the Media array and return 'this' for chaining.
   * @param {Array<Media>} media - The shr.core.Media array
   * @returns {BodyStructurePresent} this.
   */
  withMedia(media) {
    this.media = media; return this;
  }

  /**
   * Get the RelevantTime.
   * @returns {RelevantTime} The shr.base.RelevantTime
   */
  get relevantTime() {
    return this._relevantTime;
  }

  /**
   * Set the RelevantTime.
   * @param {RelevantTime} relevantTime - The shr.base.RelevantTime
   */
  set relevantTime(relevantTime) {
    this._relevantTime = relevantTime;
  }

  /**
   * Set the RelevantTime and return 'this' for chaining.
   * @param {RelevantTime} relevantTime - The shr.base.RelevantTime
   * @returns {BodyStructurePresent} this.
   */
  withRelevantTime(relevantTime) {
    this.relevantTime = relevantTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BodyStructurePresent class.
   * The JSON must be valid against the BodyStructurePresent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyStructurePresent} An instance of BodyStructurePresent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodyStructurePresent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BodyStructurePresent class to a JSON object.
   * The JSON is expected to be valid against the BodyStructurePresent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/BodyStructurePresent' };
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
    if (this.anatomicalLocationStructured != null) {
      inst['AnatomicalLocationStructured'] = typeof this.anatomicalLocationStructured.toJSON === 'function' ? this.anatomicalLocationStructured.toJSON() : this.anatomicalLocationStructured;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the BodyStructurePresent class.
   * The FHIR must be valid against the BodyStructurePresent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BodyStructurePresent} An instance of BodyStructurePresent populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new BodyStructurePresent();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/base/BodyStructurePresent');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-PresentOrAbsent-extension') {
        inst.presentOrAbsent = FHIRHelper.createInstanceFromFHIR('shr.base.PresentOrAbsent', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ConditionOrDiagnosisCode-extension') {
        inst.conditionOrDiagnosisCode = FHIRHelper.createInstanceFromFHIR('shr.base.ConditionOrDiagnosisCode', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-FindingStatus-extension') {
        inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Media-extension') {
        inst.media = inst.media || [];
        const inst_media = FHIRHelper.createInstanceFromFHIR('shr.core.Media', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.media.push(inst_media);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RelevantTime-extension') {
        inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.base.RelevantTime', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
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
    if (fhir['identifier'] != null && fhir['identifier'][0] != null) {
      inst.objectIdentifier = FHIRHelper.createInstanceFromFHIR('shr.base.ObjectIdentifier', fhir['identifier'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.anatomicalLocationStructured = inst.anatomicalLocationStructured || FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', {}, shrId);
      inst.anatomicalLocationStructured.anatomicalLocationOrLandmarkCode = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_modifier of fhir['modifier'] || []) {
      if (fhir_modifier['coding'] != null && fhir_modifier['coding'].some(g => g['code'] != null && FHIRHelper.valueSet('http://hl7.org/fhir/ValueSet/bodysite-laterality').includes(g['code']))) {
        inst.anatomicalLocationStructured = inst.anatomicalLocationStructured || FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', {}, shrId);
        inst.anatomicalLocationStructured.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_modifier, shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_modifier['coding'] != null && fhir_modifier['coding'].some(g => g['code'] != null && FHIRHelper.valueSet('http://example.com/shr/core/vs/AnatomicalDirectionVS').includes(g['code']))) {
        inst.anatomicalLocationStructured = inst.anatomicalLocationStructured || FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', {}, shrId);
        inst.anatomicalLocationStructured.anatomicalDirection = FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalDirection', fhir_modifier, shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['description'] != null) {
      inst.anatomicalLocationStructured = inst.anatomicalLocationStructured || FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', {}, shrId);
      inst.anatomicalLocationStructured.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_image of fhir['image'] || []) {
      inst.anatomicalLocationStructured = inst.anatomicalLocationStructured || FHIRHelper.createInstanceFromFHIR('shr.core.AnatomicalLocationStructured', {}, shrId);
      inst.anatomicalLocationStructured.media = inst.anatomicalLocationStructured.media || [];
      const inst_anatomicalLocationStructured_media = FHIRHelper.createInstanceFromFHIR('shr.core.Media', fhir_image, shrId, allEntries, mappedResources, referencesOut, false);
      inst.anatomicalLocationStructured.media.push(inst_anatomicalLocationStructured_media);
    }
    return inst;
  }

}
export default BodyStructurePresent;
