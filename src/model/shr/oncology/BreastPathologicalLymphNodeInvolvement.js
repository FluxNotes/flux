import { setPropertiesFromJSON } from '../../json-helper';

import LaboratoryObservation from '../../cimi/statement/LaboratoryObservation';

/**
 * Generated class for shr.oncology.BreastPathologicalLymphNodeInvolvement.
 * @extends LaboratoryObservation
 */
class BreastPathologicalLymphNodeInvolvement extends LaboratoryObservation {

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
   * @returns {BreastPathologicalLymphNodeInvolvement} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the LaboratoryObservationTopic.
   * @returns {LaboratoryObservationTopic} The cimi.topic.LaboratoryObservationTopic
   */
  get statementTopic() {
    return this._statementTopic;
  }

  /**
   * Set the LaboratoryObservationTopic.
   * This field/value is required.
   * @param {LaboratoryObservationTopic} statementTopic - The cimi.topic.LaboratoryObservationTopic
   */
  set statementTopic(statementTopic) {
    this._statementTopic = statementTopic;
  }

  /**
   * Set the LaboratoryObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {LaboratoryObservationTopic} statementTopic - The cimi.topic.LaboratoryObservationTopic
   * @returns {BreastPathologicalLymphNodeInvolvement} this.
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
   * @returns {BreastPathologicalLymphNodeInvolvement} this.
   */
  withStatementContext(statementContext) {
    this.statementContext = statementContext; return this;
  }

  /**
   * Get the Focus.
   * @returns {Focus} The cimi.topic.Focus
   */
  get focus() {
    return this._focus;
  }

  /**
   * Set the Focus.
   * @param {Focus} focus - The cimi.topic.Focus
   */
  set focus(focus) {
    this._focus = focus;
  }

  /**
   * Set the Focus and return 'this' for chaining.
   * @param {Focus} focus - The cimi.topic.Focus
   * @returns {BreastPathologicalLymphNodeInvolvement} this.
   */
  withFocus(focus) {
    this.focus = focus; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastPathologicalLymphNodeInvolvement class.
   * The JSON must be valid against the BreastPathologicalLymphNodeInvolvement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastPathologicalLymphNodeInvolvement} An instance of BreastPathologicalLymphNodeInvolvement populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastPathologicalLymphNodeInvolvement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastPathologicalLymphNodeInvolvement class to a JSON object.
   * The JSON is expected to be valid against the BreastPathologicalLymphNodeInvolvement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastPathologicalLymphNodeInvolvement' };
    if (this.personOfRecord != null) {
      inst['cimi.core.PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.subjectIfNotPersonOfRecord != null) {
      inst['cimi.core.SubjectIfNotPersonOfRecord'] = typeof this.subjectIfNotPersonOfRecord.toJSON === 'function' ? this.subjectIfNotPersonOfRecord.toJSON() : this.subjectIfNotPersonOfRecord;
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
    if (this.focus != null) {
      inst['cimi.topic.Focus'] = typeof this.focus.toJSON === 'function' ? this.focus.toJSON() : this.focus;
    }
    return inst;
  }
  /**
   * Serializes an instance of the BreastPathologicalLymphNodeInvolvement class to a FHIR object.
   * The FHIR is expected to be valid against the BreastPathologicalLymphNodeInvolvement FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.subjectIfNotPersonOfRecord != null && this.subjectIfNotPersonOfRecord.relationshipToPersonOfRecord != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.subjectIfNotPersonOfRecord.relationshipToPersonOfRecord.toFHIR(true));
    }
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
    if (this.personOfRecord != null) {
      inst['subject'] = typeof this.personOfRecord.toFHIR === 'function' ? this.personOfRecord.toFHIR() : this.personOfRecord;
    }
    return inst;
  }
}
export default BreastPathologicalLymphNodeInvolvement;
