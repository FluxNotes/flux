// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.QuestionnaireItem.
 */
class QuestionnaireItem {

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
   * @returns {QuestionnaireItem} this.
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
   * @returns {QuestionnaireItem} this.
   */
  withDetailsLink(detailsLink) {
    this.detailsLink = detailsLink; return this;
  }

  /**
   * Get the Code array.
   * @returns {Array<Code>} The shr.core.Code array
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code array.
   * @param {Array<Code>} code - The shr.core.Code array
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code array and return 'this' for chaining.
   * @param {Array<Code>} code - The shr.core.Code array
   * @returns {QuestionnaireItem} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the Prefix.
   * @returns {Prefix} The shr.core.Prefix
   */
  get prefix() {
    return this._prefix;
  }

  /**
   * Set the Prefix.
   * @param {Prefix} prefix - The shr.core.Prefix
   */
  set prefix(prefix) {
    this._prefix = prefix;
  }

  /**
   * Set the Prefix and return 'this' for chaining.
   * @param {Prefix} prefix - The shr.core.Prefix
   * @returns {QuestionnaireItem} this.
   */
  withPrefix(prefix) {
    this.prefix = prefix; return this;
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
   * @returns {QuestionnaireItem} this.
   */
  withQuestion(question) {
    this.question = question; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {QuestionnaireItem} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the EnableWhen array.
   * @returns {Array<EnableWhen>} The shr.core.EnableWhen array
   */
  get enableWhen() {
    return this._enableWhen;
  }

  /**
   * Set the EnableWhen array.
   * @param {Array<EnableWhen>} enableWhen - The shr.core.EnableWhen array
   */
  set enableWhen(enableWhen) {
    this._enableWhen = enableWhen;
  }

  /**
   * Set the EnableWhen array and return 'this' for chaining.
   * @param {Array<EnableWhen>} enableWhen - The shr.core.EnableWhen array
   * @returns {QuestionnaireItem} this.
   */
  withEnableWhen(enableWhen) {
    this.enableWhen = enableWhen; return this;
  }

  /**
   * Get the IsRequired.
   * @returns {IsRequired} The shr.core.IsRequired
   */
  get isRequired() {
    return this._isRequired;
  }

  /**
   * Set the IsRequired.
   * @param {IsRequired} isRequired - The shr.core.IsRequired
   */
  set isRequired(isRequired) {
    this._isRequired = isRequired;
  }

  /**
   * Set the IsRequired and return 'this' for chaining.
   * @param {IsRequired} isRequired - The shr.core.IsRequired
   * @returns {QuestionnaireItem} this.
   */
  withIsRequired(isRequired) {
    this.isRequired = isRequired; return this;
  }

  /**
   * Get the MayRepeat.
   * @returns {MayRepeat} The shr.core.MayRepeat
   */
  get mayRepeat() {
    return this._mayRepeat;
  }

  /**
   * Set the MayRepeat.
   * @param {MayRepeat} mayRepeat - The shr.core.MayRepeat
   */
  set mayRepeat(mayRepeat) {
    this._mayRepeat = mayRepeat;
  }

  /**
   * Set the MayRepeat and return 'this' for chaining.
   * @param {MayRepeat} mayRepeat - The shr.core.MayRepeat
   * @returns {QuestionnaireItem} this.
   */
  withMayRepeat(mayRepeat) {
    this.mayRepeat = mayRepeat; return this;
  }

  /**
   * Get the IsReadOnly.
   * @returns {IsReadOnly} The shr.core.IsReadOnly
   */
  get isReadOnly() {
    return this._isReadOnly;
  }

  /**
   * Set the IsReadOnly.
   * @param {IsReadOnly} isReadOnly - The shr.core.IsReadOnly
   */
  set isReadOnly(isReadOnly) {
    this._isReadOnly = isReadOnly;
  }

  /**
   * Set the IsReadOnly and return 'this' for chaining.
   * @param {IsReadOnly} isReadOnly - The shr.core.IsReadOnly
   * @returns {QuestionnaireItem} this.
   */
  withIsReadOnly(isReadOnly) {
    this.isReadOnly = isReadOnly; return this;
  }

  /**
   * Get the MaxTextLength.
   * @returns {MaxTextLength} The shr.core.MaxTextLength
   */
  get maxTextLength() {
    return this._maxTextLength;
  }

  /**
   * Set the MaxTextLength.
   * @param {MaxTextLength} maxTextLength - The shr.core.MaxTextLength
   */
  set maxTextLength(maxTextLength) {
    this._maxTextLength = maxTextLength;
  }

  /**
   * Set the MaxTextLength and return 'this' for chaining.
   * @param {MaxTextLength} maxTextLength - The shr.core.MaxTextLength
   * @returns {QuestionnaireItem} this.
   */
  withMaxTextLength(maxTextLength) {
    this.maxTextLength = maxTextLength; return this;
  }

  /**
   * Get the AnswerValueSet.
   * @returns {AnswerValueSet} The shr.core.AnswerValueSet
   */
  get answerValueSet() {
    return this._answerValueSet;
  }

  /**
   * Set the AnswerValueSet.
   * @param {AnswerValueSet} answerValueSet - The shr.core.AnswerValueSet
   */
  set answerValueSet(answerValueSet) {
    this._answerValueSet = answerValueSet;
  }

  /**
   * Set the AnswerValueSet and return 'this' for chaining.
   * @param {AnswerValueSet} answerValueSet - The shr.core.AnswerValueSet
   * @returns {QuestionnaireItem} this.
   */
  withAnswerValueSet(answerValueSet) {
    this.answerValueSet = answerValueSet; return this;
  }

  /**
   * Get the AnswerOption array.
   * @returns {Array<AnswerOption>} The shr.core.AnswerOption array
   */
  get answerOption() {
    return this._answerOption;
  }

  /**
   * Set the AnswerOption array.
   * @param {Array<AnswerOption>} answerOption - The shr.core.AnswerOption array
   */
  set answerOption(answerOption) {
    this._answerOption = answerOption;
  }

  /**
   * Set the AnswerOption array and return 'this' for chaining.
   * @param {Array<AnswerOption>} answerOption - The shr.core.AnswerOption array
   * @returns {QuestionnaireItem} this.
   */
  withAnswerOption(answerOption) {
    this.answerOption = answerOption; return this;
  }

  /**
   * Get the PrepopulateValue array.
   * @returns {Array<PrepopulateValue>} The shr.core.PrepopulateValue array
   */
  get prepopulateValue() {
    return this._prepopulateValue;
  }

  /**
   * Set the PrepopulateValue array.
   * @param {Array<PrepopulateValue>} prepopulateValue - The shr.core.PrepopulateValue array
   */
  set prepopulateValue(prepopulateValue) {
    this._prepopulateValue = prepopulateValue;
  }

  /**
   * Set the PrepopulateValue array and return 'this' for chaining.
   * @param {Array<PrepopulateValue>} prepopulateValue - The shr.core.PrepopulateValue array
   * @returns {QuestionnaireItem} this.
   */
  withPrepopulateValue(prepopulateValue) {
    this.prepopulateValue = prepopulateValue; return this;
  }

  /**
   * Get the QuestionnaireItem array.
   * @returns {Array<QuestionnaireItem>} The shr.core.QuestionnaireItem array
   */
  get questionnaireItem() {
    return this._questionnaireItem;
  }

  /**
   * Set the QuestionnaireItem array.
   * @param {Array<QuestionnaireItem>} questionnaireItem - The shr.core.QuestionnaireItem array
   */
  set questionnaireItem(questionnaireItem) {
    this._questionnaireItem = questionnaireItem;
  }

  /**
   * Set the QuestionnaireItem array and return 'this' for chaining.
   * @param {Array<QuestionnaireItem>} questionnaireItem - The shr.core.QuestionnaireItem array
   * @returns {QuestionnaireItem} this.
   */
  withQuestionnaireItem(questionnaireItem) {
    this.questionnaireItem = questionnaireItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the QuestionnaireItem class.
   * The JSON must be valid against the QuestionnaireItem JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuestionnaireItem} An instance of QuestionnaireItem populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireItem');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the QuestionnaireItem class to a JSON object.
   * The JSON is expected to be valid against the QuestionnaireItem JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireItem' } };
    if (this.identifierString != null) {
      inst['IdentifierString'] = typeof this.identifierString.toJSON === 'function' ? this.identifierString.toJSON() : this.identifierString;
    }
    if (this.detailsLink != null) {
      inst['DetailsLink'] = typeof this.detailsLink.toJSON === 'function' ? this.detailsLink.toJSON() : this.detailsLink;
    }
    if (this.code != null) {
      inst['Code'] = this.code.map(f => f.toJSON());
    }
    if (this.prefix != null) {
      inst['Prefix'] = typeof this.prefix.toJSON === 'function' ? this.prefix.toJSON() : this.prefix;
    }
    if (this.question != null) {
      inst['Question'] = typeof this.question.toJSON === 'function' ? this.question.toJSON() : this.question;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.enableWhen != null) {
      inst['EnableWhen'] = this.enableWhen.map(f => f.toJSON());
    }
    if (this.isRequired != null) {
      inst['IsRequired'] = typeof this.isRequired.toJSON === 'function' ? this.isRequired.toJSON() : this.isRequired;
    }
    if (this.mayRepeat != null) {
      inst['MayRepeat'] = typeof this.mayRepeat.toJSON === 'function' ? this.mayRepeat.toJSON() : this.mayRepeat;
    }
    if (this.isReadOnly != null) {
      inst['IsReadOnly'] = typeof this.isReadOnly.toJSON === 'function' ? this.isReadOnly.toJSON() : this.isReadOnly;
    }
    if (this.maxTextLength != null) {
      inst['MaxTextLength'] = typeof this.maxTextLength.toJSON === 'function' ? this.maxTextLength.toJSON() : this.maxTextLength;
    }
    if (this.answerValueSet != null) {
      inst['AnswerValueSet'] = typeof this.answerValueSet.toJSON === 'function' ? this.answerValueSet.toJSON() : this.answerValueSet;
    }
    if (this.answerOption != null) {
      inst['AnswerOption'] = this.answerOption.map(f => f.toJSON());
    }
    if (this.prepopulateValue != null) {
      inst['PrepopulateValue'] = this.prepopulateValue.map(f => f.toJSON());
    }
    if (this.questionnaireItem != null) {
      inst['QuestionnaireItem'] = this.questionnaireItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the QuestionnaireItem class.
   * The FHIR must be valid against the QuestionnaireItem FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {QuestionnaireItem} An instance of QuestionnaireItem populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireItem');
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
      const match_5 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Code-extension');
      if (match_5 != null) {
        inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', match_5, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_10 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Prefix-extension');
      if (match_10 != null) {
        inst.prefix = FHIRHelper.createInstanceFromFHIR('shr.core.Prefix', match_10, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_11 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Question-extension');
      if (match_11 != null) {
        inst.question = FHIRHelper.createInstanceFromFHIR('shr.core.Question', match_11, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_12 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Type-extension');
      if (match_12 != null) {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', match_12, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_17 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-EnableWhen-extension');
      if (match_17 != null) {
        inst.enableWhen = FHIRHelper.createInstanceFromFHIR('shr.core.EnableWhen', match_17, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_18 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IsRequired-extension');
      if (match_18 != null) {
        inst.isRequired = FHIRHelper.createInstanceFromFHIR('shr.core.IsRequired', match_18, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_19 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MayRepeat-extension');
      if (match_19 != null) {
        inst.mayRepeat = FHIRHelper.createInstanceFromFHIR('shr.core.MayRepeat', match_19, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_20 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-IsReadOnly-extension');
      if (match_20 != null) {
        inst.isReadOnly = FHIRHelper.createInstanceFromFHIR('shr.core.IsReadOnly', match_20, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_21 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-MaxTextLength-extension');
      if (match_21 != null) {
        inst.maxTextLength = FHIRHelper.createInstanceFromFHIR('shr.core.MaxTextLength', match_21, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_22 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AnswerValueSet-extension');
      if (match_22 != null) {
        inst.answerValueSet = FHIRHelper.createInstanceFromFHIR('shr.core.AnswerValueSet', match_22, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_23 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-AnswerOption-extension');
      if (match_23 != null) {
        inst.answerOption = FHIRHelper.createInstanceFromFHIR('shr.core.AnswerOption', match_23, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_24 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PrepopulateValue-extension');
      if (match_24 != null) {
        inst.prepopulateValue = FHIRHelper.createInstanceFromFHIR('shr.core.PrepopulateValue', match_24, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_25 = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireItem-extension');
      if (match_25 != null) {
        inst.questionnaireItem = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireItem', match_25, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default QuestionnaireItem;
