import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PartOf.
 */
class PartOf {

  /**
   * Get the value (aliases content).
   * @returns {Reference} The shr.base.Content reference
   */
  get value() {
    return this._content;
  }

  /**
   * Set the value (aliases content).
   * This field/value is required.
   * @param {Reference} value - The shr.base.Content reference
   */
  set value(value) {
    this._content = value;
  }

  /**
   * Set the value (aliases content) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.Content reference
   * @returns {PartOf} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.Content reference.
   * @returns {Reference} The shr.base.Content reference
   */
  get content() {
    return this._content;
  }

  /**
   * Set the shr.base.Content reference.
   * This field/value is required.
   * @param {Reference} content - The shr.base.Content reference
   */
  set content(content) {
    this._content = content;
  }

  /**
   * Set the shr.base.Content reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} content - The shr.base.Content reference
   * @returns {PartOf} this.
   */
  withContent(content) {
    this.content = content; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PartOf class.
   * The JSON must be valid against the PartOf JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PartOf} An instance of PartOf populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PartOf();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PartOf class to a JSON object.
   * The JSON is expected to be valid against the PartOf JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/PartOf' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PartOf class to a FHIR object.
   * The FHIR is expected to be valid against the PartOf FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.content.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-PartOf-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default PartOf;
