// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.CodeSetConcept.
 */
class CodeSetConcept {

  /**
   * Get the CodeValue.
   * @returns {CodeValue} The shr.core.CodeValue
   */
  get codeValue() {
    return this._codeValue;
  }

  /**
   * Set the CodeValue.
   * @param {CodeValue} codeValue - The shr.core.CodeValue
   */
  set codeValue(codeValue) {
    this._codeValue = codeValue;
  }

  /**
   * Set the CodeValue and return 'this' for chaining.
   * @param {CodeValue} codeValue - The shr.core.CodeValue
   * @returns {CodeSetConcept} this.
   */
  withCodeValue(codeValue) {
    this.codeValue = codeValue; return this;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Set the DisplayText and return 'this' for chaining.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   * @returns {CodeSetConcept} this.
   */
  withDisplayText(displayText) {
    this.displayText = displayText; return this;
  }

  /**
   * Get the Designation array.
   * @returns {Array<Designation>} The shr.core.Designation array
   */
  get designation() {
    return this._designation;
  }

  /**
   * Set the Designation array.
   * @param {Array<Designation>} designation - The shr.core.Designation array
   */
  set designation(designation) {
    this._designation = designation;
  }

  /**
   * Set the Designation array and return 'this' for chaining.
   * @param {Array<Designation>} designation - The shr.core.Designation array
   * @returns {CodeSetConcept} this.
   */
  withDesignation(designation) {
    this.designation = designation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CodeSetConcept class.
   * The JSON must be valid against the CodeSetConcept JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CodeSetConcept} An instance of CodeSetConcept populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'CodeSetConcept');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CodeSetConcept class to a JSON object.
   * The JSON is expected to be valid against the CodeSetConcept JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/CodeSetConcept' } };
    if (this.codeValue != null) {
      inst['CodeValue'] = typeof this.codeValue.toJSON === 'function' ? this.codeValue.toJSON() : this.codeValue;
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    if (this.designation != null) {
      inst['Designation'] = this.designation.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CodeSetConcept class.
   * The FHIR must be valid against the CodeSetConcept FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CodeSetConcept} An instance of CodeSetConcept populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'CodeSetConcept');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CodeValue-extension');
      if (match_3 != null) {
        inst.codeValue = FHIRHelper.createInstanceFromFHIR('shr.core.CodeValue', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DisplayText-extension');
      if (match_4 != null) {
        inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Designation-extension');
      if (match_5 != null) {
        inst.designation = FHIRHelper.createInstanceFromFHIR('shr.core.Designation', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default CodeSetConcept;
