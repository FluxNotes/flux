import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Annotation.
 */
class Annotation {

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
   * Get the Author.
   * @returns {Author} The shr.base.Author
   */
  get author() {
    return this._author;
  }

  /**
   * Set the Author.
   * @param {Author} author - The shr.base.Author
   */
  set author(author) {
    this._author = author;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Deserializes JSON data to an instance of the Annotation class.
   * The JSON must be valid against the Annotation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Annotation} An instance of Annotation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Annotation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Annotation;
