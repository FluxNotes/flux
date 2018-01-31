import { setPropertiesFromJSON } from '../../json-helper';

import ExposureToAgent from '../environment/ExposureToAgent';

/**
 * Generated class for shr.lifehistory.PrenatalExposure.
 * @extends ExposureToAgent
 */
class PrenatalExposure extends ExposureToAgent {

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
   * Get the GeneralizedTemporalContext.
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get generalizedTemporalContext() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   */
  set generalizedTemporalContext(generalizedTemporalContext) {
    this._generalizedTemporalContext = generalizedTemporalContext;
  }

  /**
   * Deserializes JSON data to an instance of the PrenatalExposure class.
   * The JSON must be valid against the PrenatalExposure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PrenatalExposure} An instance of PrenatalExposure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PrenatalExposure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PrenatalExposure;
