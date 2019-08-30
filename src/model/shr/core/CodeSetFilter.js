// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.CodeSetFilter.
 */
class CodeSetFilter {

  /**
   * Get the Property.
   * @returns {Property} The shr.core.Property
   */
  get property() {
    return this._property;
  }

  /**
   * Set the Property.
   * This field/value is required.
   * @param {Property} property - The shr.core.Property
   */
  set property(property) {
    this._property = property;
  }

  /**
   * Set the Property and return 'this' for chaining.
   * This field/value is required.
   * @param {Property} property - The shr.core.Property
   * @returns {CodeSetFilter} this.
   */
  withProperty(property) {
    this.property = property; return this;
  }

  /**
   * Get the Operation.
   * @returns {Operation} The shr.core.Operation
   */
  get operation() {
    return this._operation;
  }

  /**
   * Set the Operation.
   * This field/value is required.
   * @param {Operation} operation - The shr.core.Operation
   */
  set operation(operation) {
    this._operation = operation;
  }

  /**
   * Set the Operation and return 'this' for chaining.
   * This field/value is required.
   * @param {Operation} operation - The shr.core.Operation
   * @returns {CodeSetFilter} this.
   */
  withOperation(operation) {
    this.operation = operation; return this;
  }

  /**
   * Get the CodeValue.
   * @returns {CodeValue} The shr.core.CodeValue
   */
  get codeValue() {
    return this._codeValue;
  }

  /**
   * Set the CodeValue.
   * This field/value is required.
   * @param {CodeValue} codeValue - The shr.core.CodeValue
   */
  set codeValue(codeValue) {
    this._codeValue = codeValue;
  }

  /**
   * Set the CodeValue and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeValue} codeValue - The shr.core.CodeValue
   * @returns {CodeSetFilter} this.
   */
  withCodeValue(codeValue) {
    this.codeValue = codeValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeSetFilter class.
   * The JSON must be valid against the CodeSetFilter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeSetFilter} An instance of CodeSetFilter populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'CodeSetFilter');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CodeSetFilter class to a JSON object.
   * The JSON is expected to be valid against the CodeSetFilter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CodeSetFilter' } };
    if (this.property != null) {
      inst['Property'] = typeof this.property.toJSON === 'function' ? this.property.toJSON() : this.property;
    }
    if (this.operation != null) {
      inst['Operation'] = typeof this.operation.toJSON === 'function' ? this.operation.toJSON() : this.operation;
    }
    if (this.codeValue != null) {
      inst['CodeValue'] = typeof this.codeValue.toJSON === 'function' ? this.codeValue.toJSON() : this.codeValue;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CodeSetFilter class.
   * The FHIR must be valid against the CodeSetFilter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CodeSetFilter} An instance of CodeSetFilter populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'CodeSetFilter');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Property-extension');
      if (match_3 != null) {
        inst.property = FHIRHelper.createInstanceFromFHIR('shr.core.Property', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Operation-extension');
      if (match_4 != null) {
        inst.operation = FHIRHelper.createInstanceFromFHIR('shr.core.Operation', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeValue-extension');
      if (match_5 != null) {
        inst.codeValue = FHIRHelper.createInstanceFromFHIR('shr.core.CodeValue', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default CodeSetFilter;
