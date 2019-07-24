// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.BodyLocation.
 */
class BodyLocation {

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
   * @returns {BodyLocation} this.
   */
  withLocationCode(locationCode) {
    this.locationCode = locationCode; return this;
  }

  /**
   * Get the Laterality.
   * @returns {Laterality} The shr.core.Laterality
   */
  get laterality() {
    return this._laterality;
  }

  /**
   * Set the Laterality.
   * @param {Laterality} laterality - The shr.core.Laterality
   */
  set laterality(laterality) {
    this._laterality = laterality;
  }

  /**
   * Set the Laterality and return 'this' for chaining.
   * @param {Laterality} laterality - The shr.core.Laterality
   * @returns {BodyLocation} this.
   */
  withLaterality(laterality) {
    this.laterality = laterality; return this;
  }

  /**
   * Get the Orientation.
   * @returns {Orientation} The shr.core.Orientation
   */
  get orientation() {
    return this._orientation;
  }

  /**
   * Set the Orientation.
   * @param {Orientation} orientation - The shr.core.Orientation
   */
  set orientation(orientation) {
    this._orientation = orientation;
  }

  /**
   * Set the Orientation and return 'this' for chaining.
   * @param {Orientation} orientation - The shr.core.Orientation
   * @returns {BodyLocation} this.
   */
  withOrientation(orientation) {
    this.orientation = orientation; return this;
  }

  /**
   * Get the RelationToLandmark array.
   * @returns {Array<RelationToLandmark>} The shr.core.RelationToLandmark array
   */
  get relationToLandmark() {
    return this._relationToLandmark;
  }

  /**
   * Set the RelationToLandmark array.
   * @param {Array<RelationToLandmark>} relationToLandmark - The shr.core.RelationToLandmark array
   */
  set relationToLandmark(relationToLandmark) {
    this._relationToLandmark = relationToLandmark;
  }

  /**
   * Set the RelationToLandmark array and return 'this' for chaining.
   * @param {Array<RelationToLandmark>} relationToLandmark - The shr.core.RelationToLandmark array
   * @returns {BodyLocation} this.
   */
  withRelationToLandmark(relationToLandmark) {
    this.relationToLandmark = relationToLandmark; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BodyLocation class.
   * The JSON must be valid against the BodyLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyLocation} An instance of BodyLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'BodyLocation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BodyLocation class to a JSON object.
   * The JSON is expected to be valid against the BodyLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/BodyLocation' } };
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
   * Deserializes FHIR JSON data to an instance of the BodyLocation class.
   * The FHIR must be valid against the BodyLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BodyLocation} An instance of BodyLocation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'BodyLocation');
    const inst = new klass();
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LocationCode-extension') {
        inst.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
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
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LocationCode-extension');
      if (match_3 != null) {
        inst.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Laterality-extension');
      if (match_4 != null) {
        inst.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Orientation-extension');
      if (match_5 != null) {
        inst.orientation = FHIRHelper.createInstanceFromFHIR('shr.core.Orientation', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension');
      if (match_6 != null) {
        inst.relationToLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.RelationToLandmark', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default BodyLocation;
