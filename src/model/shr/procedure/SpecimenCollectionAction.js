import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.SpecimenCollectionAction.
 * @extends ProcedureAction
 */
class SpecimenCollectionAction extends ProcedureAction {

  /**
   * Get the AmountOrSize array.
   * @returns {Array<AmountOrSize>} The shr.procedure.AmountOrSize array
   */
  get amountOrSize() {
    return this._amountOrSize;
  }

  /**
   * Set the AmountOrSize array.
   * @param {Array<AmountOrSize>} amountOrSize - The shr.procedure.AmountOrSize array
   */
  set amountOrSize(amountOrSize) {
    this._amountOrSize = amountOrSize;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionAction class.
   * The JSON must be valid against the SpecimenCollectionAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionAction} An instance of SpecimenCollectionAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecimenCollectionAction;
