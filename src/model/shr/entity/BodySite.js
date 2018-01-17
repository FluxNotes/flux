import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.BodySite.
 * @extends Entity
 */
class BodySite extends Entity {

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
   * Get the Laterality.
   * @returns {Laterality} The shr.entity.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * @param {Laterality} laterality - The shr.entity.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Get the Directionality.
   * @returns {Directionality} The shr.entity.Directionality
   */
  get directionality() {
    return this._directionality;
  }

  /**
   * Set the Directionality.
   * @param {Directionality} directionality - The shr.entity.Directionality
   */
  set directionality(directionality) {
    this._directionality = directionality;
  }

  /**
   * Get the PortionTotality.
   * @returns {PortionTotality} The shr.entity.PortionTotality
   */
  get portionTotality() {
    return this._portionTotality;
  }

  /**
   * Set the PortionTotality.
   * @param {PortionTotality} portionTotality - The shr.entity.PortionTotality
   */
  set portionTotality(portionTotality) {
    this._portionTotality = portionTotality;
  }

  /**
   * Get the ClockDirection.
   * @returns {ClockDirection} The shr.core.ClockDirection
   */
  get clockDirection() {
    return this._clockDirection;
  }

  /**
   * Set the ClockDirection.
   * @param {ClockDirection} clockDirection - The shr.core.ClockDirection
   */
  set clockDirection(clockDirection) {
    this._clockDirection = clockDirection;
  }

  /**
   * Get the Distance.
   * @returns {Distance} The shr.core.Distance
   */
  get distance() {
    return this._distance;
  }

  /**
   * Set the Distance.
   * @param {Distance} distance - The shr.core.Distance
   */
  set distance(distance) {
    this._distance = distance;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the BodySiteMarker.
   * @returns {BodySiteMarker} The shr.entity.BodySiteMarker
   */
  get bodySiteMarker() {
    return this._bodySiteMarker;
  }

  /**
   * Set the BodySiteMarker.
   * @param {BodySiteMarker} bodySiteMarker - The shr.entity.BodySiteMarker
   */
  set bodySiteMarker(bodySiteMarker) {
    this._bodySiteMarker = bodySiteMarker;
  }

  /**
   * Deserializes JSON data to an instance of the BodySite class.
   * The JSON must be valid against the BodySite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodySite} An instance of BodySite populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodySite();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BodySite;
