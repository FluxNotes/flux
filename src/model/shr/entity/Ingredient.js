import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.Ingredient.
 */
class Ingredient {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference
   * @returns {Ingredient} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the IngredientAmount.
   * @returns {IngredientAmount} The shr.entity.IngredientAmount
   */
  get ingredientAmount() {
    return this._ingredientAmount;
  }

  /**
   * Set the IngredientAmount.
   * This field/value is required.
   * @param {IngredientAmount} ingredientAmount - The shr.entity.IngredientAmount
   */
  set ingredientAmount(ingredientAmount) {
    this._ingredientAmount = ingredientAmount;
  }

  /**
   * Set the IngredientAmount and return 'this' for chaining.
   * This field/value is required.
   * @param {IngredientAmount} ingredientAmount - The shr.entity.IngredientAmount
   * @returns {Ingredient} this.
   */
  withIngredientAmount(ingredientAmount) {
    this.ingredientAmount = ingredientAmount; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Ingredient class.
   * The JSON must be valid against the Ingredient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ingredient} An instance of Ingredient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Ingredient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Ingredient class to a JSON object.
   * The JSON is expected to be valid against the Ingredient JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Ingredient' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.ingredientAmount != null) {
      inst['IngredientAmount'] = typeof this.ingredientAmount.toJSON === 'function' ? this.ingredientAmount.toJSON() : this.ingredientAmount;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Ingredient class to a FHIR object.
   * The FHIR is expected to be valid against the Ingredient FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Ingredient class.
   * The FHIR must be valid against the Ingredient FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Ingredient} An instance of Ingredient populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Ingredient();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default Ingredient;
