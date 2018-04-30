import { setPropertiesFromJSON } from '../../json-helper';

import QuestionAnswer from '../finding/QuestionAnswer';

/**
 * Generated class for shr.behavior.BehavioralFinding.
 * @extends QuestionAnswer
 */
class BehavioralFinding extends QuestionAnswer {

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {BehavioralFinding} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the ReasonForBehavior array.
   * @returns {Array<ReasonForBehavior>} The shr.behavior.ReasonForBehavior array
   */
  get reasonForBehavior() {
    return this._reasonForBehavior;
  }

  /**
   * Set the ReasonForBehavior array.
   * @param {Array<ReasonForBehavior>} reasonForBehavior - The shr.behavior.ReasonForBehavior array
   */
  set reasonForBehavior(reasonForBehavior) {
    this._reasonForBehavior = reasonForBehavior;
  }

  /**
   * Set the ReasonForBehavior array and return 'this' for chaining.
   * @param {Array<ReasonForBehavior>} reasonForBehavior - The shr.behavior.ReasonForBehavior array
   * @returns {BehavioralFinding} this.
   */
  withReasonForBehavior(reasonForBehavior) {
    this.reasonForBehavior = reasonForBehavior; return this;
  }

  /**
   * Get the ReadinessToChange.
   * @returns {ReadinessToChange} The shr.behavior.ReadinessToChange
   */
  get readinessToChange() {
    return this._readinessToChange;
  }

  /**
   * Set the ReadinessToChange.
   * @param {ReadinessToChange} readinessToChange - The shr.behavior.ReadinessToChange
   */
  set readinessToChange(readinessToChange) {
    this._readinessToChange = readinessToChange;
  }

  /**
   * Set the ReadinessToChange and return 'this' for chaining.
   * @param {ReadinessToChange} readinessToChange - The shr.behavior.ReadinessToChange
   * @returns {BehavioralFinding} this.
   */
  withReadinessToChange(readinessToChange) {
    this.readinessToChange = readinessToChange; return this;
  }

  /**
   * Get the Outcome array.
   * @returns {Array<Outcome>} The shr.action.Outcome array
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome array.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome array and return 'this' for chaining.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   * @returns {BehavioralFinding} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BehavioralFinding class.
   * The JSON must be valid against the BehavioralFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BehavioralFinding} An instance of BehavioralFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BehavioralFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BehavioralFinding class to a JSON object.
   * The JSON is expected to be valid against the BehavioralFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/behavior/BehavioralFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.clinicallyRelevantTime != null) {
      inst['ClinicallyRelevantTime'] = typeof this.clinicallyRelevantTime.toJSON === 'function' ? this.clinicallyRelevantTime.toJSON() : this.clinicallyRelevantTime;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.changeFlag != null) {
      inst['ChangeFlag'] = typeof this.changeFlag.toJSON === 'function' ? this.changeFlag.toJSON() : this.changeFlag;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.observationQualifier != null) {
      inst['ObservationQualifier'] = this.observationQualifier.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.observationComponent != null) {
      inst['ObservationComponent'] = this.observationComponent.map(f => f.toJSON());
    }
    if (this.members != null) {
      inst['Members'] = typeof this.members.toJSON === 'function' ? this.members.toJSON() : this.members;
    }
    if (this.reasonForBehavior != null) {
      inst['ReasonForBehavior'] = this.reasonForBehavior.map(f => f.toJSON());
    }
    if (this.readinessToChange != null) {
      inst['ReadinessToChange'] = typeof this.readinessToChange.toJSON === 'function' ? this.readinessToChange.toJSON() : this.readinessToChange;
    }
    if (this.outcome != null) {
      inst['Outcome'] = this.outcome.map(f => f.toJSON());
    }
    return inst;
  }
}
export default BehavioralFinding;
