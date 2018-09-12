import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.encounter.PaymentSource.
 */
class PaymentSource {

  // Ommitting getter/setter for TBD: PaymentSourceVS

  /**
   * Deserializes JSON data to an instance of the PaymentSource class.
   * The JSON must be valid against the PaymentSource JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PaymentSource} An instance of PaymentSource populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new PaymentSource();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the PaymentSource class to a JSON object.
   * The JSON is expected to be valid against the PaymentSource JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/encounter/PaymentSource' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the PaymentSource class to a FHIR object.
   * The FHIR is expected to be valid against the PaymentSource FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-encounter-PaymentSource-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default PaymentSource;
