import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.oncology.TNMStage.
 * @extends Observation
 */
class TNMStage extends Observation {

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
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.finding.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.finding.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
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
   * Get the ObservationComponent array.
   * @returns {Array<ObservationComponent>} The shr.finding.ObservationComponent array
   */
  get observationComponent() {
    return this._observationComponent;
  }

  /**
   * Set the ObservationComponent array.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   */
  set observationComponent(observationComponent) {
    this._observationComponent = observationComponent;
  }

  /**
   * Get the StagingTiming.
   * @returns {StagingTiming} The shr.oncology.StagingTiming
   */
  get stagingTiming() {
    return this._stagingTiming;
  }

  /**
   * Set the StagingTiming.
   * @param {StagingTiming} stagingTiming - The shr.oncology.StagingTiming
   */
  set stagingTiming(stagingTiming) {
    this._stagingTiming = stagingTiming;
  }

  /**
   * Deserializes JSON data to an instance of the TNMStage class.
   * The JSON must be valid against the TNMStage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TNMStage} An instance of TNMStage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TNMStage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TNMStage;
