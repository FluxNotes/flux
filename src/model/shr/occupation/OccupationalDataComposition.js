import { setPropertiesFromJSON } from '../../json-helper';

import Composition from '../../cimi/composition/Composition';

/**
 * Generated class for shr.occupation.OccupationalDataComposition.
 * @extends Composition
 */
class OccupationalDataComposition extends Composition {

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
   * @returns {OccupationalDataComposition} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the OccupationalDataSection array.
   * @returns {Array<OccupationalDataSection>} The shr.occupation.OccupationalDataSection array
   */
  get section() {
    return this._section;
  }

  /**
   * Set the OccupationalDataSection array.
   * This field/value is required.
   * @param {Array<OccupationalDataSection>} section - The shr.occupation.OccupationalDataSection array
   */
  set section(section) {
    this._section = section;
  }

  /**
   * Set the OccupationalDataSection array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<OccupationalDataSection>} section - The shr.occupation.OccupationalDataSection array
   * @returns {OccupationalDataComposition} this.
   */
  withSection(section) {
    this.section = section; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccupationalDataComposition class.
   * The JSON must be valid against the OccupationalDataComposition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccupationalDataComposition} An instance of OccupationalDataComposition populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OccupationalDataComposition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OccupationalDataComposition class to a JSON object.
   * The JSON is expected to be valid against the OccupationalDataComposition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/OccupationalDataComposition' };
    if (this.section != null) {
      inst['Section'] = this.section.map(f => f.toJSON());
    }
    return inst;
  }
}
export default OccupationalDataComposition;
