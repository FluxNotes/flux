import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import InformationItem from '../base/InformationItem';

/**
 * Generated class for shr.encounter.Encounter.
 * @extends InformationItem
 */
class Encounter extends InformationItem {

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
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/encounter/Encounter' } };
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
   * Serializes an instance of the Encounter class to a FHIR object.
   * The FHIR is expected to be valid against the Encounter FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
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
      inst['type'] = inst['type'] || [];
      inst['type'] = inst['type'].concat(this.encounterType.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.timePeriod != null) {
      inst['period'] = typeof this.timePeriod.toFHIR === 'function' ? this.timePeriod.toFHIR() : this.timePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Encounter class.
   * The FHIR must be valid against the Encounter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Encounter} An instance of Encounter populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Encounter();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-encounter-EncounterClass-extension');
      if (match != null) {
        inst.encounterClass = createInstanceFromFHIR('shr.encounter.EncounterClass', match, true);
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
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Encounter;
