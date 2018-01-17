import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedFrequency.
 */
class GeneralizedFrequency {

  /**
   * Get the choice value; one of: shr.core.Frequency, shr.core.SemiquantFrequency, shr.core.QualitativeFrequency.
   * @returns {(Frequency|SemiquantFrequency|QualitativeFrequency)} The choice value; one of: shr.core.Frequency, shr.core.SemiquantFrequency, shr.core.QualitativeFrequency
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Frequency, shr.core.SemiquantFrequency, shr.core.QualitativeFrequency.
   * @param {(Frequency|SemiquantFrequency|QualitativeFrequency)} value - The choice value; one of: shr.core.Frequency, shr.core.SemiquantFrequency, shr.core.QualitativeFrequency
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedFrequency class.
   * The JSON must be valid against the GeneralizedFrequency JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedFrequency} An instance of GeneralizedFrequency populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedFrequency();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedFrequency;
