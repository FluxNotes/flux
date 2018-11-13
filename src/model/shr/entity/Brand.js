import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.Brand.
 */
class Brand {

  /**
   * Get the IsBrand.
   * @returns {IsBrand} The shr.entity.IsBrand
   */
  get isBrand() {
    return this._isBrand;
  }

  /**
   * Set the IsBrand.
   * This field/value is required.
   * @param {IsBrand} isBrand - The shr.entity.IsBrand
   */
  set isBrand(isBrand) {
    this._isBrand = isBrand;
  }

  /**
   * Set the IsBrand and return 'this' for chaining.
   * This field/value is required.
   * @param {IsBrand} isBrand - The shr.entity.IsBrand
   * @returns {Brand} this.
   */
  withIsBrand(isBrand) {
    this.isBrand = isBrand; return this;
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
  static fromJSON(json={}) {
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Brand' } };
    if (this.isBrand != null) {
      inst['IsBrand'] = typeof this.isBrand.toJSON === 'function' ? this.isBrand.toJSON() : this.isBrand;
    }
    if (this.brandName != null) {
      inst['BrandName'] = typeof this.brandName.toJSON === 'function' ? this.brandName.toJSON() : this.brandName;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Brand class to a FHIR object.
   * The FHIR is expected to be valid against the Brand FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Brand class.
   * The FHIR must be valid against the Brand FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Brand} An instance of Brand populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Brand();
    return inst;
  }

}
export default Brand;
