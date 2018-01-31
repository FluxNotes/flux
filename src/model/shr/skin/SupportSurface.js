import { setPropertiesFromJSON } from '../../json-helper';

import Device from '../device/Device';

/**
 * Generated class for shr.skin.SupportSurface.
 * @extends Device
 */
class SupportSurface extends Device {

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
   * Get the SupportSurfaceCategory.
   * @returns {SupportSurfaceCategory} The shr.skin.SupportSurfaceCategory
   */
  get supportSurfaceCategory() {
    return this._supportSurfaceCategory;
  }

  /**
   * Set the SupportSurfaceCategory.
   * @param {SupportSurfaceCategory} supportSurfaceCategory - The shr.skin.SupportSurfaceCategory
   */
  set supportSurfaceCategory(supportSurfaceCategory) {
    this._supportSurfaceCategory = supportSurfaceCategory;
  }

  /**
   * Get the SupportSurfaceBodyPosition.
   * @returns {SupportSurfaceBodyPosition} The shr.skin.SupportSurfaceBodyPosition
   */
  get supportSurfaceBodyPosition() {
    return this._supportSurfaceBodyPosition;
  }

  /**
   * Set the SupportSurfaceBodyPosition.
   * @param {SupportSurfaceBodyPosition} supportSurfaceBodyPosition - The shr.skin.SupportSurfaceBodyPosition
   */
  set supportSurfaceBodyPosition(supportSurfaceBodyPosition) {
    this._supportSurfaceBodyPosition = supportSurfaceBodyPosition;
  }

  /**
   * Get the SupportSurfaceComponent array.
   * @returns {Array<SupportSurfaceComponent>} The shr.skin.SupportSurfaceComponent array
   */
  get supportSurfaceComponent() {
    return this._supportSurfaceComponent;
  }

  /**
   * Set the SupportSurfaceComponent array.
   * @param {Array<SupportSurfaceComponent>} supportSurfaceComponent - The shr.skin.SupportSurfaceComponent array
   */
  set supportSurfaceComponent(supportSurfaceComponent) {
    this._supportSurfaceComponent = supportSurfaceComponent;
  }

  /**
   * Deserializes JSON data to an instance of the SupportSurface class.
   * The JSON must be valid against the SupportSurface JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SupportSurface} An instance of SupportSurface populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SupportSurface();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SupportSurface;
