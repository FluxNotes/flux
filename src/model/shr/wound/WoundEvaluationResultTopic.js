import { setPropertiesFromJSON } from '../../json-helper';

import ObservationTopic from '../../cimi/topic/ObservationTopic';

/**
 * Generated class for shr.wound.WoundEvaluationResultTopic.
 * @extends ObservationTopic
 */
class WoundEvaluationResultTopic extends ObservationTopic {

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
   * @returns {WoundEvaluationResultTopic} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the PhotographicImage array.
   * @returns {Array<PhotographicImage>} The shr.core.PhotographicImage array
   */
  get media() {
    return this._media;
  }

  /**
   * Set the PhotographicImage array.
   * @param {Array<PhotographicImage>} media - The shr.core.PhotographicImage array
   */
  set media(media) {
    this._media = media;
  }

  /**
   * Set the PhotographicImage array and return 'this' for chaining.
   * @param {Array<PhotographicImage>} media - The shr.core.PhotographicImage array
   * @returns {WoundEvaluationResultTopic} this.
   */
  withMedia(media) {
    this.media = media; return this;
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
   * @returns {WoundEvaluationResultTopic} this.
   */
  withFocus(focus) {
    this.focus = focus; return this;
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
   * @returns {WoundEvaluationResultTopic} this.
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
   * @returns {WoundEvaluationResultTopic} this.
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
   * @returns {WoundEvaluationResultTopic} this.
   */
  withPanelMembers(panelMembers) {
    this.panelMembers = panelMembers; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundEvaluationResultTopic class.
   * The JSON must be valid against the WoundEvaluationResultTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundEvaluationResultTopic} An instance of WoundEvaluationResultTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundEvaluationResultTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundEvaluationResultTopic class to a JSON object.
   * The JSON is expected to be valid against the WoundEvaluationResultTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundEvaluationResultTopic' } };
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
    return inst;
  }
}
export default WoundEvaluationResultTopic;
