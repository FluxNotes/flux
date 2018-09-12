import { setPropertiesFromJSON } from '../../json-helper';

import BodyStructureTopic from '../condition/BodyStructureTopic';

/**
 * Generated class for shr.wound.WoundTopic.
 * @extends BodyStructureTopic
 */
class WoundTopic extends BodyStructureTopic {

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The cimi.topic.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The cimi.topic.TopicCode
   * @returns {WoundTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {WoundTopic} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

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
   * @returns {WoundTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the InjuryCause array.
   * @returns {Array<InjuryCause>} The shr.wound.InjuryCause array
   */
  get conditionCause() {
    return this._conditionCause;
  }

  /**
   * Set the InjuryCause array.
   * @param {Array<InjuryCause>} conditionCause - The shr.wound.InjuryCause array
   */
  set conditionCause(conditionCause) {
    this._conditionCause = conditionCause;
  }

  /**
   * Set the InjuryCause array and return 'this' for chaining.
   * @param {Array<InjuryCause>} conditionCause - The shr.wound.InjuryCause array
   * @returns {WoundTopic} this.
   */
  withConditionCause(conditionCause) {
    this.conditionCause = conditionCause; return this;
  }

  /**
   * Get the WoundNumber.
   * @returns {WoundNumber} The shr.wound.WoundNumber
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the WoundNumber.
   * This field/value is required.
   * @param {WoundNumber} identifier - The shr.wound.WoundNumber
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the WoundNumber and return 'this' for chaining.
   * This field/value is required.
   * @param {WoundNumber} identifier - The shr.wound.WoundNumber
   * @returns {WoundTopic} this.
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
   * @returns {WoundTopic} this.
   */
  withMorphology(morphology) {
    this.morphology = morphology; return this;
  }

  /**
   * Get the Device.
   * @returns {Device} The cimi.entity.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * @param {Device} device - The cimi.entity.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * @param {Device} device - The cimi.entity.Device
   * @returns {WoundTopic} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the Precondition.
   * @returns {Precondition} The cimi.topic.Precondition
   */
  get precondition() {
    return this._precondition;
  }

  /**
   * Set the Precondition.
   * @param {Precondition} precondition - The cimi.topic.Precondition
   */
  set precondition(precondition) {
    this._precondition = precondition;
  }

  /**
   * Set the Precondition and return 'this' for chaining.
   * @param {Precondition} precondition - The cimi.topic.Precondition
   * @returns {WoundTopic} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundTopic class.
   * The JSON must be valid against the WoundTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundTopic} An instance of WoundTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundTopic class to a JSON object.
   * The JSON is expected to be valid against the WoundTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundTopic' } };
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
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.precondition != null) {
      inst['Precondition'] = typeof this.precondition.toJSON === 'function' ? this.precondition.toJSON() : this.precondition;
    }
    return inst;
  }
}
export default WoundTopic;
