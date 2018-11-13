import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Quantity from './Quantity';

/**
 * Generated class for shr.core.SimpleQuantity.
 * @extends Quantity
 */
class SimpleQuantity extends Quantity {

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
   * @returns {SimpleQuantity} this.
   */
  withComparator(comparator) {
    this.comparator = comparator; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleQuantity class.
   * The JSON must be valid against the SimpleQuantity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleQuantity} An instance of SimpleQuantity populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SimpleQuantity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SimpleQuantity class to a JSON object.
   * The JSON is expected to be valid against the SimpleQuantity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/SimpleQuantity' } };
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
   * Serializes an instance of the SimpleQuantity class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleQuantity FHIR profile, but no validation checks are performed.
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SimpleQuantity class.
   * The FHIR must be valid against the SimpleQuantity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SimpleQuantity} An instance of SimpleQuantity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SimpleQuantity();
    if (fhir['value'] != null) {
      inst.decimalValue = createInstanceFromFHIR('shr.core.DecimalValue', fhir['value']);
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
    return inst;
  }

}
export default SimpleQuantity;
