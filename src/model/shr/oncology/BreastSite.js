import { setPropertiesFromJSON } from '../../json-helper';

import AnatomicalLocation from '../../cimi/element/AnatomicalLocation';

/**
 * Generated class for shr.oncology.BreastSite.
 * @extends AnatomicalLocation
 */
class BreastSite extends AnatomicalLocation {

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
   * @returns {BreastSite} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {BreastSite} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {BreastSite} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the AnatomicalDirection.
   * @returns {AnatomicalDirection} The cimi.element.AnatomicalDirection
   */
  get anatomicalDirection() {
    return this._anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection.
   * @param {AnatomicalDirection} anatomicalDirection - The cimi.element.AnatomicalDirection
   */
  set anatomicalDirection(anatomicalDirection) {
    this._anatomicalDirection = anatomicalDirection;
  }

  /**
   * Set the AnatomicalDirection and return 'this' for chaining.
   * @param {AnatomicalDirection} anatomicalDirection - The cimi.element.AnatomicalDirection
   * @returns {BreastSite} this.
   */
  withAnatomicalDirection(anatomicalDirection) {
    this.anatomicalDirection = anatomicalDirection; return this;
  }

  /**
   * Get the ClockDirection.
   * @returns {ClockDirection} The shr.core.ClockDirection
   */
  get clockDirection() {
    return this._clockDirection;
  }

  /**
   * Set the ClockDirection.
   * @param {ClockDirection} clockDirection - The shr.core.ClockDirection
   */
  set clockDirection(clockDirection) {
    this._clockDirection = clockDirection;
  }

  /**
   * Set the ClockDirection and return 'this' for chaining.
   * @param {ClockDirection} clockDirection - The shr.core.ClockDirection
   * @returns {BreastSite} this.
   */
  withClockDirection(clockDirection) {
    this.clockDirection = clockDirection; return this;
  }

  /**
   * Get the DistanceFromBreastSiteToNipple.
   * @returns {DistanceFromBreastSiteToNipple} The shr.oncology.DistanceFromBreastSiteToNipple
   */
  get distanceFromBreastSiteToNipple() {
    return this._distanceFromBreastSiteToNipple;
  }

  /**
   * Set the DistanceFromBreastSiteToNipple.
   * @param {DistanceFromBreastSiteToNipple} distanceFromBreastSiteToNipple - The shr.oncology.DistanceFromBreastSiteToNipple
   */
  set distanceFromBreastSiteToNipple(distanceFromBreastSiteToNipple) {
    this._distanceFromBreastSiteToNipple = distanceFromBreastSiteToNipple;
  }

  /**
   * Set the DistanceFromBreastSiteToNipple and return 'this' for chaining.
   * @param {DistanceFromBreastSiteToNipple} distanceFromBreastSiteToNipple - The shr.oncology.DistanceFromBreastSiteToNipple
   * @returns {BreastSite} this.
   */
  withDistanceFromBreastSiteToNipple(distanceFromBreastSiteToNipple) {
    this.distanceFromBreastSiteToNipple = distanceFromBreastSiteToNipple; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastSite class.
   * The JSON must be valid against the BreastSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastSite} An instance of BreastSite populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastSite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastSite class to a JSON object.
   * The JSON is expected to be valid against the BreastSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastSite' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.laterality != null) {
      inst['Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.anatomicalDirection != null) {
      inst['AnatomicalDirection'] = typeof this.anatomicalDirection.toJSON === 'function' ? this.anatomicalDirection.toJSON() : this.anatomicalDirection;
    }
    if (this.clockDirection != null) {
      inst['ClockDirection'] = typeof this.clockDirection.toJSON === 'function' ? this.clockDirection.toJSON() : this.clockDirection;
    }
    if (this.distanceFromBreastSiteToNipple != null) {
      inst['DistanceFromBreastSiteToNipple'] = typeof this.distanceFromBreastSiteToNipple.toJSON === 'function' ? this.distanceFromBreastSiteToNipple.toJSON() : this.distanceFromBreastSiteToNipple;
    }
    return inst;
  }
}
export default BreastSite;
