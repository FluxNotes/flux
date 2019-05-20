import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.base.NarrativeText.
 */
class NarrativeText {

  /**
   * Get the value (aliases xhtml).
   * @returns {xhtml} The xhtml
   */
  get value() {
    return this._xhtml;
  }

  /**
   * Set the value (aliases xhtml).
   * This field/value is required.
   * @param {xhtml} value - The xhtml
   */
  set value(value) {
    this._xhtml = value;
  }

  /**
   * Set the value (aliases xhtml) and return 'this' for chaining.
   * This field/value is required.
   * @param {xhtml} value - The xhtml
   * @returns {NarrativeText} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the xhtml.
   * @returns {xhtml} The xhtml
   */
  get xhtml() {
    return this._xhtml;
  }

  /**
   * Set the xhtml.
   * This field/value is required.
   * @param {xhtml} xhtml - The xhtml
   */
  set xhtml(xhtml) {
    this._xhtml = xhtml;
  }

  /**
   * Set the xhtml and return 'this' for chaining.
   * This field/value is required.
   * @param {xhtml} xhtml - The xhtml
   * @returns {NarrativeText} this.
   */
  withXhtml(xhtml) {
    this.xhtml = xhtml; return this;
  }

  /**
   * Deserializes JSON data to an instance of the NarrativeText class.
   * The JSON must be valid against the NarrativeText JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NarrativeText} An instance of NarrativeText populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NarrativeText();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the NarrativeText class to a JSON object.
   * The JSON is expected to be valid against the NarrativeText JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/NarrativeText' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the NarrativeText class.
   * The FHIR must be valid against the NarrativeText FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {NarrativeText} An instance of NarrativeText populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new NarrativeText();
    if (!asExtension && fhir != null) {
      inst.value = fhir;
    }
    return inst;
  }

}
export default NarrativeText;
