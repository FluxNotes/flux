import { setPropertiesFromJSON } from '../../json-helper';

import ConditionAbsenceStatement from '../../cimi/statement/ConditionAbsenceStatement';

/**
 * Generated class for shr.condition.FindingSiteConditionAbsenceStatement.
 * @extends ConditionAbsenceStatement
 */
class FindingSiteConditionAbsenceStatement extends ConditionAbsenceStatement {

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
   * @returns {FindingSiteConditionAbsenceStatement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the FindingSiteConditionTopic.
   * @returns {FindingSiteConditionTopic} The shr.condition.FindingSiteConditionTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the FindingSiteConditionTopic.
   * This field/value is required.
   * @param {FindingSiteConditionTopic} statementTopic - The shr.condition.FindingSiteConditionTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the FindingSiteConditionTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingSiteConditionTopic} statementTopic - The shr.condition.FindingSiteConditionTopic
   * @returns {FindingSiteConditionAbsenceStatement} this.
   */
  withStatementTopic(statementTopic) {
    this.statementTopic = statementTopic; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FindingSiteConditionAbsenceStatement class.
   * The JSON must be valid against the FindingSiteConditionAbsenceStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingSiteConditionAbsenceStatement} An instance of FindingSiteConditionAbsenceStatement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new FindingSiteConditionAbsenceStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingSiteConditionAbsenceStatement class to a JSON object.
   * The JSON is expected to be valid against the FindingSiteConditionAbsenceStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/condition/FindingSiteConditionAbsenceStatement' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.statementTopic != null) {
      inst['StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the FindingSiteConditionAbsenceStatement class to a FHIR object.
   * The FHIR is expected to be valid against the FindingSiteConditionAbsenceStatement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.personOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.personOfRecord.toFHIR(true));
    }
    return inst;
  }
}
export default FindingSiteConditionAbsenceStatement;
