import Address from './Address';

/** Generated from SHR definition for shr.core.GeopoliticalLocation */
class GeopoliticalLocation extends Address {

  /**
   * Getter for shr.core.AddressLine
   */
  get addressLine() {
    return this._addressLine;
  }

  /**
   * Setter for shr.core.AddressLine
   */
  set addressLine(addressLineVal) {
    this._addressLine = addressLineVal;
  }

  /**
   * Getter for shr.core.PostalCode
   */
  get postalCode() {
    return this._postalCode;
  }

  /**
   * Setter for shr.core.PostalCode
   */
  set postalCode(postalCodeVal) {
    this._postalCode = postalCodeVal;
  }

}

export default GeopoliticalLocation;
