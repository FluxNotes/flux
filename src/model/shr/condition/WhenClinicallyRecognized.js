import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.condition.WhenClinicallyRecognized.
 */
class WhenClinicallyRecognized {

  /**
   * Get the value (aliases generalizedTemporalContext).
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get value() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the value (aliases generalizedTemporalContext).
   * @param {GeneralizedTemporalContext} value - The shr.core.GeneralizedTemporalContext
   */
  set value(value) {
    this._generalizedTemporalContext = value;
  }

  /**
   * Get the GeneralizedTemporalContext.
   * @returns {GeneralizedTemporalContext} The shr.core.GeneralizedTemporalContext
   */
  get generalizedTemporalContext() {
    return this._generalizedTemporalContext;
  }

  /**
   * Set the GeneralizedTemporalContext.
   * @param {GeneralizedTemporalContext} generalizedTemporalContext - The shr.core.GeneralizedTemporalContext
   */
  set generalizedTemporalContext(generalizedTemporalContext) {
    this._generalizedTemporalContext = generalizedTemporalContext;
  }

  /**
   * Deserializes JSON data to an instance of the WhenClinicallyRecognized class.
   * The JSON must be valid against the WhenClinicallyRecognized JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WhenClinicallyRecognized} An instance of WhenClinicallyRecognized populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WhenClinicallyRecognized();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default WhenClinicallyRecognized;
