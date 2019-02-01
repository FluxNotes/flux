import { setPropertiesFromJSON, uuid } from '../../json-helper';

import EmbeddedContent from './EmbeddedContent';

/**
 * Generated class for shr.core.ParsableContent.
 * @extends EmbeddedContent
 */
class ParsableContent extends EmbeddedContent {

  /**
   * Get the Text.
   * @returns {Text} The shr.core.Text
   */
  get text() {
    return this._text;
  }

  /**
   * Set the Text.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   */
  set text(text) {
    this._text = text;
  }

  /**
   * Set the Text and return 'this' for chaining.
   * This field/value is required.
   * @param {Text} text - The shr.core.Text
   * @returns {ParsableContent} this.
   */
  withText(text) {
    this.text = text; return this;
  }

  /**
   * Get the Formalism.
   * @returns {Formalism} The shr.core.Formalism
   */
  get formalism() {
    return this._formalism;
  }

  /**
   * Set the Formalism.
   * This field/value is required.
   * @param {Formalism} formalism - The shr.core.Formalism
   */
  set formalism(formalism) {
    this._formalism = formalism;
  }

  /**
   * Set the Formalism and return 'this' for chaining.
   * This field/value is required.
   * @param {Formalism} formalism - The shr.core.Formalism
   * @returns {ParsableContent} this.
   */
  withFormalism(formalism) {
    this.formalism = formalism; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ParsableContent class.
   * The JSON must be valid against the ParsableContent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ParsableContent} An instance of ParsableContent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ParsableContent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ParsableContent class to a JSON object.
   * The JSON is expected to be valid against the ParsableContent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ParsableContent' } };
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
    }
    if (this.formalism != null) {
      inst['Formalism'] = typeof this.formalism.toJSON === 'function' ? this.formalism.toJSON() : this.formalism;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ParsableContent class.
   * The FHIR must be valid against the ParsableContent FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ParsableContent} An instance of ParsableContent populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ParsableContent();
    return inst;
  }

}
export default ParsableContent;
