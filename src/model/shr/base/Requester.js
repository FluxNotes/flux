import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Participant from './Participant';

/**
 * Generated class for shr.base.Requester.
 * @extends Participant
 */
class Requester extends Participant {

  /**
   * Deserializes JSON data to an instance of the Requester class.
   * The JSON must be valid against the Requester JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Requester} An instance of Requester populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Requester();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Requester class to a JSON object.
   * The JSON is expected to be valid against the Requester JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Requester' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Requester class.
   * The FHIR must be valid against the Requester FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Requester} An instance of Requester populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Requester();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.entity.EntityOrRole', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default Requester;
