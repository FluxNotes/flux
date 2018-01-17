import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.skin.WoundSize.
 * @extends Observation
 */
class WoundSize extends Observation {

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
   * Deserializes JSON data to an instance of the WoundSize class.
   * The JSON must be valid against the WoundSize JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundSize} An instance of WoundSize populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundSize();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default WoundSize;
