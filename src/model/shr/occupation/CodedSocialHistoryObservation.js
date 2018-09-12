import { setPropertiesFromJSON } from '../../json-helper';

import SocialHistoryObservation from './SocialHistoryObservation';

/**
 * Generated class for shr.occupation.CodedSocialHistoryObservation.
 * @extends SocialHistoryObservation
 */
class CodedSocialHistoryObservation extends SocialHistoryObservation {

  /**
   * Get the ObservationTopic.
   * @returns {ObservationTopic} The cimi.topic.ObservationTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the ObservationTopic.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the ObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationTopic} statementTopic - The cimi.topic.ObservationTopic
   * @returns {CodedSocialHistoryObservation} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the ObservationContext.
   * @returns {ObservationContext} The cimi.context.ObservationContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the ObservationContext.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the ObservationContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationContext} statementContext - The cimi.context.ObservationContext
   * @returns {CodedSocialHistoryObservation} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodedSocialHistoryObservation class.
   * The JSON must be valid against the CodedSocialHistoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodedSocialHistoryObservation} An instance of CodedSocialHistoryObservation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CodedSocialHistoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the CodedSocialHistoryObservation class to a JSON object.
   * The JSON is expected to be valid against the CodedSocialHistoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/CodedSocialHistoryObservation' } };
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
export default CodedSocialHistoryObservation;
