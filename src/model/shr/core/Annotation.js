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
   * @returns {Annotation} this.
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
   * @returns {Annotation} this.
   */
  withString(string) {
    this.string = string; return this;
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
   * This field/value is required.
   * @param {Author} author - The shr.base.Author
   */
  set author(author) {
    this._author = author;
  }

  /**
   * Set the Author and return 'this' for chaining.
   * This field/value is required.
   * @param {Author} author - The shr.base.Author
   * @returns {Annotation} this.
   */
  withAuthor(author) {
    this.author = author; return this;
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
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * This field/value is required.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {Annotation} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Annotation class.
   * The JSON must be valid against the Annotation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Annotation} An instance of Annotation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Annotation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Annotation class to a JSON object.
   * The JSON is expected to be valid against the Annotation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Annotation' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Annotation class to a FHIR object.
   * The FHIR is expected to be valid against the Annotation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.author != null) {
      inst['author[x]'] = typeof this.author.toFHIR === 'function' ? this.author.toFHIR() : this.author;
    }
    if (this.occurrenceTime != null) {
      inst['time'] = typeof this.occurrenceTime.toFHIR === 'function' ? this.occurrenceTime.toFHIR() : this.occurrenceTime;
    }
    if (this.value != null) {
      inst['text'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-Annotation-extension';
      inst['valueAnnotation'] = this.value;
    }
    return inst;
  }
}
export default Annotation;
