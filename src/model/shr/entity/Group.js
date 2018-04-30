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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Group} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {Group} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Set the ActiveFlag and return 'this' for chaining.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {Group} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
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
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Group} this.
   */
  withTitle(title) {
    this.title = title; return this;
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
   * This field/value is required.
   * @param {Definitional} definitional - The shr.core.Definitional
   */
  set definitional(definitional) {
    this._definitional = definitional;
  }

  /**
   * Set the Definitional and return 'this' for chaining.
   * This field/value is required.
   * @param {Definitional} definitional - The shr.core.Definitional
   * @returns {Group} this.
   */
  withDefinitional(definitional) {
    this.definitional = definitional; return this;
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
   * Set the MembershipCriterion array and return 'this' for chaining.
   * @param {Array<MembershipCriterion>} membershipCriterion - The shr.entity.MembershipCriterion array
   * @returns {Group} this.
   */
  withMembershipCriterion(membershipCriterion) {
    this.membershipCriterion = membershipCriterion; return this;
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
   * Set the Member array and return 'this' for chaining.
   * @param {Array<Member>} member - The shr.entity.Member array
   * @returns {Group} this.
   */
  withMember(member) {
    this.member = member; return this;
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
   * Set the Count and return 'this' for chaining.
   * @param {Count} count - The shr.core.Count
   * @returns {Group} this.
   */
  withCount(count) {
    this.count = count; return this;
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
  /**
   * Serializes an instance of the Group class to a JSON object.
   * The JSON is expected to be valid against the Group JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Group' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.definitional != null) {
      inst['Definitional'] = typeof this.definitional.toJSON === 'function' ? this.definitional.toJSON() : this.definitional;
    }
    if (this.membershipCriterion != null) {
      inst['MembershipCriterion'] = this.membershipCriterion.map(f => f.toJSON());
    }
    if (this.member != null) {
      inst['Member'] = this.member.map(f => f.toJSON());
    }
    if (this.count != null) {
      inst['Count'] = typeof this.count.toJSON === 'function' ? this.count.toJSON() : this.count;
    }
    return inst;
  }
}
export default Group;
