import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.M-Stage.
 * @extends ObservationComponent
 */
class M_Stage extends ObservationComponent {

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
   * Deserializes JSON data to an instance of the M_Stage class.
   * The JSON must be valid against the M_Stage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {M_Stage} An instance of M_Stage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new M_Stage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default M_Stage;
