import { setPropertiesFromJSON } from '../../json-helper';

import Any from './Any';

/**
 * Generated class for shr.base.Content.
 * @extends Any
 */
class Content extends Any {

  /**
   * Get the RelatedEncounter.
   * @returns {RelatedEncounter} The shr.base.RelatedEncounter
   */
  get relatedEncounter() {
    return this._relatedEncounter;
  }

  /**
   * Set the RelatedEncounter.
   * @param {RelatedEncounter} relatedEncounter - The shr.base.RelatedEncounter
   */
  set relatedEncounter(relatedEncounter) {
    this._relatedEncounter = relatedEncounter;
  }

  /**
   * Set the RelatedEncounter and return 'this' for chaining.
   * @param {RelatedEncounter} relatedEncounter - The shr.base.RelatedEncounter
   * @returns {Content} this.
   */
  withRelatedEncounter(relatedEncounter) {
    this.relatedEncounter = relatedEncounter; return this;
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
   * Set the Author and return 'this' for chaining.
   * @param {Author} author - The shr.base.Author
   * @returns {Content} this.
   */
  withAuthor(author) {
    this.author = author; return this;
  }

  /**
   * Get the Informant.
   * @returns {Informant} The shr.base.Informant
   */
  get informant() {
    return this._informant;
  }

  /**
   * Set the Informant.
   * @param {Informant} informant - The shr.base.Informant
   */
  set informant(informant) {
    this._informant = informant;
  }

  /**
   * Set the Informant and return 'this' for chaining.
   * @param {Informant} informant - The shr.base.Informant
   * @returns {Content} this.
   */
  withInformant(informant) {
    this.informant = informant; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Content class.
   * The JSON must be valid against the Content JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Content} An instance of Content populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Content();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Content class to a JSON object.
   * The JSON is expected to be valid against the Content JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Content' } };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    return inst;
  }
}
export default Content;
