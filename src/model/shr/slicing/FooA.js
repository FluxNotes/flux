import { setPropertiesFromJSON } from '../../json-helper';

import Foo from './Foo';

/**
 * Generated class for shr.slicing.FooA.
 * @extends Foo
 */
class FooA extends Foo {

  /**
   * Deserializes JSON data to an instance of the FooA class.
   * The JSON must be valid against the FooA JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FooA} An instance of FooA populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new FooA();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FooA class to a JSON object.
   * The JSON is expected to be valid against the FooA JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/FooA' } };
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
   * Serializes an instance of the FooA class to a FHIR object.
   * The FHIR is expected to be valid against the FooA FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default FooA;
