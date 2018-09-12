import { setPropertiesFromJSON } from '../../json-helper';

import BodyStructurePresenceStatement from '../condition/BodyStructurePresenceStatement';

/**
 * Generated class for shr.wound.WoundPresenceStatement.
 * @extends BodyStructurePresenceStatement
 */
class WoundPresenceStatement extends BodyStructurePresenceStatement {

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
   * @returns {WoundPresenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the WoundTopic.
   * @returns {WoundTopic} The shr.wound.WoundTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the WoundTopic.
   * This field/value is required.
   * @param {WoundTopic} statementTopic - The shr.wound.WoundTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the WoundTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {WoundTopic} statementTopic - The shr.wound.WoundTopic
   * @returns {WoundPresenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the WoundPresenceContext.
   * @returns {WoundPresenceContext} The shr.wound.WoundPresenceContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the WoundPresenceContext.
   * This field/value is required.
   * @param {WoundPresenceContext} statementContext - The shr.wound.WoundPresenceContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the WoundPresenceContext and return 'this' for chaining.
   * This field/value is required.
   * @param {WoundPresenceContext} statementContext - The shr.wound.WoundPresenceContext
   * @returns {WoundPresenceStatement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundPresenceStatement class.
   * The JSON must be valid against the WoundPresenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundPresenceStatement} An instance of WoundPresenceStatement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundPresenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundPresenceStatement class to a JSON object.
   * The JSON is expected to be valid against the WoundPresenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundPresenceStatement' };
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
    return inst;
  }
}
export default WoundPresenceStatement;
