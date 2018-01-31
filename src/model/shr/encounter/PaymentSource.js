import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.encounter.PaymentSource.
 */
class PaymentSource {

  // Ommitting getter/setter for TBD: PaymentSourceVS

  /**
   * Deserializes JSON data to an instance of the PaymentSource class.
   * The JSON must be valid against the PaymentSource JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {PaymentSource} An instance of PaymentSource populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new PaymentSource();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default PaymentSource;
