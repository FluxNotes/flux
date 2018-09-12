import { setPropertiesFromJSON } from '../../json-helper';

import Media from './Media';

/**
 * Generated class for shr.core.PhotographicImage.
 * @extends Media
 */
class PhotographicImage extends Media {

  /**
   * Deserializes JSON data to an instance of the PhotographicImage class.
   * The JSON must be valid against the PhotographicImage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PhotographicImage} An instance of PhotographicImage populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PhotographicImage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PhotographicImage class to a JSON object.
   * The JSON is expected to be valid against the PhotographicImage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/PhotographicImage' } };
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
   * Serializes an instance of the PhotographicImage class to a FHIR object.
   * The FHIR is expected to be valid against the PhotographicImage FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
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
    return inst;
  }
}
export default PhotographicImage;
