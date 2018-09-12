import { setPropertiesFromJSON } from '../../json-helper';

import Section from '../../cimi/composition/Section';

/**
 * Generated class for shr.occupation.OccupationalDataSection.
 * @extends Section
 */
class OccupationalDataSection extends Section {

  /**
   * Get the ClinicalStatement array.
   * @returns {Array<ClinicalStatement>} The cimi.statement.ClinicalStatement array
   */
  get clinicalStatement() {
    return this._clinicalStatement;
  }

  /**
   * Set the ClinicalStatement array.
   * @param {Array<ClinicalStatement>} clinicalStatement - The cimi.statement.ClinicalStatement array
   */
  set clinicalStatement(clinicalStatement) {
    this._clinicalStatement = clinicalStatement;
  }

  /**
   * Set the ClinicalStatement array and return 'this' for chaining.
   * @param {Array<ClinicalStatement>} clinicalStatement - The cimi.statement.ClinicalStatement array
   * @returns {OccupationalDataSection} this.
   */
  withClinicalStatement(clinicalStatement) {
    this.clinicalStatement = clinicalStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccupationalDataSection class.
   * The JSON must be valid against the OccupationalDataSection JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccupationalDataSection} An instance of OccupationalDataSection populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OccupationalDataSection();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OccupationalDataSection class to a JSON object.
   * The JSON is expected to be valid against the OccupationalDataSection JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/OccupationalDataSection' } };
    if (this.clinicalStatement != null) {
      inst['ClinicalStatement'] = this.clinicalStatement.map(f => f.toJSON());
    }
    return inst;
  }
}
export default OccupationalDataSection;
