import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.base.Panel.
 * @extends Observation
 */
class Panel extends Observation {

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
   * @returns {Panel} this.
   */
  withFindingResult(findingResult) {
    this.findingResult = findingResult; return this;
  }

  /**
   * Get the NonIndependentFinding array.
   * @returns {Array<NonIndependentFinding>} The shr.base.NonIndependentFinding array
   */
  get nonIndependentFinding() {
    return this._nonIndependentFinding;
  }

  /**
   * Set the NonIndependentFinding array.
   * @param {Array<NonIndependentFinding>} nonIndependentFinding - The shr.base.NonIndependentFinding array
   */
  set nonIndependentFinding(nonIndependentFinding) {
    this._nonIndependentFinding = nonIndependentFinding;
  }

  /**
   * Set the NonIndependentFinding array and return 'this' for chaining.
   * @param {Array<NonIndependentFinding>} nonIndependentFinding - The shr.base.NonIndependentFinding array
   * @returns {Panel} this.
   */
  withNonIndependentFinding(nonIndependentFinding) {
    this.nonIndependentFinding = nonIndependentFinding; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The shr.core.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The shr.core.AnatomicalLocation
   * @returns {Panel} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the Device.
   * @returns {Device} The shr.entity.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * @param {Device} device - The shr.entity.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * @param {Device} device - The shr.entity.Device
   * @returns {Panel} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the Specimen.
   * @returns {Specimen} The shr.entity.Specimen
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the Specimen.
   * @param {Specimen} specimen - The shr.entity.Specimen
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the Specimen and return 'this' for chaining.
   * @param {Specimen} specimen - The shr.entity.Specimen
   * @returns {Panel} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Panel class.
   * The JSON must be valid against the Panel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Panel} An instance of Panel populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Panel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Panel class to a JSON object.
   * The JSON is expected to be valid against the Panel JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Panel' } };
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
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Panel class.
   * The FHIR must be valid against the Panel FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Panel} An instance of Panel populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Panel();
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension') {
        inst.specificFocusOfFinding = FHIRHelper.createInstanceFromFHIR('shr.base.SpecificFocusOfFinding', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['status'] != null) {
      inst.findingStatus = FHIRHelper.createInstanceFromFHIR('shr.base.FindingStatus', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = FHIRHelper.createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.encounter = mappedResources[entryId];
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.base.RelevantTime', fhir['effectiveDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['dataAbsentReason'] != null) {
      inst.exceptionValue = FHIRHelper.createInstanceFromFHIR('shr.base.ExceptionValue', fhir['dataAbsentReason'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['interpretation'] != null) {
      inst.interpretation = FHIRHelper.createInstanceFromFHIR('shr.base.Interpretation', fhir['interpretation'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comments'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['comments'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['method'] != null) {
      inst.findingMethod = FHIRHelper.createInstanceFromFHIR('shr.base.FindingMethod', fhir['method'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['referenceRange'] != null && fhir['referenceRange'][0] != null) {
      inst.referenceRange = FHIRHelper.createInstanceFromFHIR('shr.base.ReferenceRange', fhir['referenceRange'][0], shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['referenceRange'][0]['low'] != null) {
        inst.referenceRange.range = inst.referenceRange.range || FHIRHelper.createInstanceFromFHIR('shr.core.Range', {}, shrId);
        inst.referenceRange.range.lowerBound = FHIRHelper.createInstanceFromFHIR('shr.core.LowerBound', fhir['referenceRange'][0]['low'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['referenceRange'][0]['high'] != null) {
        inst.referenceRange.range = inst.referenceRange.range || FHIRHelper.createInstanceFromFHIR('shr.core.Range', {}, shrId);
        inst.referenceRange.range.upperBound = FHIRHelper.createInstanceFromFHIR('shr.core.UpperBound', fhir['referenceRange'][0]['high'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['referenceRange'][0]['meaning'] != null) {
        inst.referenceRange.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['referenceRange'][0]['meaning'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['related'] != null && fhir['related'][0] != null) {
      inst.panelMembers = FHIRHelper.createInstanceFromFHIR('shr.base.PanelMembers', fhir['related'][0], shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['related'][0]['target'] != null) {
        inst.panelMembers.observation = inst.panelMembers.observation || [];
        const entryId = fhir['related'][0]['target']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.base.Observation', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        let inst_panelMembers_observation;
        if (mappedResources[entryId]) {
          inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
        }
        else {
          const entryType = 'http://standardhealthrecord.org/spec/shr/base/Observation';
          inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
        }
        inst.panelMembers.observation.push(inst_panelMembers_observation);
      }
    }
    return inst;
  }

}
export default Panel;
