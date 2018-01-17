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
   * @param {boolean} value - The boolean
   */
  set value(value) {
    this._boolean = value;
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
   * @param {boolean} boolean - The boolean
   */
  set boolean(boolean) {
    this._boolean = boolean;
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
}
export default Brand;
