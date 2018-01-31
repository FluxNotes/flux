import { setPropertiesFromJSON } from '../../json-helper';

import EmbeddedContent from './EmbeddedContent';

/**
 * Generated class for shr.core.Attachment.
 * @extends EmbeddedContent
 */
class Attachment extends EmbeddedContent {

  /**
   * Get the BinaryData.
   * @returns {BinaryData} The shr.core.BinaryData
   */
  get binaryData() {
    return this._binaryData;
  }

  /**
   * Set the BinaryData.
   * @param {BinaryData} binaryData - The shr.core.BinaryData
   */
  set binaryData(binaryData) {
    this._binaryData = binaryData;
  }

  /**
   * Get the ContentType.
   * @returns {ContentType} The shr.core.ContentType
   */
  get contentType() {
    return this._contentType;
  }

  /**
   * Set the ContentType.
   * @param {ContentType} contentType - The shr.core.ContentType
   */
  set contentType(contentType) {
    this._contentType = contentType;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.base.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.base.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Get the ResourceLocation.
   * @returns {ResourceLocation} The shr.core.ResourceLocation
   */
  get resourceLocation() {
    return this._resourceLocation;
  }

  /**
   * Set the ResourceLocation.
   * @param {ResourceLocation} resourceLocation - The shr.core.ResourceLocation
   */
  set resourceLocation(resourceLocation) {
    this._resourceLocation = resourceLocation;
  }

  /**
   * Get the ResourceSize.
   * @returns {ResourceSize} The shr.core.ResourceSize
   */
  get resourceSize() {
    return this._resourceSize;
  }

  /**
   * Set the ResourceSize.
   * @param {ResourceSize} resourceSize - The shr.core.ResourceSize
   */
  set resourceSize(resourceSize) {
    this._resourceSize = resourceSize;
  }

  /**
   * Get the Hash.
   * @returns {Hash} The shr.core.Hash
   */
  get hash() {
    return this._hash;
  }

  /**
   * Set the Hash.
   * @param {Hash} hash - The shr.core.Hash
   */
  set hash(hash) {
    this._hash = hash;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Get the CreationTime.
   * @returns {CreationTime} The shr.core.CreationTime
   */
  get creationTime() {
    return this._creationTime;
  }

  /**
   * Set the CreationTime.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   */
  set creationTime(creationTime) {
    this._creationTime = creationTime;
  }

  /**
   * Deserializes JSON data to an instance of the Attachment class.
   * The JSON must be valid against the Attachment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Attachment} An instance of Attachment populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Attachment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Attachment;
