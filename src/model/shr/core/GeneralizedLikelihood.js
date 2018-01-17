import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeneralizedLikelihood.
 */
class GeneralizedLikelihood {

  /**
   * Get the choice value; one of: shr.core.Likelihood, shr.core.QualitativeLikelihood.
   * @returns {(Likelihood|QualitativeLikelihood)} The choice value; one of: shr.core.Likelihood, shr.core.QualitativeLikelihood
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Likelihood, shr.core.QualitativeLikelihood.
   * @param {(Likelihood|QualitativeLikelihood)} value - The choice value; one of: shr.core.Likelihood, shr.core.QualitativeLikelihood
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the GeneralizedLikelihood class.
   * The JSON must be valid against the GeneralizedLikelihood JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeneralizedLikelihood} An instance of GeneralizedLikelihood populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GeneralizedLikelihood();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default GeneralizedLikelihood;
