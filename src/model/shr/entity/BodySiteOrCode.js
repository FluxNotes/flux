import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.BodySiteOrCode.
 */
class BodySiteOrCode {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite.
   * @returns {(CodeableConcept|BodySite)} The choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite.
   * @param {(CodeableConcept|BodySite)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.BodySite
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Deserializes JSON data to an instance of the BodySiteOrCode class.
   * The JSON must be valid against the BodySiteOrCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodySiteOrCode} An instance of BodySiteOrCode populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BodySiteOrCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BodySiteOrCode;
