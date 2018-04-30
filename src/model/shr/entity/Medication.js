import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Medication.
 * @extends Entity
 */
class Medication extends Entity {

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
   * @returns {Medication} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

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
   * @returns {Medication} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the DoseForm.
   * @returns {DoseForm} The shr.entity.DoseForm
   */
  get doseForm() {
    return this._doseForm;
  }

  /**
   * Set the DoseForm.
   * @param {DoseForm} doseForm - The shr.entity.DoseForm
   */
  set doseForm(doseForm) {
    this._doseForm = doseForm;
  }

  /**
   * Set the DoseForm and return 'this' for chaining.
   * @param {DoseForm} doseForm - The shr.entity.DoseForm
   * @returns {Medication} this.
   */
  withDoseForm(doseForm) {
    this.doseForm = doseForm; return this;
  }

  /**
   * Get the Brand.
   * @returns {Brand} The shr.entity.Brand
   */
  get brand() {
    return this._brand;
  }

  /**
   * Set the Brand.
   * @param {Brand} brand - The shr.entity.Brand
   */
  set brand(brand) {
    this._brand = brand;
  }

  /**
   * Set the Brand and return 'this' for chaining.
   * @param {Brand} brand - The shr.entity.Brand
   * @returns {Medication} this.
   */
  withBrand(brand) {
    this.brand = brand; return this;
  }

  /**
   * Get the OverTheCounter.
   * @returns {OverTheCounter} The shr.entity.OverTheCounter
   */
  get overTheCounter() {
    return this._overTheCounter;
  }

  /**
   * Set the OverTheCounter.
   * @param {OverTheCounter} overTheCounter - The shr.entity.OverTheCounter
   */
  set overTheCounter(overTheCounter) {
    this._overTheCounter = overTheCounter;
  }

  /**
   * Set the OverTheCounter and return 'this' for chaining.
   * @param {OverTheCounter} overTheCounter - The shr.entity.OverTheCounter
   * @returns {Medication} this.
   */
  withOverTheCounter(overTheCounter) {
    this.overTheCounter = overTheCounter; return this;
  }

  /**
   * Get the MedicationIngredient array.
   * @returns {Array<MedicationIngredient>} The shr.entity.MedicationIngredient array
   */
  get medicationIngredient() {
    return this._medicationIngredient;
  }

  /**
   * Set the MedicationIngredient array.
   * @param {Array<MedicationIngredient>} medicationIngredient - The shr.entity.MedicationIngredient array
   */
  set medicationIngredient(medicationIngredient) {
    this._medicationIngredient = medicationIngredient;
  }

  /**
   * Set the MedicationIngredient array and return 'this' for chaining.
   * @param {Array<MedicationIngredient>} medicationIngredient - The shr.entity.MedicationIngredient array
   * @returns {Medication} this.
   */
  withMedicationIngredient(medicationIngredient) {
    this.medicationIngredient = medicationIngredient; return this;
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
   * @returns {Medication} this.
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
   * @returns {Medication} this.
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
   * @returns {Medication} this.
   */
  withExpirationDate(expirationDate) {
    this.expirationDate = expirationDate; return this;
  }

  /**
   * Get the Package.
   * @returns {Package} The shr.entity.Package
   */
  get package() {
    return this._package;
  }

  /**
   * Set the Package.
   * @param {Package} packageVar - The shr.entity.Package
   */
  set package(packageVar) {
    this._package = packageVar;
  }

  /**
   * Set the Package and return 'this' for chaining.
   * @param {Package} packageVar - The shr.entity.Package
   * @returns {Medication} this.
   */
  withPackage(packageVar) {
    this.package = packageVar; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Medication class.
   * The JSON must be valid against the Medication JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Medication} An instance of Medication populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Medication();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Medication class to a JSON object.
   * The JSON is expected to be valid against the Medication JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Medication' };
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
    if (this.doseForm != null) {
      inst['DoseForm'] = typeof this.doseForm.toJSON === 'function' ? this.doseForm.toJSON() : this.doseForm;
    }
    if (this.brand != null) {
      inst['Brand'] = typeof this.brand.toJSON === 'function' ? this.brand.toJSON() : this.brand;
    }
    if (this.overTheCounter != null) {
      inst['OverTheCounter'] = typeof this.overTheCounter.toJSON === 'function' ? this.overTheCounter.toJSON() : this.overTheCounter;
    }
    if (this.medicationIngredient != null) {
      inst['MedicationIngredient'] = this.medicationIngredient.map(f => f.toJSON());
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
    if (this.package != null) {
      inst['Package'] = typeof this.package.toJSON === 'function' ? this.package.toJSON() : this.package;
    }
    return inst;
  }
}
export default Medication;
