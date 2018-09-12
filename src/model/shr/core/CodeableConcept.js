import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.CodeableConcept.
 */
class CodeableConcept {

  /**
   * Get the Coding array.
   * @returns {Array<Coding>} The shr.core.Coding array
   */
  get coding() {
    return this._coding;
  }

  /**
   * Set the Coding array.
   * @param {Array<Coding>} coding - The shr.core.Coding array
   */
  set coding(coding) {
    this._coding = coding;
  }

  /**
   * Set the Coding array and return 'this' for chaining.
   * @param {Array<Coding>} coding - The shr.core.Coding array
   * @returns {CodeableConcept} this.
   */
  withCoding(coding) {
    this.coding = coding; return this;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Set the DisplayText and return 'this' for chaining.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   * @returns {CodeableConcept} this.
   */
  withDisplayText(displayText) {
    this.displayText = displayText; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeableConcept class.
   * The JSON must be valid against the CodeableConcept JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeableConcept} An instance of CodeableConcept populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CodeableConcept();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CodeableConcept class to a JSON object.
   * The JSON is expected to be valid against the CodeableConcept JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/CodeableConcept' } };
    if (this.coding != null) {
      inst['Coding'] = this.coding.map(f => f.toJSON());
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    return inst;
  }
  /**
   * Serializes an instance of the CodeableConcept class to a FHIR object.
   * The FHIR is expected to be valid against the CodeableConcept FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.coding != null) {
      inst['coding'] = inst['coding'] || [];
      inst['coding'].concat(this.coding.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.displayText != null) {
      inst['text'] = typeof this.displayText.toFHIR === 'function' ? this.displayText.toFHIR() : this.displayText;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-CodeableConcept-extension';
      inst['valueCodeableConcept'] = this.value;
    }
    return inst;
  }
}
export default CodeableConcept;
