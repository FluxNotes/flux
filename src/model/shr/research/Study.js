import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.research.Study.
 * @extends Entity
 */
class Study extends Entity {

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
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
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
   * Get the PartOf array.
   * @returns {Array<PartOf>} The shr.entity.PartOf array
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf array.
   * @param {Array<PartOf>} partOf - The shr.entity.PartOf array
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Get the Enrollment array.
   * @returns {Array<Enrollment>} The shr.research.Enrollment array
   */
  get enrollment() {
    return this._enrollment;
  }

  /**
   * Set the Enrollment array.
   * @param {Array<Enrollment>} enrollment - The shr.research.Enrollment array
   */
  set enrollment(enrollment) {
    this._enrollment = enrollment;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Get the Sponsor.
   * @returns {Sponsor} The shr.research.Sponsor
   */
  get sponsor() {
    return this._sponsor;
  }

  /**
   * Set the Sponsor.
   * @param {Sponsor} sponsor - The shr.research.Sponsor
   */
  set sponsor(sponsor) {
    this._sponsor = sponsor;
  }

  /**
   * Get the Jurisdiction.
   * @returns {Jurisdiction} The shr.research.Jurisdiction
   */
  get jurisdiction() {
    return this._jurisdiction;
  }

  /**
   * Set the Jurisdiction.
   * @param {Jurisdiction} jurisdiction - The shr.research.Jurisdiction
   */
  set jurisdiction(jurisdiction) {
    this._jurisdiction = jurisdiction;
  }

  /**
   * Get the ContactDetail array.
   * @returns {Array<ContactDetail>} The shr.core.ContactDetail array
   */
  get contactDetail() {
    return this._contactDetail;
  }

  /**
   * Set the ContactDetail array.
   * @param {Array<ContactDetail>} contactDetail - The shr.core.ContactDetail array
   */
  set contactDetail(contactDetail) {
    this._contactDetail = contactDetail;
  }

  /**
   * Get the PrincipalInvestigator.
   * @returns {PrincipalInvestigator} The shr.research.PrincipalInvestigator
   */
  get principalInvestigator() {
    return this._principalInvestigator;
  }

  /**
   * Set the PrincipalInvestigator.
   * @param {PrincipalInvestigator} principalInvestigator - The shr.research.PrincipalInvestigator
   */
  set principalInvestigator(principalInvestigator) {
    this._principalInvestigator = principalInvestigator;
  }

  /**
   * Get the Facility array.
   * @returns {Array<Facility>} The shr.entity.Facility array
   */
  get facility() {
    return this._facility;
  }

  /**
   * Set the Facility array.
   * @param {Array<Facility>} facility - The shr.entity.Facility array
   */
  set facility(facility) {
    this._facility = facility;
  }

  /**
   * Get the TerminationReason.
   * @returns {TerminationReason} The shr.research.TerminationReason
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Get the StudyArm array.
   * @returns {Array<StudyArm>} The shr.research.StudyArm array
   */
  get studyArm() {
    return this._studyArm;
  }

  /**
   * Set the StudyArm array.
   * @param {Array<StudyArm>} studyArm - The shr.research.StudyArm array
   */
  set studyArm(studyArm) {
    this._studyArm = studyArm;
  }

  /**
   * Deserializes JSON data to an instance of the Study class.
   * The JSON must be valid against the Study JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Study} An instance of Study populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Study();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Study;
