import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
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
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {Substance} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {Substance} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
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
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.ingredient != null) {
      inst['Ingredient'] = this.ingredient.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Substance class to a FHIR object.
   * The FHIR is expected to be valid against the Substance FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Substance';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.activeFlag != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.activeFlag.toFHIR === 'function' ? this.activeFlag.toFHIR(true) : this.activeFlag);
    }
    if (this.commentOrDescription != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.commentOrDescription.toFHIR === 'function' ? this.commentOrDescription.toFHIR(true) : this.commentOrDescription);
    }
    if (this.type != null) {
      inst['code'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.ingredient != null) {
      inst['ingredient'] = inst ['ingredient'] || [];
      inst['ingredient'] = inst['ingredient'].concat(this.ingredient.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.ingredient != null && this.ingredient.ingredientAmount != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['quantity'] = inst ['ingredient']['quantity'] || [];
      inst['ingredient']['quantity'] = inst['ingredient']['quantity'].concat(this.ingredient.ingredientAmount.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.ingredient != null && this.ingredient.substanceOrCode != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['substance[x]'] = inst ['ingredient']['substance[x]'] || [];
      inst['ingredient']['substance[x]'] = inst['ingredient']['substance[x]'].concat(this.ingredient.substanceOrCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Substance class.
   * The FHIR must be valid against the Substance FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Substance} An instance of Substance populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Substance();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['code'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['code']);
    }
    if (fhir['ingredient'] != null) {
      inst.ingredient = inst.ingredient || [];
      inst.ingredient = inst.ingredient.concat(fhir['ingredient'].map(f => createInstanceFromFHIR('shr.entity.Ingredient', f)));
    }
    if (fhir['ingredient'] != null && fhir['ingredient']['quantity'] != null) {
      if(inst.ingredient == null) {
        inst.ingredient = createInstanceFromFHIR('shr.entity.Ingredient', {});
      }
      inst.ingredient.ingredientAmount = createInstanceFromFHIR('shr.entity.IngredientAmount', fhir['ingredient']['quantity']);
    }
    if (fhir['ingredient'] != null && fhir['ingredient']['substanceCodeableConcept'] != null) {
      if(inst.ingredient == null) {
        inst.ingredient = createInstanceFromFHIR('shr.entity.Ingredient', {});
      }
      inst.ingredient.substanceOrCode = createInstanceFromFHIR('shr.entity.SubstanceOrCode', fhir['ingredient']['substanceCodeableConcept']);
    }
    return inst;
  }

}
export default Substance;
