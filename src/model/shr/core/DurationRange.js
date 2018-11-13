import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Range from './Range';

/**
 * Generated class for shr.core.DurationRange.
 * @extends Range
 */
class DurationRange extends Range {

  /**
   * Get the LowerBound.
   * @returns {LowerBound} The shr.core.LowerBound
   */
  get lowerBound() {
    return this._lowerBound;
  }

  /**
   * Set the LowerBound.
   * @param {LowerBound} lowerBound - The shr.core.LowerBound
   */
  set lowerBound(lowerBound) {
    this._lowerBound = lowerBound;
  }

  /**
   * Set the LowerBound and return 'this' for chaining.
   * @param {LowerBound} lowerBound - The shr.core.LowerBound
   * @returns {DurationRange} this.
   */
  withLowerBound(lowerBound) {
    this.lowerBound = lowerBound; return this;
  }

  /**
   * Get the UpperBound.
   * @returns {UpperBound} The shr.core.UpperBound
   */
  get upperBound() {
    return this._upperBound;
  }

  /**
   * Set the UpperBound.
   * @param {UpperBound} upperBound - The shr.core.UpperBound
   */
  set upperBound(upperBound) {
    this._upperBound = upperBound;
  }

  /**
   * Set the UpperBound and return 'this' for chaining.
   * @param {UpperBound} upperBound - The shr.core.UpperBound
   * @returns {DurationRange} this.
   */
  withUpperBound(upperBound) {
    this.upperBound = upperBound; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DurationRange class.
   * The JSON must be valid against the DurationRange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DurationRange} An instance of DurationRange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DurationRange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DurationRange class to a JSON object.
   * The JSON is expected to be valid against the DurationRange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/DurationRange' } };
    if (this.lowerBound != null) {
      inst['LowerBound'] = typeof this.lowerBound.toJSON === 'function' ? this.lowerBound.toJSON() : this.lowerBound;
    }
    if (this.upperBound != null) {
      inst['UpperBound'] = typeof this.upperBound.toJSON === 'function' ? this.upperBound.toJSON() : this.upperBound;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DurationRange class to a FHIR object.
   * The FHIR is expected to be valid against the DurationRange FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.lowerBound != null) {
      inst['low'] = typeof this.lowerBound.toFHIR === 'function' ? this.lowerBound.toFHIR() : this.lowerBound;
    }
    if (this.upperBound != null) {
      inst['high'] = typeof this.upperBound.toFHIR === 'function' ? this.upperBound.toFHIR() : this.upperBound;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the DurationRange class.
   * The FHIR must be valid against the DurationRange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DurationRange} An instance of DurationRange populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new DurationRange();
    if (fhir['low'] != null) {
      inst.lowerBound = createInstanceFromFHIR('shr.core.LowerBound', fhir['low']);
    }
    if (fhir['high'] != null) {
      inst.upperBound = createInstanceFromFHIR('shr.core.UpperBound', fhir['high']);
    }
    return inst;
  }

}
export default DurationRange;
