// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Coding from './Coding';

/**
 * Generated class for shr.core.ExpansionCoding.
 * @extends Coding
 */
class ExpansionCoding extends Coding {

  /**
   * Get the Inactive.
   * @returns {Inactive} The shr.core.Inactive
   */
  get inactive() {
    return this._inactive;
  }

  /**
   * Set the Inactive.
   * @param {Inactive} inactive - The shr.core.Inactive
   */
  set inactive(inactive) {
    this._inactive = inactive;
  }

  /**
   * Set the Inactive and return 'this' for chaining.
   * @param {Inactive} inactive - The shr.core.Inactive
   * @returns {ExpansionCoding} this.
   */
  withInactive(inactive) {
    this.inactive = inactive; return this;
  }

  /**
   * Get the NonSelectable.
   * @returns {NonSelectable} The shr.core.NonSelectable
   */
  get nonSelectable() {
    return this._nonSelectable;
  }

  /**
   * Set the NonSelectable.
   * @param {NonSelectable} nonSelectable - The shr.core.NonSelectable
   */
  set nonSelectable(nonSelectable) {
    this._nonSelectable = nonSelectable;
  }

  /**
   * Set the NonSelectable and return 'this' for chaining.
   * @param {NonSelectable} nonSelectable - The shr.core.NonSelectable
   * @returns {ExpansionCoding} this.
   */
  withNonSelectable(nonSelectable) {
    this.nonSelectable = nonSelectable; return this;
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
   * @returns {ExpansionCoding} this.
   */
  withDesignation(designation) {
    this.designation = designation; return this;
  }

  /**
   * Get the ExpansionCoding array.
   * @returns {Array<ExpansionCoding>} The shr.core.ExpansionCoding array
   */
  get expansionCoding() {
    return this._expansionCoding;
  }

  /**
   * Set the ExpansionCoding array.
   * @param {Array<ExpansionCoding>} expansionCoding - The shr.core.ExpansionCoding array
   */
  set expansionCoding(expansionCoding) {
    this._expansionCoding = expansionCoding;
  }

  /**
   * Set the ExpansionCoding array and return 'this' for chaining.
   * @param {Array<ExpansionCoding>} expansionCoding - The shr.core.ExpansionCoding array
   * @returns {ExpansionCoding} this.
   */
  withExpansionCoding(expansionCoding) {
    this.expansionCoding = expansionCoding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExpansionCoding class.
   * The JSON must be valid against the ExpansionCoding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExpansionCoding} An instance of ExpansionCoding populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'ExpansionCoding');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExpansionCoding class to a JSON object.
   * The JSON is expected to be valid against the ExpansionCoding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/ExpansionCoding' } };
    if (this.codeValue != null) {
      inst['CodeValue'] = typeof this.codeValue.toJSON === 'function' ? this.codeValue.toJSON() : this.codeValue;
    }
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.codeSystemVersion != null) {
      inst['CodeSystemVersion'] = typeof this.codeSystemVersion.toJSON === 'function' ? this.codeSystemVersion.toJSON() : this.codeSystemVersion;
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    if (this.inactive != null) {
      inst['Inactive'] = typeof this.inactive.toJSON === 'function' ? this.inactive.toJSON() : this.inactive;
    }
    if (this.nonSelectable != null) {
      inst['NonSelectable'] = typeof this.nonSelectable.toJSON === 'function' ? this.nonSelectable.toJSON() : this.nonSelectable;
    }
    if (this.designation != null) {
      inst['Designation'] = this.designation.map(f => f.toJSON());
    }
    if (this.expansionCoding != null) {
      inst['ExpansionCoding'] = this.expansionCoding.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExpansionCoding class.
   * The FHIR must be valid against the ExpansionCoding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ExpansionCoding} An instance of ExpansionCoding populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'ExpansionCoding');
    const inst = new klass();
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Inactive-extension') {
        inst.inactive = FHIRHelper.createInstanceFromFHIR('shr.core.Inactive', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-NonSelectable-extension') {
        inst.nonSelectable = FHIRHelper.createInstanceFromFHIR('shr.core.NonSelectable', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Designation-extension') {
        inst.designation = inst.designation || [];
        const inst_designation = FHIRHelper.createInstanceFromFHIR('shr.core.Designation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.designation.push(inst_designation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ExpansionCoding-extension') {
        inst.expansionCoding = inst.expansionCoding || [];
        const inst_expansionCoding = FHIRHelper.createInstanceFromFHIR('shr.core.ExpansionCoding', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.expansionCoding.push(inst_expansionCoding);
      }
    }
    if (fhir['system'] != null) {
      inst.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', fhir['system'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['version'] != null) {
      inst.codeSystemVersion = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystemVersion', fhir['version'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.codeValue = FHIRHelper.createInstanceFromFHIR('shr.core.CodeValue', fhir['code'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['display'] != null) {
      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir['display'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueCoding'];
    }
    return inst;
  }

}
export default ExpansionCoding;
