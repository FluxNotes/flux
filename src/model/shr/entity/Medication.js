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
   * Get the Package.
   * @returns {Package} The shr.entity.Package
   */
  get package() {
    return this._package;
  }

  /**
   * Set the Package.
   * @param {Package} package - The shr.entity.Package
   */
  set package(pkg) {
    this._package = pkg;
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
}
export default Medication;
