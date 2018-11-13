import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Annotation.
 */
class Annotation {

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
   * @returns {Annotation} this.
   */
  withText(text) {
    this.text = text; return this;
  }

  /**
   * Get the Author.
   * @returns {Author} The shr.core.Author
   */
  get author() {
    return this._author;
  }

  /**
   * Set the Author.
   * This field/value is required.
   * @param {Author} author - The shr.core.Author
   */
  set author(author) {
    this._author = author;
  }

  /**
   * Set the Author and return 'this' for chaining.
   * This field/value is required.
   * @param {Author} author - The shr.core.Author
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
  static fromJSON(json={}) {
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Annotation' } };
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
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
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.author != null) {
      inst['author[x]'] = typeof this.author.toFHIR === 'function' ? this.author.toFHIR() : this.author;
    }
    if (this.occurrenceTime != null) {
      inst['time'] = typeof this.occurrenceTime.toFHIR === 'function' ? this.occurrenceTime.toFHIR() : this.occurrenceTime;
    }
    if (this.text != null) {
      inst['text'] = typeof this.text.toFHIR === 'function' ? this.text.toFHIR() : this.text;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Annotation-extension';
      inst['valueAnnotation'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Annotation class.
   * The FHIR must be valid against the Annotation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Annotation} An instance of Annotation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Annotation();
    if (fhir['authorString'] != null) {
      inst.author = createInstanceFromFHIR('shr.core.Author', fhir['authorString']);
    }
    if (fhir['time'] != null) {
      inst.occurrenceTime = createInstanceFromFHIR('shr.core.OccurrenceTime', fhir['time']);
    }
    if (fhir['text'] != null) {
      inst.text = createInstanceFromFHIR('shr.core.Text', fhir['text']);
    }
    if (asExtension) {
      inst.value = fhir['valueAnnotation'];
    }
    return inst;
  }

}
export default Annotation;
