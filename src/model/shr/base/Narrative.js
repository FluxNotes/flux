import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Narrative.
 */
class Narrative {

  /**
   * Get the value (aliases xhtml).
   * @returns {xhtml} The xhtml
   */
  get value() {
    return this._xhtml;
  }

  /**
   * Set the value (aliases xhtml).
   * This field/value is required.
   * @param {xhtml} value - The xhtml
   */
  set value(value) {
    this._xhtml = value;
  }

  /**
   * Set the value (aliases xhtml) and return 'this' for chaining.
   * This field/value is required.
   * @param {xhtml} value - The xhtml
   * @returns {Narrative} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the xhtml.
   * @returns {xhtml} The xhtml
   */
  get xhtml() {
    return this._xhtml;
  }

  /**
   * Set the xhtml.
   * This field/value is required.
   * @param {xhtml} xhtml - The xhtml
   */
  set xhtml(xhtml) {
    this._xhtml = xhtml;
  }

  /**
   * Set the xhtml and return 'this' for chaining.
   * This field/value is required.
   * @param {xhtml} xhtml - The xhtml
   * @returns {Narrative} this.
   */
  withXhtml(xhtml) {
    this.xhtml = xhtml; return this;
  }

  /**
   * Get the NarrativeQualifier.
   * @returns {NarrativeQualifier} The shr.base.NarrativeQualifier
   */
  get narrativeQualifier() {
    return this._narrativeQualifier;
  }

  /**
   * Set the NarrativeQualifier.
   * This field/value is required.
   * @param {NarrativeQualifier} narrativeQualifier - The shr.base.NarrativeQualifier
   */
  set narrativeQualifier(narrativeQualifier) {
    this._narrativeQualifier = narrativeQualifier;
  }

  /**
   * Set the NarrativeQualifier and return 'this' for chaining.
   * This field/value is required.
   * @param {NarrativeQualifier} narrativeQualifier - The shr.base.NarrativeQualifier
   * @returns {Narrative} this.
   */
  withNarrativeQualifier(narrativeQualifier) {
    this.narrativeQualifier = narrativeQualifier; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Narrative class.
   * The JSON must be valid against the Narrative JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Narrative} An instance of Narrative populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Narrative();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Narrative class to a JSON object.
   * The JSON is expected to be valid against the Narrative JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Narrative' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.narrativeQualifier != null) {
      inst['NarrativeQualifier'] = typeof this.narrativeQualifier.toJSON === 'function' ? this.narrativeQualifier.toJSON() : this.narrativeQualifier;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Narrative class to a FHIR object.
   * The FHIR is expected to be valid against the Narrative FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.narrativeQualifier != null) {
      inst['status'] = typeof this.narrativeQualifier.toFHIR === 'function' ? this.narrativeQualifier.toFHIR() : this.narrativeQualifier;
    }
    if (this.value != null) {
      inst['div'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Narrative class.
   * The FHIR must be valid against the Narrative FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Narrative} An instance of Narrative populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Narrative();
    if (fhir['status'] != null) {
      inst.narrativeQualifier = createInstanceFromFHIR('shr.base.NarrativeQualifier', fhir['status']);
    }
    if (fhir['div'] != null) {
      inst.value = fhir['div'];
    }
    return inst;
  }

}
export default Narrative;
