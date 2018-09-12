import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.CardConstraintOnFieldChild.
 */
class CardConstraintOnFieldChild {

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
   * @returns {CardConstraintOnFieldChild} this.
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
   * @returns {CardConstraintOnFieldChild} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the Simple2.
   * @returns {Simple2} The shr.test.Simple2
   */
  get simple2() {
    return this._simple2;
  }

  /**
   * Set the Simple2.
   * @param {Simple2} simple2 - The shr.test.Simple2
   */
  set simple2(simple2) {
    this._simple2 = simple2;
  }

  /**
   * Set the Simple2 and return 'this' for chaining.
   * @param {Simple2} simple2 - The shr.test.Simple2
   * @returns {CardConstraintOnFieldChild} this.
   */
  withSimple2(simple2) {
    this.simple2 = simple2; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CardConstraintOnFieldChild class.
   * The JSON must be valid against the CardConstraintOnFieldChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CardConstraintOnFieldChild} An instance of CardConstraintOnFieldChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CardConstraintOnFieldChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CardConstraintOnFieldChild class to a JSON object.
   * The JSON is expected to be valid against the CardConstraintOnFieldChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/CardConstraintOnFieldChild' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.simple2 != null) {
      inst['Simple2'] = typeof this.simple2.toJSON === 'function' ? this.simple2.toJSON() : this.simple2;
    }
    return inst;
  }
  /**
   * Serializes an instance of the CardConstraintOnFieldChild class to a FHIR object.
   * The FHIR is expected to be valid against the CardConstraintOnFieldChild FHIR profile, but no validation checks are performed.
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
    if (this.simple2 != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple2.toFHIR(true));
    }
    return inst;
  }
}
export default CardConstraintOnFieldChild;
