import { setPropertiesFromJSON } from '../../json-helper';

import Bar from './Bar';

/**
 * Generated class for shr.slicing.BarAEntry.
 * @extends Bar
 */
class BarAEntry extends Bar {

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
   * @returns {BarAEntry} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

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
   * @returns {BarAEntry} this.
   */
  withBaz(baz) {
    this.baz = baz; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BarAEntry class.
   * The JSON must be valid against the BarAEntry JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BarAEntry} An instance of BarAEntry populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BarAEntry();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BarAEntry class to a JSON object.
   * The JSON is expected to be valid against the BarAEntry JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/BarAEntry' };
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
   * Serializes an instance of the BarAEntry class to a FHIR object.
   * The FHIR is expected to be valid against the BarAEntry FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Observation';
    if (this.baz != null && this.baz.foo != null) {
      if (inst['related'] === undefined) {
        inst['related'] = [];
      }
      this.baz.foo.forEach((elem) => {
        let containerInst = {};
        containerInst['target'] = {};
        containerInst['target'] = typeof elem.toFHIR === 'function' ? elem.toFHIR() : elem;
        inst['related'].push(containerInst);
      }
      );
    }
    return inst;
  }
}
export default BarAEntry;
