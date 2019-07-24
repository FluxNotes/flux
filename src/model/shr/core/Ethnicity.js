// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Ethnicity.
 */
class Ethnicity {

  /**
   * Get the EthnicityCode.
   * @returns {EthnicityCode} The shr.core.EthnicityCode
   */
  get ethnicityCode() {
    return this._ethnicityCode;
  }

  /**
   * Set the EthnicityCode.
   * This field/value is required.
   * @param {EthnicityCode} ethnicityCode - The shr.core.EthnicityCode
   */
  set ethnicityCode(ethnicityCode) {
    this._ethnicityCode = ethnicityCode;
  }

  /**
   * Set the EthnicityCode and return 'this' for chaining.
   * This field/value is required.
   * @param {EthnicityCode} ethnicityCode - The shr.core.EthnicityCode
   * @returns {Ethnicity} this.
   */
  withEthnicityCode(ethnicityCode) {
    this.ethnicityCode = ethnicityCode; return this;
  }

  /**
   * Get the EthnicityDetail array.
   * @returns {Array<EthnicityDetail>} The shr.core.EthnicityDetail array
   */
  get ethnicityDetail() {
    return this._ethnicityDetail;
  }

  /**
   * Set the EthnicityDetail array.
   * @param {Array<EthnicityDetail>} ethnicityDetail - The shr.core.EthnicityDetail array
   */
  set ethnicityDetail(ethnicityDetail) {
    this._ethnicityDetail = ethnicityDetail;
  }

  /**
   * Set the EthnicityDetail array and return 'this' for chaining.
   * @param {Array<EthnicityDetail>} ethnicityDetail - The shr.core.EthnicityDetail array
   * @returns {Ethnicity} this.
   */
  withEthnicityDetail(ethnicityDetail) {
    this.ethnicityDetail = ethnicityDetail; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Ethnicity class.
   * The JSON must be valid against the Ethnicity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Ethnicity} An instance of Ethnicity populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Ethnicity');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Ethnicity class to a JSON object.
   * The JSON is expected to be valid against the Ethnicity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Ethnicity' } };
    if (this.ethnicityCode != null) {
      inst['EthnicityCode'] = typeof this.ethnicityCode.toJSON === 'function' ? this.ethnicityCode.toJSON() : this.ethnicityCode;
    }
    if (this.ethnicityDetail != null) {
      inst['EthnicityDetail'] = this.ethnicityDetail.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Ethnicity class.
   * The FHIR must be valid against the Ethnicity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Ethnicity} An instance of Ethnicity populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Ethnicity');
    const inst = new klass();
    return inst;
  }

}
export default Ethnicity;
