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
   * Set the Manufacturer and return 'this' for chaining.
   * @param {Manufacturer} manufacturer - The shr.entity.Manufacturer
   * @returns {SpecificLaboratoryTest} this.
   */
  withManufacturer(manufacturer) {
    this.manufacturer = manufacturer; return this;
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
   * Set the ExpirationDate and return 'this' for chaining.
   * @param {ExpirationDate} expirationDate - The shr.entity.ExpirationDate
   * @returns {SpecificLaboratoryTest} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
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
   * Set the LotNumber and return 'this' for chaining.
   * @param {LotNumber} lotNumber - The shr.entity.LotNumber
   * @returns {SpecificLaboratoryTest} this.
   */
  withLotNumber(lotNumber) {
    this.lotNumber = lotNumber; return this;
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
   * Set the CertifiedBy and return 'this' for chaining.
   * @param {CertifiedBy} certifiedBy - The shr.oncology.CertifiedBy
   * @returns {SpecificLaboratoryTest} this.
   */
  withCertifiedBy(certifiedBy) {
    this.certifiedBy = certifiedBy; return this;
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
  /**
   * Serializes an instance of the SpecificLaboratoryTest class to a JSON object.
   * The JSON is expected to be valid against the SpecificLaboratoryTest JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/SpecificLaboratoryTest' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.manufacturer != null) {
      inst['Manufacturer'] = typeof this.manufacturer.toJSON === 'function' ? this.manufacturer.toJSON() : this.manufacturer;
    }
    if (this.expirationDate != null) {
      inst['ExpirationDate'] = typeof this.expirationDate.toJSON === 'function' ? this.expirationDate.toJSON() : this.expirationDate;
    }
    if (this.lotNumber != null) {
      inst['LotNumber'] = typeof this.lotNumber.toJSON === 'function' ? this.lotNumber.toJSON() : this.lotNumber;
    }
    if (this.certifiedBy != null) {
      inst['CertifiedBy'] = typeof this.certifiedBy.toJSON === 'function' ? this.certifiedBy.toJSON() : this.certifiedBy;
    }
    return inst;
  }
}
export default SpecificLaboratoryTest;
