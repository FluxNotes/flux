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
   * Set the BinaryData and return 'this' for chaining.
   * @param {BinaryData} binaryData - The shr.core.BinaryData
   * @returns {Attachment} this.
   */
  withBinaryData(binaryData) {
    this.binaryData = binaryData; return this;
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
   * Set the ContentType and return 'this' for chaining.
   * @param {ContentType} contentType - The shr.core.ContentType
   * @returns {Attachment} this.
   */
  withContentType(contentType) {
    this.contentType = contentType; return this;
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
   * Set the Language and return 'this' for chaining.
   * @param {Language} language - The shr.base.Language
   * @returns {Attachment} this.
   */
  withLanguage(language) {
    this.language = language; return this;
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
   * Set the ResourceLocation and return 'this' for chaining.
   * @param {ResourceLocation} resourceLocation - The shr.core.ResourceLocation
   * @returns {Attachment} this.
   */
  withResourceLocation(resourceLocation) {
    this.resourceLocation = resourceLocation; return this;
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
   * Set the ResourceSize and return 'this' for chaining.
   * @param {ResourceSize} resourceSize - The shr.core.ResourceSize
   * @returns {Attachment} this.
   */
  withResourceSize(resourceSize) {
    this.resourceSize = resourceSize; return this;
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
   * Set the Hash and return 'this' for chaining.
   * @param {Hash} hash - The shr.core.Hash
   * @returns {Attachment} this.
   */
  withHash(hash) {
    this.hash = hash; return this;
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
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Attachment} this.
   */
  withTitle(title) {
    this.title = title; return this;
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
   * Set the CreationTime and return 'this' for chaining.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   * @returns {Attachment} this.
   */
  withCreationTime(creationTime) {
    this.creationTime = creationTime; return this;
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
  /**
   * Serializes an instance of the Attachment class to a JSON object.
   * The JSON is expected to be valid against the Attachment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Attachment' } };
    if (this.binaryData != null) {
      inst['BinaryData'] = typeof this.binaryData.toJSON === 'function' ? this.binaryData.toJSON() : this.binaryData;
    }
    if (this.contentType != null) {
      inst['ContentType'] = typeof this.contentType.toJSON === 'function' ? this.contentType.toJSON() : this.contentType;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.resourceLocation != null) {
      inst['ResourceLocation'] = typeof this.resourceLocation.toJSON === 'function' ? this.resourceLocation.toJSON() : this.resourceLocation;
    }
    if (this.resourceSize != null) {
      inst['ResourceSize'] = typeof this.resourceSize.toJSON === 'function' ? this.resourceSize.toJSON() : this.resourceSize;
    }
    if (this.hash != null) {
      inst['Hash'] = typeof this.hash.toJSON === 'function' ? this.hash.toJSON() : this.hash;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.creationTime != null) {
      inst['CreationTime'] = typeof this.creationTime.toJSON === 'function' ? this.creationTime.toJSON() : this.creationTime;
    }
    return inst;
  }
}
export default Attachment;
