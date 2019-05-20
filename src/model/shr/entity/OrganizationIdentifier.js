import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Identifier from '../core/Identifier';

/**
 * Generated class for shr.entity.OrganizationIdentifier.
 * @extends Identifier
 */
class OrganizationIdentifier extends Identifier {

  /**
   * Deserializes JSON data to an instance of the OrganizationIdentifier class.
   * The JSON must be valid against the OrganizationIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OrganizationIdentifier} An instance of OrganizationIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OrganizationIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the OrganizationIdentifier class to a JSON object.
   * The JSON is expected to be valid against the OrganizationIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/OrganizationIdentifier' } };
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the OrganizationIdentifier class.
   * The FHIR must be valid against the OrganizationIdentifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {OrganizationIdentifier} An instance of OrganizationIdentifier populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new OrganizationIdentifier();
    if (fhir['use'] != null) {
      inst.purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['system'] != null) {
      inst.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', fhir['system'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['value'] != null) {
      inst.text = FHIRHelper.createInstanceFromFHIR('shr.core.Text', fhir['value'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default OrganizationIdentifier;
