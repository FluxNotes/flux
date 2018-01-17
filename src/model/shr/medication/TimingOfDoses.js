import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.TimingOfDoses.
 */
class TimingOfDoses {

  /**
   * Get the value (aliases timing).
   * @returns {Timing} The shr.core.Timing
   */
  get value() {
    return this._timing;
  }

  /**
   * Set the value (aliases timing).
   * @param {Timing} value - The shr.core.Timing
   */
  set value(value) {
    this._timing = value;
  }

  /**
   * Get the Timing.
   * @returns {Timing} The shr.core.Timing
   */
  get timing() {
    return this._timing;
  }

  /**
   * Set the Timing.
   * @param {Timing} timing - The shr.core.Timing
   */
  set timing(timing) {
    this._timing = timing;
  }

  /**
   * Deserializes JSON data to an instance of the TimingOfDoses class.
   * The JSON must be valid against the TimingOfDoses JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {TimingOfDoses} An instance of TimingOfDoses populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new TimingOfDoses();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default TimingOfDoses;
