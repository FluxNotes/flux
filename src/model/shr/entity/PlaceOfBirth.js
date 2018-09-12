import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.PlaceOfBirth.
 */
class PlaceOfBirth {

  /**
   * Get the value (aliases geopoliticalLocation).
   * @returns {GeopoliticalLocation} The shr.core.GeopoliticalLocation
   */
  get value() {
    return this._geopoliticalLocation;
  }

  /**
   * Set the value (aliases geopoliticalLocation).
   * This field/value is required.
   * @param {GeopoliticalLocation} value - The shr.core.GeopoliticalLocation
   */
  set value(value) {
    this._geopoliticalLocation = value;
  }

  /**
   * Set the value (aliases geopoliticalLocation) and return 'this' for chaining.
   * This field/value is required.
   * @param {GeopoliticalLocation} value - The shr.core.GeopoliticalLocation
   * @returns {PlaceOfBirth} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the GeopoliticalLocation.
   * @returns {GeopoliticalLocation} The shr.core.GeopoliticalLocation
   */
  get geopoliticalLocation() {
    return this._geopoliticalLocation;
  }

  /**
   * Set the GeopoliticalLocation.
   * This field/value is required.
   * @param {GeopoliticalLocation} geopoliticalLocation - The shr.core.GeopoliticalLocation
   */
  set geopoliticalLocation(geopoliticalLocation) {
    this._geopoliticalLocation = geopoliticalLocation;
  }

  /**
   * Set the GeopoliticalLocation and return 'this' for chaining.
   * This field/value is required.
   * @param {GeopoliticalLocation} geopoliticalLocation - The shr.core.GeopoliticalLocation
   * @returns {PlaceOfBirth} this.
   */
  withGeopoliticalLocation(geopoliticalLocation) {
    this.geopoliticalLocation = geopoliticalLocation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PlaceOfBirth class.
   * The JSON must be valid against the PlaceOfBirth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PlaceOfBirth} An instance of PlaceOfBirth populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PlaceOfBirth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PlaceOfBirth class to a JSON object.
   * The JSON is expected to be valid against the PlaceOfBirth JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/PlaceOfBirth' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PlaceOfBirth class to a FHIR object.
   * The FHIR is expected to be valid against the PlaceOfBirth FHIR profile, but no validation checks are performed.
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
export default PlaceOfBirth;
