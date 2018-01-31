import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Signature.
 */
class Signature {

  /**
   * Get the TypeAsaCoding array.
   * @returns {Array<TypeAsaCoding>} The shr.core.TypeAsaCoding array
   */
  get typeAsaCoding() {
    return this._typeAsaCoding;
  }

  /**
   * Set the TypeAsaCoding array.
   * @param {Array<TypeAsaCoding>} typeAsaCoding - The shr.core.TypeAsaCoding array
   */
  set typeAsaCoding(typeAsaCoding) {
    this._typeAsaCoding = typeAsaCoding;
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
   * Get the Signatory.
   * @returns {Signatory} The shr.core.Signatory
   */
  get signatory() {
    return this._signatory;
  }

  /**
   * Set the Signatory.
   * @param {Signatory} signatory - The shr.core.Signatory
   */
  set signatory(signatory) {
    this._signatory = signatory;
  }

  /**
   * Get the OnBehalfOf.
   * @returns {OnBehalfOf} The shr.core.OnBehalfOf
   */
  get onBehalfOf() {
    return this._onBehalfOf;
  }

  /**
   * Set the OnBehalfOf.
   * @param {OnBehalfOf} onBehalfOf - The shr.core.OnBehalfOf
   */
  set onBehalfOf(onBehalfOf) {
    this._onBehalfOf = onBehalfOf;
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
   * Deserializes JSON data to an instance of the Signature class.
   * The JSON must be valid against the Signature JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Signature} An instance of Signature populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Signature();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Signature;
