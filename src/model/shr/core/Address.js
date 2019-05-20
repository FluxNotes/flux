import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Address.
 */
class Address {

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.core.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.core.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose and return 'this' for chaining.
   * @param {Purpose} purpose - The shr.core.Purpose
   * @returns {Address} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {Address} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Set the DisplayText and return 'this' for chaining.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   * @returns {Address} this.
   */
  withDisplayText(displayText) {
    this.displayText = displayText; return this;
  }

  /**
   * Get the AddressLine array.
   * @returns {Array<AddressLine>} The shr.core.AddressLine array
   */
  get addressLine() {
    return this._addressLine;
  }

  /**
   * Set the AddressLine array.
   * @param {Array<AddressLine>} addressLine - The shr.core.AddressLine array
   */
  set addressLine(addressLine) {
    this._addressLine = addressLine;
  }

  /**
   * Set the AddressLine array and return 'this' for chaining.
   * @param {Array<AddressLine>} addressLine - The shr.core.AddressLine array
   * @returns {Address} this.
   */
  withAddressLine(addressLine) {
    this.addressLine = addressLine; return this;
  }

  /**
   * Get the City.
   * @returns {City} The shr.core.City
   */
  get city() {
    return this._city;
  }

  /**
   * Set the City.
   * @param {City} city - The shr.core.City
   */
  set city(city) {
    this._city = city;
  }

  /**
   * Set the City and return 'this' for chaining.
   * @param {City} city - The shr.core.City
   * @returns {Address} this.
   */
  withCity(city) {
    this.city = city; return this;
  }

  /**
   * Get the District.
   * @returns {District} The shr.core.District
   */
  get district() {
    return this._district;
  }

  /**
   * Set the District.
   * @param {District} district - The shr.core.District
   */
  set district(district) {
    this._district = district;
  }

  /**
   * Set the District and return 'this' for chaining.
   * @param {District} district - The shr.core.District
   * @returns {Address} this.
   */
  withDistrict(district) {
    this.district = district; return this;
  }

  /**
   * Get the State.
   * @returns {State} The shr.core.State
   */
  get state() {
    return this._state;
  }

  /**
   * Set the State.
   * @param {State} state - The shr.core.State
   */
  set state(state) {
    this._state = state;
  }

  /**
   * Set the State and return 'this' for chaining.
   * @param {State} state - The shr.core.State
   * @returns {Address} this.
   */
  withState(state) {
    this.state = state; return this;
  }

  /**
   * Get the PostalCode.
   * @returns {PostalCode} The shr.core.PostalCode
   */
  get postalCode() {
    return this._postalCode;
  }

  /**
   * Set the PostalCode.
   * @param {PostalCode} postalCode - The shr.core.PostalCode
   */
  set postalCode(postalCode) {
    this._postalCode = postalCode;
  }

  /**
   * Set the PostalCode and return 'this' for chaining.
   * @param {PostalCode} postalCode - The shr.core.PostalCode
   * @returns {Address} this.
   */
  withPostalCode(postalCode) {
    this.postalCode = postalCode; return this;
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
   * @param {Country} country - The shr.core.Country
   */
  set country(country) {
    this._country = country;
  }

  /**
   * Set the Country and return 'this' for chaining.
   * @param {Country} country - The shr.core.Country
   * @returns {Address} this.
   */
  withCountry(country) {
    this.country = country; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Address} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Address class.
   * The JSON must be valid against the Address JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Address} An instance of Address populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Address();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Address class to a JSON object.
   * The JSON is expected to be valid against the Address JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Address' } };
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
   * Deserializes FHIR JSON data to an instance of the Address class.
   * The FHIR must be valid against the Address FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Address} An instance of Address populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Address();
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
      inst.state = FHIRHelper.createInstanceFromFHIR('shr.core.State', fhir['state'], shrId, allEntries, mappedResources, referencesOut, false);
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
    if (asExtension) {
      inst.value = fhir['valueAddress'];
    }
    return inst;
  }

}
export default Address;
