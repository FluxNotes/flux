import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.BooleanConstraintOnFieldChild.
 */
class BooleanConstraintOnFieldChild {

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
   * @returns {BooleanConstraintOnFieldChild} this.
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
   * @returns {BooleanConstraintOnFieldChild} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the SimpleBoolean.
   * @returns {SimpleBoolean} The shr.test.SimpleBoolean
   */
  get simpleBoolean() {
    return this._simpleBoolean;
  }

  /**
   * Set the SimpleBoolean.
   * @param {SimpleBoolean} simpleBoolean - The shr.test.SimpleBoolean
   */
  set simpleBoolean(simpleBoolean) {
    this._simpleBoolean = simpleBoolean;
  }

  /**
   * Set the SimpleBoolean and return 'this' for chaining.
   * @param {SimpleBoolean} simpleBoolean - The shr.test.SimpleBoolean
   * @returns {BooleanConstraintOnFieldChild} this.
   */
  withSimpleBoolean(simpleBoolean) {
    this.simpleBoolean = simpleBoolean; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BooleanConstraintOnFieldChild class.
   * The JSON must be valid against the BooleanConstraintOnFieldChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BooleanConstraintOnFieldChild} An instance of BooleanConstraintOnFieldChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BooleanConstraintOnFieldChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BooleanConstraintOnFieldChild class to a JSON object.
   * The JSON is expected to be valid against the BooleanConstraintOnFieldChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/BooleanConstraintOnFieldChild' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.simpleBoolean != null) {
      inst['SimpleBoolean'] = typeof this.simpleBoolean.toJSON === 'function' ? this.simpleBoolean.toJSON() : this.simpleBoolean;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BooleanConstraintOnFieldChild class to a FHIR object.
   * The FHIR is expected to be valid against the BooleanConstraintOnFieldChild FHIR profile, but no validation checks are performed.
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
    if (this.simpleBoolean != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simpleBoolean.toFHIR(true));
    }
    return inst;
  }
}
export default BooleanConstraintOnFieldChild;
