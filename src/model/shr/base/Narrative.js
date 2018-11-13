import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Narrative.
 */
class Narrative {

  /**
   * Get the NarrativeText.
   * @returns {NarrativeText} The shr.base.NarrativeText
   */
  get narrativeText() {
    return this._narrativeText;
  }

  /**
   * Set the NarrativeText.
   * This field/value is required.
   * @param {NarrativeText} narrativeText - The shr.base.NarrativeText
   */
  set narrativeText(narrativeText) {
    this._narrativeText = narrativeText;
  }

  /**
   * Set the NarrativeText and return 'this' for chaining.
   * This field/value is required.
   * @param {NarrativeText} narrativeText - The shr.base.NarrativeText
   * @returns {Narrative} this.
   */
  withNarrativeText(narrativeText) {
    this.narrativeText = narrativeText; return this;
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
    if (this.narrativeText != null) {
      inst['NarrativeText'] = typeof this.narrativeText.toJSON === 'function' ? this.narrativeText.toJSON() : this.narrativeText;
    }
    if (this.narrativeQualifier != null) {
      inst['NarrativeQualifier'] = typeof this.narrativeQualifier.toJSON === 'function' ? this.narrativeQualifier.toJSON() : this.narrativeQualifier;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Narrative class to a FHIR object.
   * The FHIR is expected to be valid against the Narrative FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.narrativeQualifier != null) {
      inst['status'] = typeof this.narrativeQualifier.toFHIR === 'function' ? this.narrativeQualifier.toFHIR() : this.narrativeQualifier;
    }
    if (this.narrativeText != null) {
      inst['div'] = typeof this.narrativeText.toFHIR === 'function' ? this.narrativeText.toFHIR() : this.narrativeText;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Narrative class.
   * The FHIR must be valid against the Narrative FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Narrative} An instance of Narrative populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Narrative();
    if (fhir['status'] != null) {
      inst.narrativeQualifier = createInstanceFromFHIR('shr.base.NarrativeQualifier', fhir['status']);
    }
    if (fhir['div'] != null) {
      inst.narrativeText = createInstanceFromFHIR('shr.base.NarrativeText', fhir['div']);
    }
    return inst;
  }

}
export default Narrative;
