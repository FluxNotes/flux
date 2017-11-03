import AddressLine from './AddressLine';
import City from './City';
import Country from './Country';
import County from './County';
import PostalCode from './PostalCode';
import State from './State';

/** Generated from SHR definition for shr.core.Address */
class Address {
    constructor(json) {
        if (json) {
            this._addressLine = json.addressLine.map((a) => new AddressLine(a));
            if (json.city) this._city = new City(json.city);
            if (json.county) this._county = new County(json.county);
            if (json.state) this._state = new State(json.state);
            if (json.postalCode) this._postalCode = new PostalCode(json.postalCode);
            if (json.country) this._country = new Country(json.country);
        }
    }

  /**
   * Getter for shr.core.AddressLine[]
   */
  get addressLine() {
    return this._addressLine;
  }

  /**
   * Setter for shr.core.AddressLine[]
   */
  set addressLine(addressLineVal) {
    this._addressLine = addressLineVal;
  }

  /**
   * Getter for shr.core.City
   */
  get city() {
    return this._city;
  }

  /**
   * Setter for shr.core.City
   */
  set city(cityVal) {
    this._city = cityVal;
  }

  /**
   * Getter for shr.core.County
   */
  get county() {
    return this._county;
  }

  /**
   * Setter for shr.core.County
   */
  set county(countyVal) {
    this._county = countyVal;
  }

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

export default Address;
