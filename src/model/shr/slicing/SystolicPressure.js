import { setPropertiesFromJSON } from '../../json-helper';

import EvaluationComponent from './EvaluationComponent';

/**
 * Generated class for shr.slicing.SystolicPressure.
 * @extends EvaluationComponent
 */
class SystolicPressure extends EvaluationComponent {

  /**
   * Deserializes JSON data to an instance of the SystolicPressure class.
   * The JSON must be valid against the SystolicPressure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SystolicPressure} An instance of SystolicPressure populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SystolicPressure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SystolicPressure class to a JSON object.
   * The JSON is expected to be valid against the SystolicPressure JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/slicing/SystolicPressure' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the SystolicPressure class to a FHIR object.
   * The FHIR is expected to be valid against the SystolicPressure FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default SystolicPressure;
