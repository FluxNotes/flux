import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Brand.
 */
class Brand {

  /**
   * Get the value (aliases boolean).
   * @returns {boolean} The boolean
   */
  get value() {
    return this._boolean;
  }

  /**
   * Set the value (aliases boolean).
   * This field/value is required.
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
  }

  /**
   * Set the value (aliases boolean) and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} value - The boolean
   * @returns {Brand} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the boolean.
   * @returns {boolean} The boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Set the boolean.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
  }

  /**
   * Set the boolean and return 'this' for chaining.
   * This field/value is required.
   * @param {boolean} boolean - The boolean
   * @returns {Brand} this.
   */
  withBoolean(boolean) {
    this.boolean = boolean; return this;
  }

  /**
   * Get the BrandName.
   * @returns {BrandName} The shr.entity.BrandName
   */
  get brandName() {
    return this._brandName;
  }

  /**
   * Set the BrandName.
   * @param {BrandName} brandName - The shr.entity.BrandName
   */
  set brandName(brandName) {
    this._brandName = brandName;
  }

  /**
   * Set the BrandName and return 'this' for chaining.
   * @param {BrandName} brandName - The shr.entity.BrandName
   * @returns {Brand} this.
   */
  withBrandName(brandName) {
    this.brandName = brandName; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Brand class.
   * The JSON must be valid against the Brand JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Brand} An instance of Brand populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Brand();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Brand class to a JSON object.
   * The JSON is expected to be valid against the Brand JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Brand' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.brandName != null) {
      inst['BrandName'] = typeof this.brandName.toJSON === 'function' ? this.brandName.toJSON() : this.brandName;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Brand class to a FHIR object.
   * The FHIR is expected to be valid against the Brand FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default Brand;
