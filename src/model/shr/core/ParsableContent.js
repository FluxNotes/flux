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
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
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
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
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
   * @param {Formalism} formalism - The shr.core.Formalism
   */
  set formalism(formalism) {
    this._formalism = formalism;
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
}
export default ParsableContent;
