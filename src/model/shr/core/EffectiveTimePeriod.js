import { setPropertiesFromJSON } from '../../json-helper';

import TimePeriod from './TimePeriod';

/**
 * Generated class for shr.core.EffectiveTimePeriod.
 * @extends TimePeriod
 */
class EffectiveTimePeriod extends TimePeriod {

  /**
   * Deserializes JSON data to an instance of the EffectiveTimePeriod class.
   * The JSON must be valid against the EffectiveTimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EffectiveTimePeriod} An instance of EffectiveTimePeriod populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new EffectiveTimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EffectiveTimePeriod class to a JSON object.
   * The JSON is expected to be valid against the EffectiveTimePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/EffectiveTimePeriod' } };
    if (this.timePeriodStart != null) {
      inst['TimePeriodStart'] = typeof this.timePeriodStart.toJSON === 'function' ? this.timePeriodStart.toJSON() : this.timePeriodStart;
    }
    if (this.timePeriodEnd != null) {
      inst['TimePeriodEnd'] = typeof this.timePeriodEnd.toJSON === 'function' ? this.timePeriodEnd.toJSON() : this.timePeriodEnd;
    }
    return inst;
  }
  /**
   * Serializes an instance of the EffectiveTimePeriod class to a FHIR object.
   * The FHIR is expected to be valid against the EffectiveTimePeriod FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.timePeriodStart != null) {
      inst['start'] = typeof this.timePeriodStart.toFHIR === 'function' ? this.timePeriodStart.toFHIR() : this.timePeriodStart;
    }
    if (this.timePeriodEnd != null) {
      inst['end'] = typeof this.timePeriodEnd.toFHIR === 'function' ? this.timePeriodEnd.toFHIR() : this.timePeriodEnd;
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-EffectiveTimePeriod-extension';
      inst['valuePeriod'] = this.value;
    }
    return inst;
  }
}
export default EffectiveTimePeriod;
