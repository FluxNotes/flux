import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.IncludesCodeConstraintOnFieldChild.
 */
class IncludesCodeConstraintOnFieldChild {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {IncludesCodeConstraintOnFieldChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Simple.
   * @returns {Simple} The shr.test.Simple
   */
  get simple() {
    return this._simple;
  }

  /**
   * Set the Simple.
   * @param {Simple} simple - The shr.test.Simple
   */
  set simple(simple) {
    this._simple = simple;
  }

  /**
   * Set the Simple and return 'this' for chaining.
   * @param {Simple} simple - The shr.test.Simple
   * @returns {IncludesCodeConstraintOnFieldChild} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the MultiCodedFromValueSet.
   * @returns {MultiCodedFromValueSet} The shr.test.MultiCodedFromValueSet
   */
  get multiCodedFromValueSet() {
    return this._multiCodedFromValueSet;
  }

  /**
   * Set the MultiCodedFromValueSet.
   * @param {MultiCodedFromValueSet} multiCodedFromValueSet - The shr.test.MultiCodedFromValueSet
   */
  set multiCodedFromValueSet(multiCodedFromValueSet) {
    this._multiCodedFromValueSet = multiCodedFromValueSet;
  }

  /**
   * Set the MultiCodedFromValueSet and return 'this' for chaining.
   * @param {MultiCodedFromValueSet} multiCodedFromValueSet - The shr.test.MultiCodedFromValueSet
   * @returns {IncludesCodeConstraintOnFieldChild} this.
   */
  withMultiCodedFromValueSet(multiCodedFromValueSet) {
    this.multiCodedFromValueSet = multiCodedFromValueSet; return this;
  }

  /**
   * Deserializes JSON data to an instance of the IncludesCodeConstraintOnFieldChild class.
   * The JSON must be valid against the IncludesCodeConstraintOnFieldChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IncludesCodeConstraintOnFieldChild} An instance of IncludesCodeConstraintOnFieldChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new IncludesCodeConstraintOnFieldChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnFieldChild class to a JSON object.
   * The JSON is expected to be valid against the IncludesCodeConstraintOnFieldChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/IncludesCodeConstraintOnFieldChild' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.multiCodedFromValueSet != null) {
      inst['MultiCodedFromValueSet'] = typeof this.multiCodedFromValueSet.toJSON === 'function' ? this.multiCodedFromValueSet.toJSON() : this.multiCodedFromValueSet;
    }
    return inst;
  }
  /**
   * Serializes an instance of the IncludesCodeConstraintOnFieldChild class to a FHIR object.
   * The FHIR is expected to be valid against the IncludesCodeConstraintOnFieldChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.simple != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple.toFHIR(true));
    }
    if (this.multiCodedFromValueSet != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.multiCodedFromValueSet.toFHIR(true));
    }
    return inst;
  }
}
export default IncludesCodeConstraintOnFieldChild;
