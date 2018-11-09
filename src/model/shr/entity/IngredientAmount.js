import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.IngredientAmount.
 */
class IngredientAmount {

  /**
   * Get the value (aliases ratio).
   * @returns {Ratio} The shr.core.Ratio
   */
  get value() {
    return this._ratio;
  }

  /**
   * Set the value (aliases ratio).
   * This field/value is required.
   * @param {Ratio} value - The shr.core.Ratio
   */
  set value(value) {
    this._ratio = value;
  }

  /**
   * Set the value (aliases ratio) and return 'this' for chaining.
   * This field/value is required.
   * @param {Ratio} value - The shr.core.Ratio
   * @returns {IngredientAmount} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Ratio.
   * @returns {Ratio} The shr.core.Ratio
   */
  get ratio() {
    return this._ratio;
  }

  /**
   * Set the Ratio.
   * This field/value is required.
   * @param {Ratio} ratio - The shr.core.Ratio
   */
  set ratio(ratio) {
    this._ratio = ratio;
  }

  /**
   * Set the Ratio and return 'this' for chaining.
   * This field/value is required.
   * @param {Ratio} ratio - The shr.core.Ratio
   * @returns {IngredientAmount} this.
   */
  withRatio(ratio) {
    this.ratio = ratio; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IngredientAmount class.
   * The JSON must be valid against the IngredientAmount JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IngredientAmount} An instance of IngredientAmount populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new IngredientAmount();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the IngredientAmount class to a JSON object.
   * The JSON is expected to be valid against the IngredientAmount JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/IngredientAmount' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the IngredientAmount class to a FHIR object.
   * The FHIR is expected to be valid against the IngredientAmount FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the IngredientAmount class.
   * The FHIR must be valid against the IngredientAmount FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {IngredientAmount} An instance of IngredientAmount populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new IngredientAmount();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Ratio', fhir);
    }
    return inst;
  }

}
export default IngredientAmount;
