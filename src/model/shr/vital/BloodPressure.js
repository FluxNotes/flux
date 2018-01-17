import { setPropertiesFromJSON } from '../../json-helper';

import VitalSign from './VitalSign';

/**
 * Generated class for shr.vital.BloodPressure.
 * @extends VitalSign
 */
class BloodPressure extends VitalSign {

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
   * Get the value (aliases quantity).
   * @returns {Quantity} The shr.core.Quantity
   */
  get value() {
    return this._quantity;
  }

  /**
   * Set the value (aliases quantity).
   * @param {Quantity} value - The shr.core.Quantity
   */
  set value(value) {
    this._quantity = value;
  }

  /**
   * Get the Quantity.
   * @returns {Quantity} The shr.core.Quantity
   */
  get quantity() {
    return this._quantity;
  }

  /**
   * Set the Quantity.
   * @param {Quantity} quantity - The shr.core.Quantity
   */
  set quantity(quantity) {
    this._quantity = quantity;
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
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Get the ObservationQualifier array.
   * @returns {Array<ObservationQualifier>} The shr.finding.ObservationQualifier array
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Set the ObservationQualifier array.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   */
  set observationQualifier(observationQualifier) {
    this._observationQualifier = observationQualifier;
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
   * Get the HeadTiltAngle.
   * @returns {HeadTiltAngle} The shr.vital.HeadTiltAngle
   */
  get headTiltAngle() {
    return this._headTiltAngle;
  }

  /**
   * Set the HeadTiltAngle.
   * @param {HeadTiltAngle} headTiltAngle - The shr.vital.HeadTiltAngle
   */
  set headTiltAngle(headTiltAngle) {
    this._headTiltAngle = headTiltAngle;
  }

  /**
   * Deserializes JSON data to an instance of the BloodPressure class.
   * The JSON must be valid against the BloodPressure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BloodPressure} An instance of BloodPressure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BloodPressure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BloodPressure;
