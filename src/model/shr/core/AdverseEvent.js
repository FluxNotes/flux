// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ClinicalStatement from './ClinicalStatement';

/**
 * Generated class for shr.core.AdverseEvent.
 * @extends ClinicalStatement
 */
class AdverseEvent extends ClinicalStatement {

  /**
   * Get the Identifier array.
   * @returns {Array<Identifier>} The shr.core.Identifier array
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier array.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier array and return 'this' for chaining.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   * @returns {AdverseEvent} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the AdverseEventSubjectOfRecord.
   * @returns {AdverseEventSubjectOfRecord} The shr.core.AdverseEventSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the AdverseEventSubjectOfRecord.
   * This field/value is required.
   * @param {AdverseEventSubjectOfRecord} subjectOfRecord - The shr.core.AdverseEventSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the AdverseEventSubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseEventSubjectOfRecord} subjectOfRecord - The shr.core.AdverseEventSubjectOfRecord
   * @returns {AdverseEvent} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
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
   * Get the Seriousness.
   * @returns {Seriousness} The shr.core.Seriousness
   */
  get seriousness() {
    return this._seriousness;
  }

  /**
   * Set the Seriousness.
   * This field/value is required.
   * @param {Seriousness} seriousness - The shr.core.Seriousness
   */
  set seriousness(seriousness) {
    this._seriousness = seriousness;
  }

  /**
   * Set the Seriousness and return 'this' for chaining.
   * This field/value is required.
   * @param {Seriousness} seriousness - The shr.core.Seriousness
   * @returns {AdverseEvent} this.
   */
  withSeriousness(seriousness) {
    this.seriousness = seriousness; return this;
  }

  /**
   * Get the AdverseEventRecorder.
   * @returns {AdverseEventRecorder} The shr.core.AdverseEventRecorder
   */
  get adverseEventRecorder() {
    return this._adverseEventRecorder;
  }

  /**
   * Set the AdverseEventRecorder.
   * @param {AdverseEventRecorder} adverseEventRecorder - The shr.core.AdverseEventRecorder
   */
  set adverseEventRecorder(adverseEventRecorder) {
    this._adverseEventRecorder = adverseEventRecorder;
  }

  /**
   * Set the AdverseEventRecorder and return 'this' for chaining.
   * @param {AdverseEventRecorder} adverseEventRecorder - The shr.core.AdverseEventRecorder
   * @returns {AdverseEvent} this.
   */
  withAdverseEventRecorder(adverseEventRecorder) {
    this.adverseEventRecorder = adverseEventRecorder; return this;
  }

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.core.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.core.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The shr.core.Outcome
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
   * @returns {Array<AdverseEventCondition>} The shr.core.AdverseEventCondition array
   */
  get adverseEventCondition() {
    return this._adverseEventCondition;
  }

  /**
   * Set the AdverseEventCondition array.
   * @param {Array<AdverseEventCondition>} adverseEventCondition - The shr.core.AdverseEventCondition array
   */
  set adverseEventCondition(adverseEventCondition) {
    this._adverseEventCondition = adverseEventCondition;
  }

  /**
   * Set the AdverseEventCondition array and return 'this' for chaining.
   * @param {Array<AdverseEventCondition>} adverseEventCondition - The shr.core.AdverseEventCondition array
   * @returns {AdverseEvent} this.
   */
  withAdverseEventCondition(adverseEventCondition) {
    this.adverseEventCondition = adverseEventCondition; return this;
  }

  /**
   * Get the CausalAttribution array.
   * @returns {Array<CausalAttribution>} The shr.core.CausalAttribution array
   */
  get causalAttribution() {
    return this._causalAttribution;
  }

  /**
   * Set the CausalAttribution array.
   * @param {Array<CausalAttribution>} causalAttribution - The shr.core.CausalAttribution array
   */
  set causalAttribution(causalAttribution) {
    this._causalAttribution = causalAttribution;
  }

  /**
   * Set the CausalAttribution array and return 'this' for chaining.
   * @param {Array<CausalAttribution>} causalAttribution - The shr.core.CausalAttribution array
   * @returns {AdverseEvent} this.
   */
  withCausalAttribution(causalAttribution) {
    this.causalAttribution = causalAttribution; return this;
  }

  /**
   * Get the ActionTaken array.
   * @returns {Array<ActionTaken>} The shr.core.ActionTaken array
   */
  get actionTaken() {
    return this._actionTaken;
  }

  /**
   * Set the ActionTaken array.
   * @param {Array<ActionTaken>} actionTaken - The shr.core.ActionTaken array
   */
  set actionTaken(actionTaken) {
    this._actionTaken = actionTaken;
  }

  /**
   * Set the ActionTaken array and return 'this' for chaining.
   * @param {Array<ActionTaken>} actionTaken - The shr.core.ActionTaken array
   * @returns {AdverseEvent} this.
   */
  withActionTaken(actionTaken) {
    this.actionTaken = actionTaken; return this;
  }

  /**
   * Get the AssociatedStudy.
   * @returns {AssociatedStudy} The shr.core.AssociatedStudy
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the AssociatedStudy.
   * @param {AssociatedStudy} associatedStudy - The shr.core.AssociatedStudy
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Set the AssociatedStudy and return 'this' for chaining.
   * @param {AssociatedStudy} associatedStudy - The shr.core.AssociatedStudy
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
    const klass = ClassRegistry.get('shr.core', 'AdverseEvent');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AdverseEvent class to a JSON object.
   * The JSON is expected to be valid against the AdverseEvent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/AdverseEvent' } };
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
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.seriousness != null) {
      inst['Seriousness'] = typeof this.seriousness.toJSON === 'function' ? this.seriousness.toJSON() : this.seriousness;
    }
    if (this.adverseEventRecorder != null) {
      inst['AdverseEventRecorder'] = typeof this.adverseEventRecorder.toJSON === 'function' ? this.adverseEventRecorder.toJSON() : this.adverseEventRecorder;
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
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AdverseEvent} An instance of AdverseEvent populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'AdverseEvent');
    const inst = new klass();
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AdverseEventSubjectOfRecord-extension') {
        inst.subjectOfRecord = FHIRHelper.createInstanceFromFHIR('shr.core.AdverseEventSubjectOfRecord', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-OccurrenceTime-extension') {
        inst.occurrenceTime = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.type.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Seriousness-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Seriousness-extension') {
        inst.seriousness = FHIRHelper.createInstanceFromFHIR('shr.core.Seriousness', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.seriousness.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AdverseEventRecorder-extension') {
        inst.adverseEventRecorder = FHIRHelper.createInstanceFromFHIR('shr.core.AdverseEventRecorder', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Outcome-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Outcome-extension') {
        inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.core.Outcome', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.outcome.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CommentOrDescription-extension') {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AdverseEventCondition-extension') {
        inst.adverseEventCondition = inst.adverseEventCondition || [];
        const inst_adverseEventCondition = FHIRHelper.createInstanceFromFHIR('shr.core.AdverseEventCondition', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.adverseEventCondition.push(inst_adverseEventCondition);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CausalAttribution-extension') {
        inst.causalAttribution = inst.causalAttribution || [];
        const inst_causalAttribution = FHIRHelper.createInstanceFromFHIR('shr.core.CausalAttribution', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.causalAttribution.push(inst_causalAttribution);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ActionTaken-extension') {
        inst.actionTaken = inst.actionTaken || [];
        const inst_actionTaken = FHIRHelper.createInstanceFromFHIR('shr.core.ActionTaken', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.actionTaken.push(inst_actionTaken);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AssociatedStudy-extension') {
        inst.associatedStudy = FHIRHelper.createInstanceFromFHIR('shr.core.AssociatedStudy', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default AdverseEvent;
