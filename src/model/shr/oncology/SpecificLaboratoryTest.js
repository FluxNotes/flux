import { setPropertiesFromJSON } from '../../json-helper';

import FindingMethod from '../finding/FindingMethod';

/**
 * Generated class for shr.oncology.SpecificLaboratoryTest.
 * @extends FindingMethod
 */
class SpecificLaboratoryTest extends FindingMethod {

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
   * Get the CertifiedBy.
   * @returns {CertifiedBy} The shr.oncology.CertifiedBy
   */
  get certifiedBy() {
    return this._certifiedBy;
  }

  /**
   * Set the CertifiedBy.
   * @param {CertifiedBy} certifiedBy - The shr.oncology.CertifiedBy
   */
  set certifiedBy(certifiedBy) {
    this._certifiedBy = certifiedBy;
  }

  /**
   * Deserializes JSON data to an instance of the SpecificLaboratoryTest class.
   * The JSON must be valid against the SpecificLaboratoryTest JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecificLaboratoryTest} An instance of SpecificLaboratoryTest populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecificLaboratoryTest();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecificLaboratoryTest;
