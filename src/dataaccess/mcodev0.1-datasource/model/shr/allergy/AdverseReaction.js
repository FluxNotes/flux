import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.allergy.AdverseReaction.
 */
class AdverseReaction {

  /**
   * Get the AllergenIrritant.
   * @returns {AllergenIrritant} The shr.allergy.AllergenIrritant
   */
  get allergenIrritant() {
    return this._allergenIrritant;
  }

  /**
   * Set the AllergenIrritant.
   * @param {AllergenIrritant} allergenIrritant - The shr.allergy.AllergenIrritant
   */
  set allergenIrritant(allergenIrritant) {
    this._allergenIrritant = allergenIrritant;
  }

  /**
   * Set the AllergenIrritant and return 'this' for chaining.
   * @param {AllergenIrritant} allergenIrritant - The shr.allergy.AllergenIrritant
   * @returns {AdverseReaction} this.
   */
  withAllergenIrritant(allergenIrritant) {
    this.allergenIrritant = allergenIrritant; return this;
  }

  /**
   * Get the Manifestation.
   * @returns {Manifestation} The shr.allergy.Manifestation
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Set the Manifestation.
   * @param {Manifestation} manifestation - The shr.allergy.Manifestation
   */
  set manifestation(manifestation) {
    this._manifestation = manifestation;
  }

  /**
   * Set the Manifestation and return 'this' for chaining.
   * @param {Manifestation} manifestation - The shr.allergy.Manifestation
   * @returns {AdverseReaction} this.
   */
  withManifestation(manifestation) {
    this.manifestation = manifestation; return this;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {AdverseReaction} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the OccurrenceTime.
   * @returns {OccurrenceTime} The shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Set the OccurrenceTime.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTime) {
    this._occurrenceTime = occurrenceTime;
  }

  /**
   * Set the OccurrenceTime and return 'this' for chaining.
   * @param {OccurrenceTime} occurrenceTime - The shr.core.OccurrenceTime
   * @returns {AdverseReaction} this.
   */
  withOccurrenceTime(occurrenceTime) {
    this.occurrenceTime = occurrenceTime; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.condition.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.condition.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.condition.Severity
   * @returns {AdverseReaction} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   * @returns {AdverseReaction} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseReaction class.
   * The JSON must be valid against the AdverseReaction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseReaction} An instance of AdverseReaction populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AdverseReaction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReaction class to a JSON object.
   * The JSON is expected to be valid against the AdverseReaction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/allergy/AdverseReaction' } };
    if (this.allergenIrritant != null) {
      inst['AllergenIrritant'] = typeof this.allergenIrritant.toJSON === 'function' ? this.allergenIrritant.toJSON() : this.allergenIrritant;
    }
    if (this.manifestation != null) {
      inst['Manifestation'] = typeof this.manifestation.toJSON === 'function' ? this.manifestation.toJSON() : this.manifestation;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.occurrenceTime != null) {
      inst['OccurrenceTime'] = typeof this.occurrenceTime.toJSON === 'function' ? this.occurrenceTime.toJSON() : this.occurrenceTime;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AdverseReaction class to a FHIR object.
   * The FHIR is expected to be valid against the AdverseReaction FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default AdverseReaction;
