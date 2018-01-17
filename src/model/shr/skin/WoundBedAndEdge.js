import { setPropertiesFromJSON } from '../../json-helper';

import Observation from '../finding/Observation';

/**
 * Generated class for shr.skin.WoundBedAndEdge.
 * @extends Observation
 */
class WoundBedAndEdge extends Observation {

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
   * Deserializes JSON data to an instance of the WoundBedAndEdge class.
   * The JSON must be valid against the WoundBedAndEdge JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundBedAndEdge} An instance of WoundBedAndEdge populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundBedAndEdge();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default WoundBedAndEdge;
