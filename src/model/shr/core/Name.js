import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Name.
 */
class Name {

  /**
   * Get the NameAsText.
   * @returns {NameAsText} The shr.core.NameAsText
   */
  get nameAsText() {
    return this._nameAsText;
  }

  /**
   * Set the NameAsText.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   */
  set nameAsText(nameAsText) {
    this._nameAsText = nameAsText;
  }

  /**
   * Set the NameAsText and return 'this' for chaining.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   * @returns {Name} this.
   */
  withNameAsText(nameAsText) {
    this.nameAsText = nameAsText; return this;
  }

  /**
   * Get the Purpose array.
   * @returns {Array<Purpose>} The shr.core.Purpose array
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose array.
   * @param {Array<Purpose>} purpose - The shr.core.Purpose array
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose array and return 'this' for chaining.
   * @param {Array<Purpose>} purpose - The shr.core.Purpose array
   * @returns {Name} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Name} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Name class.
   * The JSON must be valid against the Name JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Name} An instance of Name populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Name();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Name class to a JSON object.
   * The JSON is expected to be valid against the Name JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Name' } };
    if (this.nameAsText != null) {
      inst['NameAsText'] = typeof this.nameAsText.toJSON === 'function' ? this.nameAsText.toJSON() : this.nameAsText;
    }
    if (this.purpose != null) {
      inst['Purpose'] = this.purpose.map(f => f.toJSON());
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Name class to a FHIR object.
   * The FHIR is expected to be valid against the Name FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Name class.
   * The FHIR must be valid against the Name FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Name} An instance of Name populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Name();
    return inst;
  }

}
export default Name;
