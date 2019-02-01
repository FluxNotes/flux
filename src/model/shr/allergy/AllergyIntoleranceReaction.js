import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.allergy.AllergyIntoleranceReaction.
 */
class AllergyIntoleranceReaction {

  /**
   * Get the SubstanceCode.
   * @returns {SubstanceCode} The shr.allergy.SubstanceCode
   */
  get substanceCode() {
    return this._substanceCode;
  }

  /**
   * Set the SubstanceCode.
   * @param {SubstanceCode} substanceCode - The shr.allergy.SubstanceCode
   */
  set substanceCode(substanceCode) {
    this._substanceCode = substanceCode;
  }

  /**
   * Set the SubstanceCode and return 'this' for chaining.
   * @param {SubstanceCode} substanceCode - The shr.allergy.SubstanceCode
   * @returns {AllergyIntoleranceReaction} this.
   */
  withSubstanceCode(substanceCode) {
    this.substanceCode = substanceCode; return this;
  }

  /**
   * Get the Manifestation array.
   * @returns {Array<Manifestation>} The shr.allergy.Manifestation array
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Set the Manifestation array.
   * This field/value is required.
   * @param {Array<Manifestation>} manifestation - The shr.allergy.Manifestation array
   */
  set manifestation(manifestation) {
    this._manifestation = manifestation;
  }

  /**
   * Set the Manifestation array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Manifestation>} manifestation - The shr.allergy.Manifestation array
   * @returns {AllergyIntoleranceReaction} this.
   */
  withManifestation(manifestation) {
    this.manifestation = manifestation; return this;
  }

  /**
   * Get the BeginDateTime.
   * @returns {BeginDateTime} The shr.core.BeginDateTime
   */
  get beginDateTime() {
    return this._beginDateTime;
  }

  /**
   * Set the BeginDateTime.
   * @param {BeginDateTime} beginDateTime - The shr.core.BeginDateTime
   */
  set beginDateTime(beginDateTime) {
    this._beginDateTime = beginDateTime;
  }

  /**
   * Set the BeginDateTime and return 'this' for chaining.
   * @param {BeginDateTime} beginDateTime - The shr.core.BeginDateTime
   * @returns {AllergyIntoleranceReaction} this.
   */
  withBeginDateTime(beginDateTime) {
    this.beginDateTime = beginDateTime; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.base.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.base.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.base.Severity
   * @returns {AllergyIntoleranceReaction} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
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
   * @returns {AllergyIntoleranceReaction} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {AllergyIntoleranceReaction} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AllergyIntoleranceReaction class.
   * The JSON must be valid against the AllergyIntoleranceReaction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AllergyIntoleranceReaction} An instance of AllergyIntoleranceReaction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new AllergyIntoleranceReaction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AllergyIntoleranceReaction class to a JSON object.
   * The JSON is expected to be valid against the AllergyIntoleranceReaction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/allergy/AllergyIntoleranceReaction' } };
    if (this.substanceCode != null) {
      inst['SubstanceCode'] = typeof this.substanceCode.toJSON === 'function' ? this.substanceCode.toJSON() : this.substanceCode;
    }
    if (this.manifestation != null) {
      inst['Manifestation'] = this.manifestation.map(f => f.toJSON());
    }
    if (this.beginDateTime != null) {
      inst['BeginDateTime'] = typeof this.beginDateTime.toJSON === 'function' ? this.beginDateTime.toJSON() : this.beginDateTime;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AllergyIntoleranceReaction class.
   * The FHIR must be valid against the AllergyIntoleranceReaction FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AllergyIntoleranceReaction} An instance of AllergyIntoleranceReaction populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new AllergyIntoleranceReaction();
    return inst;
  }

}
export default AllergyIntoleranceReaction;
