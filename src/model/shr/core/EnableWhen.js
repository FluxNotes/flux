// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.EnableWhen.
 */
class EnableWhen {

  /**
   * Get the Question.
   * @returns {Question} The shr.core.Question
   */
  get question() {
    return this._question;
  }

  /**
   * Set the Question.
   * This field/value is required.
   * @param {Question} question - The shr.core.Question
   */
  set question(question) {
    this._question = question;
  }

  /**
   * Set the Question and return 'this' for chaining.
   * This field/value is required.
   * @param {Question} question - The shr.core.Question
   * @returns {EnableWhen} this.
   */
  withQuestion(question) {
    this.question = question; return this;
  }

  /**
   * Get the HasAnswer.
   * @returns {HasAnswer} The shr.core.HasAnswer
   */
  get hasAnswer() {
    return this._hasAnswer;
  }

  /**
   * Set the HasAnswer.
   * @param {HasAnswer} hasAnswer - The shr.core.HasAnswer
   */
  set hasAnswer(hasAnswer) {
    this._hasAnswer = hasAnswer;
  }

  /**
   * Set the HasAnswer and return 'this' for chaining.
   * @param {HasAnswer} hasAnswer - The shr.core.HasAnswer
   * @returns {EnableWhen} this.
   */
  withHasAnswer(hasAnswer) {
    this.hasAnswer = hasAnswer; return this;
  }

  /**
   * Get the AnswerValue.
   * @returns {AnswerValue} The shr.core.AnswerValue
   */
  get answerValue() {
    return this._answerValue;
  }

  /**
   * Set the AnswerValue.
   * @param {AnswerValue} answerValue - The shr.core.AnswerValue
   */
  set answerValue(answerValue) {
    this._answerValue = answerValue;
  }

  /**
   * Set the AnswerValue and return 'this' for chaining.
   * @param {AnswerValue} answerValue - The shr.core.AnswerValue
   * @returns {EnableWhen} this.
   */
  withAnswerValue(answerValue) {
    this.answerValue = answerValue; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EnableWhen class.
   * The JSON must be valid against the EnableWhen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EnableWhen} An instance of EnableWhen populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'EnableWhen');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EnableWhen class to a JSON object.
   * The JSON is expected to be valid against the EnableWhen JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/EnableWhen' } };
    if (this.question != null) {
      inst['Question'] = typeof this.question.toJSON === 'function' ? this.question.toJSON() : this.question;
    }
    if (this.hasAnswer != null) {
      inst['HasAnswer'] = typeof this.hasAnswer.toJSON === 'function' ? this.hasAnswer.toJSON() : this.hasAnswer;
    }
    if (this.answerValue != null) {
      inst['AnswerValue'] = typeof this.answerValue.toJSON === 'function' ? this.answerValue.toJSON() : this.answerValue;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EnableWhen class.
   * The FHIR must be valid against the EnableWhen FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EnableWhen} An instance of EnableWhen populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'EnableWhen');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Question-extension');
      if (match_3 != null) {
        inst.question = FHIRHelper.createInstanceFromFHIR('shr.core.Question', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-HasAnswer-extension');
      if (match_4 != null) {
        inst.hasAnswer = FHIRHelper.createInstanceFromFHIR('shr.core.HasAnswer', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AnswerValue-extension');
      if (match_5 != null) {
        inst.answerValue = FHIRHelper.createInstanceFromFHIR('shr.core.AnswerValue', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default EnableWhen;
