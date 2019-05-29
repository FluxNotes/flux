// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Encounter from './Encounter';

/**
 * Generated class for shr.encounter.DetailedEncounter.
 * @extends Encounter
 */
class DetailedEncounter extends Encounter {

  /**
   * Deserializes JSON data to an instance of the DetailedEncounter class.
   * The JSON must be valid against the DetailedEncounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DetailedEncounter} An instance of DetailedEncounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DetailedEncounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DetailedEncounter class to a JSON object.
   * The JSON is expected to be valid against the DetailedEncounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/encounter/DetailedEncounter' } };
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
   * Deserializes FHIR JSON data to an instance of the DetailedEncounter class.
   * The FHIR must be valid against the DetailedEncounter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DetailedEncounter} An instance of DetailedEncounter populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new DetailedEncounter();
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-EncounterClass-extension') {
        inst.encounterClass = FHIRHelper.createInstanceFromFHIR('shr.encounter.EncounterClass', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst.partOf.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/encounter/Encounter';
            inst.partOf.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Diagnosis-extension') {
        inst.diagnosis = inst.diagnosis || [];
        const inst_diagnosis = FHIRHelper.createInstanceFromFHIR('shr.encounter.Diagnosis', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.diagnosis.push(inst_diagnosis);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ClinicalNote-extension') {
        inst.clinicalNote = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.base.ClinicalNote', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_type of fhir['type'] || []) {
      inst.encounterType = inst.encounterType || [];
      const inst_encounterType = FHIRHelper.createInstanceFromFHIR('shr.encounter.EncounterType', fhir_type, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      inst.encounterType.push(inst_encounterType);
    }
    if (fhir['patient'] != null) {
      const entryId = fhir['patient']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['period'] != null) {
      inst.timePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir['period'], 'Period', shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default DetailedEncounter;
