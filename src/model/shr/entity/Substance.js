import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Substance.
 * @extends Entity
 */
class Substance extends Entity {

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
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the ActiveFlagAsaCodeableConcept.
   * @returns {ActiveFlagAsaCodeableConcept} The shr.entity.ActiveFlagAsaCodeableConcept
   */
  get activeFlagAsaCodeableConcept() {
    return this._activeFlagAsaCodeableConcept;
  }

  /**
   * Set the ActiveFlagAsaCodeableConcept.
   * @param {ActiveFlagAsaCodeableConcept} activeFlagAsaCodeableConcept - The shr.entity.ActiveFlagAsaCodeableConcept
   */
  set activeFlagAsaCodeableConcept(activeFlagAsaCodeableConcept) {
    this._activeFlagAsaCodeableConcept = activeFlagAsaCodeableConcept;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the Ingredient array.
   * @returns {Array<Ingredient>} The shr.entity.Ingredient array
   */
  get ingredient() {
    return this._ingredient;
  }

  /**
   * Set the Ingredient array.
   * @param {Array<Ingredient>} ingredient - The shr.entity.Ingredient array
   */
  set ingredient(ingredient) {
    this._ingredient = ingredient;
  }

  /**
   * Deserializes JSON data to an instance of the Substance class.
   * The JSON must be valid against the Substance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Substance} An instance of Substance populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Substance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Substance;
