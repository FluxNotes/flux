import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Deceased.
 */
class Deceased {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Get the DateOfDeath.
   * @returns {DateOfDeath} The shr.entity.DateOfDeath
   */
  get dateOfDeath() {
    return this._dateOfDeath;
  }

  /**
   * Set the DateOfDeath.
   * @param {DateOfDeath} dateOfDeath - The shr.entity.DateOfDeath
   */
  set dateOfDeath(dateOfDeath) {
    this._dateOfDeath = dateOfDeath;
  }

  /**
   * Get the AgeAtDeath.
   * @returns {AgeAtDeath} The shr.entity.AgeAtDeath
   */
  get ageAtDeath() {
    return this._ageAtDeath;
  }

  /**
   * Set the AgeAtDeath.
   * @param {AgeAtDeath} ageAtDeath - The shr.entity.AgeAtDeath
   */
  set ageAtDeath(ageAtDeath) {
    this._ageAtDeath = ageAtDeath;
  }

  /**
   * Deserializes JSON data to an instance of the Deceased class.
   * The JSON must be valid against the Deceased JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Deceased} An instance of Deceased populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Deceased();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Deceased;
