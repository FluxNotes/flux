import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import TimePeriod from './TimePeriod';

/**
 * Generated class for shr.core.EffectiveTimePeriod.
 * @extends TimePeriod
 */
class EffectiveTimePeriod extends TimePeriod {

  /**
   * Deserializes JSON data to an instance of the EffectiveTimePeriod class.
   * The JSON must be valid against the EffectiveTimePeriod JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EffectiveTimePeriod} An instance of EffectiveTimePeriod populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EffectiveTimePeriod();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EffectiveTimePeriod class to a JSON object.
   * The JSON is expected to be valid against the EffectiveTimePeriod JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EffectiveTimePeriod' } };
    if (this.beginDateTime != null) {
      inst['BeginDateTime'] = typeof this.beginDateTime.toJSON === 'function' ? this.beginDateTime.toJSON() : this.beginDateTime;
    }
    if (this.endDateTime != null) {
      inst['EndDateTime'] = typeof this.endDateTime.toJSON === 'function' ? this.endDateTime.toJSON() : this.endDateTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EffectiveTimePeriod class.
   * The FHIR must be valid against the EffectiveTimePeriod FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EffectiveTimePeriod} An instance of EffectiveTimePeriod populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new EffectiveTimePeriod();
    if (fhir['start'] != null) {
      inst.beginDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['start'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['end'] != null) {
      inst.endDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.EndDateTime', fhir['end'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valuePeriod'];
    }
    return inst;
  }

}
export default EffectiveTimePeriod;
