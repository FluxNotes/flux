import { setPropertiesFromJSON } from '../../json-helper';

import Role from '../entity/Role';

/**
 * Generated class for shr.research.ResearchSubject.
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
   * Get the value (aliases party).
   * @returns {Reference} The shr.entity.Patient reference
   */
  get value() {
    return this._party;
  }

  /**
   * Set the value (aliases party).
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Patient reference
   */
  set value(value) {
    this._party = value;
  }

  /**
   * Set the value (aliases party) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.entity.Patient reference
   * @returns {ResearchSubject} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.entity.Patient reference.
   * @returns {Reference} The shr.entity.Patient reference
   */
  get party() {
    return this._party;
  }

  /**
   * Set the shr.entity.Patient reference.
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Patient reference
   */
  set party(party) {
    this._party = party;
  }

  /**
   * Set the shr.entity.Patient reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} party - The shr.entity.Patient reference
   * @returns {ResearchSubject} this.
   */
  withParty(party) {
    this.party = party; return this;
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
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   * @returns {ResearchSubject} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.action.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.action.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {ParticipationPeriod} participationPeriod - The shr.action.ParticipationPeriod
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
  static fromJSON(json = {}) {
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
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/research/ResearchSubject' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
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
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'ResearchSubject';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.terminationReason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.terminationReason.toFHIR(true));
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
    return inst;
  }
}
export default ResearchSubject;
