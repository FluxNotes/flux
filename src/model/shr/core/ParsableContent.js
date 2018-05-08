import { setPropertiesFromJSON } from '../../json-helper';

import EmbeddedContent from './EmbeddedContent';

/**
 * Generated class for shr.core.ParsableContent.
 * @extends EmbeddedContent
 */
class ParsableContent extends EmbeddedContent {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {ParsableContent} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {ParsableContent} this.
   */
  withString(string) {
    this.string = string; return this;
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
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.formalism != null) {
      inst['Formalism'] = typeof this.formalism.toJSON === 'function' ? this.formalism.toJSON() : this.formalism;
    }
    return inst;
  }
}
export default ParsableContent;
