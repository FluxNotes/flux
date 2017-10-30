/** Generated from SHR definition for shr.demographics.PlaceOfBirth */
class PlaceOfBirth {

  /**
   * Convenience getter for value (accesses this.geopoliticalLocation)
   */
  get value() {
    return this.geopoliticalLocation;
  }

  /**
   * Convenience setter for value (sets this.geopoliticalLocation)
   */
  set value(val) {
    this.geopoliticalLocation = val;
  }

  /**
   * Getter for shr.core.GeopoliticalLocation
   */
  get geopoliticalLocation() {
    return this._geopoliticalLocation;
  }

  /**
   * Setter for shr.core.GeopoliticalLocation
   */
  set geopoliticalLocation(geopoliticalLocationVal) {
    this._geopoliticalLocation = geopoliticalLocationVal;
  }

}

export default PlaceOfBirth;
