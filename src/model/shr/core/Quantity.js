import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Quantity.
 */
class Quantity {

  /**
   * Get the DecimalValue.
   * @returns {DecimalValue} The shr.core.DecimalValue
   */
  get decimalValue() {
    return this._decimalValue;
  }

  /**
   * Set the DecimalValue.
   * @param {DecimalValue} decimalValue - The shr.core.DecimalValue
   */
  set decimalValue(decimalValue) {
    this._decimalValue = decimalValue;
  }

  /**
   * Set the DecimalValue and return 'this' for chaining.
   * @param {DecimalValue} decimalValue - The shr.core.DecimalValue
   * @returns {Quantity} this.
   */
  withDecimalValue(decimalValue) {
    this.decimalValue = decimalValue; return this;
  }

  /**
   * Get the Comparator.
   * @returns {Comparator} The shr.core.Comparator
   */
  get comparator() {
    return this._comparator;
  }

  /**
   * Set the Comparator.
   * @param {Comparator} comparator - The shr.core.Comparator
   */
  set comparator(comparator) {
    this._comparator = comparator;
  }

  /**
   * Set the Comparator and return 'this' for chaining.
   * @param {Comparator} comparator - The shr.core.Comparator
   * @returns {Quantity} this.
   */
  withComparator(comparator) {
    this.comparator = comparator; return this;
  }

  /**
   * Get the Units.
   * @returns {Units} The shr.core.Units
   */
  get units() {
    return this._units;
  }

  /**
   * Set the Units.
   * @param {Units} units - The shr.core.Units
   */
  set units(units) {
    this._units = units;
  }

  /**
   * Set the Units and return 'this' for chaining.
   * @param {Units} units - The shr.core.Units
   * @returns {Quantity} this.
   */
  withUnits(units) {
    this.units = units; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Quantity class.
   * The JSON must be valid against the Quantity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Quantity} An instance of Quantity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Quantity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Quantity class to a JSON object.
   * The JSON is expected to be valid against the Quantity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Quantity' } };
    if (this.decimalValue != null) {
      inst['DecimalValue'] = typeof this.decimalValue.toJSON === 'function' ? this.decimalValue.toJSON() : this.decimalValue;
    }
    if (this.comparator != null) {
      inst['Comparator'] = typeof this.comparator.toJSON === 'function' ? this.comparator.toJSON() : this.comparator;
    }
    if (this.units != null) {
      inst['Units'] = typeof this.units.toJSON === 'function' ? this.units.toJSON() : this.units;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Quantity class to a FHIR object.
   * The FHIR is expected to be valid against the Quantity FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.decimalValue != null) {
      inst['value'] = typeof this.decimalValue.toFHIR === 'function' ? this.decimalValue.toFHIR() : this.decimalValue;
    }
    if (this.comparator != null) {
      inst['comparator'] = typeof this.comparator.toFHIR === 'function' ? this.comparator.toFHIR() : this.comparator;
    }
    if (this.units != null && this.units.coding != null && this.units.coding.displayText != null) {
      inst['unit'] = typeof this.units.coding.displayText.toFHIR === 'function' ? this.units.coding.displayText.toFHIR() : this.units.coding.displayText;
    }
    if (this.units != null && this.units.coding != null && this.units.coding.codeSystem != null) {
      inst['system'] = typeof this.units.coding.codeSystem.toFHIR === 'function' ? this.units.coding.codeSystem.toFHIR() : this.units.coding.codeSystem;
    }
    if (this.units != null && this.units.coding != null && this.units.coding.code != null) {
      inst['code'] = typeof this.units.coding.code.toFHIR === 'function' ? this.units.coding.code.toFHIR() : this.units.coding.code;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Quantity-extension';
      inst['valueQuantity'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Quantity class.
   * The FHIR must be valid against the Quantity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Quantity} An instance of Quantity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Quantity();
    if (fhir['value'] != null) {
      inst.decimalValue = createInstanceFromFHIR('shr.core.DecimalValue', fhir['value']);
    }
    if (fhir['comparator'] != null) {
      inst.comparator = createInstanceFromFHIR('shr.core.Comparator', fhir['comparator']);
    }
    if (fhir['unit'] != null) {
      if(inst.units == null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if(inst.units.value == null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.displayText = createInstanceFromFHIR('shr.core.DisplayText', fhir['unit']);
    }
    if (fhir['system'] != null) {
      if(inst.units == null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if(inst.units.value == null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.codeSystem = createInstanceFromFHIR('shr.core.CodeSystem', fhir['system']);
    }
    if (fhir['code'] != null) {
      if(inst.units == null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if(inst.units.value == null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.code = createInstanceFromFHIR('shr.core.Code', fhir['code']);
    }
    if (asExtension) {
      inst.value = fhir['valueQuantity'];
    }
    return inst;
  }

}
export default Quantity;
