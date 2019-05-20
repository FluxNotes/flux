import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.SpecificFocusOfFinding.
 */
class SpecificFocusOfFinding {

  /**
   * Get the value (aliases informationItem).
   * @returns {Reference} The shr.base.InformationItem reference
   */
  get value() {
    return this._informationItem;
  }

  /**
   * Set the value (aliases informationItem).
   * This field/value is required.
   * @param {Reference} value - The shr.base.InformationItem reference
   */
  set value(value) {
    this._informationItem = value;
  }

  /**
   * Set the value (aliases informationItem) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.InformationItem reference
   * @returns {SpecificFocusOfFinding} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.InformationItem reference.
   * @returns {Reference} The shr.base.InformationItem reference
   */
  get informationItem() {
    return this._informationItem;
  }

  /**
   * Set the shr.base.InformationItem reference.
   * This field/value is required.
   * @param {Reference} informationItem - The shr.base.InformationItem reference
   */
  set informationItem(informationItem) {
    this._informationItem = informationItem;
  }

  /**
   * Set the shr.base.InformationItem reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} informationItem - The shr.base.InformationItem reference
   * @returns {SpecificFocusOfFinding} this.
   */
  withInformationItem(informationItem) {
    this.informationItem = informationItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecificFocusOfFinding class.
   * The JSON must be valid against the SpecificFocusOfFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecificFocusOfFinding} An instance of SpecificFocusOfFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecificFocusOfFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SpecificFocusOfFinding class to a JSON object.
   * The JSON is expected to be valid against the SpecificFocusOfFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/SpecificFocusOfFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecificFocusOfFinding class.
   * The FHIR must be valid against the SpecificFocusOfFinding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SpecificFocusOfFinding} An instance of SpecificFocusOfFinding populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new SpecificFocusOfFinding();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = FHIRHelper.createInstanceFromFHIR('shr.base.InformationItem', fhir, shrId, allEntries, mappedResources, referencesOut);
    }
    return inst;
  }

}
export default SpecificFocusOfFinding;
