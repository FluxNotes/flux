import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.slicing.BloodPressureEntry.
 */
class BloodPressureEntry {

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
   * @returns {BloodPressureEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the SystolicPressure.
   * @returns {SystolicPressure} The shr.slicing.SystolicPressure
   */
  get systolicPressure() {
    return this._systolicPressure;
  }

  /**
   * Set the SystolicPressure.
   * @param {SystolicPressure} systolicPressure - The shr.slicing.SystolicPressure
   */
  set systolicPressure(systolicPressure) {
    this._systolicPressure = systolicPressure;
  }

  /**
   * Set the SystolicPressure and return 'this' for chaining.
   * @param {SystolicPressure} systolicPressure - The shr.slicing.SystolicPressure
   * @returns {BloodPressureEntry} this.
   */
  withSystolicPressure(systolicPressure) {
    this.systolicPressure = systolicPressure; return this;
  }

  /**
   * Get the DiastolicPressure.
   * @returns {DiastolicPressure} The shr.slicing.DiastolicPressure
   */
  get diastolicPressure() {
    return this._diastolicPressure;
  }

  /**
   * Set the DiastolicPressure.
   * @param {DiastolicPressure} diastolicPressure - The shr.slicing.DiastolicPressure
   */
  set diastolicPressure(diastolicPressure) {
    this._diastolicPressure = diastolicPressure;
  }

  /**
   * Set the DiastolicPressure and return 'this' for chaining.
   * @param {DiastolicPressure} diastolicPressure - The shr.slicing.DiastolicPressure
   * @returns {BloodPressureEntry} this.
   */
  withDiastolicPressure(diastolicPressure) {
    this.diastolicPressure = diastolicPressure; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BloodPressureEntry class.
   * The JSON must be valid against the BloodPressureEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BloodPressureEntry} An instance of BloodPressureEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BloodPressureEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BloodPressureEntry class to a JSON object.
   * The JSON is expected to be valid against the BloodPressureEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/BloodPressureEntry' };
    if (this.systolicPressure != null) {
      inst['SystolicPressure'] = typeof this.systolicPressure.toJSON === 'function' ? this.systolicPressure.toJSON() : this.systolicPressure;
    }
    if (this.diastolicPressure != null) {
      inst['DiastolicPressure'] = typeof this.diastolicPressure.toJSON === 'function' ? this.diastolicPressure.toJSON() : this.diastolicPressure;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BloodPressureEntry class to a FHIR object.
   * The FHIR is expected to be valid against the BloodPressureEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.systolicPressure != null) {
      inst['component'] = inst['component'] || [];
      inst['component'].push(typeof this.systolicPressure.toFHIR === 'function' ? this.systolicPressure.toFHIR() : this.systolicPressure);
    }
    if (this.diastolicPressure != null) {
      inst['component'] = inst['component'] || [];
      inst['component'].push(typeof this.diastolicPressure.toFHIR === 'function' ? this.diastolicPressure.toFHIR() : this.diastolicPressure);
    }
    return inst;
  }
}
export default BloodPressureEntry;
