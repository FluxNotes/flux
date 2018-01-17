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
   * Deserializes JSON data to an instance of the CodeableConcept class.
   * The JSON must be valid against the CodeableConcept JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeableConcept} An instance of CodeableConcept populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CodeableConcept();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default CodeableConcept;
