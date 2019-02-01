import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Signature.
 */
class Signature {

  /**
   * Get the SignatureType array.
   * @returns {Array<SignatureType>} The shr.core.SignatureType array
   */
  get signatureType() {
    return this._signatureType;
  }

  /**
   * Set the SignatureType array.
   * This field/value is required.
   * @param {Array<SignatureType>} signatureType - The shr.core.SignatureType array
   */
  set signatureType(signatureType) {
    this._signatureType = signatureType;
  }

  /**
   * Set the SignatureType array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<SignatureType>} signatureType - The shr.core.SignatureType array
   * @returns {Signature} this.
   */
  withSignatureType(signatureType) {
    this.signatureType = signatureType; return this;
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
   * This field/value is required.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   */
  set creationTime(creationTime) {
    this._creationTime = creationTime;
  }

  /**
   * Set the CreationTime and return 'this' for chaining.
   * This field/value is required.
   * @param {CreationTime} creationTime - The shr.core.CreationTime
   * @returns {Signature} this.
   */
  withCreationTime(creationTime) {
    this.creationTime = creationTime; return this;
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
   * This field/value is required.
   * @param {Signatory} signatory - The shr.core.Signatory
   */
  set signatory(signatory) {
    this._signatory = signatory;
  }

  /**
   * Set the Signatory and return 'this' for chaining.
   * This field/value is required.
   * @param {Signatory} signatory - The shr.core.Signatory
   * @returns {Signature} this.
   */
  withSignatory(signatory) {
    this.signatory = signatory; return this;
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
   * Set the OnBehalfOf and return 'this' for chaining.
   * @param {OnBehalfOf} onBehalfOf - The shr.core.OnBehalfOf
   * @returns {Signature} this.
   */
  withOnBehalfOf(onBehalfOf) {
    this.onBehalfOf = onBehalfOf; return this;
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
   * This field/value is required.
   * @param {ContentType} contentType - The shr.core.ContentType
   */
  set contentType(contentType) {
    this._contentType = contentType;
  }

  /**
   * Set the ContentType and return 'this' for chaining.
   * This field/value is required.
   * @param {ContentType} contentType - The shr.core.ContentType
   * @returns {Signature} this.
   */
  withContentType(contentType) {
    this.contentType = contentType; return this;
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
   * This field/value is required.
   * @param {BinaryData} binaryData - The shr.core.BinaryData
   */
  set binaryData(binaryData) {
    this._binaryData = binaryData;
  }

  /**
   * Set the BinaryData and return 'this' for chaining.
   * This field/value is required.
   * @param {BinaryData} binaryData - The shr.core.BinaryData
   * @returns {Signature} this.
   */
  withBinaryData(binaryData) {
    this.binaryData = binaryData; return this;
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

  /**
   * Serializes an instance of the Signature class to a JSON object.
   * The JSON is expected to be valid against the Signature JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Signature' } };
    if (this.signatureType != null) {
      inst['SignatureType'] = this.signatureType.map(f => f.toJSON());
    }
    if (this.creationTime != null) {
      inst['CreationTime'] = typeof this.creationTime.toJSON === 'function' ? this.creationTime.toJSON() : this.creationTime;
    }
    if (this.signatory != null) {
      inst['Signatory'] = typeof this.signatory.toJSON === 'function' ? this.signatory.toJSON() : this.signatory;
    }
    if (this.onBehalfOf != null) {
      inst['OnBehalfOf'] = typeof this.onBehalfOf.toJSON === 'function' ? this.onBehalfOf.toJSON() : this.onBehalfOf;
    }
    if (this.contentType != null) {
      inst['ContentType'] = typeof this.contentType.toJSON === 'function' ? this.contentType.toJSON() : this.contentType;
    }
    if (this.binaryData != null) {
      inst['BinaryData'] = typeof this.binaryData.toJSON === 'function' ? this.binaryData.toJSON() : this.binaryData;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Signature class.
   * The FHIR must be valid against the Signature FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Signature} An instance of Signature populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Signature();
    for (const fhir_type of fhir['type'] || []) {
      inst.signatureType = inst.signatureType || [];
      const inst_signatureType = FHIRHelper.createInstanceFromFHIR('shr.core.SignatureType', fhir_type, shrId, allEntries, mappedResources, referencesOut, false);
      inst.signatureType.push(inst_signatureType);
    }
    if (fhir['when'] != null) {
      inst.creationTime = FHIRHelper.createInstanceFromFHIR('shr.core.CreationTime', fhir['when'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['whoUri'] != null) {
      inst.signatory = FHIRHelper.createInstanceFromFHIR('shr.core.Signatory', fhir['whoUri'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onBehalfOfUri'] != null) {
      inst.onBehalfOf = FHIRHelper.createInstanceFromFHIR('shr.core.OnBehalfOf', fhir['onBehalfOfUri'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['contentType'] != null) {
      inst.contentType = FHIRHelper.createInstanceFromFHIR('shr.core.ContentType', fhir['contentType'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['blob'] != null) {
      inst.binaryData = FHIRHelper.createInstanceFromFHIR('shr.core.BinaryData', fhir['blob'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Signature;
