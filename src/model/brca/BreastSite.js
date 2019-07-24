// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../json-helper';

import ClassRegistry from '../ClassRegistry';

import BodyLocation from '../shr/core/BodyLocation';

/**
 * Generated class for brca.BreastSite.
 * @extends BodyLocation
 */
class BreastSite extends BodyLocation {

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
   * @returns {BreastSite} this.
   */
  withLocationCode(locationCode) {
    this.locationCode = locationCode; return this;
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
   * @returns {BreastSite} this.
   */
  withRelationToLandmark(relationToLandmark) {
    this.relationToLandmark = relationToLandmark; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastSite class.
   * The JSON must be valid against the BreastSite JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastSite} An instance of BreastSite populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('brca', 'BreastSite');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BreastSite class to a JSON object.
   * The JSON is expected to be valid against the BreastSite JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/brca/BreastSite' } };
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
   * Deserializes FHIR JSON data to an instance of the BreastSite class.
   * The FHIR must be valid against the BreastSite FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BreastSite} An instance of BreastSite populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('brca', 'BreastSite');
    const inst = new klass();
    return inst;
  }

}
export default BreastSite;
