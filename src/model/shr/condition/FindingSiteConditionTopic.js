import { setPropertiesFromJSON } from '../../json-helper';

import ConditionAssertionTopic from '../../cimi/topic/ConditionAssertionTopic';

/**
 * Generated class for shr.condition.FindingSiteConditionTopic.
 * @extends ConditionAssertionTopic
 */
class FindingSiteConditionTopic extends ConditionAssertionTopic {

  /**
   * Get the AnatomicalLocation array.
   * @returns {Array<AnatomicalLocation>} The cimi.element.AnatomicalLocation array
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array.
   * This field/value is required.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The cimi.element.AnatomicalLocation array
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The cimi.element.AnatomicalLocation array
   * @returns {FindingSiteConditionTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the FindingSiteIdentifier.
   * @returns {FindingSiteIdentifier} The shr.condition.FindingSiteIdentifier
   */
  get findingSiteIdentifier() {
    return this._findingSiteIdentifier;
  }

  /**
   * Set the FindingSiteIdentifier.
   * @param {FindingSiteIdentifier} findingSiteIdentifier - The shr.condition.FindingSiteIdentifier
   */
  set findingSiteIdentifier(findingSiteIdentifier) {
    this._findingSiteIdentifier = findingSiteIdentifier;
  }

  /**
   * Set the FindingSiteIdentifier and return 'this' for chaining.
   * @param {FindingSiteIdentifier} findingSiteIdentifier - The shr.condition.FindingSiteIdentifier
   * @returns {FindingSiteConditionTopic} this.
   */
  withFindingSiteIdentifier(findingSiteIdentifier) {
    this.findingSiteIdentifier = findingSiteIdentifier; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FindingSiteConditionTopic class.
   * The JSON must be valid against the FindingSiteConditionTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FindingSiteConditionTopic} An instance of FindingSiteConditionTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new FindingSiteConditionTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the FindingSiteConditionTopic class to a JSON object.
   * The JSON is expected to be valid against the FindingSiteConditionTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/condition/FindingSiteConditionTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.media != null) {
      inst['Media'] = this.media.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.conditionCause != null) {
      inst['ConditionCause'] = this.conditionCause.map(f => f.toJSON());
    }
    if (this.alleviatingFactor != null) {
      inst['AlleviatingFactor'] = this.alleviatingFactor.map(f => f.toJSON());
    }
    if (this.exacerbatingFactor != null) {
      inst['ExacerbatingFactor'] = this.exacerbatingFactor.map(f => f.toJSON());
    }
    if (this.findingSiteIdentifier != null) {
      inst['FindingSiteIdentifier'] = typeof this.findingSiteIdentifier.toJSON === 'function' ? this.findingSiteIdentifier.toJSON() : this.findingSiteIdentifier;
    }
    return inst;
  }
  /**
   * Serializes an instance of the FindingSiteConditionTopic class to a FHIR object.
   * The FHIR is expected to be valid against the FindingSiteConditionTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.topicCode.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingMethod.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.media.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.anatomicalLocation.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.conditionCause.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.alleviatingFactor.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.exacerbatingFactor.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingSiteIdentifier.toFHIR(true));
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-condition-FindingSiteConditionTopic-extension';
    }
    return inst;
  }
}
export default FindingSiteConditionTopic;
