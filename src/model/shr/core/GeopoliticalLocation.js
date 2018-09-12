import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.core.GeopoliticalLocation.
 */
class GeopoliticalLocation {

  /**
   * Deserializes JSON data to an instance of the GeopoliticalLocation class.
   * The JSON must be valid against the GeopoliticalLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GeopoliticalLocation} An instance of GeopoliticalLocation populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new GeopoliticalLocation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the GeopoliticalLocation class to a JSON object.
   * The JSON is expected to be valid against the GeopoliticalLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/GeopoliticalLocation' } };
    return inst;
  }
  /**
   * Serializes an instance of the GeopoliticalLocation class to a FHIR object.
   * The FHIR is expected to be valid against the GeopoliticalLocation FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-core-GeopoliticalLocation-extension';
    }
    return inst;
  }
}
export default GeopoliticalLocation;
