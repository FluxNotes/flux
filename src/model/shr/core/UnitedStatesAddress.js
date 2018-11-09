import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Get the Country.
   * @returns {Country} The shr.core.Country
   */
  get country() {
    return this._country;
  }

  /**
   * Set the Country.
   * This field/value is required.
   * @param {Country} country - The shr.core.Country
   */
  set country(country) {
    this._country = country;
  }

  /**
   * Set the Country and return 'this' for chaining.
   * This field/value is required.
   * @param {Country} country - The shr.core.Country
   * @returns {UnitedStatesAddress} this.
   */
  withCountry(country) {
    this.country = country; return this;
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

  /**
   * Serializes an instance of the UnitedStatesAddress class to a FHIR object.
   * The FHIR is expected to be valid against the UnitedStatesAddress FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.purpose != null) {
      inst['use'] = typeof this.purpose.toFHIR === 'function' ? this.purpose.toFHIR() : this.purpose;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.displayText != null) {
      inst['text'] = typeof this.displayText.toFHIR === 'function' ? this.displayText.toFHIR() : this.displayText;
    }
    if (this.addressLine != null) {
      inst['line'] = inst ['line'] || [];
      inst['line'] = inst['line'].concat(this.addressLine.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.city != null) {
      inst['city'] = typeof this.city.toFHIR === 'function' ? this.city.toFHIR() : this.city;
    }
    if (this.district != null) {
      inst['district'] = typeof this.district.toFHIR === 'function' ? this.district.toFHIR() : this.district;
    }
    if (this.postalCode != null) {
      inst['postalCode'] = typeof this.postalCode.toFHIR === 'function' ? this.postalCode.toFHIR() : this.postalCode;
    }
    if (this.country != null) {
      inst['country'] = typeof this.country.toFHIR === 'function' ? this.country.toFHIR() : this.country;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the UnitedStatesAddress class.
   * The FHIR must be valid against the UnitedStatesAddress FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {UnitedStatesAddress} An instance of UnitedStatesAddress populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new UnitedStatesAddress();
    if (fhir['use'] != null) {
      inst.purpose = createInstanceFromFHIR('shr.core.Purpose', fhir['use']);
    }
    if (fhir['type'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['type']);
    }
    if (fhir['text'] != null) {
      inst.displayText = createInstanceFromFHIR('shr.core.DisplayText', fhir['text']);
    }
    if (fhir['line'] != null) {
      inst.addressLine = inst.addressLine || [];
      inst.addressLine = inst.addressLine.concat(fhir['line'].map(f => createInstanceFromFHIR('shr.core.AddressLine', f)));
    }
    if (fhir['city'] != null) {
      inst.city = createInstanceFromFHIR('shr.core.City', fhir['city']);
    }
    if (fhir['district'] != null) {
      inst.district = createInstanceFromFHIR('shr.core.District', fhir['district']);
    }
    if (fhir['state'] != null) {
      inst.unitedStatesState = createInstanceFromFHIR('shr.core.UnitedStatesState', fhir['state']);
    }
    if (fhir['postalCode'] != null) {
      inst.postalCode = createInstanceFromFHIR('shr.core.PostalCode', fhir['postalCode']);
    }
    if (fhir['country'] != null) {
      inst.country = createInstanceFromFHIR('shr.core.Country', fhir['country']);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period']);
    }
    return inst;
  }

}
export default UnitedStatesAddress;
