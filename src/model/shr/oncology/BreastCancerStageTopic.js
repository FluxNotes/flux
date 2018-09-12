import { setPropertiesFromJSON } from '../../json-helper';

import ObservationTopic from '../../cimi/topic/ObservationTopic';

/**
 * Generated class for shr.oncology.BreastCancerStageTopic.
 * @extends ObservationTopic
 */
class BreastCancerStageTopic extends ObservationTopic {

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
   * @returns {BreastCancerStageTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Focus.
   * @returns {Focus} The cimi.topic.Focus
   */
  get focus() {
    return this._focus;
  }

  /**
   * Set the Focus.
   * @param {Focus} focus - The cimi.topic.Focus
   */
  set focus(focus) {
    this._focus = focus;
  }

  /**
   * Set the Focus and return 'this' for chaining.
   * @param {Focus} focus - The cimi.topic.Focus
   * @returns {BreastCancerStageTopic} this.
   */
  withFocus(focus) {
    this.focus = focus; return this;
  }

  /**
   * Get the cimi.entity.Device reference.
   * @returns {Reference} The cimi.entity.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the cimi.entity.Device reference.
   * @param {Reference} device - The cimi.entity.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the cimi.entity.Device reference and return 'this' for chaining.
   * @param {Reference} device - The cimi.entity.Device reference
   * @returns {BreastCancerStageTopic} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the cimi.entity.Specimen reference.
   * @returns {Reference} The cimi.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the cimi.entity.Specimen reference and return 'this' for chaining.
   * @param {Reference} specimen - The cimi.entity.Specimen reference
   * @returns {BreastCancerStageTopic} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the Precondition array.
   * @returns {Array<Precondition>} The cimi.topic.Precondition array
   */
  get precondition() {
    return this._precondition;
  }

  /**
   * Set the Precondition array.
   * @param {Array<Precondition>} precondition - The cimi.topic.Precondition array
   */
  set precondition(precondition) {
    this._precondition = precondition;
  }

  /**
   * Set the Precondition array and return 'this' for chaining.
   * @param {Array<Precondition>} precondition - The cimi.topic.Precondition array
   * @returns {BreastCancerStageTopic} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The cimi.topic.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange array and return 'this' for chaining.
   * @param {Array<ReferenceRange>} referenceRange - The cimi.topic.ReferenceRange array
   * @returns {BreastCancerStageTopic} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Get the EvaluationComponent array.
   * @returns {Array<EvaluationComponent>} The cimi.topic.EvaluationComponent array
   */
  get evaluationComponent() {
    return this._evaluationComponent;
  }

  /**
   * Set the EvaluationComponent array.
   * @param {Array<EvaluationComponent>} evaluationComponent - The cimi.topic.EvaluationComponent array
   */
  set evaluationComponent(evaluationComponent) {
    this._evaluationComponent = evaluationComponent;
  }

  /**
   * Set the EvaluationComponent array and return 'this' for chaining.
   * @param {Array<EvaluationComponent>} evaluationComponent - The cimi.topic.EvaluationComponent array
   * @returns {BreastCancerStageTopic} this.
   */
  withEvaluationComponent(evaluationComponent) {
    this.evaluationComponent = evaluationComponent; return this;
  }

  /**
   * Get the PanelMembers.
   * @returns {PanelMembers} The cimi.topic.PanelMembers
   */
  get panelMembers() {
    return this._panelMembers;
  }

  /**
   * Set the PanelMembers.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   */
  set panelMembers(panelMembers) {
    this._panelMembers = panelMembers;
  }

  /**
   * Set the PanelMembers and return 'this' for chaining.
   * @param {PanelMembers} panelMembers - The cimi.topic.PanelMembers
   * @returns {BreastCancerStageTopic} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Get the StageTimingPrefix.
   * @returns {StageTimingPrefix} The shr.oncology.StageTimingPrefix
   */
  get stageTimingPrefix() {
    return this._stageTimingPrefix;
  }

  /**
   * Set the StageTimingPrefix.
   * @param {StageTimingPrefix} stageTimingPrefix - The shr.oncology.StageTimingPrefix
   */
  set stageTimingPrefix(stageTimingPrefix) {
    this._stageTimingPrefix = stageTimingPrefix;
  }

  /**
   * Set the StageTimingPrefix and return 'this' for chaining.
   * @param {StageTimingPrefix} stageTimingPrefix - The shr.oncology.StageTimingPrefix
   * @returns {BreastCancerStageTopic} this.
   */
  withStageTimingPrefix(stageTimingPrefix) {
    this.stageTimingPrefix = stageTimingPrefix; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastCancerStageTopic class.
   * The JSON must be valid against the BreastCancerStageTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastCancerStageTopic} An instance of BreastCancerStageTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastCancerStageTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastCancerStageTopic class to a JSON object.
   * The JSON is expected to be valid against the BreastCancerStageTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastCancerStageTopic' } };
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
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.focus != null) {
      inst['Focus'] = typeof this.focus.toJSON === 'function' ? this.focus.toJSON() : this.focus;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.evaluationComponent != null) {
      inst['EvaluationComponent'] = this.evaluationComponent.map(f => f.toJSON());
    }
    if (this.panelMembers != null) {
      inst['PanelMembers'] = typeof this.panelMembers.toJSON === 'function' ? this.panelMembers.toJSON() : this.panelMembers;
    }
    if (this.stageTimingPrefix != null) {
      inst['StageTimingPrefix'] = typeof this.stageTimingPrefix.toJSON === 'function' ? this.stageTimingPrefix.toJSON() : this.stageTimingPrefix;
    }
    return inst;
  }
}
export default BreastCancerStageTopic;
