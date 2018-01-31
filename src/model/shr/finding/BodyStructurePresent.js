import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.finding.BodyStructurePresent.
 * @extends Observation
 */
class BodyStructurePresent extends Observation {

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
   * Deserializes JSON data to an instance of the BodyStructurePresent class.
   * The JSON must be valid against the BodyStructurePresent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyStructurePresent} An instance of BodyStructurePresent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodyStructurePresent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BodyStructurePresent;
