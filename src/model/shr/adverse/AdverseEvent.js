import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import InformationItem from '../base/InformationItem';

/**
 * Generated class for shr.adverse.AdverseEvent.
 * @extends InformationItem
 */
class AdverseEvent extends InformationItem {

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
   * @returns {AdverseEvent} this.
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
   * @returns {AdverseEvent} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {AdverseEvent} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {AdverseEvent} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Get the Seriousness.
   * @returns {Seriousness} The shr.adverse.Seriousness
   */
  get seriousness() {
    return this._seriousness;
  }

  /**
   * Set the Seriousness.
   * This field/value is required.
   * @param {Seriousness} seriousness - The shr.adverse.Seriousness
   */
  set seriousness(seriousness) {
    this._seriousness = seriousness;
  }

  /**
   * Set the Seriousness and return 'this' for chaining.
   * This field/value is required.
   * @param {Seriousness} seriousness - The shr.adverse.Seriousness
   * @returns {AdverseEvent} this.
   */
  withSeriousness(seriousness) {
    this.seriousness = seriousness; return this;
  }

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.base.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.base.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The shr.base.Outcome
   * @returns {AdverseEvent} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {AdverseEvent} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the AdverseEventCondition array.
   * @returns {Array<AdverseEventCondition>} The shr.adverse.AdverseEventCondition array
   */
  get adverseEventCondition() {
    return this._adverseEventCondition;
  }

  /**
   * Set the AdverseEventCondition array.
   * @param {Array<AdverseEventCondition>} adverseEventCondition - The shr.adverse.AdverseEventCondition array
   */
  set adverseEventCondition(adverseEventCondition) {
    this._adverseEventCondition = adverseEventCondition;
  }

  /**
   * Set the AdverseEventCondition array and return 'this' for chaining.
   * @param {Array<AdverseEventCondition>} adverseEventCondition - The shr.adverse.AdverseEventCondition array
   * @returns {AdverseEvent} this.
   */
  withAdverseEventCondition(adverseEventCondition) {
    this.adverseEventCondition = adverseEventCondition; return this;
  }

  /**
   * Get the CausalAttribution array.
   * @returns {Array<CausalAttribution>} The shr.adverse.CausalAttribution array
   */
  get causalAttribution() {
    return this._causalAttribution;
  }

  /**
   * Set the CausalAttribution array.
   * @param {Array<CausalAttribution>} causalAttribution - The shr.adverse.CausalAttribution array
   */
  set causalAttribution(causalAttribution) {
    this._causalAttribution = causalAttribution;
  }

  /**
   * Set the CausalAttribution array and return 'this' for chaining.
   * @param {Array<CausalAttribution>} causalAttribution - The shr.adverse.CausalAttribution array
   * @returns {AdverseEvent} this.
   */
  withCausalAttribution(causalAttribution) {
    this.causalAttribution = causalAttribution; return this;
  }

  /**
   * Get the ActionTaken array.
   * @returns {Array<ActionTaken>} The shr.adverse.ActionTaken array
   */
  get actionTaken() {
    return this._actionTaken;
  }

  /**
   * Set the ActionTaken array.
   * @param {Array<ActionTaken>} actionTaken - The shr.adverse.ActionTaken array
   */
  set actionTaken(actionTaken) {
    this._actionTaken = actionTaken;
  }

  /**
   * Set the ActionTaken array and return 'this' for chaining.
   * @param {Array<ActionTaken>} actionTaken - The shr.adverse.ActionTaken array
   * @returns {AdverseEvent} this.
   */
  withActionTaken(actionTaken) {
    this.actionTaken = actionTaken; return this;
  }

  /**
   * Get the AssociatedStudy.
   * @returns {AssociatedStudy} The shr.adverse.AssociatedStudy
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the AssociatedStudy.
   * @param {AssociatedStudy} associatedStudy - The shr.adverse.AssociatedStudy
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Set the AssociatedStudy and return 'this' for chaining.
   * @param {AssociatedStudy} associatedStudy - The shr.adverse.AssociatedStudy
   * @returns {AdverseEvent} this.
   */
  withAssociatedStudy(associatedStudy) {
    this.associatedStudy = associatedStudy; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEvent class.
   * The JSON must be valid against the AdverseEvent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEvent} An instance of AdverseEvent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseEvent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AdverseEvent class to a JSON object.
   * The JSON is expected to be valid against the AdverseEvent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/AdverseEvent' } };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.seriousness != null) {
      inst['Seriousness'] = typeof this.seriousness.toJSON === 'function' ? this.seriousness.toJSON() : this.seriousness;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.adverseEventCondition != null) {
      inst['AdverseEventCondition'] = this.adverseEventCondition.map(f => f.toJSON());
    }
    if (this.causalAttribution != null) {
      inst['CausalAttribution'] = this.causalAttribution.map(f => f.toJSON());
    }
    if (this.actionTaken != null) {
      inst['ActionTaken'] = this.actionTaken.map(f => f.toJSON());
    }
    if (this.associatedStudy != null) {
      inst['AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AdverseEvent class.
   * The FHIR must be valid against the AdverseEvent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AdverseEvent} An instance of AdverseEvent populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AdverseEvent();
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-adverse-AdverseEventCondition-extension') {
        inst.adverseEventCondition = inst.adverseEventCondition || [];
        const inst_adverseEventCondition = FHIRHelper.createInstanceFromFHIR('shr.adverse.AdverseEventCondition', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.adverseEventCondition.push(inst_adverseEventCondition);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-adverse-ActionTaken-extension') {
        inst.actionTaken = inst.actionTaken || [];
        const inst_actionTaken = FHIRHelper.createInstanceFromFHIR('shr.adverse.ActionTaken', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.actionTaken.push(inst_actionTaken);
      }
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['date'] != null) {
      inst.occurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTime', fhir['date'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['seriousness'] != null) {
      inst.seriousness = FHIRHelper.createInstanceFromFHIR('shr.adverse.Seriousness', fhir['seriousness'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['outcome'] != null) {
      inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.base.Outcome', fhir['outcome'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['recorder'] != null) {
      inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
      const entryId = fhir['recorder']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.metadata.informationRecorder = mappedResources[entryId];
    }
    if (fhir['description'] != null) {
      inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['description'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['suspectEntity'] != null && fhir['suspectEntity'][0] != null) {
      if (fhir['suspectEntity'][0]['instance'] != null) {
        inst.causalAttribution = inst.causalAttribution || [];
        const inst_causalAttribution = FHIRHelper.createInstanceFromFHIR('shr.adverse.CausalAttribution', {}, shrId);
        inst.causalAttribution.push(inst_causalAttribution);
        const entryId = fhir['suspectEntity'][0]['instance']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Substance', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_causalAttribution.possibleCause = mappedResources[entryId];
      }
      if (fhir['suspectEntity'][0]['causalityAssessment'] != null) {
        inst.causalAttribution = inst.causalAttribution || [];
        const inst_causalAttribution = FHIRHelper.createInstanceFromFHIR('shr.adverse.CausalAttribution', {}, shrId);
        inst.causalAttribution.push(inst_causalAttribution);
        inst_causalAttribution.certainty = FHIRHelper.createInstanceFromFHIR('shr.base.Certainty', fhir['suspectEntity'][0]['causalityAssessment'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['study'] != null && fhir['study'][0] != null) {
      const entryId = fhir['study'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.research.Study', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.associatedStudy = mappedResources[entryId];
    }
    return inst;
  }

}
export default AdverseEvent;
