import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.base.Entry.
 */
class Entry {

  /**
   * Get the ShrId.
   * @returns {ShrId} The shr.base.ShrId
   */
  get shrId() {
    return this._shrId;
  }

  /**
   * Set the ShrId.
   * @param {ShrId} shrId - The shr.base.ShrId
   */
  set shrId(shrId) {
    this._shrId = shrId;
  }

  /**
   * Set the ShrId and return 'this' for chaining.
   * @param {ShrId} shrId - The shr.base.ShrId
   * @returns {Entry} this.
   */
  withShrId(shrId) {
    this.shrId = shrId; return this;
  }

  /**
   * Get the EntryId.
   * @returns {EntryId} The shr.base.EntryId
   */
  get entryId() {
    return this._entryId;
  }

  /**
   * Set the EntryId.
   * @param {EntryId} entryId - The shr.base.EntryId
   */
  set entryId(entryId) {
    this._entryId = entryId;
  }

  /**
   * Set the EntryId and return 'this' for chaining.
   * @param {EntryId} entryId - The shr.base.EntryId
   * @returns {Entry} this.
   */
  withEntryId(entryId) {
    this.entryId = entryId; return this;
  }

  /**
   * Get the EntryType.
   * @returns {EntryType} The shr.base.EntryType
   */
  get entryType() {
    return this._entryType;
  }

  /**
   * Set the EntryType.
   * @param {EntryType} entryType - The shr.base.EntryType
   */
  set entryType(entryType) {
    this._entryType = entryType;
  }

  /**
   * Set the EntryType and return 'this' for chaining.
   * @param {EntryType} entryType - The shr.base.EntryType
   * @returns {Entry} this.
   */
  withEntryType(entryType) {
    this.entryType = entryType; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Entry class.
   * The JSON must be valid against the Entry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Entry} An instance of Entry populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Entry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Entry class to a JSON object.
   * The JSON is expected to be valid against the Entry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Entry' } };
    if (this.shrId != null) {
      inst['ShrId'] = typeof this.shrId.toJSON === 'function' ? this.shrId.toJSON() : this.shrId;
    }
    if (this.entryId != null) {
      inst['EntryId'] = typeof this.entryId.toJSON === 'function' ? this.entryId.toJSON() : this.entryId;
    }
    if (this.entryType != null) {
      inst['EntryType'] = typeof this.entryType.toJSON === 'function' ? this.entryType.toJSON() : this.entryType;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Entry class.
   * The FHIR must be valid against the Entry FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Entry} An instance of Entry populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Entry();
    return inst;
  }

}
export default Entry;
