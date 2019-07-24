// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.SpecimenTreatment.
 */
class SpecimenTreatment {

  /**
   * Get the Additive array.
   * @returns {Array<Additive>} The shr.core.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The shr.core.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Set the Additive array and return 'this' for chaining.
   * @param {Array<Additive>} additive - The shr.core.Additive array
   * @returns {SpecimenTreatment} this.
   */
  withAdditive(additive) {
    this.additive = additive; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenTreatment class.
   * The JSON must be valid against the SpecimenTreatment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenTreatment} An instance of SpecimenTreatment populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'SpecimenTreatment');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SpecimenTreatment class to a JSON object.
   * The JSON is expected to be valid against the SpecimenTreatment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/SpecimenTreatment' } };
    if (this.additive != null) {
      inst['Additive'] = this.additive.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecimenTreatment class.
   * The FHIR must be valid against the SpecimenTreatment FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SpecimenTreatment} An instance of SpecimenTreatment populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'SpecimenTreatment');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Additive-extension');
      if (match_3 != null) {
        inst.additive = FHIRHelper.createInstanceFromFHIR('shr.core.Additive', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default SpecimenTreatment;
