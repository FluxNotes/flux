import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.ImagingAction.
 * @extends ProcedureAction
 */
class ImagingAction extends ProcedureAction {

  /**
   * Get the ImagingSubstance array.
   * @returns {Array<ImagingSubstance>} The shr.procedure.ImagingSubstance array
   */
  get imagingSubstance() {
    return this._imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   */
  set imagingSubstance(imagingSubstance) {
    this._imagingSubstance = imagingSubstance;
  }

  /**
   * Deserializes JSON data to an instance of the ImagingAction class.
   * The JSON must be valid against the ImagingAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingAction} An instance of ImagingAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ImagingAction;
