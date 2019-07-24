// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.ExpansionParameter.
 */
class ExpansionParameter {

  /**
   * Get the NameAsText.
   * @returns {NameAsText} The shr.core.NameAsText
   */
  get nameAsText() {
    return this._nameAsText;
  }

  /**
   * Set the NameAsText.
   * This field/value is required.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   */
  set nameAsText(nameAsText) {
    this._nameAsText = nameAsText;
  }

  /**
   * Set the NameAsText and return 'this' for chaining.
   * This field/value is required.
   * @param {NameAsText} nameAsText - The shr.core.NameAsText
   * @returns {ExpansionParameter} this.
   */
  withNameAsText(nameAsText) {
    this.nameAsText = nameAsText; return this;
  }

  /**
   * Get the ParameterValue.
   * @returns {ParameterValue} The shr.core.ParameterValue
   */
  get parameterValue() {
    return this._parameterValue;
  }

  /**
   * Set the ParameterValue.
   * @param {ParameterValue} parameterValue - The shr.core.ParameterValue
   */
  set parameterValue(parameterValue) {
    this._parameterValue = parameterValue;
  }

  /**
   * Set the ParameterValue and return 'this' for chaining.
   * @param {ParameterValue} parameterValue - The shr.core.ParameterValue
   * @returns {ExpansionParameter} this.
   */
  withParameterValue(parameterValue) {
    this.parameterValue = parameterValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpansionParameter class.
   * The JSON must be valid against the ExpansionParameter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpansionParameter} An instance of ExpansionParameter populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ExpansionParameter');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExpansionParameter class to a JSON object.
   * The JSON is expected to be valid against the ExpansionParameter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ExpansionParameter' } };
    if (this.nameAsText != null) {
      inst['NameAsText'] = typeof this.nameAsText.toJSON === 'function' ? this.nameAsText.toJSON() : this.nameAsText;
    }
    if (this.parameterValue != null) {
      inst['ParameterValue'] = typeof this.parameterValue.toJSON === 'function' ? this.parameterValue.toJSON() : this.parameterValue;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExpansionParameter class.
   * The FHIR must be valid against the ExpansionParameter FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ExpansionParameter} An instance of ExpansionParameter populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ExpansionParameter');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-NameAsText-extension');
      if (match_3 != null) {
        inst.nameAsText = FHIRHelper.createInstanceFromFHIR('shr.core.NameAsText', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ParameterValue-extension');
      if (match_4 != null) {
        inst.parameterValue = FHIRHelper.createInstanceFromFHIR('shr.core.ParameterValue', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ExpansionParameter;
