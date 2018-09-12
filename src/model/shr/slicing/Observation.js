import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.slicing.Observation.
 */
class Observation {

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
   * @returns {Observation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PersonOfRecord.
   * @returns {PersonOfRecord} The unknown.PersonOfRecord
   */
  get personOfRecord() {
    return this._personOfRecord;
  }

  /**
   * Set the PersonOfRecord.
   * @param {PersonOfRecord} personOfRecord - The unknown.PersonOfRecord
   */
  set personOfRecord(personOfRecord) {
    this._personOfRecord = personOfRecord;
  }

  /**
   * Set the PersonOfRecord and return 'this' for chaining.
   * @param {PersonOfRecord} personOfRecord - The unknown.PersonOfRecord
   * @returns {Observation} this.
   */
  withPersonOfRecord(personOfRecord) {
    this.personOfRecord = personOfRecord; return this;
  }

  /**
   * Get the SubjectIfNotPersonOfRecord.
   * @returns {SubjectIfNotPersonOfRecord} The unknown.SubjectIfNotPersonOfRecord
   */
  get subjectIfNotPersonOfRecord() {
    return this._subjectIfNotPersonOfRecord;
  }

  /**
   * Set the SubjectIfNotPersonOfRecord.
   * @param {SubjectIfNotPersonOfRecord} subjectIfNotPersonOfRecord - The unknown.SubjectIfNotPersonOfRecord
   */
  set subjectIfNotPersonOfRecord(subjectIfNotPersonOfRecord) {
    this._subjectIfNotPersonOfRecord = subjectIfNotPersonOfRecord;
  }

  /**
   * Set the SubjectIfNotPersonOfRecord and return 'this' for chaining.
   * @param {SubjectIfNotPersonOfRecord} subjectIfNotPersonOfRecord - The unknown.SubjectIfNotPersonOfRecord
   * @returns {Observation} this.
   */
  withSubjectIfNotPersonOfRecord(subjectIfNotPersonOfRecord) {
    this.subjectIfNotPersonOfRecord = subjectIfNotPersonOfRecord; return this;
  }

  /**
   * Get the AnyPersonOrOrganization.
   * @returns {AnyPersonOrOrganization} The unknown.AnyPersonOrOrganization
   */
  get anyPersonOrOrganization() {
    return this._anyPersonOrOrganization;
  }

  /**
   * Set the AnyPersonOrOrganization.
   * @param {AnyPersonOrOrganization} anyPersonOrOrganization - The unknown.AnyPersonOrOrganization
   */
  set anyPersonOrOrganization(anyPersonOrOrganization) {
    this._anyPersonOrOrganization = anyPersonOrOrganization;
  }

  /**
   * Set the AnyPersonOrOrganization and return 'this' for chaining.
   * @param {AnyPersonOrOrganization} anyPersonOrOrganization - The unknown.AnyPersonOrOrganization
   * @returns {Observation} this.
   */
  withAnyPersonOrOrganization(anyPersonOrOrganization) {
    this.anyPersonOrOrganization = anyPersonOrOrganization; return this;
  }

  /**
   * Get the Recorded.
   * @returns {Recorded} The unknown.Recorded
   */
  get recorded() {
    return this._recorded;
  }

  /**
   * Set the Recorded.
   * @param {Recorded} recorded - The unknown.Recorded
   */
  set recorded(recorded) {
    this._recorded = recorded;
  }

  /**
   * Set the Recorded and return 'this' for chaining.
   * @param {Recorded} recorded - The unknown.Recorded
   * @returns {Observation} this.
   */
  withRecorded(recorded) {
    this.recorded = recorded; return this;
  }

  /**
   * Get the Signed.
   * @returns {Signed} The unknown.Signed
   */
  get signed() {
    return this._signed;
  }

  /**
   * Set the Signed.
   * @param {Signed} signed - The unknown.Signed
   */
  set signed(signed) {
    this._signed = signed;
  }

  /**
   * Set the Signed and return 'this' for chaining.
   * @param {Signed} signed - The unknown.Signed
   * @returns {Observation} this.
   */
  withSigned(signed) {
    this.signed = signed; return this;
  }

  /**
   * Get the ObservationTopic.
   * @returns {ObservationTopic} The unknown.ObservationTopic
   */
  get observationTopic() {
    return this._observationTopic;
  }

  /**
   * Set the ObservationTopic.
   * This field/value is required.
   * @param {ObservationTopic} observationTopic - The unknown.ObservationTopic
   */
  set observationTopic(observationTopic) {
    this._observationTopic = observationTopic;
  }

  /**
   * Set the ObservationTopic and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationTopic} observationTopic - The unknown.ObservationTopic
   * @returns {Observation} this.
   */
  withObservationTopic(observationTopic) {
    this.observationTopic = observationTopic; return this;
  }

  /**
   * Get the ObservationContext.
   * @returns {ObservationContext} The unknown.ObservationContext
   */
  get observationContext() {
    return this._observationContext;
  }

  /**
   * Set the ObservationContext.
   * This field/value is required.
   * @param {ObservationContext} observationContext - The unknown.ObservationContext
   */
  set observationContext(observationContext) {
    this._observationContext = observationContext;
  }

  /**
   * Set the ObservationContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationContext} observationContext - The unknown.ObservationContext
   * @returns {Observation} this.
   */
  withObservationContext(observationContext) {
    this.observationContext = observationContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Observation class.
   * The JSON must be valid against the Observation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Observation} An instance of Observation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Observation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Observation class to a JSON object.
   * The JSON is expected to be valid against the Observation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/Observation' };
    if (this.personOfRecord != null) {
      inst['PersonOfRecord'] = typeof this.personOfRecord.toJSON === 'function' ? this.personOfRecord.toJSON() : this.personOfRecord;
    }
    if (this.subjectIfNotPersonOfRecord != null) {
      inst['SubjectIfNotPersonOfRecord'] = typeof this.subjectIfNotPersonOfRecord.toJSON === 'function' ? this.subjectIfNotPersonOfRecord.toJSON() : this.subjectIfNotPersonOfRecord;
    }
    if (this.anyPersonOrOrganization != null) {
      inst['AnyPersonOrOrganization'] = typeof this.anyPersonOrOrganization.toJSON === 'function' ? this.anyPersonOrOrganization.toJSON() : this.anyPersonOrOrganization;
    }
    if (this.recorded != null) {
      inst['Recorded'] = typeof this.recorded.toJSON === 'function' ? this.recorded.toJSON() : this.recorded;
    }
    if (this.signed != null) {
      inst['Signed'] = typeof this.signed.toJSON === 'function' ? this.signed.toJSON() : this.signed;
    }
    if (this.observationTopic != null) {
      inst['ObservationTopic'] = typeof this.observationTopic.toJSON === 'function' ? this.observationTopic.toJSON() : this.observationTopic;
    }
    if (this.observationContext != null) {
      inst['ObservationContext'] = typeof this.observationContext.toJSON === 'function' ? this.observationContext.toJSON() : this.observationContext;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Observation class to a FHIR object.
   * The FHIR is expected to be valid against the Observation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    return inst;
  }
}
export default Observation;
