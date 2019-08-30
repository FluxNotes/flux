// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.QuestionnaireResponseItem.
 */
class QuestionnaireResponseItem {

  /**
   * Get the IdentifierString.
   * @returns {IdentifierString} The shr.core.IdentifierString
   */
  get identifierString() {
    return this._identifierString;
  }

  /**
   * Set the IdentifierString.
   * This field/value is required.
   * @param {IdentifierString} identifierString - The shr.core.IdentifierString
   */
  set identifierString(identifierString) {
    this._identifierString = identifierString;
  }

  /**
   * Set the IdentifierString and return 'this' for chaining.
   * This field/value is required.
   * @param {IdentifierString} identifierString - The shr.core.IdentifierString
   * @returns {QuestionnaireResponseItem} this.
   */
  withIdentifierString(identifierString) {
    this.identifierString = identifierString; return this;
  }

  /**
   * Get the DetailsLink.
   * @returns {DetailsLink} The shr.core.DetailsLink
   */
  get detailsLink() {
    return this._detailsLink;
  }

  /**
   * Set the DetailsLink.
   * @param {DetailsLink} detailsLink - The shr.core.DetailsLink
   */
  set detailsLink(detailsLink) {
    this._detailsLink = detailsLink;
  }

  /**
   * Set the DetailsLink and return 'this' for chaining.
   * @param {DetailsLink} detailsLink - The shr.core.DetailsLink
   * @returns {QuestionnaireResponseItem} this.
   */
  withDetailsLink(detailsLink) {
    this.detailsLink = detailsLink; return this;
  }

  /**
   * Get the Question.
   * @returns {Question} The shr.core.Question
   */
  get question() {
    return this._question;
  }

  /**
   * Set the Question.
   * @param {Question} question - The shr.core.Question
   */
  set question(question) {
    this._question = question;
  }

  /**
   * Set the Question and return 'this' for chaining.
   * @param {Question} question - The shr.core.Question
   * @returns {QuestionnaireResponseItem} this.
   */
  withQuestion(question) {
    this.question = question; return this;
  }

  /**
   * Get the FocusOfResponse.
   * @returns {FocusOfResponse} The shr.core.FocusOfResponse
   */
  get focusOfResponse() {
    return this._focusOfResponse;
  }

  /**
   * Set the FocusOfResponse.
   * @param {FocusOfResponse} focusOfResponse - The shr.core.FocusOfResponse
   */
  set focusOfResponse(focusOfResponse) {
    this._focusOfResponse = focusOfResponse;
  }

  /**
   * Set the FocusOfResponse and return 'this' for chaining.
   * @param {FocusOfResponse} focusOfResponse - The shr.core.FocusOfResponse
   * @returns {QuestionnaireResponseItem} this.
   */
  withFocusOfResponse(focusOfResponse) {
    this.focusOfResponse = focusOfResponse; return this;
  }

  /**
   * Get the Answer array.
   * @returns {Array<Answer>} The shr.core.Answer array
   */
  get answer() {
    return this._answer;
  }

  /**
   * Set the Answer array.
   * @param {Array<Answer>} answer - The shr.core.Answer array
   */
  set answer(answer) {
    this._answer = answer;
  }

  /**
   * Set the Answer array and return 'this' for chaining.
   * @param {Array<Answer>} answer - The shr.core.Answer array
   * @returns {QuestionnaireResponseItem} this.
   */
  withAnswer(answer) {
    this.answer = answer; return this;
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
   * @returns {QuestionnaireResponseItem} this.
   */
  withQuestionnaireResponseItem(questionnaireResponseItem) {
    this.questionnaireResponseItem = questionnaireResponseItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the QuestionnaireResponseItem class.
   * The JSON must be valid against the QuestionnaireResponseItem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuestionnaireResponseItem} An instance of QuestionnaireResponseItem populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireResponseItem');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the QuestionnaireResponseItem class to a JSON object.
   * The JSON is expected to be valid against the QuestionnaireResponseItem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireResponseItem' } };
    if (this.identifierString != null) {
      inst['IdentifierString'] = typeof this.identifierString.toJSON === 'function' ? this.identifierString.toJSON() : this.identifierString;
    }
    if (this.detailsLink != null) {
      inst['DetailsLink'] = typeof this.detailsLink.toJSON === 'function' ? this.detailsLink.toJSON() : this.detailsLink;
    }
    if (this.question != null) {
      inst['Question'] = typeof this.question.toJSON === 'function' ? this.question.toJSON() : this.question;
    }
    if (this.focusOfResponse != null) {
      inst['FocusOfResponse'] = typeof this.focusOfResponse.toJSON === 'function' ? this.focusOfResponse.toJSON() : this.focusOfResponse;
    }
    if (this.answer != null) {
      inst['Answer'] = this.answer.map(f => f.toJSON());
    }
    if (this.questionnaireResponseItem != null) {
      inst['QuestionnaireResponseItem'] = this.questionnaireResponseItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the QuestionnaireResponseItem class.
   * The FHIR must be valid against the QuestionnaireResponseItem FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {QuestionnaireResponseItem} An instance of QuestionnaireResponseItem populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireResponseItem');
    const inst = new klass();
    if (asExtension) {
      const match_3 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IdentifierString-extension');
      if (match_3 != null) {
        inst.identifierString = FHIRHelper.createInstanceFromFHIR('shr.core.IdentifierString', match_3, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DetailsLink-extension');
      if (match_4 != null) {
        inst.detailsLink = FHIRHelper.createInstanceFromFHIR('shr.core.DetailsLink', match_4, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Question-extension');
      if (match_5 != null) {
        inst.question = FHIRHelper.createInstanceFromFHIR('shr.core.Question', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_6 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-FocusOfResponse-extension');
      if (match_6 != null) {
        inst.focusOfResponse = FHIRHelper.createInstanceFromFHIR('shr.core.FocusOfResponse', match_6, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_7 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Answer-extension');
      if (match_7 != null) {
        inst.answer = FHIRHelper.createInstanceFromFHIR('shr.core.Answer', match_7, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_8 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireResponseItem-extension');
      if (match_8 != null) {
        inst.questionnaireResponseItem = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireResponseItem', match_8, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default QuestionnaireResponseItem;
