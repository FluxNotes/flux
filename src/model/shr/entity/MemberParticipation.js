import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MemberParticipation.
 */
class MemberParticipation {

  /**
   * Get the Member.
   * @returns {Member} The shr.entity.Member
   */
  get member() {
    return this._member;
  }

  /**
   * Set the Member.
   * This field/value is required.
   * @param {Member} member - The shr.entity.Member
   */
  set member(member) {
    this._member = member;
  }

  /**
   * Set the Member and return 'this' for chaining.
   * This field/value is required.
   * @param {Member} member - The shr.entity.Member
   * @returns {MemberParticipation} this.
   */
  withMember(member) {
    this.member = member; return this;
  }

  /**
   * Get the ParticipationPeriod.
   * @returns {ParticipationPeriod} The shr.base.ParticipationPeriod
   */
  get participationPeriod() {
    return this._participationPeriod;
  }

  /**
   * Set the ParticipationPeriod.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   */
  set participationPeriod(participationPeriod) {
    this._participationPeriod = participationPeriod;
  }

  /**
   * Set the ParticipationPeriod and return 'this' for chaining.
   * @param {ParticipationPeriod} participationPeriod - The shr.base.ParticipationPeriod
   * @returns {MemberParticipation} this.
   */
  withParticipationPeriod(participationPeriod) {
    this.participationPeriod = participationPeriod; return this;
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
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   */
  set activeFlag(activeFlag) {
    this._activeFlag = activeFlag;
  }

  /**
   * Set the ActiveFlag and return 'this' for chaining.
   * This field/value is required.
   * @param {ActiveFlag} activeFlag - The shr.entity.ActiveFlag
   * @returns {MemberParticipation} this.
   */
  withActiveFlag(activeFlag) {
    this.activeFlag = activeFlag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MemberParticipation class.
   * The JSON must be valid against the MemberParticipation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MemberParticipation} An instance of MemberParticipation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MemberParticipation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MemberParticipation class to a JSON object.
   * The JSON is expected to be valid against the MemberParticipation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/MemberParticipation' } };
    if (this.member != null) {
      inst['Member'] = typeof this.member.toJSON === 'function' ? this.member.toJSON() : this.member;
    }
    if (this.participationPeriod != null) {
      inst['ParticipationPeriod'] = typeof this.participationPeriod.toJSON === 'function' ? this.participationPeriod.toJSON() : this.participationPeriod;
    }
    if (this.activeFlag != null) {
      inst['ActiveFlag'] = typeof this.activeFlag.toJSON === 'function' ? this.activeFlag.toJSON() : this.activeFlag;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MemberParticipation class to a FHIR object.
   * The FHIR is expected to be valid against the MemberParticipation FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MemberParticipation class.
   * The FHIR must be valid against the MemberParticipation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MemberParticipation} An instance of MemberParticipation populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new MemberParticipation();
    return inst;
  }

}
export default MemberParticipation;
