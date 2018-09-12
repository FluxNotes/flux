import { setPropertiesFromJSON } from '../../json-helper';

import StringValue from './StringValue';

/**
 * Generated class for shr.simple.StringValueChild.
 * @extends StringValue
 */
class StringValueChild extends StringValue {

  /**
   * Deserializes JSON data to an instance of the StringValueChild class.
   * The JSON must be valid against the StringValueChild JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {StringValueChild} An instance of StringValueChild populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new StringValueChild();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the StringValueChild class to a JSON object.
   * The JSON is expected to be valid against the StringValueChild JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/simple/StringValueChild' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the StringValueChild class to a FHIR object.
   * The FHIR is expected to be valid against the StringValueChild FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-simple-StringValueChild-extension';
      inst['valueString'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default StringValueChild;
