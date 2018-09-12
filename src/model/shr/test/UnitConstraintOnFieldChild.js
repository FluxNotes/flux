import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.test.UnitConstraintOnFieldChild.
 */
class UnitConstraintOnFieldChild {

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
   * @returns {UnitConstraintOnFieldChild} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Simple.
   * @returns {Simple} The shr.test.Simple
   */
  get simple() {
    return this._simple;
  }

  /**
   * Set the Simple.
   * @param {Simple} simple - The shr.test.Simple
   */
  set simple(simple) {
    this._simple = simple;
  }

  /**
   * Set the Simple and return 'this' for chaining.
   * @param {Simple} simple - The shr.test.Simple
   * @returns {UnitConstraintOnFieldChild} this.
   */
  withSimple(simple) {
    this.simple = simple; return this;
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
   * @param {Volume} volume - The shr.test.Volume
   */
  set volume(volume) {
    this._volume = volume;
  }

  /**
   * Set the Volume and return 'this' for chaining.
   * @param {Volume} volume - The shr.test.Volume
   * @returns {UnitConstraintOnFieldChild} this.
   */
  withVolume(volume) {
    this.volume = volume; return this;
  }

  /**
   * Deserializes JSON data to an instance of the UnitConstraintOnFieldChild class.
   * The JSON must be valid against the UnitConstraintOnFieldChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {UnitConstraintOnFieldChild} An instance of UnitConstraintOnFieldChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new UnitConstraintOnFieldChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the UnitConstraintOnFieldChild class to a JSON object.
   * The JSON is expected to be valid against the UnitConstraintOnFieldChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/test/UnitConstraintOnFieldChild' };
    if (this.simple != null) {
      inst['Simple'] = typeof this.simple.toJSON === 'function' ? this.simple.toJSON() : this.simple;
    }
    if (this.volume != null) {
      inst['Volume'] = typeof this.volume.toJSON === 'function' ? this.volume.toJSON() : this.volume;
    }
    return inst;
  }
  /**
   * Serializes an instance of the UnitConstraintOnFieldChild class to a FHIR object.
   * The FHIR is expected to be valid against the UnitConstraintOnFieldChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.simple != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.simple.toFHIR(true));
    }
    if (this.volume != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.volume.toFHIR(true));
    }
    return inst;
  }
}
export default UnitConstraintOnFieldChild;
