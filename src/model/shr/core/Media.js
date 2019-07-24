// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Entity from './Entity';

/**
 * Generated class for shr.core.Media.
 * @extends Entity
 */
class Media extends Entity {

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
   * @returns {Media} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RelatedRequest array.
   * @returns {Array<RelatedRequest>} The shr.core.RelatedRequest array
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest array.
   * @param {Array<RelatedRequest>} relatedRequest - The shr.core.RelatedRequest array
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest array and return 'this' for chaining.
   * @param {Array<RelatedRequest>} relatedRequest - The shr.core.RelatedRequest array
   * @returns {Media} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
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
   * @returns {Media} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Subtype.
   * @returns {Subtype} The shr.core.Subtype
   */
  get subtype() {
    return this._subtype;
  }

  /**
   * Set the Subtype.
   * @param {Subtype} subtype - The shr.core.Subtype
   */
  set subtype(subtype) {
    this._subtype = subtype;
  }

  /**
   * Set the Subtype and return 'this' for chaining.
   * @param {Subtype} subtype - The shr.core.Subtype
   * @returns {Media} this.
   */
  withSubtype(subtype) {
    this.subtype = subtype; return this;
  }

  /**
   * Get the View.
   * @returns {View} The shr.core.View
   */
  get view() {
    return this._view;
  }

  /**
   * Set the View.
   * @param {View} view - The shr.core.View
   */
  set view(view) {
    this._view = view;
  }

  /**
   * Set the View and return 'this' for chaining.
   * @param {View} view - The shr.core.View
   * @returns {Media} this.
   */
  withView(view) {
    this.view = view; return this;
  }

  /**
   * Get the MediaSubjectOfRecord.
   * @returns {MediaSubjectOfRecord} The shr.core.MediaSubjectOfRecord
   */
  get subjectOfRecord() {
    return this._subjectOfRecord;
  }

  /**
   * Set the MediaSubjectOfRecord.
   * @param {MediaSubjectOfRecord} subjectOfRecord - The shr.core.MediaSubjectOfRecord
   */
  set subjectOfRecord(subjectOfRecord) {
    this._subjectOfRecord = subjectOfRecord;
  }

  /**
   * Set the MediaSubjectOfRecord and return 'this' for chaining.
   * @param {MediaSubjectOfRecord} subjectOfRecord - The shr.core.MediaSubjectOfRecord
   * @returns {Media} this.
   */
  withSubjectOfRecord(subjectOfRecord) {
    this.subjectOfRecord = subjectOfRecord; return this;
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
   * @returns {Media} this.
   */
  withCareContext(careContext) {
    this.careContext = careContext; return this;
  }

  /**
   * Get the RelevantTime.
   * @returns {RelevantTime} The shr.core.RelevantTime
   */
  get relevantTime() {
    return this._relevantTime;
  }

  /**
   * Set the RelevantTime.
   * @param {RelevantTime} relevantTime - The shr.core.RelevantTime
   */
  set relevantTime(relevantTime) {
    this._relevantTime = relevantTime;
  }

  /**
   * Set the RelevantTime and return 'this' for chaining.
   * @param {RelevantTime} relevantTime - The shr.core.RelevantTime
   * @returns {Media} this.
   */
  withRelevantTime(relevantTime) {
    this.relevantTime = relevantTime; return this;
  }

  /**
   * Get the shr.core.Practitioner reference.
   * @returns {Reference} The shr.core.Practitioner reference
   */
  get practitioner() {
    return this._practitioner;
  }

  /**
   * Set the shr.core.Practitioner reference.
   * @param {Reference} practitioner - The shr.core.Practitioner reference
   */
  set practitioner(practitioner) {
    this._practitioner = practitioner;
  }

  /**
   * Set the shr.core.Practitioner reference and return 'this' for chaining.
   * @param {Reference} practitioner - The shr.core.Practitioner reference
   * @returns {Media} this.
   */
  withPractitioner(practitioner) {
    this.practitioner = practitioner; return this;
  }

  /**
   * Get the ReasonCode array.
   * @returns {Array<ReasonCode>} The shr.core.ReasonCode array
   */
  get reasonCode() {
    return this._reasonCode;
  }

  /**
   * Set the ReasonCode array.
   * @param {Array<ReasonCode>} reasonCode - The shr.core.ReasonCode array
   */
  set reasonCode(reasonCode) {
    this._reasonCode = reasonCode;
  }

  /**
   * Set the ReasonCode array and return 'this' for chaining.
   * @param {Array<ReasonCode>} reasonCode - The shr.core.ReasonCode array
   * @returns {Media} this.
   */
  withReasonCode(reasonCode) {
    this.reasonCode = reasonCode; return this;
  }

  /**
   * Get the BodyLocation.
   * @returns {BodyLocation} The shr.core.BodyLocation
   */
  get bodyLocation() {
    return this._bodyLocation;
  }

  /**
   * Set the BodyLocation.
   * @param {BodyLocation} bodyLocation - The shr.core.BodyLocation
   */
  set bodyLocation(bodyLocation) {
    this._bodyLocation = bodyLocation;
  }

  /**
   * Set the BodyLocation and return 'this' for chaining.
   * @param {BodyLocation} bodyLocation - The shr.core.BodyLocation
   * @returns {Media} this.
   */
  withBodyLocation(bodyLocation) {
    this.bodyLocation = bodyLocation; return this;
  }

  /**
   * Get the shr.core.Device reference.
   * @returns {Reference} The shr.core.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the shr.core.Device reference.
   * @param {Reference} device - The shr.core.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the shr.core.Device reference and return 'this' for chaining.
   * @param {Reference} device - The shr.core.Device reference
   * @returns {Media} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the PixelHeight.
   * @returns {PixelHeight} The shr.core.PixelHeight
   */
  get pixelHeight() {
    return this._pixelHeight;
  }

  /**
   * Set the PixelHeight.
   * @param {PixelHeight} pixelHeight - The shr.core.PixelHeight
   */
  set pixelHeight(pixelHeight) {
    this._pixelHeight = pixelHeight;
  }

  /**
   * Set the PixelHeight and return 'this' for chaining.
   * @param {PixelHeight} pixelHeight - The shr.core.PixelHeight
   * @returns {Media} this.
   */
  withPixelHeight(pixelHeight) {
    this.pixelHeight = pixelHeight; return this;
  }

  /**
   * Get the PixelWidth.
   * @returns {PixelWidth} The shr.core.PixelWidth
   */
  get pixelWidth() {
    return this._pixelWidth;
  }

  /**
   * Set the PixelWidth.
   * @param {PixelWidth} pixelWidth - The shr.core.PixelWidth
   */
  set pixelWidth(pixelWidth) {
    this._pixelWidth = pixelWidth;
  }

  /**
   * Set the PixelWidth and return 'this' for chaining.
   * @param {PixelWidth} pixelWidth - The shr.core.PixelWidth
   * @returns {Media} this.
   */
  withPixelWidth(pixelWidth) {
    this.pixelWidth = pixelWidth; return this;
  }

  /**
   * Get the Frames.
   * @returns {Frames} The shr.core.Frames
   */
  get frames() {
    return this._frames;
  }

  /**
   * Set the Frames.
   * @param {Frames} frames - The shr.core.Frames
   */
  set frames(frames) {
    this._frames = frames;
  }

  /**
   * Set the Frames and return 'this' for chaining.
   * @param {Frames} frames - The shr.core.Frames
   * @returns {Media} this.
   */
  withFrames(frames) {
    this.frames = frames; return this;
  }

  /**
   * Get the NumberOfSecondsDuration.
   * @returns {NumberOfSecondsDuration} The shr.core.NumberOfSecondsDuration
   */
  get numberOfSecondsDuration() {
    return this._numberOfSecondsDuration;
  }

  /**
   * Set the NumberOfSecondsDuration.
   * @param {NumberOfSecondsDuration} numberOfSecondsDuration - The shr.core.NumberOfSecondsDuration
   */
  set numberOfSecondsDuration(numberOfSecondsDuration) {
    this._numberOfSecondsDuration = numberOfSecondsDuration;
  }

  /**
   * Set the NumberOfSecondsDuration and return 'this' for chaining.
   * @param {NumberOfSecondsDuration} numberOfSecondsDuration - The shr.core.NumberOfSecondsDuration
   * @returns {Media} this.
   */
  withNumberOfSecondsDuration(numberOfSecondsDuration) {
    this.numberOfSecondsDuration = numberOfSecondsDuration; return this;
  }

  /**
   * Get the Attachment.
   * @returns {Attachment} The shr.core.Attachment
   */
  get attachment() {
    return this._attachment;
  }

  /**
   * Set the Attachment.
   * This field/value is required.
   * @param {Attachment} attachment - The shr.core.Attachment
   */
  set attachment(attachment) {
    this._attachment = attachment;
  }

  /**
   * Set the Attachment and return 'this' for chaining.
   * This field/value is required.
   * @param {Attachment} attachment - The shr.core.Attachment
   * @returns {Media} this.
   */
  withAttachment(attachment) {
    this.attachment = attachment; return this;
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
   * @returns {Media} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Media class.
   * The JSON must be valid against the Media JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Media} An instance of Media populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'Media');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Media class to a JSON object.
   * The JSON is expected to be valid against the Media JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Media' };
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
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.subtype != null) {
      inst['Subtype'] = typeof this.subtype.toJSON === 'function' ? this.subtype.toJSON() : this.subtype;
    }
    if (this.view != null) {
      inst['View'] = typeof this.view.toJSON === 'function' ? this.view.toJSON() : this.view;
    }
    if (this.subjectOfRecord != null) {
      inst['SubjectOfRecord'] = typeof this.subjectOfRecord.toJSON === 'function' ? this.subjectOfRecord.toJSON() : this.subjectOfRecord;
    }
    if (this.careContext != null) {
      inst['CareContext'] = typeof this.careContext.toJSON === 'function' ? this.careContext.toJSON() : this.careContext;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.practitioner != null) {
      inst['Practitioner'] = typeof this.practitioner.toJSON === 'function' ? this.practitioner.toJSON() : this.practitioner;
    }
    if (this.reasonCode != null) {
      inst['ReasonCode'] = this.reasonCode.map(f => f.toJSON());
    }
    if (this.bodyLocation != null) {
      inst['BodyLocation'] = typeof this.bodyLocation.toJSON === 'function' ? this.bodyLocation.toJSON() : this.bodyLocation;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.pixelHeight != null) {
      inst['PixelHeight'] = typeof this.pixelHeight.toJSON === 'function' ? this.pixelHeight.toJSON() : this.pixelHeight;
    }
    if (this.pixelWidth != null) {
      inst['PixelWidth'] = typeof this.pixelWidth.toJSON === 'function' ? this.pixelWidth.toJSON() : this.pixelWidth;
    }
    if (this.frames != null) {
      inst['Frames'] = typeof this.frames.toJSON === 'function' ? this.frames.toJSON() : this.frames;
    }
    if (this.numberOfSecondsDuration != null) {
      inst['NumberOfSecondsDuration'] = typeof this.numberOfSecondsDuration.toJSON === 'function' ? this.numberOfSecondsDuration.toJSON() : this.numberOfSecondsDuration;
    }
    if (this.attachment != null) {
      inst['Attachment'] = typeof this.attachment.toJSON === 'function' ? this.attachment.toJSON() : this.attachment;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Media class.
   * The FHIR must be valid against the Media FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Media} An instance of Media populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'Media');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/core/Media', 'uri');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelatedRequest-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelatedRequest-extension') {
        inst.relatedRequest = inst.relatedRequest || [];
        const inst_relatedRequest = FHIRHelper.createInstanceFromFHIR('shr.core.RelatedRequest', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.relatedRequest.push(inst_relatedRequest);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-CareContext-extension') {
        inst.careContext = FHIRHelper.createInstanceFromFHIR('shr.core.CareContext', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelevantTime-extension') {
        inst.relevantTime = FHIRHelper.createInstanceFromFHIR('shr.core.RelevantTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonCode-extension' && fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-ReasonCode-extension') {
        inst.reasonCode = inst.reasonCode || [];
        const inst_reasonCode = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonCode', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.reasonCode.push(inst_reasonCode);
        if (fhir_extension['valueCodeableConcept'] != null) {
          inst_reasonCode.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir_extension['valueCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        }
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Annotation-extension') {
        inst.annotation = inst.annotation || [];
        const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.annotation.push(inst_annotation);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-BodyLocation-extension') {
        inst.bodyLocation = FHIRHelper.createInstanceFromFHIR('shr.core.BodyLocation', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Status-extension') {
        inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.core.PartOf', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['subtype'] != null) {
      inst.subtype = FHIRHelper.createInstanceFromFHIR('shr.core.Subtype', fhir['subtype'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['operator'] != null) {
      const entryId = fhir['operator']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.practitioner = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      else {
        const entryType = 'http://standardhealthrecord.org/spec/shr/core/Practitioner';
        inst.practitioner = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
      }
    }
    if (fhir['view'] != null) {
      inst.view = FHIRHelper.createInstanceFromFHIR('shr.core.View', fhir['view'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['deviceName'] != null) {
      inst.device = inst.device || FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.core.Device', {}, null, shrId), referencesOut);
      inst.device.reference.manufacturerName = FHIRHelper.createInstanceFromFHIR('shr.core.ManufacturerName', fhir['deviceName'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['height'] != null) {
      inst.pixelHeight = FHIRHelper.createInstanceFromFHIR('shr.core.PixelHeight', fhir['height'], 'positiveInt', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['width'] != null) {
      inst.pixelWidth = FHIRHelper.createInstanceFromFHIR('shr.core.PixelWidth', fhir['width'], 'positiveInt', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['frames'] != null) {
      inst.frames = FHIRHelper.createInstanceFromFHIR('shr.core.Frames', fhir['frames'], 'positiveInt', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['duration'] != null) {
      inst.numberOfSecondsDuration = FHIRHelper.createInstanceFromFHIR('shr.core.NumberOfSecondsDuration', fhir['duration'], 'unsignedInt', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['content'] != null) {
      inst.attachment = FHIRHelper.createInstanceFromFHIR('shr.core.Attachment', fhir['content'], 'Attachment', shrId, allEntries, mappedResources, referencesOut, false);
    }
    return inst;
  }

}
export default Media;
