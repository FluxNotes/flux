// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Designation.
 */
class Designation {

  /**
   * Get the Language.
   * @returns {Language} The shr.core.Language
   */
  get language() {
    return this._language;
  }

  /**
   * Set the Language.
   * @param {Language} language - The shr.core.Language
   */
  set language(language) {
    this._language = language;
  }

  /**
   * Set the Language and return 'this' for chaining.
   * @param {Language} language - The shr.core.Language
   * @returns {Designation} this.
   */
  withLanguage(language) {
    this.language = language; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {Designation} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * This field/value is required.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Set the DisplayText and return 'this' for chaining.
   * This field/value is required.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   * @returns {Designation} this.
   */
  withDisplayText(displayText) {
    this.displayText = displayText; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Designation class.
   * The JSON must be valid against the Designation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Designation} An instance of Designation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Designation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Designation class to a JSON object.
   * The JSON is expected to be valid against the Designation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Designation' } };
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Designation class.
   * The FHIR must be valid against the Designation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Designation} An instance of Designation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Designation');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Language-extension');
      if (match_3 != null) {
        inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension');
      if (match_4 != null) {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_9 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DisplayText-extension');
      if (match_9 != null) {
        inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', match_9, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default Designation;
