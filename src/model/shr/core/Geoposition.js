import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.Geoposition.
 */
class Geoposition {

  /**
   * Get the Latitude.
   * @returns {Latitude} The shr.core.Latitude
   */
  get latitude() {
    return this._latitude;
  }

  /**
   * Set the Latitude.
   * This field/value is required.
   * @param {Latitude} latitude - The shr.core.Latitude
   */
  set latitude(latitude) {
    this._latitude = latitude;
  }

  /**
   * Set the Latitude and return 'this' for chaining.
   * This field/value is required.
   * @param {Latitude} latitude - The shr.core.Latitude
   * @returns {Geoposition} this.
   */
  withLatitude(latitude) {
    this.latitude = latitude; return this;
  }

  /**
   * Get the Longitude.
   * @returns {Longitude} The shr.core.Longitude
   */
  get longitude() {
    return this._longitude;
  }

  /**
   * Set the Longitude.
   * This field/value is required.
   * @param {Longitude} longitude - The shr.core.Longitude
   */
  set longitude(longitude) {
    this._longitude = longitude;
  }

  /**
   * Set the Longitude and return 'this' for chaining.
   * This field/value is required.
   * @param {Longitude} longitude - The shr.core.Longitude
   * @returns {Geoposition} this.
   */
  withLongitude(longitude) {
    this.longitude = longitude; return this;
  }

  /**
   * Get the Altitude.
   * @returns {Altitude} The shr.core.Altitude
   */
  get altitude() {
    return this._altitude;
  }

  /**
   * Set the Altitude.
   * @param {Altitude} altitude - The shr.core.Altitude
   */
  set altitude(altitude) {
    this._altitude = altitude;
  }

  /**
   * Set the Altitude and return 'this' for chaining.
   * @param {Altitude} altitude - The shr.core.Altitude
   * @returns {Geoposition} this.
   */
  withAltitude(altitude) {
    this.altitude = altitude; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Geoposition class.
   * The JSON must be valid against the Geoposition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Geoposition} An instance of Geoposition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Geoposition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Geoposition class to a JSON object.
   * The JSON is expected to be valid against the Geoposition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Geoposition' } };
    if (this.latitude != null) {
      inst['Latitude'] = typeof this.latitude.toJSON === 'function' ? this.latitude.toJSON() : this.latitude;
    }
    if (this.longitude != null) {
      inst['Longitude'] = typeof this.longitude.toJSON === 'function' ? this.longitude.toJSON() : this.longitude;
    }
    if (this.altitude != null) {
      inst['Altitude'] = typeof this.altitude.toJSON === 'function' ? this.altitude.toJSON() : this.altitude;
    }
    return inst;
  }
}
export default Geoposition;
