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
}
export default Content;
