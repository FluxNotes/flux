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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Substance} this.
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
   * @returns {Substance} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {Substance} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * Set the ActiveFlagAsaCodeableConcept and return 'this' for chaining.
   * @param {ActiveFlagAsaCodeableConcept} activeFlagAsaCodeableConcept - The shr.entity.ActiveFlagAsaCodeableConcept
   * @returns {Substance} this.
   */
  withActiveFlagAsaCodeableConcept(activeFlagAsaCodeableConcept) {
    this.activeFlagAsaCodeableConcept = activeFlagAsaCodeableConcept; return this;
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
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {Substance} this.
   */
  withDetails(details) {
    this.details = details; return this;
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
   * Set the Ingredient array and return 'this' for chaining.
   * @param {Array<Ingredient>} ingredient - The shr.entity.Ingredient array
   * @returns {Substance} this.
   */
  withIngredient(ingredient) {
    this.ingredient = ingredient; return this;
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
  /**
   * Serializes an instance of the Substance class to a JSON object.
   * The JSON is expected to be valid against the Substance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Substance' };
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
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.activeFlagAsaCodeableConcept != null) {
      inst['ActiveFlagAsaCodeableConcept'] = typeof this.activeFlagAsaCodeableConcept.toJSON === 'function' ? this.activeFlagAsaCodeableConcept.toJSON() : this.activeFlagAsaCodeableConcept;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.ingredient != null) {
      inst['Ingredient'] = this.ingredient.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Substance;
