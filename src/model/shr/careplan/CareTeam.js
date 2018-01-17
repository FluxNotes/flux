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
   * Deserializes JSON data to an instance of the CareTeam class.
   * The JSON must be valid against the CareTeam JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CareTeam} An instance of CareTeam populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CareTeam();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CareTeam;
