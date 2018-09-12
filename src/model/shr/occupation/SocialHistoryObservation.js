import { setPropertiesFromJSON } from '../../json-helper';

import FindingStatement from '../../cimi/statement/FindingStatement';

/**
 * Generated class for shr.occupation.SocialHistoryObservation.
 * @extends FindingStatement
 */
class SocialHistoryObservation extends FindingStatement {

  /**
   * Get the SubjectIfNotPersonOfRecord.
   * @returns {SubjectIfNotPersonOfRecord} The cimi.core.SubjectIfNotPersonOfRecord
   */
  get subjectIfNotPersonOfRecord() {
    return this._subjectIfNotPersonOfRecord;
  }

  /**
   * Set the SubjectIfNotPersonOfRecord.
   * @param {SubjectIfNotPersonOfRecord} subjectIfNotPersonOfRecord - The cimi.core.SubjectIfNotPersonOfRecord
   */
  set subjectIfNotPersonOfRecord(subjectIfNotPersonOfRecord) {
    this._subjectIfNotPersonOfRecord = subjectIfNotPersonOfRecord;
  }

  /**
   * Set the SubjectIfNotPersonOfRecord and return 'this' for chaining.
   * @param {SubjectIfNotPersonOfRecord} subjectIfNotPersonOfRecord - The cimi.core.SubjectIfNotPersonOfRecord
   * @returns {SocialHistoryObservation} this.
   */
  withSubjectIfNotPersonOfRecord(subjectIfNotPersonOfRecord) {
    this.subjectIfNotPersonOfRecord = subjectIfNotPersonOfRecord; return this;
  }

  /**
   * Get the SourceOfInformation.
   * @returns {SourceOfInformation} The cimi.core.SourceOfInformation
   */
  get sourceOfInformation() {
    return this._sourceOfInformation;
  }

  /**
   * Set the SourceOfInformation.
   * @param {SourceOfInformation} sourceOfInformation - The cimi.core.SourceOfInformation
   */
  set sourceOfInformation(sourceOfInformation) {
    this._sourceOfInformation = sourceOfInformation;
  }

  /**
   * Set the SourceOfInformation and return 'this' for chaining.
   * @param {SourceOfInformation} sourceOfInformation - The cimi.core.SourceOfInformation
   * @returns {SocialHistoryObservation} this.
   */
  withSourceOfInformation(sourceOfInformation) {
    this.sourceOfInformation = sourceOfInformation; return this;
  }

  /**
   * Get the Recorded.
   * @returns {Recorded} The cimi.core.Recorded
   */
  get recorded() {
    return this._recorded;
  }

  /**
   * Set the Recorded.
   * @param {Recorded} recorded - The cimi.core.Recorded
   */
  set recorded(recorded) {
    this._recorded = recorded;
  }

  /**
   * Set the Recorded and return 'this' for chaining.
   * @param {Recorded} recorded - The cimi.core.Recorded
   * @returns {SocialHistoryObservation} this.
   */
  withRecorded(recorded) {
    this.recorded = recorded; return this;
  }

  /**
   * Get the Signed.
   * @returns {Signed} The cimi.core.Signed
   */
  get signed() {
    return this._signed;
  }

  /**
   * Set the Signed.
   * @param {Signed} signed - The cimi.core.Signed
   */
  set signed(signed) {
    this._signed = signed;
  }

  /**
   * Set the Signed and return 'this' for chaining.
   * @param {Signed} signed - The cimi.core.Signed
   * @returns {SocialHistoryObservation} this.
   */
  withSigned(signed) {
    this.signed = signed; return this;
  }

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
   * @returns {SocialHistoryObservation} this.
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
   * @returns {SocialHistoryObservation} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SocialHistoryObservation class.
   * The JSON must be valid against the SocialHistoryObservation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SocialHistoryObservation} An instance of SocialHistoryObservation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SocialHistoryObservation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SocialHistoryObservation class to a JSON object.
   * The JSON is expected to be valid against the SocialHistoryObservation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/SocialHistoryObservation' } };
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
export default SocialHistoryObservation;
