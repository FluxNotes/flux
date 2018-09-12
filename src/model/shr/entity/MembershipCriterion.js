import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MembershipCriterion.
 */
class MembershipCriterion {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range.
   * @returns {(CodeableConcept|boolean|Quantity|Range)} The choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range.
   * This field/value is required.
   * @param {(CodeableConcept|boolean|Quantity|Range)} value - The choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|boolean|Quantity|Range)} value - The choice value; one of: shr.core.CodeableConcept, boolean, shr.core.Quantity, shr.core.Range
   * @returns {MembershipCriterion} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {MembershipCriterion} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Get the ExcludeFlag.
   * @returns {ExcludeFlag} The shr.entity.ExcludeFlag
   */
  get excludeFlag() {
    return this._excludeFlag;
  }

  /**
   * Set the ExcludeFlag.
   * This field/value is required.
   * @param {ExcludeFlag} excludeFlag - The shr.entity.ExcludeFlag
   */
  set excludeFlag(excludeFlag) {
    this._excludeFlag = excludeFlag;
  }

  /**
   * Set the ExcludeFlag and return 'this' for chaining.
   * This field/value is required.
   * @param {ExcludeFlag} excludeFlag - The shr.entity.ExcludeFlag
   * @returns {MembershipCriterion} this.
   */
  withExcludeFlag(excludeFlag) {
    this.excludeFlag = excludeFlag; return this;
  }

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Set the TimePeriod and return 'this' for chaining.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   * @returns {MembershipCriterion} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MembershipCriterion class.
   * The JSON must be valid against the MembershipCriterion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MembershipCriterion} An instance of MembershipCriterion populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MembershipCriterion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MembershipCriterion class to a JSON object.
   * The JSON is expected to be valid against the MembershipCriterion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/MembershipCriterion' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.excludeFlag != null) {
      inst['ExcludeFlag'] = typeof this.excludeFlag.toJSON === 'function' ? this.excludeFlag.toJSON() : this.excludeFlag;
    }
    if (this.timePeriod != null) {
      inst['TimePeriod'] = typeof this.timePeriod.toJSON === 'function' ? this.timePeriod.toJSON() : this.timePeriod;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MembershipCriterion class to a FHIR object.
   * The FHIR is expected to be valid against the MembershipCriterion FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default MembershipCriterion;
