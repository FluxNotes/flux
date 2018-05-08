import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.OtherReceptorScoringSystem.
 * @extends ObservationComponent
 */
class OtherReceptorScoringSystem extends ObservationComponent {

  /**
   * Deserializes JSON data to an instance of the OtherReceptorScoringSystem class.
   * The JSON must be valid against the OtherReceptorScoringSystem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OtherReceptorScoringSystem} An instance of OtherReceptorScoringSystem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OtherReceptorScoringSystem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the OtherReceptorScoringSystem class to a JSON object.
   * The JSON is expected to be valid against the OtherReceptorScoringSystem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/oncology/OtherReceptorScoringSystem' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
}
export default OtherReceptorScoringSystem;
