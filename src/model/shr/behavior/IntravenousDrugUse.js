import { setPropertiesFromJSON } from '../../json-helper';

import SubstanceUse from './SubstanceUse';

/**
 * Generated class for shr.behavior.IntravenousDrugUse.
 * @extends SubstanceUse
 */
class IntravenousDrugUse extends SubstanceUse {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
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
   * Deserializes JSON data to an instance of the IntravenousDrugUse class.
   * The JSON must be valid against the IntravenousDrugUse JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {IntravenousDrugUse} An instance of IntravenousDrugUse populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new IntravenousDrugUse();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default IntravenousDrugUse;
