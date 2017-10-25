import Address from './Address';

/** Generated from SHR definition for shr.core.UnitedStatesAddress */
class UnitedStatesAddress extends Address {

  /**
   * Getter for shr.core.State
   */
  get state() {
    return this._state;
  }

  /**
   * Setter for shr.core.State
   */
  set state(stateVal) {
    this._state = stateVal;
  }

  /**
   * Getter for shr.core.Country
   */
  get country() {
    return this._country;
  }

  /**
   * Setter for shr.core.Country
   */
  set country(countryVal) {
    this._country = countryVal;
  }

}

export default UnitedStatesAddress;
