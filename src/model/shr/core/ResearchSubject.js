// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Role from './Role';

/**
 * Generated class for shr.core.ResearchSubject.
 * @extends Role
 */
class ResearchSubject extends Role {

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
   * @returns {ResearchSubject} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {ResearchSubject} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

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
   * @returns {ResearchSubject} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the shr.core.Patient reference.
   * @returns {Reference} The shr.core.Patient reference
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the shr.core.Patient reference.
   * This field/value is required.
   * @param {Reference} patient - The shr.core.Patient reference
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the shr.core.Patient reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} patient - The shr.core.Patient reference
   * @returns {ResearchSubject} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the shr.core.ResearchStudy reference.
   * @returns {Reference} The shr.core.ResearchStudy reference
   */
  get researchStudy() {
    return this._researchStudy;
  }

  /**
   * Set the shr.core.ResearchStudy reference.
   * This field/value is required.
   * @param {Reference} researchStudy - The shr.core.ResearchStudy reference
   */
  set researchStudy(researchStudy) {
    this._researchStudy = researchStudy;
  }

  /**
   * Set the shr.core.ResearchStudy reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} researchStudy - The shr.core.ResearchStudy reference
   * @returns {ResearchSubject} this.
   */
  withResearchStudy(researchStudy) {
    this.researchStudy = researchStudy; return this;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.core.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.core.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.core.ParticipationPeriod
   * @returns {ResearchSubject} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
  }

  /**
   * Get the TerminationReason.
   * @returns {TerminationReason} The shr.core.TerminationReason
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason.
   * @param {TerminationReason} terminationReason - The shr.core.TerminationReason
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Set the TerminationReason and return 'this' for chaining.
   * @param {TerminationReason} terminationReason - The shr.core.TerminationReason
   * @returns {ResearchSubject} this.
   */
  withTerminationReason(terminationReason) {
    this.terminationReason = terminationReason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ResearchSubject class.
   * The JSON must be valid against the ResearchSubject JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ResearchSubject} An instance of ResearchSubject populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ResearchSubject');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ResearchSubject class to a JSON object.
   * The JSON is expected to be valid against the ResearchSubject JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ResearchSubject' };
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
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.researchStudy != null) {
      inst['ResearchStudy'] = typeof this.researchStudy.toJSON === 'function' ? this.researchStudy.toJSON() : this.researchStudy;
    }
    if (this.participationPeriod != null) {
      inst['ParticipationPeriod'] = typeof this.participationPeriod.toJSON === 'function' ? this.participationPeriod.toJSON() : this.participationPeriod;
    }
    if (this.terminationReason != null) {
      inst['TerminationReason'] = typeof this.terminationReason.toJSON === 'function' ? this.terminationReason.toJSON() : this.terminationReason;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ResearchSubject class.
   * The FHIR must be valid against the ResearchSubject FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ResearchSubject} An instance of ResearchSubject populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ResearchSubject');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/ResearchSubject', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Patient-extension') {
        inst.patient = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.Patient', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ResearchStudy-extension') {
        inst.researchStudy = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.ResearchStudy', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ParticipationPeriod-extension') {
        inst.participationPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.ParticipationPeriod', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TerminationReason-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TerminationReason-extension') {
        inst.terminationReason = FHIRHelper.createInstanceFromFHIR('shr.core.TerminationReason', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.terminationReason.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
    }
    return inst;
  }

}
export default ResearchSubject;
