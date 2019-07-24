// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.RelationToLandmark.
 */
class RelationToLandmark {

  /**
   * Get the LandmarkType.
   * @returns {LandmarkType} The shr.core.LandmarkType
   */
  get landmarkType() {
    return this._landmarkType;
  }

  /**
   * Set the LandmarkType.
   * @param {LandmarkType} landmarkType - The shr.core.LandmarkType
   */
  set landmarkType(landmarkType) {
    this._landmarkType = landmarkType;
  }

  /**
   * Set the LandmarkType and return 'this' for chaining.
   * @param {LandmarkType} landmarkType - The shr.core.LandmarkType
   * @returns {RelationToLandmark} this.
   */
  withLandmarkType(landmarkType) {
    this.landmarkType = landmarkType; return this;
  }

  /**
   * Get the LandmarkLocation.
   * @returns {LandmarkLocation} The shr.core.LandmarkLocation
   */
  get landmarkLocation() {
    return this._landmarkLocation;
  }

  /**
   * Set the LandmarkLocation.
   * @param {LandmarkLocation} landmarkLocation - The shr.core.LandmarkLocation
   */
  set landmarkLocation(landmarkLocation) {
    this._landmarkLocation = landmarkLocation;
  }

  /**
   * Set the LandmarkLocation and return 'this' for chaining.
   * @param {LandmarkLocation} landmarkLocation - The shr.core.LandmarkLocation
   * @returns {RelationToLandmark} this.
   */
  withLandmarkLocation(landmarkLocation) {
    this.landmarkLocation = landmarkLocation; return this;
  }

  /**
   * Get the LandmarkToBodyLocationDirection.
   * @returns {LandmarkToBodyLocationDirection} The shr.core.LandmarkToBodyLocationDirection
   */
  get landmarkToBodyLocationDirection() {
    return this._landmarkToBodyLocationDirection;
  }

  /**
   * Set the LandmarkToBodyLocationDirection.
   * @param {LandmarkToBodyLocationDirection} landmarkToBodyLocationDirection - The shr.core.LandmarkToBodyLocationDirection
   */
  set landmarkToBodyLocationDirection(landmarkToBodyLocationDirection) {
    this._landmarkToBodyLocationDirection = landmarkToBodyLocationDirection;
  }

  /**
   * Set the LandmarkToBodyLocationDirection and return 'this' for chaining.
   * @param {LandmarkToBodyLocationDirection} landmarkToBodyLocationDirection - The shr.core.LandmarkToBodyLocationDirection
   * @returns {RelationToLandmark} this.
   */
  withLandmarkToBodyLocationDirection(landmarkToBodyLocationDirection) {
    this.landmarkToBodyLocationDirection = landmarkToBodyLocationDirection; return this;
  }

  /**
   * Get the LandmarkToBodyLocationDistance.
   * @returns {LandmarkToBodyLocationDistance} The shr.core.LandmarkToBodyLocationDistance
   */
  get landmarkToBodyLocationDistance() {
    return this._landmarkToBodyLocationDistance;
  }

  /**
   * Set the LandmarkToBodyLocationDistance.
   * @param {LandmarkToBodyLocationDistance} landmarkToBodyLocationDistance - The shr.core.LandmarkToBodyLocationDistance
   */
  set landmarkToBodyLocationDistance(landmarkToBodyLocationDistance) {
    this._landmarkToBodyLocationDistance = landmarkToBodyLocationDistance;
  }

  /**
   * Set the LandmarkToBodyLocationDistance and return 'this' for chaining.
   * @param {LandmarkToBodyLocationDistance} landmarkToBodyLocationDistance - The shr.core.LandmarkToBodyLocationDistance
   * @returns {RelationToLandmark} this.
   */
  withLandmarkToBodyLocationDistance(landmarkToBodyLocationDistance) {
    this.landmarkToBodyLocationDistance = landmarkToBodyLocationDistance; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RelationToLandmark class.
   * The JSON must be valid against the RelationToLandmark JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelationToLandmark} An instance of RelationToLandmark populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'RelationToLandmark');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RelationToLandmark class to a JSON object.
   * The JSON is expected to be valid against the RelationToLandmark JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/RelationToLandmark' } };
    if (this.landmarkType != null) {
      inst['LandmarkType'] = typeof this.landmarkType.toJSON === 'function' ? this.landmarkType.toJSON() : this.landmarkType;
    }
    if (this.landmarkLocation != null) {
      inst['LandmarkLocation'] = typeof this.landmarkLocation.toJSON === 'function' ? this.landmarkLocation.toJSON() : this.landmarkLocation;
    }
    if (this.landmarkToBodyLocationDirection != null) {
      inst['LandmarkToBodyLocationDirection'] = typeof this.landmarkToBodyLocationDirection.toJSON === 'function' ? this.landmarkToBodyLocationDirection.toJSON() : this.landmarkToBodyLocationDirection;
    }
    if (this.landmarkToBodyLocationDistance != null) {
      inst['LandmarkToBodyLocationDistance'] = typeof this.landmarkToBodyLocationDistance.toJSON === 'function' ? this.landmarkToBodyLocationDistance.toJSON() : this.landmarkToBodyLocationDistance;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RelationToLandmark class.
   * The FHIR must be valid against the RelationToLandmark FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RelationToLandmark} An instance of RelationToLandmark populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'RelationToLandmark');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LandmarkType-extension');
      if (match_3 != null) {
        inst.landmarkType = FHIRHelper.createInstanceFromFHIR('shr.core.LandmarkType', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LandmarkLocation-extension');
      if (match_4 != null) {
        inst.landmarkLocation = FHIRHelper.createInstanceFromFHIR('shr.core.LandmarkLocation', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LandmarkToBodyLocationDirection-extension');
      if (match_5 != null) {
        inst.landmarkToBodyLocationDirection = FHIRHelper.createInstanceFromFHIR('shr.core.LandmarkToBodyLocationDirection', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-LandmarkToBodyLocationDistance-extension');
      if (match_6 != null) {
        inst.landmarkToBodyLocationDistance = FHIRHelper.createInstanceFromFHIR('shr.core.LandmarkToBodyLocationDistance', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default RelationToLandmark;
