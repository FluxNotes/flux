import { setPropertiesFromJSON } from '../../../json-helper';

/**
 * Generated class for shr.test.one.Ambiguous.
 */
class Ambiguous {

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
   * @returns {Ambiguous} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases foo).
   * @returns {Foo} The shr.test.two.Foo
   */
  get value() {
    return this._foo;
  }

  /**
   * Set the value (aliases foo).
   * This field/value is required.
   * @param {Foo} value - The shr.test.two.Foo
   */
  set value(value) {
    this._foo = value;
  }

  /**
   * Set the value (aliases foo) and return 'this' for chaining.
   * This field/value is required.
   * @param {Foo} value - The shr.test.two.Foo
   * @returns {Ambiguous} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Foo.
   * @returns {Foo} The shr.test.two.Foo
   */
  get foo() {
    return this._foo;
  }

  /**
   * Set the Foo.
   * This field/value is required.
   * @param {Foo} foo - The shr.test.two.Foo
   */
  set foo(foo) {
    this._foo = foo;
  }

  /**
   * Set the Foo and return 'this' for chaining.
   * This field/value is required.
   * @param {Foo} foo - The shr.test.two.Foo
   * @returns {Ambiguous} this.
   */
  withFoo(foo) {
    this.foo = foo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Ambiguous class.
   * The JSON must be valid against the Ambiguous JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ambiguous} An instance of Ambiguous populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Ambiguous();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Ambiguous class to a JSON object.
   * The JSON is expected to be valid against the Ambiguous JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test.one/Ambiguous' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Ambiguous class to a FHIR object.
   * The FHIR is expected to be valid against the Ambiguous FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default Ambiguous;
