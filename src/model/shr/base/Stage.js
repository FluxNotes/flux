import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Stage.
 */
class Stage {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {Stage} this.
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
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {Stage} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
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
   * @returns {Stage} this.
   */
  withStageDetail(stageDetail) {
    this.stageDetail = stageDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Stage class.
   * The JSON must be valid against the Stage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Stage} An instance of Stage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Stage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Stage class to a JSON object.
   * The JSON is expected to be valid against the Stage JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Stage' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.stageDetail != null) {
      inst['StageDetail'] = typeof this.stageDetail.toJSON === 'function' ? this.stageDetail.toJSON() : this.stageDetail;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Stage class to a FHIR object.
   * The FHIR is expected to be valid against the Stage FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Stage class.
   * The FHIR must be valid against the Stage FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Stage} An instance of Stage populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Stage();
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir);
    }
    return inst;
  }

}
export default Stage;
