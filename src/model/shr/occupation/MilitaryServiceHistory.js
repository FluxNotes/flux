import { setPropertiesFromJSON } from '../../json-helper';

import NonLabCodedEvaluationResultRecorded from '../../cimi/statement/NonLabCodedEvaluationResultRecorded';

/**
 * Generated class for shr.occupation.MilitaryServiceHistory.
 * @extends NonLabCodedEvaluationResultRecorded
 */
class MilitaryServiceHistory extends NonLabCodedEvaluationResultRecorded {

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
   * @returns {MilitaryServiceHistory} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the EvaluationResultTopic.
   * @returns {EvaluationResultTopic} The cimi.topic.EvaluationResultTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the EvaluationResultTopic.
   * This field/value is required.
   * @param {EvaluationResultTopic} statementTopic - The cimi.topic.EvaluationResultTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the EvaluationResultTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {EvaluationResultTopic} statementTopic - The cimi.topic.EvaluationResultTopic
   * @returns {MilitaryServiceHistory} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MilitaryServiceHistory class.
   * The JSON must be valid against the MilitaryServiceHistory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MilitaryServiceHistory} An instance of MilitaryServiceHistory populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MilitaryServiceHistory();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MilitaryServiceHistory class to a JSON object.
   * The JSON is expected to be valid against the MilitaryServiceHistory JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/MilitaryServiceHistory' };
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
export default MilitaryServiceHistory;
