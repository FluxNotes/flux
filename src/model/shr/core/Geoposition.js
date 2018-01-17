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
   * @param {Latitude} latitude - The shr.core.Latitude
   */
  set latitude(latitude) {
    this._latitude = latitude;
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
   * @param {Longitude} longitude - The shr.core.Longitude
   */
  set longitude(longitude) {
    this._longitude = longitude;
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
}
export default Geoposition;
