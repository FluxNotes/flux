import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../../cimi/statement/Observation';

/**
 * Generated class for shr.occupation.OccupationalDataSummary.
 * @extends Observation
 */
class OccupationalDataSummary extends Observation {

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
   * @returns {OccupationalDataSummary} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {OccupationalDataSummary} this.
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
   * @returns {OccupationalDataSummary} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the OccupationalDataSummary class.
   * The JSON must be valid against the OccupationalDataSummary JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OccupationalDataSummary} An instance of OccupationalDataSummary populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new OccupationalDataSummary();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OccupationalDataSummary class to a JSON object.
   * The JSON is expected to be valid against the OccupationalDataSummary JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/occupation/OccupationalDataSummary' };
    if (this.subjectOfInformation != null) {
      inst['cimi.core.SubjectOfInformation'] = typeof this.subjectOfInformation.toJSON === 'function' ? this.subjectOfInformation.toJSON() : this.subjectOfInformation;
    }
    if (this.sourceOfInformation != null) {
      inst['cimi.core.SourceOfInformation'] = typeof this.sourceOfInformation.toJSON === 'function' ? this.sourceOfInformation.toJSON() : this.sourceOfInformation;
    }
    if (this.recorded != null) {
      inst['cimi.core.Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['cimi.core.Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.statementTopic != null) {
      inst['cimi.topic.StatementTopic'] = typeof this.statementTopic.toJSON === 'function' ? this.statementTopic.toJSON() : this.statementTopic;
    }
    if (this.statementContext != null) {
      inst['cimi.context.StatementContext'] = typeof this.statementContext.toJSON === 'function' ? this.statementContext.toJSON() : this.statementContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the OccupationalDataSummary class to a FHIR object.
   * The FHIR is expected to be valid against the OccupationalDataSummary FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.sourceOfInformation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.sourceOfInformation.toFHIR(true));
    }
    if (this.recorded != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.recorded.toFHIR(true));
    }
    if (this.signed != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.signed.toFHIR(true));
    }
    if (this.subjectOfInformation != null) {
      inst['subject'] = typeof this.subjectOfInformation.toFHIR === 'function' ? this.subjectOfInformation.toFHIR() : this.subjectOfInformation;
    }
    return inst;
  }
}
export default OccupationalDataSummary;
