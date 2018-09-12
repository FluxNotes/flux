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
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {Vaccine} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the Manufacturer and return 'this' for chaining.
   * @param {Manufacturer} manufacturer - The shr.entity.Manufacturer
   * @returns {Vaccine} this.
   */
  withManufacturer(manufacturer) {
    this.manufacturer = manufacturer; return this;
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
   * @returns {Vaccine} this.
   */
  withLotNumber(lotNumber) {
    this.lotNumber = lotNumber; return this;
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
   * @returns {Vaccine} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Vaccine class.
   * The JSON must be valid against the Vaccine JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Vaccine} An instance of Vaccine populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Vaccine();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Vaccine class to a JSON object.
   * The JSON is expected to be valid against the Vaccine JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/immunization/Vaccine' } };
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
    if (this.manufacturer != null) {
      inst['Manufacturer'] = typeof this.manufacturer.toJSON === 'function' ? this.manufacturer.toJSON() : this.manufacturer;
    }
    if (this.lotNumber != null) {
      inst['LotNumber'] = typeof this.lotNumber.toJSON === 'function' ? this.lotNumber.toJSON() : this.lotNumber;
    }
    if (this.expirationDate != null) {
      inst['ExpirationDate'] = typeof this.expirationDate.toJSON === 'function' ? this.expirationDate.toJSON() : this.expirationDate;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Vaccine class to a FHIR object.
   * The FHIR is expected to be valid against the Vaccine FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.manufacturer.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.lotNumber.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expirationDate.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-immunization-Vaccine-extension';
    }
    return inst;
  }
}
export default Vaccine;
