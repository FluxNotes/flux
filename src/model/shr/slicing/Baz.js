import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.slicing.Baz.
 */
class Baz {

  /**
   * Get the shr.slicing.Foo reference array.
   * @returns {Array<Reference>} The shr.slicing.Foo reference array
   */
  get foo() {
    return this._foo;
  }

  /**
   * Set the shr.slicing.Foo reference array.
   * @param {Array<Reference>} foo - The shr.slicing.Foo reference array
   */
  set foo(foo) {
    this._foo = foo;
  }

  /**
   * Set the shr.slicing.Foo reference array and return 'this' for chaining.
   * @param {Array<Reference>} foo - The shr.slicing.Foo reference array
   * @returns {Baz} this.
   */
  withFoo(foo) {
    this.foo = foo; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Baz class.
   * The JSON must be valid against the Baz JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Baz} An instance of Baz populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Baz();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Baz class to a JSON object.
   * The JSON is expected to be valid against the Baz JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/Baz' } };
    if (this.foo != null) {
      inst['Foo'] = this.foo.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Baz class to a FHIR object.
   * The FHIR is expected to be valid against the Baz FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.foo.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-slicing-Baz-extension';
    }
    return inst;
  }
}
export default Baz;
