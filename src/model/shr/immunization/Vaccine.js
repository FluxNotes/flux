import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.immunization.Vaccine.
 * @extends Entity
 */
class Vaccine extends Entity {

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the Manufacturer.
   * @returns {Manufacturer} The shr.entity.Manufacturer
   */
  get manufacturer() {
    return this._manufacturer;
  }

  /**
   * Set the Manufacturer.
   * @param {Manufacturer} manufacturer - The shr.entity.Manufacturer
   */
  set manufacturer(manufacturer) {
    this._manufacturer = manufacturer;
  }

  /**
   * Get the LotNumber.
   * @returns {LotNumber} The shr.entity.LotNumber
   */
  get lotNumber() {
    return this._lotNumber;
  }

  /**
   * Set the LotNumber.
   * @param {LotNumber} lotNumber - The shr.entity.LotNumber
   */
  set lotNumber(lotNumber) {
    this._lotNumber = lotNumber;
  }

  /**
   * Get the ExpirationDate.
   * @returns {ExpirationDate} The shr.entity.ExpirationDate
   */
  get expirationDate() {
    return this._expirationDate;
  }

  /**
   * Set the ExpirationDate.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
   */
  set expirationDate(expirationDate) {
    this._expirationDate = expirationDate;
  }

  /**
   * Deserializes JSON data to an instance of the Vaccine class.
   * The JSON must be valid against the Vaccine JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Vaccine} An instance of Vaccine populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Vaccine();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Vaccine;
