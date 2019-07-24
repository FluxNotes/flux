// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import ClassRegistry from '../ClassRegistry';

import BodyLocation from '../shr/core/BodyLocation';

/**
 * Generated class for brca.BreastLymphNodeBodyLocation.
 * @extends BodyLocation
 */
class BreastLymphNodeBodyLocation extends BodyLocation {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {BreastLymphNodeBodyLocation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the LocationCode.
   * @returns {LocationCode} The shr.core.LocationCode
   */
  get locationCode() {
    return this._locationCode;
  }

  /**
   * Set the LocationCode.
   * This field/value is required.
   * @param {LocationCode} locationCode - The shr.core.LocationCode
   */
  set locationCode(locationCode) {
    this._locationCode = locationCode;
  }

  /**
   * Set the LocationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {LocationCode} locationCode - The shr.core.LocationCode
   * @returns {BreastLymphNodeBodyLocation} this.
   */
  withLocationCode(locationCode) {
    this.locationCode = locationCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastLymphNodeBodyLocation class.
   * The JSON must be valid against the BreastLymphNodeBodyLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastLymphNodeBodyLocation} An instance of BreastLymphNodeBodyLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('brca', 'BreastLymphNodeBodyLocation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BreastLymphNodeBodyLocation class to a JSON object.
   * The JSON is expected to be valid against the BreastLymphNodeBodyLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/brca/BreastLymphNodeBodyLocation' };
    if (this.locationCode != null) {
      inst['LocationCode'] = typeof this.locationCode.toJSON === 'function' ? this.locationCode.toJSON() : this.locationCode;
    }
    if (this.laterality != null) {
      inst['Laterality'] = typeof this.laterality.toJSON === 'function' ? this.laterality.toJSON() : this.laterality;
    }
    if (this.orientation != null) {
      inst['Orientation'] = typeof this.orientation.toJSON === 'function' ? this.orientation.toJSON() : this.orientation;
    }
    if (this.relationToLandmark != null) {
      inst['RelationToLandmark'] = this.relationToLandmark.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the BreastLymphNodeBodyLocation class.
   * The FHIR must be valid against the BreastLymphNodeBodyLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BreastLymphNodeBodyLocation} An instance of BreastLymphNodeBodyLocation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('brca', 'BreastLymphNodeBodyLocation');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/brca/BreastLymphNodeBodyLocation', 'uri');
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LocationCode-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LocationCode-extension') {
        inst.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.locationCode.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Laterality-extension') {
        inst.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Orientation-extension') {
        inst.orientation = FHIRHelper.createInstanceFromFHIR('shr.core.Orientation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension') {
        inst.relationToLandmark = inst.relationToLandmark || [];
        const inst_relationToLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.RelationToLandmark', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.relationToLandmark.push(inst_relationToLandmark);
      }
    }
    return inst;
  }

}
export default BreastLymphNodeBodyLocation;
