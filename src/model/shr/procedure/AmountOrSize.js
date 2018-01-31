import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.procedure.AmountOrSize.
 */
class AmountOrSize {

  /**
   * Get the value (aliases simpleQuantity).
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get value() {
    return this._simpleQuantity;
  }

  /**
   * Set the value (aliases simpleQuantity).
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   */
  set value(value) {
    this._simpleQuantity = value;
  }

  /**
   * Get the SimpleQuantity.
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get simpleQuantity() {
    return this._simpleQuantity;
  }

  /**
   * Set the SimpleQuantity.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   */
  set simpleQuantity(simpleQuantity) {
    this._simpleQuantity = simpleQuantity;
  }

  /**
   * Deserializes JSON data to an instance of the AmountOrSize class.
   * The JSON must be valid against the AmountOrSize JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AmountOrSize} An instance of AmountOrSize populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AmountOrSize();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default AmountOrSize;
