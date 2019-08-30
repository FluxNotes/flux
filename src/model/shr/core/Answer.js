// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.Answer.
 */
class Answer {

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
   * @returns {Answer} this.
   */
  withAnswerValue(answerValue) {
    this.answerValue = answerValue; return this;
  }

  /**
   * Get the QuestionnaireResponseItem array.
   * @returns {Array<QuestionnaireResponseItem>} The shr.core.QuestionnaireResponseItem array
   */
  get questionnaireResponseItem() {
    return this._questionnaireResponseItem;
  }

  /**
   * Set the QuestionnaireResponseItem array.
   * @param {Array<QuestionnaireResponseItem>} questionnaireResponseItem - The shr.core.QuestionnaireResponseItem array
   */
  set questionnaireResponseItem(questionnaireResponseItem) {
    this._questionnaireResponseItem = questionnaireResponseItem;
  }

  /**
   * Set the QuestionnaireResponseItem array and return 'this' for chaining.
   * @param {Array<QuestionnaireResponseItem>} questionnaireResponseItem - The shr.core.QuestionnaireResponseItem array
   * @returns {Answer} this.
   */
  withQuestionnaireResponseItem(questionnaireResponseItem) {
    this.questionnaireResponseItem = questionnaireResponseItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Answer class.
   * The JSON must be valid against the Answer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Answer} An instance of Answer populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Answer');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Answer class to a JSON object.
   * The JSON is expected to be valid against the Answer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Answer' } };
    if (this.answerValue != null) {
      inst['AnswerValue'] = typeof this.answerValue.toJSON === 'function' ? this.answerValue.toJSON() : this.answerValue;
    }
    if (this.questionnaireResponseItem != null) {
      inst['QuestionnaireResponseItem'] = this.questionnaireResponseItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Answer class.
   * The FHIR must be valid against the Answer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Answer} An instance of Answer populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Answer');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AnswerValue-extension');
      if (match_3 != null) {
        inst.answerValue = FHIRHelper.createInstanceFromFHIR('shr.core.AnswerValue', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireResponseItem-extension');
      if (match_4 != null) {
        inst.questionnaireResponseItem = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireResponseItem', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default Answer;
