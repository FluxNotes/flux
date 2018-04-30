import { setPropertiesFromJSON } from '../../json-helper';

import Address from './Address';

/**
 * Generated class for shr.core.UnitedStatesAddress.
 * @extends Address
 */
class UnitedStatesAddress extends Address {

  /**
   * Get the UnitedStatesState.
   * @returns {UnitedStatesState} The shr.core.UnitedStatesState
   */
  get state() {
    return this._state;
  }

  /**
   * Set the UnitedStatesState.
   * This field/value is required.
   * @param {UnitedStatesState} state - The shr.core.UnitedStatesState
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Set the UnitedStatesState and return 'this' for chaining.
   * This field/value is required.
   * @param {UnitedStatesState} state - The shr.core.UnitedStatesState
   * @returns {UnitedStatesAddress} this.
   */
  withState(state) {
    this.state = state; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UnitedStatesAddress class.
   * The JSON must be valid against the UnitedStatesAddress JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitedStatesAddress} An instance of UnitedStatesAddress populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new UnitedStatesAddress();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the UnitedStatesAddress class to a JSON object.
   * The JSON is expected to be valid against the UnitedStatesAddress JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/UnitedStatesAddress' } };
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    if (this.addressLine != null) {
      inst['AddressLine'] = this.addressLine.map(f => f.toJSON());
    }
    if (this.city != null) {
      inst['City'] = typeof this.city.toJSON === 'function' ? this.city.toJSON() : this.city;
    }
    if (this.district != null) {
      inst['District'] = typeof this.district.toJSON === 'function' ? this.district.toJSON() : this.district;
    }
    if (this.state != null) {
      inst['State'] = typeof this.state.toJSON === 'function' ? this.state.toJSON() : this.state;
    }
    if (this.postalCode != null) {
      inst['PostalCode'] = typeof this.postalCode.toJSON === 'function' ? this.postalCode.toJSON() : this.postalCode;
    }
    if (this.country != null) {
      inst['Country'] = typeof this.country.toJSON === 'function' ? this.country.toJSON() : this.country;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
}
export default UnitedStatesAddress;
