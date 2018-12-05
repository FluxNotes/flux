import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for shr.base.ActionPerformed.
 * @extends ActionStatement
 */
class ActionPerformed extends ActionStatement {

  /**
   * Get the OccurrenceTimeOrPeriod.
   * @returns {OccurrenceTimeOrPeriod} The shr.core.OccurrenceTimeOrPeriod
   */
  get occurrenceTimeOrPeriod() {
    return this._occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod.
   * This field/value is required.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   */
  set occurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this._occurrenceTimeOrPeriod = occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   * @returns {ActionPerformed} this.
   */
  withOccurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this.occurrenceTimeOrPeriod = occurrenceTimeOrPeriod; return this;
  }

  /**
   * Get the Participation array.
   * @returns {Array<Participation>} The shr.base.Participation array
   */
  get participation() {
    return this._participation;
  }

  /**
   * Set the Participation array.
   * @param {Array<Participation>} participation - The shr.base.Participation array
   */
  set participation(participation) {
    this._participation = participation;
  }

  /**
   * Set the Participation array and return 'this' for chaining.
   * @param {Array<Participation>} participation - The shr.base.Participation array
   * @returns {ActionPerformed} this.
   */
  withParticipation(participation) {
    this.participation = participation; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {ActionPerformed} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Method.
   * @returns {Method} The shr.base.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Set the Method.
   * @param {Method} method - The shr.base.Method
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Set the Method and return 'this' for chaining.
   * @param {Method} method - The shr.base.Method
   * @returns {ActionPerformed} this.
   */
  withMethod(method) {
    this.method = method; return this;
  }

  /**
   * Get the RelatedRequest array.
   * @returns {Array<RelatedRequest>} The shr.base.RelatedRequest array
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest array.
   * @param {Array<RelatedRequest>} relatedRequest - The shr.base.RelatedRequest array
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest array and return 'this' for chaining.
   * @param {Array<RelatedRequest>} relatedRequest - The shr.base.RelatedRequest array
   * @returns {ActionPerformed} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the shr.entity.Facility reference.
   * @returns {Reference} The shr.entity.Facility reference
   */
  get facility() {
    return this._facility;
  }

  /**
   * Set the shr.entity.Facility reference.
   * @param {Reference} facility - The shr.entity.Facility reference
   */
  set facility(facility) {
    this._facility = facility;
  }

  /**
   * Set the shr.entity.Facility reference and return 'this' for chaining.
   * @param {Reference} facility - The shr.entity.Facility reference
   * @returns {ActionPerformed} this.
   */
  withFacility(facility) {
    this.facility = facility; return this;
  }

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.base.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.base.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The shr.base.Outcome
   * @returns {ActionPerformed} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionPerformed class.
   * The JSON must be valid against the ActionPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionPerformed} An instance of ActionPerformed populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ActionPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionPerformed class to a JSON object.
   * The JSON is expected to be valid against the ActionPerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/ActionPerformed' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ActionPerformed class to a FHIR object.
   * The FHIR is expected to be valid against the ActionPerformed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.reason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.reason.toFHIR === 'function' ? this.reason.toFHIR(true) : this.reason);
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR(true) : this.occurrenceTimeOrPeriod);
    }
    if (this.participation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.participation.toFHIR === 'function' ? this.participation.toFHIR(true) : this.participation);
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.status.toFHIR === 'function' ? this.status.toFHIR(true) : this.status);
    }
    if (this.method != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.method.toFHIR === 'function' ? this.method.toFHIR(true) : this.method);
    }
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.facility != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR(true) : this.facility);
    }
    if (this.outcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR(true) : this.outcome);
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-ActionPerformed-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionPerformed class.
   * The FHIR must be valid against the ActionPerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionPerformed} An instance of ActionPerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new ActionPerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default ActionPerformed;
