// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import BodyLocation from './BodyLocation';

/**
 * Generated class for shr.core.SurgicalBodyLocation.
 * @extends BodyLocation
 */
class SurgicalBodyLocation extends BodyLocation {

  /**
   * Get the SurgicalBodyLocationRole.
   * @returns {SurgicalBodyLocationRole} The shr.core.SurgicalBodyLocationRole
   */
  get surgicalBodyLocationRole() {
    return this._surgicalBodyLocationRole;
  }

  /**
   * Set the SurgicalBodyLocationRole.
   * @param {SurgicalBodyLocationRole} surgicalBodyLocationRole - The shr.core.SurgicalBodyLocationRole
   */
  set surgicalBodyLocationRole(surgicalBodyLocationRole) {
    this._surgicalBodyLocationRole = surgicalBodyLocationRole;
  }

  /**
   * Set the SurgicalBodyLocationRole and return 'this' for chaining.
   * @param {SurgicalBodyLocationRole} surgicalBodyLocationRole - The shr.core.SurgicalBodyLocationRole
   * @returns {SurgicalBodyLocation} this.
   */
  withSurgicalBodyLocationRole(surgicalBodyLocationRole) {
    this.surgicalBodyLocationRole = surgicalBodyLocationRole; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalBodyLocation class.
   * The JSON must be valid against the SurgicalBodyLocation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalBodyLocation} An instance of SurgicalBodyLocation populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'SurgicalBodyLocation');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SurgicalBodyLocation class to a JSON object.
   * The JSON is expected to be valid against the SurgicalBodyLocation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/SurgicalBodyLocation' } };
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
    if (this.surgicalBodyLocationRole != null) {
      inst['SurgicalBodyLocationRole'] = typeof this.surgicalBodyLocationRole.toJSON === 'function' ? this.surgicalBodyLocationRole.toJSON() : this.surgicalBodyLocationRole;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SurgicalBodyLocation class.
   * The FHIR must be valid against the SurgicalBodyLocation FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SurgicalBodyLocation} An instance of SurgicalBodyLocation populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'SurgicalBodyLocation');
    const inst = new klass();
    return inst;
  }

}
export default SurgicalBodyLocation;
