import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.condition.Abatement.
 */
class Abatement {

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
   * Deserializes JSON data to an instance of the Abatement class.
   * The JSON must be valid against the Abatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Abatement} An instance of Abatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Abatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Abatement;
