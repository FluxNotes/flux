import { setPropertiesFromJSON } from '../../json-helper';

import NonLaboratoryObservation from '../../cimi/statement/NonLaboratoryObservation';

/**
 * Generated class for shr.wound.WoundEvaluationSummaryPanel.
 * @extends NonLaboratoryObservation
 */
class WoundEvaluationSummaryPanel extends NonLaboratoryObservation {

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
   * @returns {WoundEvaluationSummaryPanel} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the WoundEvaluationResultTopic.
   * @returns {WoundEvaluationResultTopic} The shr.wound.WoundEvaluationResultTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the WoundEvaluationResultTopic.
   * This field/value is required.
   * @param {WoundEvaluationResultTopic} statementTopic - The shr.wound.WoundEvaluationResultTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the WoundEvaluationResultTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {WoundEvaluationResultTopic} statementTopic - The shr.wound.WoundEvaluationResultTopic
   * @returns {WoundEvaluationSummaryPanel} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Get the WoundObservationContext.
   * @returns {WoundObservationContext} The shr.wound.WoundObservationContext
   */
  get statementContext() {
    return this._statementContext;
  }

  /**
   * Set the WoundObservationContext.
   * This field/value is required.
   * @param {WoundObservationContext} statementContext - The shr.wound.WoundObservationContext
   */
  set statementContext(statementContext) {
    this._statementContext = statementContext;
  }

  /**
   * Set the WoundObservationContext and return 'this' for chaining.
   * This field/value is required.
   * @param {WoundObservationContext} statementContext - The shr.wound.WoundObservationContext
   * @returns {WoundEvaluationSummaryPanel} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundEvaluationSummaryPanel class.
   * The JSON must be valid against the WoundEvaluationSummaryPanel JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundEvaluationSummaryPanel} An instance of WoundEvaluationSummaryPanel populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundEvaluationSummaryPanel();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundEvaluationSummaryPanel class to a JSON object.
   * The JSON is expected to be valid against the WoundEvaluationSummaryPanel JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundEvaluationSummaryPanel' };
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
export default WoundEvaluationSummaryPanel;
