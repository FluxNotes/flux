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
   * Get the AdditionalText.
   * @returns {AdditionalText} The shr.base.AdditionalText
   */
  get additionalText() {
    return this._additionalText;
  }

  /**
   * Set the AdditionalText.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   */
  set additionalText(additionalText) {
    this._additionalText = additionalText;
  }

  /**
   * Set the AdditionalText and return 'this' for chaining.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   * @returns {Substance} this.
   */
  withAdditionalText(additionalText) {
    this.additionalText = additionalText; return this;
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
    if (this.activeFlagAsaCodeableConcept != null) {
      inst['ActiveFlagAsaCodeableConcept'] = typeof this.activeFlagAsaCodeableConcept.toJSON === 'function' ? this.activeFlagAsaCodeableConcept.toJSON() : this.activeFlagAsaCodeableConcept;
    }
    if (this.additionalText != null) {
      inst['AdditionalText'] = typeof this.additionalText.toJSON === 'function' ? this.additionalText.toJSON() : this.additionalText;
    }
    if (this.ingredient != null) {
      inst['Ingredient'] = this.ingredient.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Substance class to a FHIR object.
   * The FHIR is expected to be valid against the Substance FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
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
    if (this.activeFlagAsaCodeableConcept != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.activeFlagAsaCodeableConcept.toFHIR === 'function' ? this.activeFlagAsaCodeableConcept.toFHIR(true) : this.activeFlagAsaCodeableConcept);
    }
    if (this.additionalText != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.additionalText.toFHIR === 'function' ? this.additionalText.toFHIR(true) : this.additionalText);
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
    if (this.ingredient != null && this.ingredient.codeableConcept != null) {
      if(inst['ingredient'] === undefined) {
        inst['ingredient'] = {};
      }
      inst['ingredient']['substance[x]'] = inst ['ingredient']['substance[x]'] || [];
      inst['ingredient']['substance[x]'] = inst['ingredient']['substance[x]'].concat(this.ingredient.codeableConcept.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Substance class.
   * The FHIR must be valid against the Substance FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
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
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension');
      if (match != null) {
        inst.category = createInstanceFromFHIR('shr.core.Category', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-ActiveFlagAsaCodeableConcept-extension');
      if (match != null) {
        inst.activeFlagAsaCodeableConcept = createInstanceFromFHIR('shr.entity.ActiveFlagAsaCodeableConcept', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-AdditionalText-extension');
      if (match != null) {
        inst.additionalText = createInstanceFromFHIR('shr.base.AdditionalText', match, true);
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
    if (fhir['ingredient'] != null && fhir['ingredient']['substance[x]'] != null) {
      if(inst.ingredient == null) {
        inst.ingredient = createInstanceFromFHIR('shr.entity.Ingredient', {});
      }
      inst.ingredient.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['ingredient']['substance[x]'][0]);
    }
    return inst;
  }

}
export default Substance;
