import { setPropertiesFromJSON } from '../../json-helper';

import Observation from './Observation';

/**
 * Generated class for shr.slicing.Foo.
 * @extends Observation
 */
class Foo extends Observation {

  /**
   * Deserializes JSON data to an instance of the Foo class.
   * The JSON must be valid against the Foo JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Foo} An instance of Foo populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Foo();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Foo class to a JSON object.
   * The JSON is expected to be valid against the Foo JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/Foo' } };
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
   * Serializes an instance of the Foo class to a FHIR object.
   * The FHIR is expected to be valid against the Foo FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-slicing-Foo-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Foo;
