import { setPropertiesFromJSON } from '../../json-helper';

import MedicationAction from '../medication/MedicationAction';

/**
 * Generated class for shr.sex.ContraceptiveAction.
 * @extends MedicationAction
 */
class ContraceptiveAction extends MedicationAction {

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
   * Deserializes JSON data to an instance of the ContraceptiveAction class.
   * The JSON must be valid against the ContraceptiveAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ContraceptiveAction} An instance of ContraceptiveAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ContraceptiveAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ContraceptiveAction;
