import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.Age.
 * @extends Quantity
 */
class Age extends Quantity {

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
   * @returns {Age} this.
   */
  withUnits(units) {
    this.units = units; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Age class.
   * The JSON must be valid against the Age JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Age} An instance of Age populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Age();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Age class to a JSON object.
   * The JSON is expected to be valid against the Age JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Age' } };
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
   * Serializes an instance of the Age class to a FHIR object.
   * The FHIR is expected to be valid against the Age FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Age class.
   * The FHIR must be valid against the Age FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Age} An instance of Age populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Age();
    if (fhir['value'] != null) {
      inst.decimalValue = createInstanceFromFHIR('shr.core.DecimalValue', fhir['value']);
    }
    if (fhir['comparator'] != null) {
      inst.comparator = createInstanceFromFHIR('shr.core.Comparator', fhir['comparator']);
    }
    if (fhir['unit'] != null) {
      if (inst.units === null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if (inst.units.value === null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.displayText = createInstanceFromFHIR('shr.core.DisplayText', fhir['unit']);
    }
    if (fhir['system'] != null) {
      if (inst.units === null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if (inst.units.value === null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.codeSystem = createInstanceFromFHIR('shr.core.CodeSystem', fhir['system']);
    }
    if (fhir['code'] != null) {
      if (inst.units === null) {
        inst.units = createInstanceFromFHIR('shr.core.Units', {});
      }
      if (inst.units.value === null) {
        inst.units.value = createInstanceFromFHIR('shr.core.Coding', {});
      }
      inst.units.value.code = createInstanceFromFHIR('shr.core.Code', fhir['code']);
    }
    return inst;
  }

}
export default Age;
