import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.SimpleGroup.
 */
class SimpleGroup {

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
   * @returns {SimpleGroup} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
  }

  /**
   * Get the Coded array.
   * @returns {Array<Coded>} The shr.test.Coded array
   */
  get coded() {
    return this._coded;
  }

  /**
   * Set the Coded array.
   * @param {Array<Coded>} coded - The shr.test.Coded array
   */
  set coded(coded) {
    this._coded = coded;
  }

  /**
   * Set the Coded array and return 'this' for chaining.
   * @param {Array<Coded>} coded - The shr.test.Coded array
   * @returns {SimpleGroup} this.
   */
  withCoded(coded) {
    this.coded = coded; return this;
  }

  /**
   * Get the Simple2 array.
   * @returns {Array<Simple2>} The shr.test.Simple2 array
   */
  get simple2() {
    return this._simple2;
  }

  /**
   * Set the Simple2 array.
   * This field/value is required.
   * @param {Array<Simple2>} simple2 - The shr.test.Simple2 array
   */
  set simple2(simple2) {
    this._simple2 = simple2;
  }

  /**
   * Set the Simple2 array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Simple2>} simple2 - The shr.test.Simple2 array
   * @returns {SimpleGroup} this.
   */
  withSimple2(simple2) {
    this.simple2 = simple2; return this;
  }

  /**
   * Get the Thing.
   * @returns {Thing} The other.ns.Thing
   */
  get thing() {
    return this._thing;
  }

  /**
   * Set the Thing.
   * This field/value is required.
   * @param {Thing} thing - The other.ns.Thing
   */
  set thing(thing) {
    this._thing = thing;
  }

  /**
   * Set the Thing and return 'this' for chaining.
   * This field/value is required.
   * @param {Thing} thing - The other.ns.Thing
   * @returns {SimpleGroup} this.
   */
  withThing(thing) {
    this.thing = thing; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SimpleGroup class.
   * The JSON must be valid against the SimpleGroup JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SimpleGroup} An instance of SimpleGroup populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SimpleGroup();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SimpleGroup class to a JSON object.
   * The JSON is expected to be valid against the SimpleGroup JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/test/SimpleGroup' } };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.coded != null) {
      inst['Coded'] = this.coded.map(f => f.toJSON());
    }
    if (this.simple2 != null) {
      inst['Simple2'] = this.simple2.map(f => f.toJSON());
    }
    if (this.thing != null) {
      inst['Thing'] = typeof this.thing.toJSON === 'function' ? this.thing.toJSON() : this.thing;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SimpleGroup class to a FHIR object.
   * The FHIR is expected to be valid against the SimpleGroup FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default SimpleGroup;
