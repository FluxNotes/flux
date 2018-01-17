import { setPropertiesFromJSON } from '../../json-helper';

import ObservationComponent from '../finding/ObservationComponent';

/**
 * Generated class for shr.core.Circumference.
 * @extends ObservationComponent
 */
class Circumference extends ObservationComponent {

  /**
   * Deserializes JSON data to an instance of the Circumference class.
   * The JSON must be valid against the Circumference JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Circumference} An instance of Circumference populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Circumference();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Circumference;
