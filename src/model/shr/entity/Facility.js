import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Facility.
 * @extends Entity
 */
class Facility extends Entity {

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
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Get the FacilityName.
   * @returns {FacilityName} The shr.entity.FacilityName
   */
  get facilityName() {
    return this._facilityName;
  }

  /**
   * Set the FacilityName.
   * @param {FacilityName} facilityName - The shr.entity.FacilityName
   */
  set facilityName(facilityName) {
    this._facilityName = facilityName;
  }

  /**
   * Get the Location.
   * @returns {Location} The shr.core.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Set the Location.
   * @param {Location} location - The shr.core.Location
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Get the MobileFacility.
   * @returns {MobileFacility} The shr.entity.MobileFacility
   */
  get mobileFacility() {
    return this._mobileFacility;
  }

  /**
   * Set the MobileFacility.
   * @param {MobileFacility} mobileFacility - The shr.entity.MobileFacility
   */
  set mobileFacility(mobileFacility) {
    this._mobileFacility = mobileFacility;
  }

  /**
   * Get the ContactPoint.
   * @returns {ContactPoint} The shr.core.ContactPoint
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint.
   * @param {ContactPoint} contactPoint - The shr.core.ContactPoint
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Get the ManagingOrganization.
   * @returns {ManagingOrganization} The shr.entity.ManagingOrganization
   */
  get managingOrganization() {
    return this._managingOrganization;
  }

  /**
   * Set the ManagingOrganization.
   * @param {ManagingOrganization} managingOrganization - The shr.entity.ManagingOrganization
   */
  set managingOrganization(managingOrganization) {
    this._managingOrganization = managingOrganization;
  }

  /**
   * Deserializes JSON data to an instance of the Facility class.
   * The JSON must be valid against the Facility JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Facility} An instance of Facility populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Facility();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Facility;
