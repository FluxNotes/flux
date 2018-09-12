import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.slicing.Bar.
 * @extends Observation
 */
class Bar extends Observation {

  /**
   * Get the Baz.
   * @returns {Baz} The shr.slicing.Baz
   */
  get baz() {
    return this._baz;
  }

  /**
   * Set the Baz.
   * @param {Baz} baz - The shr.slicing.Baz
   */
  set baz(baz) {
    this._baz = baz;
  }

  /**
   * Set the Baz and return 'this' for chaining.
   * @param {Baz} baz - The shr.slicing.Baz
   * @returns {Bar} this.
   */
  withBaz(baz) {
    this.baz = baz; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Bar class.
   * The JSON must be valid against the Bar JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Bar} An instance of Bar populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Bar();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Bar class to a JSON object.
   * The JSON is expected to be valid against the Bar JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/Bar' } };
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
    if (this.baz != null) {
      inst['Baz'] = typeof this.baz.toJSON === 'function' ? this.baz.toJSON() : this.baz;
    }
    return inst;
  }
  /**
   * Serializes an instance of the Bar class to a FHIR object.
   * The FHIR is expected to be valid against the Bar FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.baz != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.baz.toFHIR(true));
    }
    return inst;
  }
}
export default Bar;
