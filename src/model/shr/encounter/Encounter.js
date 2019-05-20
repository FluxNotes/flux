import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import InformationItem from '../base/InformationItem';

/**
 * Generated class for shr.encounter.Encounter.
 * @extends InformationItem
 */
class Encounter extends InformationItem {

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
   * @returns {Encounter} this.
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
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {Encounter} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the EncounterClass.
   * @returns {EncounterClass} The shr.encounter.EncounterClass
   */
  get encounterClass() {
    return this._encounterClass;
  }

  /**
   * Set the EncounterClass.
   * @param {EncounterClass} encounterClass - The shr.encounter.EncounterClass
   */
  set encounterClass(encounterClass) {
    this._encounterClass = encounterClass;
  }

  /**
   * Set the EncounterClass and return 'this' for chaining.
   * @param {EncounterClass} encounterClass - The shr.encounter.EncounterClass
   * @returns {Encounter} this.
   */
  withEncounterClass(encounterClass) {
    this.encounterClass = encounterClass; return this;
  }

  /**
   * Get the EncounterType array.
   * @returns {Array<EncounterType>} The shr.encounter.EncounterType array
   */
  get encounterType() {
    return this._encounterType;
  }

  /**
   * Set the EncounterType array.
   * @param {Array<EncounterType>} encounterType - The shr.encounter.EncounterType array
   */
  set encounterType(encounterType) {
    this._encounterType = encounterType;
  }

  /**
   * Set the EncounterType array and return 'this' for chaining.
   * @param {Array<EncounterType>} encounterType - The shr.encounter.EncounterType array
   * @returns {Encounter} this.
   */
  withEncounterType(encounterType) {
    this.encounterType = encounterType; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {Encounter} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
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
   * @returns {Encounter} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {Encounter} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the Diagnosis array.
   * @returns {Array<Diagnosis>} The shr.encounter.Diagnosis array
   */
  get diagnosis() {
    return this._diagnosis;
  }

  /**
   * Set the Diagnosis array.
   * @param {Array<Diagnosis>} diagnosis - The shr.encounter.Diagnosis array
   */
  set diagnosis(diagnosis) {
    this._diagnosis = diagnosis;
  }

  /**
   * Set the Diagnosis array and return 'this' for chaining.
   * @param {Array<Diagnosis>} diagnosis - The shr.encounter.Diagnosis array
   * @returns {Encounter} this.
   */
  withDiagnosis(diagnosis) {
    this.diagnosis = diagnosis; return this;
  }

  /**
   * Get the shr.base.ClinicalNote reference.
   * @returns {Reference} The shr.base.ClinicalNote reference
   */
  get clinicalNote() {
    return this._clinicalNote;
  }

  /**
   * Set the shr.base.ClinicalNote reference.
   * @param {Reference} clinicalNote - The shr.base.ClinicalNote reference
   */
  set clinicalNote(clinicalNote) {
    this._clinicalNote = clinicalNote;
  }

  /**
   * Set the shr.base.ClinicalNote reference and return 'this' for chaining.
   * @param {Reference} clinicalNote - The shr.base.ClinicalNote reference
   * @returns {Encounter} this.
   */
  withClinicalNote(clinicalNote) {
    this.clinicalNote = clinicalNote; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Encounter class.
   * The JSON must be valid against the Encounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Encounter} An instance of Encounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Encounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Encounter class to a JSON object.
   * The JSON is expected to be valid against the Encounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo ? this._entryInfo.toJSON() : {};
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/encounter/Encounter' };
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
    if (this.encounterClass != null) {
      inst['EncounterClass'] = typeof this.encounterClass.toJSON === 'function' ? this.encounterClass.toJSON() : this.encounterClass;
    }
    if (this.encounterType != null) {
      inst['EncounterType'] = this.encounterType.map(f => f.toJSON());
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.diagnosis != null) {
      inst['Diagnosis'] = this.diagnosis.map(f => f.toJSON());
    }
    if (this.clinicalNote != null) {
      inst['ClinicalNote'] = typeof this.clinicalNote.toJSON === 'function' ? this.clinicalNote.toJSON() : this.clinicalNote;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Encounter class.
   * The FHIR must be valid against the Encounter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Encounter} An instance of Encounter populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Encounter();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/encounter/Encounter');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-EncounterClass-extension') {
        inst.encounterClass = FHIRHelper.createInstanceFromFHIR('shr.encounter.EncounterClass', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Diagnosis-extension') {
        inst.diagnosis = inst.diagnosis || [];
        const inst_diagnosis = FHIRHelper.createInstanceFromFHIR('shr.encounter.Diagnosis', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.diagnosis.push(inst_diagnosis);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ClinicalNote-extension') {
        inst.clinicalNote = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.base.ClinicalNote', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_type of fhir['type'] || []) {
      inst.encounterType = inst.encounterType || [];
      const inst_encounterType = FHIRHelper.createInstanceFromFHIR('shr.encounter.EncounterType', fhir_type, shrId, allEntries, mappedResources, referencesOut, false);
      inst.encounterType.push(inst_encounterType);
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
    if (fhir['period'] != null) {
      inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Encounter;
