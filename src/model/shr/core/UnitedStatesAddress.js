import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
   * Deserializes FHIR JSON data to an instance of the UnitedStatesAddress class.
   * The FHIR must be valid against the UnitedStatesAddress FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {UnitedStatesAddress} An instance of UnitedStatesAddress populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new UnitedStatesAddress();
    if (fhir['use'] != null) {
      inst.purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_line of fhir['line'] || []) {
      inst.addressLine = inst.addressLine || [];
      const inst_addressLine = FHIRHelper.createInstanceFromFHIR('shr.core.AddressLine', fhir_line, shrId, allEntries, mappedResources, referencesOut, false);
      inst.addressLine.push(inst_addressLine);
    }
    if (fhir['city'] != null) {
      inst.city = FHIRHelper.createInstanceFromFHIR('shr.core.City', fhir['city'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['district'] != null) {
      inst.district = FHIRHelper.createInstanceFromFHIR('shr.core.District', fhir['district'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['state'] != null) {
      inst.unitedStatesState = FHIRHelper.createInstanceFromFHIR('shr.core.UnitedStatesState', fhir['state'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['postalCode'] != null) {
      inst.postalCode = FHIRHelper.createInstanceFromFHIR('shr.core.PostalCode', fhir['postalCode'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['country'] != null) {
      inst.country = FHIRHelper.createInstanceFromFHIR('shr.core.Country', fhir['country'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default UnitedStatesAddress;
