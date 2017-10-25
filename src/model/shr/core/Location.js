/** Generated from SHR definition for shr.core.Location */
class Location {

  /**
   * Getter for choice value
   * - shr.core.Address
   * - shr.core.Geoposition
   * - shr.core.GeopoliticalLocation
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Address
   * - shr.core.Geoposition
   * - shr.core.GeopoliticalLocation
   */
  set value(val) {
    this._value = val;
  }

}

export default Location;
