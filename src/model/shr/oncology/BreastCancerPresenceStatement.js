import { setPropertiesFromJSON } from '../../json-helper';

import ConditionPresenceStatement from '../../cimi/statement/ConditionPresenceStatement';

/**
 * Generated class for shr.oncology.BreastCancerPresenceStatement.
 * @extends ConditionPresenceStatement
 */
class BreastCancerPresenceStatement extends ConditionPresenceStatement {

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
   * @returns {BreastCancerPresenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the ConditionTopic.
   * @returns {ConditionTopic} The cimi.topic.ConditionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ConditionTopic.
   * This field/value is required.
   * @param {ConditionTopic} statementTopic - The cimi.topic.ConditionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ConditionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ConditionTopic} statementTopic - The cimi.topic.ConditionTopic
   * @returns {BreastCancerPresenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the ConditionPresenceContext.
   * @returns {ConditionPresenceContext} The cimi.context.ConditionPresenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the ConditionPresenceContext.
   * This field/value is required.
   * @param {ConditionPresenceContext} statementContext - The cimi.context.ConditionPresenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the ConditionPresenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ConditionPresenceContext} statementContext - The cimi.context.ConditionPresenceContext
   * @returns {BreastCancerPresenceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Get the MorphologyBehavior.
   * @returns {MorphologyBehavior} The shr.oncology.MorphologyBehavior
   */
  get morphologyBehavior() {
    return this._morphologyBehavior;
  }

  /**
   * Set the MorphologyBehavior.
   * @param {MorphologyBehavior} morphologyBehavior - The shr.oncology.MorphologyBehavior
   */
  set morphologyBehavior(morphologyBehavior) {
    this._morphologyBehavior = morphologyBehavior;
  }

  /**
   * Set the MorphologyBehavior and return 'this' for chaining.
   * @param {MorphologyBehavior} morphologyBehavior - The shr.oncology.MorphologyBehavior
   * @returns {BreastCancerPresenceStatement} this.
   */
  withMorphologyBehavior(morphologyBehavior) {
    this.morphologyBehavior = morphologyBehavior; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerPresenceStatement class.
   * The JSON must be valid against the BreastCancerPresenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerPresenceStatement} An instance of BreastCancerPresenceStatement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastCancerPresenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerPresenceStatement class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerPresenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastCancerPresenceStatement' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.subjectIfNotPersonOfRecord != null) {
      inst['SubjectIfNotPersonOfRecord'] = typeof this.subjectIfNotPersonOfRecord.toJSON === 'function' ? this.subjectIfNotPersonOfRecord.toJSON() : this.subjectIfNotPersonOfRecord;
    }
    if (this.sourceOfInformation != null) {
      inst['SourceOfInformation'] = typeof this.sourceOfInformation.toJSON === 'function' ? this.sourceOfInformation.toJSON() : this.sourceOfInformation;
    }
    if (this.recorded != null) {
      inst['Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    if (this.morphologyBehavior != null) {
      inst['MorphologyBehavior'] = typeof this.morphologyBehavior.toJSON === 'function' ? this.morphologyBehavior.toJSON() : this.morphologyBehavior;
    }
    return inst;
  }
}
export default BreastCancerPresenceStatement;
