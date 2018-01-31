import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Group.
 * @extends Entity
 */
class Group extends Entity {

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
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Get the Definitional.
   * @returns {Definitional} The shr.core.Definitional
   */
  get definitional() {
    return this._definitional;
  }

  /**
   * Set the Definitional.
   * @param {Definitional} definitional - The shr.core.Definitional
   */
  set definitional(definitional) {
    this._definitional = definitional;
  }

  /**
   * Get the MembershipCriterion array.
   * @returns {Array<MembershipCriterion>} The shr.entity.MembershipCriterion array
   */
  get membershipCriterion() {
    return this._membershipCriterion;
  }

  /**
   * Set the MembershipCriterion array.
   * @param {Array<MembershipCriterion>} membershipCriterion - The shr.entity.MembershipCriterion array
   */
  set membershipCriterion(membershipCriterion) {
    this._membershipCriterion = membershipCriterion;
  }

  /**
   * Get the Member array.
   * @returns {Array<Member>} The shr.entity.Member array
   */
  get member() {
    return this._member;
  }

  /**
   * Set the Member array.
   * @param {Array<Member>} member - The shr.entity.Member array
   */
  set member(member) {
    this._member = member;
  }

  /**
   * Get the Count.
   * @returns {Count} The shr.core.Count
   */
  get count() {
    return this._count;
  }

  /**
   * Set the Count.
   * @param {Count} count - The shr.core.Count
   */
  set count(count) {
    this._count = count;
  }

  /**
   * Deserializes JSON data to an instance of the Group class.
   * The JSON must be valid against the Group JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Group} An instance of Group populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Group();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Group;
