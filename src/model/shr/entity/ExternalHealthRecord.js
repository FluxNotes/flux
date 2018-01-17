import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.ExternalHealthRecord.
 * @extends Entity
 */
class ExternalHealthRecord extends Entity {

  /**
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Get the AccessTime.
   * @returns {AccessTime} The shr.entity.AccessTime
   */
  get accessTime() {
    return this._accessTime;
  }

  /**
   * Set the AccessTime.
   * @param {AccessTime} accessTime - The shr.entity.AccessTime
   */
  set accessTime(accessTime) {
    this._accessTime = accessTime;
  }

  /**
   * Deserializes JSON data to an instance of the ExternalHealthRecord class.
   * The JSON must be valid against the ExternalHealthRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExternalHealthRecord} An instance of ExternalHealthRecord populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExternalHealthRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ExternalHealthRecord;
