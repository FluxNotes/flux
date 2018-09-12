import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.financial.Coverage.
 */
class Coverage {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Coverage} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {Coverage} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the InsuranceMemberId.
   * @returns {InsuranceMemberId} The shr.financial.InsuranceMemberId
   */
  get insuranceMemberId() {
    return this._insuranceMemberId;
  }

  /**
   * Set the InsuranceMemberId.
   * @param {InsuranceMemberId} insuranceMemberId - The shr.financial.InsuranceMemberId
   */
  set insuranceMemberId(insuranceMemberId) {
    this._insuranceMemberId = insuranceMemberId;
  }

  /**
   * Set the InsuranceMemberId and return 'this' for chaining.
   * @param {InsuranceMemberId} insuranceMemberId - The shr.financial.InsuranceMemberId
   * @returns {Coverage} this.
   */
  withInsuranceMemberId(insuranceMemberId) {
    this.insuranceMemberId = insuranceMemberId; return this;
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
   * @returns {Coverage} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Coverage class.
   * The JSON must be valid against the Coverage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Coverage} An instance of Coverage populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Coverage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Coverage class to a JSON object.
   * The JSON is expected to be valid against the Coverage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/financial/Coverage' };
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.insuranceMemberId != null) {
      inst['InsuranceMemberId'] = typeof this.insuranceMemberId.toJSON === 'function' ? this.insuranceMemberId.toJSON() : this.insuranceMemberId;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Coverage class to a FHIR object.
   * The FHIR is expected to be valid against the Coverage FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Coverage';
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.insuranceMemberId != null) {
      inst['subscriberId'] = typeof this.insuranceMemberId.toFHIR === 'function' ? this.insuranceMemberId.toFHIR() : this.insuranceMemberId;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    return inst;
  }
}
export default Coverage;
