import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.base.StageInformation.
 */
class StageInformation {

  /**
   * Get the StageSummary.
   * @returns {StageSummary} The shr.base.StageSummary
   */
  get stageSummary() {
    return this._stageSummary;
  }

  /**
   * Set the StageSummary.
   * @param {StageSummary} stageSummary - The shr.base.StageSummary
   */
  set stageSummary(stageSummary) {
    this._stageSummary = stageSummary;
  }

  /**
   * Set the StageSummary and return 'this' for chaining.
   * @param {StageSummary} stageSummary - The shr.base.StageSummary
   * @returns {StageInformation} this.
   */
  withStageSummary(stageSummary) {
    this.stageSummary = stageSummary; return this;
  }

  /**
   * Get the StageDetail.
   * @returns {StageDetail} The shr.base.StageDetail
   */
  get stageDetail() {
    return this._stageDetail;
  }

  /**
   * Set the StageDetail.
   * @param {StageDetail} stageDetail - The shr.base.StageDetail
   */
  set stageDetail(stageDetail) {
    this._stageDetail = stageDetail;
  }

  /**
   * Set the StageDetail and return 'this' for chaining.
   * @param {StageDetail} stageDetail - The shr.base.StageDetail
   * @returns {StageInformation} this.
   */
  withStageDetail(stageDetail) {
    this.stageDetail = stageDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the StageInformation class.
   * The JSON must be valid against the StageInformation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StageInformation} An instance of StageInformation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new StageInformation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the StageInformation class to a JSON object.
   * The JSON is expected to be valid against the StageInformation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/StageInformation' } };
    if (this.stageSummary != null) {
      inst['StageSummary'] = typeof this.stageSummary.toJSON === 'function' ? this.stageSummary.toJSON() : this.stageSummary;
    }
    if (this.stageDetail != null) {
      inst['StageDetail'] = typeof this.stageDetail.toJSON === 'function' ? this.stageDetail.toJSON() : this.stageDetail;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the StageInformation class.
   * The FHIR must be valid against the StageInformation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {StageInformation} An instance of StageInformation populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new StageInformation();
    return inst;
  }

}
export default StageInformation;
