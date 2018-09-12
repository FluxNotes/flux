import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.careplan.CareTeam.
 * @extends Entity
 */
class CareTeam extends Entity {

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
   * @returns {CareTeam} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Participant array.
   * @returns {Array<Participant>} The shr.action.Participant array
   */
  get participant() {
    return this._participant;
  }

  /**
   * Set the Participant array.
   * @param {Array<Participant>} participant - The shr.action.Participant array
   */
  set participant(participant) {
    this._participant = participant;
  }

  /**
   * Set the Participant array and return 'this' for chaining.
   * @param {Array<Participant>} participant - The shr.action.Participant array
   * @returns {CareTeam} this.
   */
  withParticipant(participant) {
    this.participant = participant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CareTeam class.
   * The JSON must be valid against the CareTeam JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CareTeam} An instance of CareTeam populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CareTeam();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CareTeam class to a JSON object.
   * The JSON is expected to be valid against the CareTeam JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/careplan/CareTeam' };
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
    if (this.participant != null) {
      inst['Participant'] = this.participant.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the CareTeam class to a FHIR object.
   * The FHIR is expected to be valid against the CareTeam FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
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
    if (this.participant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.participant.toFHIR(true));
    }
    return inst;
  }
}
export default CareTeam;
