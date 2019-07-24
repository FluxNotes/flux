// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import DomainResource from './DomainResource';

/**
 * Generated class for shr.core.QuestionnaireResponse.
 * @extends DomainResource
 */
class QuestionnaireResponse extends DomainResource {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {QuestionnaireResponse} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.core.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.core.Status
   * @returns {QuestionnaireResponse} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Identifier array.
   * @returns {Array<Identifier>} The shr.core.Identifier array
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier array.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier array and return 'this' for chaining.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   * @returns {QuestionnaireResponse} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the ReferralOrProcedureRequest array.
   * @returns {Array<ReferralOrProcedureRequest>} The shr.core.ReferralOrProcedureRequest array
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the ReferralOrProcedureRequest array.
   * @param {Array<ReferralOrProcedureRequest>} relatedRequest - The shr.core.ReferralOrProcedureRequest array
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the ReferralOrProcedureRequest array and return 'this' for chaining.
   * @param {Array<ReferralOrProcedureRequest>} relatedRequest - The shr.core.ReferralOrProcedureRequest array
   * @returns {QuestionnaireResponse} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the shr.core.Questionnaire reference.
   * @returns {Reference} The shr.core.Questionnaire reference
   */
  get questionnaire() {
    return this._questionnaire;
  }

  /**
   * Set the shr.core.Questionnaire reference.
   * @param {Reference} questionnaire - The shr.core.Questionnaire reference
   */
  set questionnaire(questionnaire) {
    this._questionnaire = questionnaire;
  }

  /**
   * Set the shr.core.Questionnaire reference and return 'this' for chaining.
   * @param {Reference} questionnaire - The shr.core.Questionnaire reference
   * @returns {QuestionnaireResponse} this.
   */
  withQuestionnaire(questionnaire) {
    this.questionnaire = questionnaire; return this;
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
   * @returns {QuestionnaireResponse} this.
   */
  withFocusOfResponse(focusOfResponse) {
    this.focusOfResponse = focusOfResponse; return this;
  }

  /**
   * Get the CareContext.
   * @returns {CareContext} The shr.core.CareContext
   */
  get careContext() {
    return this._careContext;
  }

  /**
   * Set the CareContext.
   * @param {CareContext} careContext - The shr.core.CareContext
   */
  set careContext(careContext) {
    this._careContext = careContext;
  }

  /**
   * Set the CareContext and return 'this' for chaining.
   * @param {CareContext} careContext - The shr.core.CareContext
   * @returns {QuestionnaireResponse} this.
   */
  withCareContext(careContext) {
    this.careContext = careContext; return this;
  }

  /**
   * Get the StatementDateTime.
   * @returns {StatementDateTime} The shr.core.StatementDateTime
   */
  get statementDateTime() {
    return this._statementDateTime;
  }

  /**
   * Set the StatementDateTime.
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   */
  set statementDateTime(statementDateTime) {
    this._statementDateTime = statementDateTime;
  }

  /**
   * Set the StatementDateTime and return 'this' for chaining.
   * @param {StatementDateTime} statementDateTime - The shr.core.StatementDateTime
   * @returns {QuestionnaireResponse} this.
   */
  withStatementDateTime(statementDateTime) {
    this.statementDateTime = statementDateTime; return this;
  }

  /**
   * Get the QuestionnaireResponseRecorder.
   * @returns {QuestionnaireResponseRecorder} The shr.core.QuestionnaireResponseRecorder
   */
  get questionnaireResponseRecorder() {
    return this._questionnaireResponseRecorder;
  }

  /**
   * Set the QuestionnaireResponseRecorder.
   * @param {QuestionnaireResponseRecorder} questionnaireResponseRecorder - The shr.core.QuestionnaireResponseRecorder
   */
  set questionnaireResponseRecorder(questionnaireResponseRecorder) {
    this._questionnaireResponseRecorder = questionnaireResponseRecorder;
  }

  /**
   * Set the QuestionnaireResponseRecorder and return 'this' for chaining.
   * @param {QuestionnaireResponseRecorder} questionnaireResponseRecorder - The shr.core.QuestionnaireResponseRecorder
   * @returns {QuestionnaireResponse} this.
   */
  withQuestionnaireResponseRecorder(questionnaireResponseRecorder) {
    this.questionnaireResponseRecorder = questionnaireResponseRecorder; return this;
  }

  /**
   * Get the PersonInformationSource.
   * @returns {PersonInformationSource} The shr.core.PersonInformationSource
   */
  get personInformationSource() {
    return this._personInformationSource;
  }

  /**
   * Set the PersonInformationSource.
   * @param {PersonInformationSource} personInformationSource - The shr.core.PersonInformationSource
   */
  set personInformationSource(personInformationSource) {
    this._personInformationSource = personInformationSource;
  }

  /**
   * Set the PersonInformationSource and return 'this' for chaining.
   * @param {PersonInformationSource} personInformationSource - The shr.core.PersonInformationSource
   * @returns {QuestionnaireResponse} this.
   */
  withPersonInformationSource(personInformationSource) {
    this.personInformationSource = personInformationSource; return this;
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
   * @returns {QuestionnaireResponse} this.
   */
  withQuestionnaireResponseItem(questionnaireResponseItem) {
    this.questionnaireResponseItem = questionnaireResponseItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the QuestionnaireResponse class.
   * The JSON must be valid against the QuestionnaireResponse JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {QuestionnaireResponse} An instance of QuestionnaireResponse populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireResponse');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the QuestionnaireResponse class to a JSON object.
   * The JSON is expected to be valid against the QuestionnaireResponse JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireResponse' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.questionnaire != null) {
      inst['Questionnaire'] = typeof this.questionnaire.toJSON === 'function' ? this.questionnaire.toJSON() : this.questionnaire;
    }
    if (this.focusOfResponse != null) {
      inst['FocusOfResponse'] = typeof this.focusOfResponse.toJSON === 'function' ? this.focusOfResponse.toJSON() : this.focusOfResponse;
    }
    if (this.careContext != null) {
      inst['CareContext'] = typeof this.careContext.toJSON === 'function' ? this.careContext.toJSON() : this.careContext;
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    if (this.questionnaireResponseRecorder != null) {
      inst['QuestionnaireResponseRecorder'] = typeof this.questionnaireResponseRecorder.toJSON === 'function' ? this.questionnaireResponseRecorder.toJSON() : this.questionnaireResponseRecorder;
    }
    if (this.personInformationSource != null) {
      inst['PersonInformationSource'] = typeof this.personInformationSource.toJSON === 'function' ? this.personInformationSource.toJSON() : this.personInformationSource;
    }
    if (this.questionnaireResponseItem != null) {
      inst['QuestionnaireResponseItem'] = this.questionnaireResponseItem.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the QuestionnaireResponse class.
   * The FHIR must be valid against the QuestionnaireResponse FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {QuestionnaireResponse} An instance of QuestionnaireResponse populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'QuestionnaireResponse');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/QuestionnaireResponse', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst.status.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = inst.identifier || [];
        const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.identifier.push(inst_identifier);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReferralOrProcedureRequest-extension') {
        inst.relatedRequest = inst.relatedRequest || [];
        const inst_relatedRequest = FHIRHelper.createInstanceFromFHIR('shr.core.ReferralOrProcedureRequest', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.relatedRequest.push(inst_relatedRequest);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Questionnaire-extension') {
        inst.questionnaire = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.Questionnaire', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-FocusOfResponse-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-FocusOfResponse-extension') {
        inst.focusOfResponse = FHIRHelper.createInstanceFromFHIR('shr.core.FocusOfResponse', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.DomainResource', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst.focusOfResponse.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/core/DomainResource';
            inst.focusOfResponse.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireResponseRecorder-extension') {
        inst.questionnaireResponseRecorder = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireResponseRecorder', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PersonInformationSource-extension') {
        inst.personInformationSource = FHIRHelper.createInstanceFromFHIR('shr.core.PersonInformationSource', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-QuestionnaireResponseItem-extension') {
        inst.questionnaireResponseItem = inst.questionnaireResponseItem || [];
        const inst_questionnaireResponseItem = FHIRHelper.createInstanceFromFHIR('shr.core.QuestionnaireResponseItem', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.questionnaireResponseItem.push(inst_questionnaireResponseItem);
      }
    }
    return inst;
  }

}
export default QuestionnaireResponse;
