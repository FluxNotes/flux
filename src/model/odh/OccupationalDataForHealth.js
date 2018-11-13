import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Composition from '../shr/composition/Composition';

/**
 * Generated class for odh.OccupationalDataForHealth.
 * @extends Composition
 */
class OccupationalDataForHealth extends Composition {

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
   * @returns {OccupationalDataForHealth} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the OccupationalDataSection array.
   * @returns {Array<OccupationalDataSection>} The odh.OccupationalDataSection array
   */
  get section() {
    return this._section;
  }

  /**
   * Set the OccupationalDataSection array.
   * This field/value is required.
   * @param {Array<OccupationalDataSection>} section - The odh.OccupationalDataSection array
   */
  set section(section) {
    this._section = section;
  }

  /**
   * Set the OccupationalDataSection array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<OccupationalDataSection>} section - The odh.OccupationalDataSection array
   * @returns {OccupationalDataForHealth} this.
   */
  withSection(section) {
    this.section = section; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccupationalDataForHealth class.
   * The JSON must be valid against the OccupationalDataForHealth JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccupationalDataForHealth} An instance of OccupationalDataForHealth populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OccupationalDataForHealth();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OccupationalDataForHealth class to a JSON object.
   * The JSON is expected to be valid against the OccupationalDataForHealth JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/odh/OccupationalDataForHealth' };
    if (this.section != null) {
      inst['Section'] = this.section.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the OccupationalDataForHealth class to a FHIR object.
   * The FHIR is expected to be valid against the OccupationalDataForHealth FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Composition';
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the OccupationalDataForHealth class.
   * The FHIR must be valid against the OccupationalDataForHealth FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OccupationalDataForHealth} An instance of OccupationalDataForHealth populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new OccupationalDataForHealth();
    if (fhir['section'] != null) {
      inst.occupationalDataSection = inst.occupationalDataSection || [];
      inst.occupationalDataSection = inst.occupationalDataSection.concat(fhir['section'].map(f => createInstanceFromFHIR('odh.OccupationalDataSection', f)));
    }
    if (fhir['section'] != null && fhir['section']['entry'] != null) {
      if(inst.occupationalDataSection == null) {
        inst.occupationalDataSection = createInstanceFromFHIR('odh.OccupationalDataSection', {});
      }
      inst.occupationalDataSection.informationItem = inst.occupationalDataSection.informationItem || [];
      inst.occupationalDataSection.informationItem = inst.occupationalDataSection.informationItem.concat(fhir['section']['entry'].map(f => createInstanceFromFHIR('shr.base.InformationItem', f)));
    }
    return inst;
  }

}
export default OccupationalDataForHealth;
