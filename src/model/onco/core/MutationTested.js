// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for onco.core.MutationTested.
 */
class MutationTested {

  /**
   * Get the VariantIdentifier.
   * @returns {VariantIdentifier} The onco.core.VariantIdentifier
   */
  get variantIdentifier() {
    return this._variantIdentifier;
  }

  /**
   * Set the VariantIdentifier.
   * @param {VariantIdentifier} variantIdentifier - The onco.core.VariantIdentifier
   */
  set variantIdentifier(variantIdentifier) {
    this._variantIdentifier = variantIdentifier;
  }

  /**
   * Set the VariantIdentifier and return 'this' for chaining.
   * @param {VariantIdentifier} variantIdentifier - The onco.core.VariantIdentifier
   * @returns {MutationTested} this.
   */
  withVariantIdentifier(variantIdentifier) {
    this.variantIdentifier = variantIdentifier; return this;
  }

  /**
   * Get the VariantHGVSName array.
   * @returns {Array<VariantHGVSName>} The onco.core.VariantHGVSName array
   */
  get variantHGVSName() {
    return this._variantHGVSName;
  }

  /**
   * Set the VariantHGVSName array.
   * @param {Array<VariantHGVSName>} variantHGVSName - The onco.core.VariantHGVSName array
   */
  set variantHGVSName(variantHGVSName) {
    this._variantHGVSName = variantHGVSName;
  }

  /**
   * Set the VariantHGVSName array and return 'this' for chaining.
   * @param {Array<VariantHGVSName>} variantHGVSName - The onco.core.VariantHGVSName array
   * @returns {MutationTested} this.
   */
  withVariantHGVSName(variantHGVSName) {
    this.variantHGVSName = variantHGVSName; return this;
  }

  /**
   * Get the VariantDescription.
   * @returns {VariantDescription} The onco.core.VariantDescription
   */
  get variantDescription() {
    return this._variantDescription;
  }

  /**
   * Set the VariantDescription.
   * @param {VariantDescription} variantDescription - The onco.core.VariantDescription
   */
  set variantDescription(variantDescription) {
    this._variantDescription = variantDescription;
  }

  /**
   * Set the VariantDescription and return 'this' for chaining.
   * @param {VariantDescription} variantDescription - The onco.core.VariantDescription
   * @returns {MutationTested} this.
   */
  withVariantDescription(variantDescription) {
    this.variantDescription = variantDescription; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MutationTested class.
   * The JSON must be valid against the MutationTested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MutationTested} An instance of MutationTested populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('onco.core', 'MutationTested');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MutationTested class to a JSON object.
   * The JSON is expected to be valid against the MutationTested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/onco/core/MutationTested' } };
    if (this.variantIdentifier != null) {
      inst['VariantIdentifier'] = typeof this.variantIdentifier.toJSON === 'function' ? this.variantIdentifier.toJSON() : this.variantIdentifier;
    }
    if (this.variantHGVSName != null) {
      inst['VariantHGVSName'] = this.variantHGVSName.map(f => f.toJSON());
    }
    if (this.variantDescription != null) {
      inst['VariantDescription'] = typeof this.variantDescription.toJSON === 'function' ? this.variantDescription.toJSON() : this.variantDescription;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MutationTested class.
   * The FHIR must be valid against the MutationTested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MutationTested} An instance of MutationTested populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('onco.core', 'MutationTested');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/onco-core-VariantIdentifier-extension');
      if (match_3 != null) {
        inst.variantIdentifier = FHIRHelper.createInstanceFromFHIR('onco.core.VariantIdentifier', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/onco-core-VariantHGVSName-extension');
      if (match_4 != null) {
        inst.variantHGVSName = FHIRHelper.createInstanceFromFHIR('onco.core.VariantHGVSName', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/onco-core-VariantDescription-extension');
      if (match_5 != null) {
        inst.variantDescription = FHIRHelper.createInstanceFromFHIR('onco.core.VariantDescription', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default MutationTested;
