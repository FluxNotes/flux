import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Quantity.
 */
class Quantity {

  /**
   * Get the value (aliases decimal).
   * @returns {decimal} The decimal
   */
  get value() {
    return this._decimal;
  }

  /**
   * Set the value (aliases decimal).
   * @param {decimal} value - The decimal
   */
  set value(value) {
    this._decimal = value;
  }

  /**
   * Set the value (aliases decimal) and return 'this' for chaining.
   * @param {decimal} value - The decimal
   * @returns {Quantity} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the decimal.
   * @returns {decimal} The decimal
   */
  get decimal() {
    return this._decimal;
  }

  /**
   * Set the decimal.
   * @param {decimal} decimal - The decimal
   */
  set decimal(decimal) {
    this._decimal = decimal;
  }

  /**
   * Set the decimal and return 'this' for chaining.
   * @param {decimal} decimal - The decimal
   * @returns {Quantity} this.
   */
  withDecimal(decimal) {
    this.decimal = decimal; return this;
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
    if (this.value != null) {
      inst['Value'] = this.value;
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
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.value != null) {
      inst['value'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
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
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Quantity} An instance of Quantity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Quantity();
    if (fhir['value'] != null) {
      inst.value = fhir['value'];
    }
    if (fhir['comparator'] != null) {
      inst.comparator = createInstanceFromFHIR('shr.core.Comparator', fhir['comparator']);
    }
    if (fhir['unit'] != null) {
      if(inst.units == null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if(inst.units.coding == null) {
        inst.units.coding = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.coding.displayText = createInstanceFromFHIR('shr.core.DisplayText', fhir['unit']);
    }
    if (fhir['system'] != null) {
      if(inst.units == null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if(inst.units.coding == null) {
        inst.units.coding = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.coding.codeSystem = createInstanceFromFHIR('shr.core.CodeSystem', fhir['system']);
    }
    if (asExtension) {
      inst.value = fhir['valueQuantity'];
    }
    return inst;
  }

}
export default Quantity;
