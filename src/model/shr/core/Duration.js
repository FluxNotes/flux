import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import SimpleQuantity from './SimpleQuantity';

/**
 * Generated class for shr.core.Duration.
 * @extends SimpleQuantity
 */
class Duration extends SimpleQuantity {

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
   * @returns {Duration} this.
   */
  withUnits(units) {
    this.units = units; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Duration class.
   * The JSON must be valid against the Duration JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Duration} An instance of Duration populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Duration();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Duration class to a JSON object.
   * The JSON is expected to be valid against the Duration JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Duration' } };
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
   * Serializes an instance of the Duration class to a FHIR object.
   * The FHIR is expected to be valid against the Duration FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.decimalValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.decimalValue.toFHIR === 'function' ? this.decimalValue.toFHIR(true) : this.decimalValue);
    }
    if (this.units != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.units.toFHIR === 'function' ? this.units.toFHIR(true) : this.units);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Duration class.
   * The FHIR must be valid against the Duration FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Duration} An instance of Duration populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Duration();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-DecimalValue-extension');
      if (match != null) {
        inst.decimalValue = createInstanceFromFHIR('shr.core.DecimalValue', match, true);
      }
    }
    return inst;
  }

}
export default Duration;
