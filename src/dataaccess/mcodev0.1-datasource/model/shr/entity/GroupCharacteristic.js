import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.GroupCharacteristic.
 */
class GroupCharacteristic {

  /**
   * Get the GroupCharacteristicCode.
   * @returns {GroupCharacteristicCode} The shr.entity.GroupCharacteristicCode
   */
  get groupCharacteristicCode() {
    return this._groupCharacteristicCode;
  }

  /**
   * Set the GroupCharacteristicCode.
   * This field/value is required.
   * @param {GroupCharacteristicCode} groupCharacteristicCode - The shr.entity.GroupCharacteristicCode
   */
  set groupCharacteristicCode(groupCharacteristicCode) {
    this._groupCharacteristicCode = groupCharacteristicCode;
  }

  /**
   * Set the GroupCharacteristicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {GroupCharacteristicCode} groupCharacteristicCode - The shr.entity.GroupCharacteristicCode
   * @returns {GroupCharacteristic} this.
   */
  withGroupCharacteristicCode(groupCharacteristicCode) {
    this.groupCharacteristicCode = groupCharacteristicCode; return this;
  }

  /**
   * Get the GroupCharacteristicValue.
   * @returns {GroupCharacteristicValue} The shr.entity.GroupCharacteristicValue
   */
  get groupCharacteristicValue() {
    return this._groupCharacteristicValue;
  }

  /**
   * Set the GroupCharacteristicValue.
   * @param {GroupCharacteristicValue} groupCharacteristicValue - The shr.entity.GroupCharacteristicValue
   */
  set groupCharacteristicValue(groupCharacteristicValue) {
    this._groupCharacteristicValue = groupCharacteristicValue;
  }

  /**
   * Set the GroupCharacteristicValue and return 'this' for chaining.
   * @param {GroupCharacteristicValue} groupCharacteristicValue - The shr.entity.GroupCharacteristicValue
   * @returns {GroupCharacteristic} this.
   */
  withGroupCharacteristicValue(groupCharacteristicValue) {
    this.groupCharacteristicValue = groupCharacteristicValue; return this;
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
   * @returns {GroupCharacteristic} this.
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
   * @returns {GroupCharacteristic} this.
   */
  withTimePeriod(timePeriod) {
    this.timePeriod = timePeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the GroupCharacteristic class.
   * The JSON must be valid against the GroupCharacteristic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GroupCharacteristic} An instance of GroupCharacteristic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new GroupCharacteristic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the GroupCharacteristic class to a JSON object.
   * The JSON is expected to be valid against the GroupCharacteristic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/GroupCharacteristic' } };
    if (this.groupCharacteristicCode != null) {
      inst['GroupCharacteristicCode'] = typeof this.groupCharacteristicCode.toJSON === 'function' ? this.groupCharacteristicCode.toJSON() : this.groupCharacteristicCode;
    }
    if (this.groupCharacteristicValue != null) {
      inst['GroupCharacteristicValue'] = typeof this.groupCharacteristicValue.toJSON === 'function' ? this.groupCharacteristicValue.toJSON() : this.groupCharacteristicValue;
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
   * Serializes an instance of the GroupCharacteristic class to a FHIR object.
   * The FHIR is expected to be valid against the GroupCharacteristic FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the GroupCharacteristic class.
   * The FHIR must be valid against the GroupCharacteristic FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {GroupCharacteristic} An instance of GroupCharacteristic populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new GroupCharacteristic();
    return inst;
  }

}
export default GroupCharacteristic;
