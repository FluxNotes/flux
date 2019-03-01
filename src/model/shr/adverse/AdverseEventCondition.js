import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.adverse.AdverseEventCondition.
 */
class AdverseEventCondition {

  /**
   * Get the shr.base.ConditionPresentAssertion reference.
   * @returns {Reference} The shr.base.ConditionPresentAssertion reference
   */
  get conditionPresentAssertion() {
    return this._conditionPresentAssertion;
  }

  /**
   * Set the shr.base.ConditionPresentAssertion reference.
   * This field/value is required.
   * @param {Reference} conditionPresentAssertion - The shr.base.ConditionPresentAssertion reference
   */
  set conditionPresentAssertion(conditionPresentAssertion) {
    this._conditionPresentAssertion = conditionPresentAssertion;
  }

  /**
   * Set the shr.base.ConditionPresentAssertion reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} conditionPresentAssertion - The shr.base.ConditionPresentAssertion reference
   * @returns {AdverseEventCondition} this.
   */
  withConditionPresentAssertion(conditionPresentAssertion) {
    this.conditionPresentAssertion = conditionPresentAssertion; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseEventCondition class.
   * The JSON must be valid against the AdverseEventCondition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseEventCondition} An instance of AdverseEventCondition populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AdverseEventCondition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AdverseEventCondition class to a JSON object.
   * The JSON is expected to be valid against the AdverseEventCondition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/AdverseEventCondition' } };
    if (this.conditionPresentAssertion != null) {
      inst['ConditionPresentAssertion'] = typeof this.conditionPresentAssertion.toJSON === 'function' ? this.conditionPresentAssertion.toJSON() : this.conditionPresentAssertion;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AdverseEventCondition class.
   * The FHIR must be valid against the AdverseEventCondition FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AdverseEventCondition} An instance of AdverseEventCondition populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AdverseEventCondition();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ConditionPresentAssertion-extension');
      if (match_1 != null) {
        inst.conditionPresentAssertion = FHIRHelper.createInstanceFromFHIR('shr.base.ConditionPresentAssertion', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default AdverseEventCondition;
