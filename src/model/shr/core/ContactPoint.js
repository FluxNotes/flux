import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.ContactPoint.
 */
class ContactPoint {

  /**
   * Get the TelecomNumberOrAddress.
   * @returns {TelecomNumberOrAddress} The shr.core.TelecomNumberOrAddress
   */
  get telecomNumberOrAddress() {
    return this._telecomNumberOrAddress;
  }

  /**
   * Set the TelecomNumberOrAddress.
   * @param {TelecomNumberOrAddress} telecomNumberOrAddress - The shr.core.TelecomNumberOrAddress
   */
  set telecomNumberOrAddress(telecomNumberOrAddress) {
    this._telecomNumberOrAddress = telecomNumberOrAddress;
  }

  /**
   * Set the TelecomNumberOrAddress and return 'this' for chaining.
   * @param {TelecomNumberOrAddress} telecomNumberOrAddress - The shr.core.TelecomNumberOrAddress
   * @returns {ContactPoint} this.
   */
  withTelecomNumberOrAddress(telecomNumberOrAddress) {
    this.telecomNumberOrAddress = telecomNumberOrAddress; return this;
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
   * @returns {ContactPoint} this.
   */
  withType(type) {
    this.type = type; return this;
  }

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
   * @returns {ContactPoint} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {ContactPoint} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
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
   * @returns {ContactPoint} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ContactPoint class.
   * The JSON must be valid against the ContactPoint JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContactPoint} An instance of ContactPoint populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContactPoint();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ContactPoint class to a JSON object.
   * The JSON is expected to be valid against the ContactPoint JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ContactPoint' } };
    if (this.telecomNumberOrAddress != null) {
      inst['TelecomNumberOrAddress'] = typeof this.telecomNumberOrAddress.toJSON === 'function' ? this.telecomNumberOrAddress.toJSON() : this.telecomNumberOrAddress;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ContactPoint class.
   * The FHIR must be valid against the ContactPoint FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ContactPoint} An instance of ContactPoint populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ContactPoint();
    if (fhir['system'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['system'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['value'] != null) {
      inst.telecomNumberOrAddress = FHIRHelper.createInstanceFromFHIR('shr.core.TelecomNumberOrAddress', fhir['value'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['use'] != null) {
      inst.purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['rank'] != null) {
      inst.priorityRank = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRank', fhir['rank'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueContactPoint'];
    }
    return inst;
  }

}
export default ContactPoint;
