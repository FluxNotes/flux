import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Organization.
 * @extends Entity
 */
class Organization extends Entity {

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
   * Get the OrganizationName.
   * @returns {OrganizationName} The shr.entity.OrganizationName
   */
  get organizationName() {
    return this._organizationName;
  }

  /**
   * Set the OrganizationName.
   * @param {OrganizationName} organizationName - The shr.entity.OrganizationName
   */
  set organizationName(organizationName) {
    this._organizationName = organizationName;
  }

  /**
   * Get the OrganizationAlias array.
   * @returns {Array<OrganizationAlias>} The shr.entity.OrganizationAlias array
   */
  get organizationAlias() {
    return this._organizationAlias;
  }

  /**
   * Set the OrganizationAlias array.
   * @param {Array<OrganizationAlias>} organizationAlias - The shr.entity.OrganizationAlias array
   */
  set organizationAlias(organizationAlias) {
    this._organizationAlias = organizationAlias;
  }

  /**
   * Get the OrganizationIdentifier array.
   * @returns {Array<OrganizationIdentifier>} The shr.entity.OrganizationIdentifier array
   */
  get organizationIdentifier() {
    return this._organizationIdentifier;
  }

  /**
   * Set the OrganizationIdentifier array.
   * @param {Array<OrganizationIdentifier>} organizationIdentifier - The shr.entity.OrganizationIdentifier array
   */
  set organizationIdentifier(organizationIdentifier) {
    this._organizationIdentifier = organizationIdentifier;
  }

  /**
   * Get the Address array.
   * @returns {Array<Address>} The shr.core.Address array
   */
  get address() {
    return this._address;
  }

  /**
   * Set the Address array.
   * @param {Array<Address>} address - The shr.core.Address array
   */
  set address(address) {
    this._address = address;
  }

  /**
   * Get the ContactPoint array.
   * @returns {Array<ContactPoint>} The shr.core.ContactPoint array
   */
  get contactPoint() {
    return this._contactPoint;
  }

  /**
   * Set the ContactPoint array.
   * @param {Array<ContactPoint>} contactPoint - The shr.core.ContactPoint array
   */
  set contactPoint(contactPoint) {
    this._contactPoint = contactPoint;
  }

  /**
   * Get the ActiveFlag.
   * @returns {ActiveFlag} The shr.entity.ActiveFlag
   */
  get activeFlag() {
    return this._activeFlag;
  }

  /**
   * Set the ActiveFlag.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Deserializes JSON data to an instance of the Organization class.
   * The JSON must be valid against the Organization JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Organization} An instance of Organization populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Organization();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Organization;
