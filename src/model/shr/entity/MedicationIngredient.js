import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicationIngredient.
 */
class MedicationIngredient {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference.
   * @returns {(CodeableConcept|Reference)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Reference)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Substance reference, shr.entity.Medication reference
   * @returns {MedicationIngredient} this.
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
   * @returns {MedicationIngredient} this.
   */
  withIngredientAmount(ingredientAmount) {
    this.ingredientAmount = ingredientAmount; return this;
  }

  /**
   * Get the IsActiveIngredient.
   * @returns {IsActiveIngredient} The shr.entity.IsActiveIngredient
   */
  get isActiveIngredient() {
    return this._isActiveIngredient;
  }

  /**
   * Set the IsActiveIngredient.
   * This field/value is required.
   * @param {IsActiveIngredient} isActiveIngredient - The shr.entity.IsActiveIngredient
   */
  set isActiveIngredient(isActiveIngredient) {
    this._isActiveIngredient = isActiveIngredient;
  }

  /**
   * Set the IsActiveIngredient and return 'this' for chaining.
   * This field/value is required.
   * @param {IsActiveIngredient} isActiveIngredient - The shr.entity.IsActiveIngredient
   * @returns {MedicationIngredient} this.
   */
  withIsActiveIngredient(isActiveIngredient) {
    this.isActiveIngredient = isActiveIngredient; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationIngredient class.
   * The JSON must be valid against the MedicationIngredient JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationIngredient} An instance of MedicationIngredient populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationIngredient();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationIngredient class to a JSON object.
   * The JSON is expected to be valid against the MedicationIngredient JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/MedicationIngredient' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.ingredientAmount != null) {
      inst['IngredientAmount'] = typeof this.ingredientAmount.toJSON === 'function' ? this.ingredientAmount.toJSON() : this.ingredientAmount;
    }
    if (this.isActiveIngredient != null) {
      inst['IsActiveIngredient'] = typeof this.isActiveIngredient.toJSON === 'function' ? this.isActiveIngredient.toJSON() : this.isActiveIngredient;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationIngredient class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationIngredient FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the MedicationIngredient class.
   * The FHIR must be valid against the MedicationIngredient FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {MedicationIngredient} An instance of MedicationIngredient populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationIngredient();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default MedicationIngredient;
