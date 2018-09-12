import { setPropertiesFromJSON } from '../../json-helper';

import ConditionTopic from '../../cimi/topic/ConditionTopic';

/**
 * Generated class for shr.condition.BodyStructureTopic.
 * @extends ConditionTopic
 */
class BodyStructureTopic extends ConditionTopic {

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
   * @returns {BodyStructureTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the Identifier.
   * @returns {Identifier} The cimi.element.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * @param {Identifier} identifier - The cimi.element.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * @param {Identifier} identifier - The cimi.element.Identifier
   * @returns {BodyStructureTopic} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the Morphology.
   * @returns {Morphology} The shr.condition.Morphology
   */
  get morphology() {
    return this._morphology;
  }

  /**
   * Set the Morphology.
   * @param {Morphology} morphology - The shr.condition.Morphology
   */
  set morphology(morphology) {
    this._morphology = morphology;
  }

  /**
   * Set the Morphology and return 'this' for chaining.
   * @param {Morphology} morphology - The shr.condition.Morphology
   * @returns {BodyStructureTopic} this.
   */
  withMorphology(morphology) {
    this.morphology = morphology; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BodyStructureTopic class.
   * The JSON must be valid against the BodyStructureTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BodyStructureTopic} An instance of BodyStructureTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BodyStructureTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BodyStructureTopic class to a JSON object.
   * The JSON is expected to be valid against the BodyStructureTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/condition/BodyStructureTopic' } };
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
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.morphology != null) {
      inst['Morphology'] = typeof this.morphology.toJSON === 'function' ? this.morphology.toJSON() : this.morphology;
    }
    return inst;
  }
}
export default BodyStructureTopic;
