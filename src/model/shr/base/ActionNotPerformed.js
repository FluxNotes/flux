import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for shr.base.ActionNotPerformed.
 * @extends ActionStatement
 */
class ActionNotPerformed extends ActionStatement {

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The shr.base.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   * @returns {ActionNotPerformed} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the NonOccurrenceTimeOrPeriod.
   * @returns {NonOccurrenceTimeOrPeriod} The shr.core.NonOccurrenceTimeOrPeriod
   */
  get nonOccurrenceTimeOrPeriod() {
    return this._nonOccurrenceTimeOrPeriod;
  }

  /**
   * Set the NonOccurrenceTimeOrPeriod.
   * This field/value is required.
   * @param {NonOccurrenceTimeOrPeriod} nonOccurrenceTimeOrPeriod - The shr.core.NonOccurrenceTimeOrPeriod
   */
  set nonOccurrenceTimeOrPeriod(nonOccurrenceTimeOrPeriod) {
    this._nonOccurrenceTimeOrPeriod = nonOccurrenceTimeOrPeriod;
  }

  /**
   * Set the NonOccurrenceTimeOrPeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {NonOccurrenceTimeOrPeriod} nonOccurrenceTimeOrPeriod - The shr.core.NonOccurrenceTimeOrPeriod
   * @returns {ActionNotPerformed} this.
   */
  withNonOccurrenceTimeOrPeriod(nonOccurrenceTimeOrPeriod) {
    this.nonOccurrenceTimeOrPeriod = nonOccurrenceTimeOrPeriod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionNotPerformed class.
   * The JSON must be valid against the ActionNotPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionNotPerformed} An instance of ActionNotPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionNotPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionNotPerformed class to a JSON object.
   * The JSON is expected to be valid against the ActionNotPerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ActionNotPerformed' } };
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
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['NonOccurrenceTimeOrPeriod'] = typeof this.nonOccurrenceTimeOrPeriod.toJSON === 'function' ? this.nonOccurrenceTimeOrPeriod.toJSON() : this.nonOccurrenceTimeOrPeriod;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ActionNotPerformed class to a FHIR object.
   * The FHIR is expected to be valid against the ActionNotPerformed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
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
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.nonOccurrenceTimeOrPeriod.toFHIR === 'function' ? this.nonOccurrenceTimeOrPeriod.toFHIR(true) : this.nonOccurrenceTimeOrPeriod);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionNotPerformed class.
   * The FHIR must be valid against the ActionNotPerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionNotPerformed} An instance of ActionNotPerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ActionNotPerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    return inst;
  }

}
export default ActionNotPerformed;
