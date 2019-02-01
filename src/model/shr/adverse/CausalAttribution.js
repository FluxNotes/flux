import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.adverse.CausalAttribution.
 */
class CausalAttribution {

  /**
   * Get the PossibleCause.
   * @returns {PossibleCause} The shr.adverse.PossibleCause
   */
  get possibleCause() {
    return this._possibleCause;
  }

  /**
   * Set the PossibleCause.
   * This field/value is required.
   * @param {PossibleCause} possibleCause - The shr.adverse.PossibleCause
   */
  set possibleCause(possibleCause) {
    this._possibleCause = possibleCause;
  }

  /**
   * Set the PossibleCause and return 'this' for chaining.
   * This field/value is required.
   * @param {PossibleCause} possibleCause - The shr.adverse.PossibleCause
   * @returns {CausalAttribution} this.
   */
  withPossibleCause(possibleCause) {
    this.possibleCause = possibleCause; return this;
  }

  /**
   * Get the CauseCategory.
   * @returns {CauseCategory} The shr.adverse.CauseCategory
   */
  get causeCategory() {
    return this._causeCategory;
  }

  /**
   * Set the CauseCategory.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   */
  set causeCategory(causeCategory) {
    this._causeCategory = causeCategory;
  }

  /**
   * Set the CauseCategory and return 'this' for chaining.
   * This field/value is required.
   * @param {CauseCategory} causeCategory - The shr.adverse.CauseCategory
   * @returns {CausalAttribution} this.
   */
  withCauseCategory(causeCategory) {
    this.causeCategory = causeCategory; return this;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The shr.base.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * This field/value is required.
   * @param {Certainty} certainty - The shr.base.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Set the Certainty and return 'this' for chaining.
   * This field/value is required.
   * @param {Certainty} certainty - The shr.base.Certainty
   * @returns {CausalAttribution} this.
   */
  withCertainty(certainty) {
    this.certainty = certainty; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.core.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.core.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The shr.core.RouteIntoBody
   * @returns {CausalAttribution} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CausalAttribution class.
   * The JSON must be valid against the CausalAttribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CausalAttribution} An instance of CausalAttribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CausalAttribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CausalAttribution class to a JSON object.
   * The JSON is expected to be valid against the CausalAttribution JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/CausalAttribution' } };
    if (this.possibleCause != null) {
      inst['PossibleCause'] = typeof this.possibleCause.toJSON === 'function' ? this.possibleCause.toJSON() : this.possibleCause;
    }
    if (this.causeCategory != null) {
      inst['CauseCategory'] = typeof this.causeCategory.toJSON === 'function' ? this.causeCategory.toJSON() : this.causeCategory;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CausalAttribution class.
   * The FHIR must be valid against the CausalAttribution FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CausalAttribution} An instance of CausalAttribution populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new CausalAttribution();
    return inst;
  }

}
export default CausalAttribution;
