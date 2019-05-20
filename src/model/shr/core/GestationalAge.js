import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Age from './Age';

/**
 * Generated class for shr.core.GestationalAge.
 * @extends Age
 */
class GestationalAge extends Age {

  /**
   * Deserializes JSON data to an instance of the GestationalAge class.
   * The JSON must be valid against the GestationalAge JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {GestationalAge} An instance of GestationalAge populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new GestationalAge();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the GestationalAge class to a JSON object.
   * The JSON is expected to be valid against the GestationalAge JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/GestationalAge' } };
    if (this.number != null) {
      inst['Number'] = typeof this.number.toJSON === 'function' ? this.number.toJSON() : this.number;
    }
    if (this.comparator != null) {
      inst['Comparator'] = typeof this.comparator.toJSON === 'function' ? this.comparator.toJSON() : this.comparator;
    }
    if (this.units != null) {
      inst['Units'] = typeof this.units.toJSON === 'function' ? this.units.toJSON() : this.units;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the GestationalAge class.
   * The FHIR must be valid against the GestationalAge FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {GestationalAge} An instance of GestationalAge populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new GestationalAge();
    if (fhir['value'] != null) {
      inst.number = FHIRHelper.createInstanceFromFHIR('shr.core.Number', fhir['value'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['comparator'] != null) {
      inst.comparator = FHIRHelper.createInstanceFromFHIR('shr.core.Comparator', fhir['comparator'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['unit'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, shrId);
      inst.units.value.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir['unit'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['system'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, shrId);
      inst.units.value.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', fhir['system'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.units = inst.units || FHIRHelper.createInstanceFromFHIR('shr.core.Units', {}, shrId);
      inst.units.value = inst.units.value || FHIRHelper.createInstanceFromFHIR('shr.core.Coding', {}, shrId);
      inst.units.value.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['code'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default GestationalAge;
