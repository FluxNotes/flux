import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import EmbeddedContent from './EmbeddedContent';

/**
 * Generated class for shr.core.Media.
 * @extends EmbeddedContent
 */
class Media extends EmbeddedContent {

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
   * @returns {Media} this.
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
   * @returns {Media} this.
   */
  withContentType(contentType) {
    this.contentType = contentType; return this;
  }

  /**
   * Get the Language.
   * @returns {Language} The shr.core.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.core.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * @param {Language} language - The shr.core.Language
   * @returns {Media} this.
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
   * @returns {Media} this.
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
   * @returns {Media} this.
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
   * @returns {Media} this.
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
   * @returns {Media} this.
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
   * @returns {Media} this.
   */
  withCreationTime(creationTime) {
    this.creationTime = creationTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Media class.
   * The JSON must be valid against the Media JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Media} An instance of Media populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Media();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Media class to a JSON object.
   * The JSON is expected to be valid against the Media JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Media' } };
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

  /**
   * Serializes an instance of the Media class to a FHIR object.
   * The FHIR is expected to be valid against the Media FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.contentType != null) {
      inst['contentType'] = typeof this.contentType.toFHIR === 'function' ? this.contentType.toFHIR() : this.contentType;
    }
    if (this.language != null) {
      inst['language'] = typeof this.language.toFHIR === 'function' ? this.language.toFHIR() : this.language;
    }
    if (this.binaryData != null) {
      inst['data'] = typeof this.binaryData.toFHIR === 'function' ? this.binaryData.toFHIR() : this.binaryData;
    }
    if (this.resourceLocation != null) {
      inst['url'] = typeof this.resourceLocation.toFHIR === 'function' ? this.resourceLocation.toFHIR() : this.resourceLocation;
    }
    if (this.resourceSize != null) {
      inst['size'] = typeof this.resourceSize.toFHIR === 'function' ? this.resourceSize.toFHIR() : this.resourceSize;
    }
    if (this.hash != null) {
      inst['hash'] = typeof this.hash.toFHIR === 'function' ? this.hash.toFHIR() : this.hash;
    }
    if (this.title != null) {
      inst['title'] = typeof this.title.toFHIR === 'function' ? this.title.toFHIR() : this.title;
    }
    if (this.creationTime != null) {
      inst['creation'] = typeof this.creationTime.toFHIR === 'function' ? this.creationTime.toFHIR() : this.creationTime;
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Media-extension';
      inst['valueAttachment'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Media class.
   * The FHIR must be valid against the Media FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Media} An instance of Media populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Media();
    if (fhir['contentType'] != null) {
      inst.contentType = createInstanceFromFHIR('shr.core.ContentType', fhir['contentType']);
    }
    if (fhir['language'] != null) {
      inst.language = createInstanceFromFHIR('shr.core.Language', fhir['language']);
    }
    if (fhir['data'] != null) {
      inst.binaryData = createInstanceFromFHIR('shr.core.BinaryData', fhir['data']);
    }
    if (fhir['url'] != null) {
      inst.resourceLocation = createInstanceFromFHIR('shr.core.ResourceLocation', fhir['url']);
    }
    if (fhir['size'] != null) {
      inst.resourceSize = createInstanceFromFHIR('shr.core.ResourceSize', fhir['size']);
    }
    if (fhir['hash'] != null) {
      inst.hash = createInstanceFromFHIR('shr.core.Hash', fhir['hash']);
    }
    if (fhir['title'] != null) {
      inst.title = createInstanceFromFHIR('shr.core.Title', fhir['title']);
    }
    if (fhir['creation'] != null) {
      inst.creationTime = createInstanceFromFHIR('shr.core.CreationTime', fhir['creation']);
    }
    if (asExtension) {
      inst.value = fhir['valueAttachment'];
    }
    return inst;
  }

}
export default Media;
