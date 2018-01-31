import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.skin.WoundUndermining.
 * @extends Observation
 */
class WoundUndermining extends Observation {

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Get the ObservationComponent array.
   * @returns {Array<ObservationComponent>} The shr.finding.ObservationComponent array
   */
  get observationComponent() {
    return this._observationComponent;
  }

  /**
   * Set the ObservationComponent array.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   */
  set observationComponent(observationComponent) {
    this._observationComponent = observationComponent;
  }

  /**
   * Deserializes JSON data to an instance of the WoundUndermining class.
   * The JSON must be valid against the WoundUndermining JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundUndermining} An instance of WoundUndermining populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundUndermining();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default WoundUndermining;
