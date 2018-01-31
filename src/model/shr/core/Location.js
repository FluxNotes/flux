import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.core.Location.
 * @extends Entity
 */
class Location extends Entity {

  /**
   * Get the choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation.
   * @returns {(Address|Geoposition|GeopoliticalLocation)} The choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation.
   * @param {(Address|Geoposition|GeopoliticalLocation)} value - The choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the Location class.
   * The JSON must be valid against the Location JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Location} An instance of Location populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Location();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Location;
