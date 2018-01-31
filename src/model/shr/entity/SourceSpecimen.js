import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.SourceSpecimen.
 */
class SourceSpecimen {

  /**
   * Get the value (aliases specimen).
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get value() {
    return this._specimen;
  }

  /**
   * Set the value (aliases specimen).
   * @param {Reference} value - The shr.entity.Specimen reference
   */
  set value(value) {
    this._specimen = value;
  }

  /**
   * Get the shr.entity.Specimen reference.
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the shr.entity.Specimen reference.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Deserializes JSON data to an instance of the SourceSpecimen class.
   * The JSON must be valid against the SourceSpecimen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SourceSpecimen} An instance of SourceSpecimen populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SourceSpecimen();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SourceSpecimen;
