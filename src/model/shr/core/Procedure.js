// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import ActionPerformed from './ActionPerformed';

/**
 * Generated class for shr.core.Procedure.
 * @extends ActionPerformed
 */
class Procedure extends ActionPerformed {

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
   * @returns {Procedure} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PatientSubjectOfRecord.
   * @returns {PatientSubjectOfRecord} The shr.core.PatientSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord.
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the PatientSubjectOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {PatientSubjectOfRecord} subjectOfRecord - The shr.core.PatientSubjectOfRecord
   * @returns {Procedure} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
  }

  /**
   * Get the Participation array.
   * @returns {Array<Participation>} The shr.core.Participation array
   */
  get participation() {
    return this._participation;
  }

  /**
   * Set the Participation array.
   * @param {Array<Participation>} participation - The shr.core.Participation array
   */
  set participation(participation) {
    this._participation = participation;
  }

  /**
   * Set the Participation array and return 'this' for chaining.
   * @param {Array<Participation>} participation - The shr.core.Participation array
   * @returns {Procedure} this.
   */
  withParticipation(participation) {
    this.participation = participation; return this;
  }

  /**
   * Get the Method.
   * @returns {Method} The shr.core.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Set the Method.
   * @param {Method} method - The shr.core.Method
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Set the Method and return 'this' for chaining.
   * @param {Method} method - The shr.core.Method
   * @returns {Procedure} this.
   */
  withMethod(method) {
    this.method = method; return this;
  }

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The shr.core.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The shr.core.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.core.RelatedRequest
   * @returns {Procedure} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the Code.
   * @returns {Code} The shr.core.Code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Set the Code and return 'this' for chaining.
   * This field/value is required.
   * @param {Code} code - The shr.core.Code
   * @returns {Procedure} this.
   */
  withCode(code) {
    this.code = code; return this;
  }

  /**
   * Get the BodyLocation array.
   * @returns {Array<BodyLocation>} The shr.core.BodyLocation array
   */
  get bodyLocation() {
    return this._bodyLocation;
  }

  /**
   * Set the BodyLocation array.
   * @param {Array<BodyLocation>} bodyLocation - The shr.core.BodyLocation array
   */
  set bodyLocation(bodyLocation) {
    this._bodyLocation = bodyLocation;
  }

  /**
   * Set the BodyLocation array and return 'this' for chaining.
   * @param {Array<BodyLocation>} bodyLocation - The shr.core.BodyLocation array
   * @returns {Procedure} this.
   */
  withBodyLocation(bodyLocation) {
    this.bodyLocation = bodyLocation; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.core.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.core.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.core.PartOf
   * @returns {Procedure} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the Category.
   * @returns {Category} The shr.core.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * @param {Category} category - The shr.core.Category
   * @returns {Procedure} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   * @returns {Procedure} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the TreatmentIntent.
   * @returns {TreatmentIntent} The shr.core.TreatmentIntent
   */
  get treatmentIntent() {
    return this._treatmentIntent;
  }

  /**
   * Set the TreatmentIntent.
   * @param {TreatmentIntent} treatmentIntent - The shr.core.TreatmentIntent
   */
  set treatmentIntent(treatmentIntent) {
    this._treatmentIntent = treatmentIntent;
  }

  /**
   * Set the TreatmentIntent and return 'this' for chaining.
   * @param {TreatmentIntent} treatmentIntent - The shr.core.TreatmentIntent
   * @returns {Procedure} this.
   */
  withTreatmentIntent(treatmentIntent) {
    this.treatmentIntent = treatmentIntent; return this;
  }

  /**
   * Get the shr.core.Location reference.
   * @returns {Reference} The shr.core.Location reference
   */
  get location() {
    return this._location;
  }

  /**
   * Set the shr.core.Location reference.
   * @param {Reference} location - The shr.core.Location reference
   */
  set location(location) {
    this._location = location;
  }

  /**
   * Set the shr.core.Location reference and return 'this' for chaining.
   * @param {Reference} location - The shr.core.Location reference
   * @returns {Procedure} this.
   */
  withLocation(location) {
    this.location = location; return this;
  }

  /**
   * Get the Outcome.
   * @returns {Outcome} The shr.core.Outcome
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome.
   * @param {Outcome} outcome - The shr.core.Outcome
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome and return 'this' for chaining.
   * @param {Outcome} outcome - The shr.core.Outcome
   * @returns {Procedure} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Get the MaterialUsed array.
   * @returns {Array<MaterialUsed>} The shr.core.MaterialUsed array
   */
  get materialUsed() {
    return this._materialUsed;
  }

  /**
   * Set the MaterialUsed array.
   * @param {Array<MaterialUsed>} materialUsed - The shr.core.MaterialUsed array
   */
  set materialUsed(materialUsed) {
    this._materialUsed = materialUsed;
  }

  /**
   * Set the MaterialUsed array and return 'this' for chaining.
   * @param {Array<MaterialUsed>} materialUsed - The shr.core.MaterialUsed array
   * @returns {Procedure} this.
   */
  withMaterialUsed(materialUsed) {
    this.materialUsed = materialUsed; return this;
  }

  /**
   * Get the FocalDevice array.
   * @returns {Array<FocalDevice>} The shr.core.FocalDevice array
   */
  get focalDevice() {
    return this._focalDevice;
  }

  /**
   * Set the FocalDevice array.
   * @param {Array<FocalDevice>} focalDevice - The shr.core.FocalDevice array
   */
  set focalDevice(focalDevice) {
    this._focalDevice = focalDevice;
  }

  /**
   * Set the FocalDevice array and return 'this' for chaining.
   * @param {Array<FocalDevice>} focalDevice - The shr.core.FocalDevice array
   * @returns {Procedure} this.
   */
  withFocalDevice(focalDevice) {
    this.focalDevice = focalDevice; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Procedure class.
   * The JSON must be valid against the Procedure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Procedure} An instance of Procedure populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Procedure');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Procedure class to a JSON object.
   * The JSON is expected to be valid against the Procedure JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Procedure' };
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
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.careContext != null) {
      inst['CareContext'] = typeof this.careContext.toJSON === 'function' ? this.careContext.toJSON() : this.careContext;
    }
    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = this.reasonCode.map(f => f.toJSON());
    }
    if (this.reasonReference != null) {
      inst['ReasonReference'] = this.reasonReference.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.bodyLocation != null) {
      inst['BodyLocation'] = this.bodyLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.treatmentIntent != null) {
      inst['TreatmentIntent'] = typeof this.treatmentIntent.toJSON === 'function' ? this.treatmentIntent.toJSON() : this.treatmentIntent;
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.materialUsed != null) {
      inst['MaterialUsed'] = this.materialUsed.map(f => f.toJSON());
    }
    if (this.focalDevice != null) {
      inst['FocalDevice'] = this.focalDevice.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Procedure class.
   * The FHIR must be valid against the Procedure FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Procedure} An instance of Procedure populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Procedure');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Procedure', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-StatementDateTime-extension') {
        inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonCode-extension') {
        inst.reasonCode = inst.reasonCode || [];
        const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonCode.push(inst_reasonCode);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonReference-extension') {
        inst.reasonReference = inst.reasonReference || [];
        const inst_reasonReference = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonReference.push(inst_reasonReference);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PartOf-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.core.PartOf', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        if (fhir_extension['valueReference'] != null) {
          const entryId = fhir_extension['valueReference']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Procedure', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          if (mappedResources[entryId]) {
            inst.partOf.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/shr/core/Procedure';
            inst.partOf.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-TreatmentIntent-extension') {
        inst.treatmentIntent = FHIRHelper.createInstanceFromFHIR('shr.core.TreatmentIntent', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.subjectOfRecord = mappedResources[entryId];
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_bodySite of fhir['bodySite'] || []) {
      inst.bodyLocation = inst.bodyLocation || [];
      const inst_bodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.BodyLocation', {}, null, shrId);
      inst.bodyLocation.push(inst_bodyLocation);
      inst_bodyLocation.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', fhir_bodySite, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      for (const fhir_bodySite_extension of fhir_bodySite['extension'] || []) {
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Laterality-extension') {
          inst.bodyLocation.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        }
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Orientation-extension') {
          inst.bodyLocation.orientation = FHIRHelper.createInstanceFromFHIR('shr.core.Orientation', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        }
        if (fhir_bodySite_extension['url'] != null && fhir_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension') {
          inst.bodyLocation.relationToLandmark = inst.bodyLocation.relationToLandmark || [];
          const inst_bodyLocation_relationToLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.RelationToLandmark', fhir_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
          inst.bodyLocation.relationToLandmark.push(inst_bodyLocation_relationToLandmark);
        }
      }
    }
    for (const fhir_performer of fhir['performer'] || []) {
      inst.participation = inst.participation || [];
      const inst_participation = FHIRHelper.createInstanceFromFHIR('shr.core.Participation', fhir_performer, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      inst.participation.push(inst_participation);
      if (fhir_performer['actor'] != null) {
        const entryId = fhir_performer['actor']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst_participation.participant = mappedResources[entryId];
      }
      if (fhir_performer['role'] != null) {
        inst_participation.participationType = FHIRHelper.createInstanceFromFHIR('shr.core.ParticipationType', fhir_performer['role'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['performedDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Encounter', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.careContext = mappedResources[entryId];
    }
    if (fhir['location'] != null) {
      const entryId = fhir['location']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Location', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.location = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Location';
        inst.location = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['outcome'] != null) {
      inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.core.Outcome', fhir['outcome'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['request'] != null) {
      inst.relatedRequest = inst.relatedRequest || FHIRHelper.createInstanceFromFHIR('shr.core.RelatedRequest', {}, null, shrId);
      const entryId = fhir['request']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.ProcedureRequest', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.relatedRequest.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/ProcedureRequest';
        inst.relatedRequest.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    for (const fhir_notes of fhir['notes'] || []) {
      inst.annotation = inst.annotation || [];
      const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_notes, 'Annotation', shrId, allEntries, mappedResources, referencesOut, false);
      inst.annotation.push(inst_annotation);
    }
    for (const fhir_focalDevice of fhir['focalDevice'] || []) {
      inst.focalDevice = inst.focalDevice || [];
      const inst_focalDevice = FHIRHelper.createInstanceFromFHIR('shr.core.FocalDevice', fhir_focalDevice, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      inst.focalDevice.push(inst_focalDevice);
    }
    for (const fhir_used of fhir['used'] || []) {
      inst.materialUsed = inst.materialUsed || [];
      const entryId = fhir_used['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Device', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_materialUsed = mappedResources[entryId];
      inst.materialUsed.push(inst_materialUsed);
    }
    return inst;
  }

}
export default Procedure;
