import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.UnitConstraintOnValueChild.
 */
class UnitConstraintOnValueChild {

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
   * @returns {UnitConstraintOnValueChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases volume).
   * @returns {Volume} The shr.test.Volume
   */
  get value() {
    return this._volume;
  }

  /**
   * Set the value (aliases volume).
   * This field/value is required.
   * @param {Volume} value - The shr.test.Volume
   */
  set value(value) {
    this._volume = value;
  }

  /**
   * Set the value (aliases volume) and return 'this' for chaining.
   * This field/value is required.
   * @param {Volume} value - The shr.test.Volume
   * @returns {UnitConstraintOnValueChild} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the Volume.
   * @returns {Volume} The shr.test.Volume
   */
  get volume() {
    return this._volume;
  }

  /**
   * Set the Volume.
   * This field/value is required.
   * @param {Volume} volume - The shr.test.Volume
   */
  set volume(volume) {
    this._volume = volume;
  }

  /**
   * Set the Volume and return 'this' for chaining.
   * This field/value is required.
   * @param {Volume} volume - The shr.test.Volume
   * @returns {UnitConstraintOnValueChild} this.
   */
  withVolume(volume) {
    this.volume = volume; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UnitConstraintOnValueChild class.
   * The JSON must be valid against the UnitConstraintOnValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitConstraintOnValueChild} An instance of UnitConstraintOnValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new UnitConstraintOnValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the UnitConstraintOnValueChild class to a JSON object.
   * The JSON is expected to be valid against the UnitConstraintOnValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/UnitConstraintOnValueChild' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the UnitConstraintOnValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the UnitConstraintOnValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    return inst;
  }
}
export default UnitConstraintOnValueChild;
