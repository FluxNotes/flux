import { setPropertiesFromJSON } from '../../json-helper';

import ClinicalStatement from '../../cimi/statement/ClinicalStatement';

/**
 * Generated class for shr.allergy.NoAdverseSensitivityToSubstance.
 * @extends ClinicalStatement
 */
class NoAdverseSensitivityToSubstance extends ClinicalStatement {

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
   * @returns {NoAdverseSensitivityToSubstance} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the AdverseSensitivityTopic.
   * @returns {AdverseSensitivityTopic} The shr.allergy.AdverseSensitivityTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the AdverseSensitivityTopic.
   * This field/value is required.
   * @param {AdverseSensitivityTopic} statementTopic - The shr.allergy.AdverseSensitivityTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the AdverseSensitivityTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {AdverseSensitivityTopic} statementTopic - The shr.allergy.AdverseSensitivityTopic
   * @returns {NoAdverseSensitivityToSubstance} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the AbsenceContext.
   * @returns {AbsenceContext} The cimi.context.AbsenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the AbsenceContext.
   * This field/value is required.
   * @param {AbsenceContext} statementContext - The cimi.context.AbsenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the AbsenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {AbsenceContext} statementContext - The cimi.context.AbsenceContext
   * @returns {NoAdverseSensitivityToSubstance} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NoAdverseSensitivityToSubstance class.
   * The JSON must be valid against the NoAdverseSensitivityToSubstance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NoAdverseSensitivityToSubstance} An instance of NoAdverseSensitivityToSubstance populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new NoAdverseSensitivityToSubstance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the NoAdverseSensitivityToSubstance class to a JSON object.
   * The JSON is expected to be valid against the NoAdverseSensitivityToSubstance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/allergy/NoAdverseSensitivityToSubstance' };
    if (this.subjectOfInformation != null) {
      inst['SubjectOfInformation'] = typeof this.subjectOfInformation.toJSON === 'function' ? this.subjectOfInformation.toJSON() : this.subjectOfInformation;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.recordStatus != null) {
      inst['RecordStatus'] = typeof this.recordStatus.toJSON === 'function' ? this.recordStatus.toJSON() : this.recordStatus;
    }
    if (this.recorded != null) {
      inst['Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.cosigned != null) {
      inst['Cosigned'] = this.cosigned.map(f => f.toJSON());
    }
    if (this.verified != null) {
      inst['Verified'] = this.verified.map(f => f.toJSON());
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
}
export default NoAdverseSensitivityToSubstance;
