import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

/**
 * Generated class for mcode.TotalRadiationDoseDelivered.
 */
class TotalRadiationDoseDelivered {

  /**
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Set the value (aliases quantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} value - The shr.core.Quantity
   * @returns {TotalRadiationDoseDelivered} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
  }

  /**
   * Set the Quantity and return 'this' for chaining.
   * This field/value is required.
   * @param {Quantity} quantity - The shr.core.Quantity
   * @returns {TotalRadiationDoseDelivered} this.
   */
  withQuantity(quantity) {
    this.quantity = quantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the TotalRadiationDoseDelivered class.
   * The JSON must be valid against the TotalRadiationDoseDelivered JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TotalRadiationDoseDelivered} An instance of TotalRadiationDoseDelivered populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TotalRadiationDoseDelivered();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the TotalRadiationDoseDelivered class to a JSON object.
   * The JSON is expected to be valid against the TotalRadiationDoseDelivered JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/mcode/TotalRadiationDoseDelivered' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the TotalRadiationDoseDelivered class to a FHIR object.
   * The FHIR is expected to be valid against the TotalRadiationDoseDelivered FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/mcode-TotalRadiationDoseDelivered-extension';
      inst['valueQuantity'] = this.value;
      inst['valueQuantity'] = this.value;
      inst['valueQuantity'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the TotalRadiationDoseDelivered class.
   * The FHIR must be valid against the TotalRadiationDoseDelivered FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {TotalRadiationDoseDelivered} An instance of TotalRadiationDoseDelivered populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new TotalRadiationDoseDelivered();
    if (asExtension) {
      inst.value = fhir['valueQuantity'];
      inst.value = fhir['valueQuantity'];
      inst.value = fhir['valueQuantity'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Quantity', fhir);
    }
    return inst;
  }

}
export default TotalRadiationDoseDelivered;
