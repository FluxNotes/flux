import { setPropertiesFromJSON } from '../../json-helper';

import Stage from '../../cimi/context/Stage';

/**
 * Generated class for shr.wound.PressureUlcerStageNPUAP.
 * @extends Stage
 */
class PressureUlcerStageNPUAP extends Stage {

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
   * @returns {PressureUlcerStageNPUAP} this.
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
   * @returns {PressureUlcerStageNPUAP} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the StageDetail.
   * @returns {StageDetail} The cimi.context.StageDetail
   */
  get stageDetail() {
    return this._stageDetail;
  }

  /**
   * Set the StageDetail.
   * @param {StageDetail} stageDetail - The cimi.context.StageDetail
   */
  set stageDetail(stageDetail) {
    this._stageDetail = stageDetail;
  }

  /**
   * Set the StageDetail and return 'this' for chaining.
   * @param {StageDetail} stageDetail - The cimi.context.StageDetail
   * @returns {PressureUlcerStageNPUAP} this.
   */
  withStageDetail(stageDetail) {
    this.stageDetail = stageDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the PressureUlcerStageNPUAP class.
   * The JSON must be valid against the PressureUlcerStageNPUAP JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PressureUlcerStageNPUAP} An instance of PressureUlcerStageNPUAP populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PressureUlcerStageNPUAP();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PressureUlcerStageNPUAP class to a JSON object.
   * The JSON is expected to be valid against the PressureUlcerStageNPUAP JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/PressureUlcerStageNPUAP' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.stageDetail != null) {
      inst['StageDetail'] = typeof this.stageDetail.toJSON === 'function' ? this.stageDetail.toJSON() : this.stageDetail;
    }
    return inst;
  }
}
export default PressureUlcerStageNPUAP;
