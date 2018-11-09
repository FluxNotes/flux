import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Serializes an instance of the DetailedEncounter class to a FHIR object.
   * The FHIR is expected to be valid against the DetailedEncounter FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.encounterClass != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounterClass.toFHIR === 'function' ? this.encounterClass.toFHIR(true) : this.encounterClass);
    }
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.diagnosis != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.diagnosis.toFHIR === 'function' ? this.diagnosis.toFHIR(true) : this.diagnosis);
    }
    if (this.clinicalNote != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.clinicalNote.toFHIR === 'function' ? this.clinicalNote.toFHIR(true) : this.clinicalNote);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.encounterType != null) {
      inst['type'] = inst ['type'] || [];
      inst['type'] = inst['type'].concat(this.encounterType.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.timePeriod != null) {
      inst['period'] = typeof this.timePeriod.toFHIR === 'function' ? this.timePeriod.toFHIR() : this.timePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DetailedEncounter class.
   * The FHIR must be valid against the DetailedEncounter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {DetailedEncounter} An instance of DetailedEncounter populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new DetailedEncounter();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-EncounterClass-extension');
      if (match != null) {
        inst.encounterClass = createInstanceFromFHIR('shr.encounter.EncounterClass', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Diagnosis-extension');
      if (match != null) {
        inst.diagnosis = createInstanceFromFHIR('shr.encounter.Diagnosis', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ClinicalNote-extension');
      if (match != null) {
        inst.clinicalNote = createInstanceFromFHIR('shr.base.ClinicalNote', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['type'] != null) {
      inst.encounterType = inst.encounterType || [];
      inst.encounterType = inst.encounterType.concat(fhir['type'].map(f => createInstanceFromFHIR('shr.encounter.EncounterType', f)));
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['period'] != null) {
      inst.timePeriod = createInstanceFromFHIR('shr.core.TimePeriod', fhir['period']);
    }
    return inst;
  }

}
export default DetailedEncounter;
