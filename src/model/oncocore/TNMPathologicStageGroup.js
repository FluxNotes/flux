// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import ClassRegistry from '../ClassRegistry';

import TNMStagePanelMember from './TNMStagePanelMember';

/**
 * Generated class for oncocore.TNMPathologicStageGroup.
 * @extends TNMStagePanelMember
 */
class TNMPathologicStageGroup extends TNMStagePanelMember {

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
   * @returns {TNMPathologicStageGroup} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   */
  set findingResult(findingResult) {
    this._findingResult = findingResult;
  }

  /**
   * Set the FindingResult and return 'this' for chaining.
   * @param {FindingResult} findingResult - The shr.base.FindingResult
   * @returns {TNMPathologicStageGroup} this.
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
   * @returns {TNMPathologicStageGroup} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the CancerStageTiming.
   * @returns {CancerStageTiming} The oncocore.CancerStageTiming
   */
  get cancerStageTiming() {
    return this._cancerStageTiming;
  }

  /**
   * Set the CancerStageTiming.
   * This field/value is required.
   * @param {CancerStageTiming} cancerStageTiming - The oncocore.CancerStageTiming
   */
  set cancerStageTiming(cancerStageTiming) {
    this._cancerStageTiming = cancerStageTiming;
  }

  /**
   * Set the CancerStageTiming and return 'this' for chaining.
   * This field/value is required.
   * @param {CancerStageTiming} cancerStageTiming - The oncocore.CancerStageTiming
   * @returns {TNMPathologicStageGroup} this.
   */
  withCancerStageTiming(cancerStageTiming) {
    this.cancerStageTiming = cancerStageTiming; return this;
  }

  /**
   * Get the CancerStageSuffix.
   * @returns {CancerStageSuffix} The oncocore.CancerStageSuffix
   */
  get cancerStageSuffix() {
    return this._cancerStageSuffix;
  }

  /**
   * Set the CancerStageSuffix.
   * @param {CancerStageSuffix} cancerStageSuffix - The oncocore.CancerStageSuffix
   */
  set cancerStageSuffix(cancerStageSuffix) {
    this._cancerStageSuffix = cancerStageSuffix;
  }

  /**
   * Set the CancerStageSuffix and return 'this' for chaining.
   * @param {CancerStageSuffix} cancerStageSuffix - The oncocore.CancerStageSuffix
   * @returns {TNMPathologicStageGroup} this.
   */
  withCancerStageSuffix(cancerStageSuffix) {
    this.cancerStageSuffix = cancerStageSuffix; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TNMPathologicStageGroup class.
   * The JSON must be valid against the TNMPathologicStageGroup JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TNMPathologicStageGroup} An instance of TNMPathologicStageGroup populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('oncocore', 'TNMPathologicStageGroup');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the TNMPathologicStageGroup class to a JSON object.
   * The JSON is expected to be valid against the TNMPathologicStageGroup JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/oncocore/TNMPathologicStageGroup' };
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
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
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
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.cancerStageTiming != null) {
      inst['CancerStageTiming'] = typeof this.cancerStageTiming.toJSON === 'function' ? this.cancerStageTiming.toJSON() : this.cancerStageTiming;
    }
    if (this.cancerStageSuffix != null) {
      inst['CancerStageSuffix'] = typeof this.cancerStageSuffix.toJSON === 'function' ? this.cancerStageSuffix.toJSON() : this.cancerStageSuffix;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the TNMPathologicStageGroup class.
   * The FHIR must be valid against the TNMPathologicStageGroup FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {TNMPathologicStageGroup} An instance of TNMPathologicStageGroup populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('oncocore', 'TNMPathologicStageGroup');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/oncocore/TNMPathologicStageGroup', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension') {
        inst.specificFocusOfFinding = FHIRHelper.createInstanceFromFHIR('shr.base.SpecificFocusOfFinding', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('oncocore.CancerDisorderPresent', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst.specificFocusOfFinding.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/oncocore/CancerDisorderPresent';
            inst.specificFocusOfFinding.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/oncocore-CancerStageTiming-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/oncocore-CancerStageTiming-extension') {
        inst.cancerStageTiming = FHIRHelper.createInstanceFromFHIR('oncocore.CancerStageTiming', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.cancerStageTiming.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    if (fhir['status'] != null) {
      inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.encounter = mappedResources[entryId];
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectiveDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['valueCodeableConcept'] != null) {
      inst.findingResult = FHIRHelper.createInstanceFromFHIR('shr.base.FindingResult', fhir['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['dataAbsentReason'] != null) {
      inst.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir['dataAbsentReason'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = FHIRHelper.createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comments'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comments'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = FHIRHelper.createInstanceFromFHIR('oncocore.CancerStagingSystem', fhir['method'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default TNMPathologicStageGroup;
