import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.research.ResearchSubject.
 * @extends Entity
 */
class ResearchSubject extends Entity {

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
   * Get the shr.entity.Patient reference.
   * @returns {Reference} The shr.entity.Patient reference
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the shr.entity.Patient reference.
   * This field/value is required.
   * @param {Reference} patient - The shr.entity.Patient reference
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the shr.entity.Patient reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} patient - The shr.entity.Patient reference
   * @returns {ResearchSubject} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the shr.research.Study reference.
   * @returns {Reference} The shr.research.Study reference
   */
  get study() {
    return this._study;
  }

  /**
   * Set the shr.research.Study reference.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   */
  set study(study) {
    this._study = study;
  }

  /**
   * Set the shr.research.Study reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} study - The shr.research.Study reference
   * @returns {ResearchSubject} this.
   */
  withStudy(study) {
    this.study = study; return this;
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
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.base.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   * @returns {ResearchSubject} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
  }

  /**
   * Get the TerminationReason.
   * @returns {TerminationReason} The shr.research.TerminationReason
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Set the TerminationReason and return 'this' for chaining.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
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
    const inst = new ResearchSubject();
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/research/ResearchSubject' };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.study != null) {
      inst['Study'] = typeof this.study.toJSON === 'function' ? this.study.toJSON() : this.study;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
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
   * Serializes an instance of the ResearchSubject class to a FHIR object.
   * The FHIR is expected to be valid against the ResearchSubject FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'ResearchSubject';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.terminationReason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.terminationReason.toFHIR === 'function' ? this.terminationReason.toFHIR(true) : this.terminationReason);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.participationPeriod != null) {
      inst['period'] = typeof this.participationPeriod.toFHIR === 'function' ? this.participationPeriod.toFHIR() : this.participationPeriod;
    }
    if (this.study != null) {
      inst['study'] = typeof this.study.toFHIR === 'function' ? this.study.toFHIR() : this.study;
    }
    if (this.patient != null) {
      inst['individual'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ResearchSubject class.
   * The FHIR must be valid against the ResearchSubject FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ResearchSubject} An instance of ResearchSubject populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ResearchSubject();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-research-TerminationReason-extension');
      if (match != null) {
        inst.terminationReason = createInstanceFromFHIR('shr.research.TerminationReason', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['period'] != null) {
      inst.participationPeriod = createInstanceFromFHIR('shr.base.ParticipationPeriod', fhir['period']);
    }
    if (fhir['study'] != null) {
      inst.study = createInstanceFromFHIR('shr.research.Study', fhir['study']);
    }
    if (fhir['individual'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['individual']);
    }
    return inst;
  }

}
export default ResearchSubject;
