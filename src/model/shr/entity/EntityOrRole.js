import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import InformationItem from '../base/InformationItem';

/**
 * Generated class for shr.entity.EntityOrRole.
 * @extends InformationItem
 */
class EntityOrRole extends InformationItem {

  /**
   * Deserializes JSON data to an instance of the EntityOrRole class.
   * The JSON must be valid against the EntityOrRole JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EntityOrRole} An instance of EntityOrRole populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EntityOrRole();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EntityOrRole class to a JSON object.
   * The JSON is expected to be valid against the EntityOrRole JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/EntityOrRole' } };
    return inst;
  }

  /**
   * Serializes an instance of the EntityOrRole class to a FHIR object.
   * The FHIR is expected to be valid against the EntityOrRole FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-EntityOrRole-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EntityOrRole class.
   * The FHIR must be valid against the EntityOrRole FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {EntityOrRole} An instance of EntityOrRole populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new EntityOrRole();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default EntityOrRole;
