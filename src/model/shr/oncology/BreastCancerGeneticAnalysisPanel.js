import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.oncology.BreastCancerGeneticAnalysisPanel.
 * @extends Observation
 */
class BreastCancerGeneticAnalysisPanel extends Observation {

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
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerGeneticAnalysisPanel class.
   * The JSON must be valid against the BreastCancerGeneticAnalysisPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerGeneticAnalysisPanel} An instance of BreastCancerGeneticAnalysisPanel populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BreastCancerGeneticAnalysisPanel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BreastCancerGeneticAnalysisPanel;
