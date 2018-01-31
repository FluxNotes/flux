import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.oncology.OtherReceptorScoringSystem.
 * @extends ObservationComponent
 */
class OtherReceptorScoringSystem extends ObservationComponent {

  /**
   * Deserializes JSON data to an instance of the OtherReceptorScoringSystem class.
   * The JSON must be valid against the OtherReceptorScoringSystem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OtherReceptorScoringSystem} An instance of OtherReceptorScoringSystem populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OtherReceptorScoringSystem();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OtherReceptorScoringSystem;
