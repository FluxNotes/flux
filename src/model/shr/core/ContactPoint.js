import { setPropertiesFromJSON } from '../../json-helper';

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
   * This field/value is required.
   * @param {TelecomNumberOrAddress} telecomNumberOrAddress - The shr.core.TelecomNumberOrAddress
   */
  set telecomNumberOrAddress(telecomNumberOrAddress) {
    this._telecomNumberOrAddress = telecomNumberOrAddress;
  }

  /**
   * Set the TelecomNumberOrAddress and return 'this' for chaining.
   * This field/value is required.
   * @param {TelecomNumberOrAddress} telecomNumberOrAddress - The shr.core.TelecomNumberOrAddress
   * @returns {ContactPoint} this.
   */
  withTelecomNumberOrAddress(telecomNumberOrAddress) {
    this.telecomNumberOrAddress = telecomNumberOrAddress; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {ContactPoint} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.entity.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.entity.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose and return 'this' for chaining.
   * @param {Purpose} purpose - The shr.entity.Purpose
   * @returns {ContactPoint} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the Priority.
   * @returns {Priority} The shr.core.Priority
   */
  get priority() {
    return this._priority;
  }

  /**
   * Set the Priority.
   * @param {Priority} priority - The shr.core.Priority
   */
  set priority(priority) {
    this._priority = priority;
  }

  /**
   * Set the Priority and return 'this' for chaining.
   * @param {Priority} priority - The shr.core.Priority
   * @returns {ContactPoint} this.
   */
  withPriority(priority) {
    this.priority = priority; return this;
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
  static fromJSON(json = {}) {
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
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/ContactPoint' } };
    if (this.telecomNumberOrAddress != null) {
      inst['TelecomNumberOrAddress'] = typeof this.telecomNumberOrAddress.toJSON === 'function' ? this.telecomNumberOrAddress.toJSON() : this.telecomNumberOrAddress;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.priority != null) {
      inst['Priority'] = typeof this.priority.toJSON === 'function' ? this.priority.toJSON() : this.priority;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the ContactPoint class to a FHIR object.
   * The FHIR is expected to be valid against the ContactPoint FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.type != null) {
      inst['system'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.telecomNumberOrAddress != null) {
      inst['value'] = typeof this.telecomNumberOrAddress.toFHIR === 'function' ? this.telecomNumberOrAddress.toFHIR() : this.telecomNumberOrAddress;
    }
    if (this.purpose != null) {
      inst['use'] = typeof this.purpose.toFHIR === 'function' ? this.purpose.toFHIR() : this.purpose;
    }
    if (this.priority != null) {
      inst['rank'] = typeof this.priority.toFHIR === 'function' ? this.priority.toFHIR() : this.priority;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-ContactPoint-extension';
      inst['valueContactPoint'] = this.value;
    }
    return inst;
  }
}
export default ContactPoint;
