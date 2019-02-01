import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.research.Study.
 * @extends Entity
 */
class Study extends Entity {

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
   * @returns {Study} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {Study} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * This field/value is required.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Set the Title and return 'this' for chaining.
   * This field/value is required.
   * @param {Title} title - The shr.core.Title
   * @returns {Study} this.
   */
  withTitle(title) {
    this.title = title; return this;
  }

  /**
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   * @returns {Study} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {Study} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
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
   * @returns {Study} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Enrollment array.
   * @returns {Array<Enrollment>} The shr.research.Enrollment array
   */
  get enrollment() {
    return this._enrollment;
  }

  /**
   * Set the Enrollment array.
   * @param {Array<Enrollment>} enrollment - The shr.research.Enrollment array
   */
  set enrollment(enrollment) {
    this._enrollment = enrollment;
  }

  /**
   * Set the Enrollment array and return 'this' for chaining.
   * @param {Array<Enrollment>} enrollment - The shr.research.Enrollment array
   * @returns {Study} this.
   */
  withEnrollment(enrollment) {
    this.enrollment = enrollment; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Study} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Get the Sponsor.
   * @returns {Sponsor} The shr.research.Sponsor
   */
  get sponsor() {
    return this._sponsor;
  }

  /**
   * Set the Sponsor.
   * @param {Sponsor} sponsor - The shr.research.Sponsor
   */
  set sponsor(sponsor) {
    this._sponsor = sponsor;
  }

  /**
   * Set the Sponsor and return 'this' for chaining.
   * @param {Sponsor} sponsor - The shr.research.Sponsor
   * @returns {Study} this.
   */
  withSponsor(sponsor) {
    this.sponsor = sponsor; return this;
  }

  /**
   * Get the Jurisdiction.
   * @returns {Jurisdiction} The shr.research.Jurisdiction
   */
  get jurisdiction() {
    return this._jurisdiction;
  }

  /**
   * Set the Jurisdiction.
   * @param {Jurisdiction} jurisdiction - The shr.research.Jurisdiction
   */
  set jurisdiction(jurisdiction) {
    this._jurisdiction = jurisdiction;
  }

  /**
   * Set the Jurisdiction and return 'this' for chaining.
   * @param {Jurisdiction} jurisdiction - The shr.research.Jurisdiction
   * @returns {Study} this.
   */
  withJurisdiction(jurisdiction) {
    this.jurisdiction = jurisdiction; return this;
  }

  /**
   * Get the ContactDetail array.
   * @returns {Array<ContactDetail>} The shr.core.ContactDetail array
   */
  get contactDetail() {
    return this._contactDetail;
  }

  /**
   * Set the ContactDetail array.
   * @param {Array<ContactDetail>} contactDetail - The shr.core.ContactDetail array
   */
  set contactDetail(contactDetail) {
    this._contactDetail = contactDetail;
  }

  /**
   * Set the ContactDetail array and return 'this' for chaining.
   * @param {Array<ContactDetail>} contactDetail - The shr.core.ContactDetail array
   * @returns {Study} this.
   */
  withContactDetail(contactDetail) {
    this.contactDetail = contactDetail; return this;
  }

  /**
   * Get the PrincipalInvestigator.
   * @returns {PrincipalInvestigator} The shr.research.PrincipalInvestigator
   */
  get principalInvestigator() {
    return this._principalInvestigator;
  }

  /**
   * Set the PrincipalInvestigator.
   * @param {PrincipalInvestigator} principalInvestigator - The shr.research.PrincipalInvestigator
   */
  set principalInvestigator(principalInvestigator) {
    this._principalInvestigator = principalInvestigator;
  }

  /**
   * Set the PrincipalInvestigator and return 'this' for chaining.
   * @param {PrincipalInvestigator} principalInvestigator - The shr.research.PrincipalInvestigator
   * @returns {Study} this.
   */
  withPrincipalInvestigator(principalInvestigator) {
    this.principalInvestigator = principalInvestigator; return this;
  }

  /**
   * Get the Facility array.
   * @returns {Array<Facility>} The shr.entity.Facility array
   */
  get facility() {
    return this._facility;
  }

  /**
   * Set the Facility array.
   * @param {Array<Facility>} facility - The shr.entity.Facility array
   */
  set facility(facility) {
    this._facility = facility;
  }

  /**
   * Set the Facility array and return 'this' for chaining.
   * @param {Array<Facility>} facility - The shr.entity.Facility array
   * @returns {Study} this.
   */
  withFacility(facility) {
    this.facility = facility; return this;
  }

  /**
   * Get the TerminationReason.
   * @returns {TerminationReason} The shr.research.TerminationReason
   */
  get terminationReason() {
    return this._terminationReason;
  }

  /**
   * Set the TerminationReason.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
   */
  set terminationReason(terminationReason) {
    this._terminationReason = terminationReason;
  }

  /**
   * Set the TerminationReason and return 'this' for chaining.
   * @param {TerminationReason} terminationReason - The shr.research.TerminationReason
   * @returns {Study} this.
   */
  withTerminationReason(terminationReason) {
    this.terminationReason = terminationReason; return this;
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
   * @returns {Study} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Get the StudyArm array.
   * @returns {Array<StudyArm>} The shr.research.StudyArm array
   */
  get studyArm() {
    return this._studyArm;
  }

  /**
   * Set the StudyArm array.
   * @param {Array<StudyArm>} studyArm - The shr.research.StudyArm array
   */
  set studyArm(studyArm) {
    this._studyArm = studyArm;
  }

  /**
   * Set the StudyArm array and return 'this' for chaining.
   * @param {Array<StudyArm>} studyArm - The shr.research.StudyArm array
   * @returns {Study} this.
   */
  withStudyArm(studyArm) {
    this.studyArm = studyArm; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Study class.
   * The JSON must be valid against the Study JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Study} An instance of Study populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Study();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Study class to a JSON object.
   * The JSON is expected to be valid against the Study JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/research/Study' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.enrollment != null) {
      inst['Enrollment'] = this.enrollment.map(f => f.toJSON());
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.sponsor != null) {
      inst['Sponsor'] = typeof this.sponsor.toJSON === 'function' ? this.sponsor.toJSON() : this.sponsor;
    }
    if (this.jurisdiction != null) {
      inst['Jurisdiction'] = typeof this.jurisdiction.toJSON === 'function' ? this.jurisdiction.toJSON() : this.jurisdiction;
    }
    if (this.contactDetail != null) {
      inst['ContactDetail'] = this.contactDetail.map(f => f.toJSON());
    }
    if (this.principalInvestigator != null) {
      inst['PrincipalInvestigator'] = typeof this.principalInvestigator.toJSON === 'function' ? this.principalInvestigator.toJSON() : this.principalInvestigator;
    }
    if (this.facility != null) {
      inst['Facility'] = this.facility.map(f => f.toJSON());
    }
    if (this.terminationReason != null) {
      inst['TerminationReason'] = typeof this.terminationReason.toJSON === 'function' ? this.terminationReason.toJSON() : this.terminationReason;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.studyArm != null) {
      inst['StudyArm'] = this.studyArm.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Study class.
   * The FHIR must be valid against the Study FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Study} An instance of Study populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Study();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/research/Study');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-CommentOrDescription-extension') {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['identifier'] != null && fhir['identifier'][0] != null) {
      inst.identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir['identifier'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['title'] != null) {
      inst.title = FHIRHelper.createInstanceFromFHIR('shr.core.Title', fhir['title'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['partOf'] != null && fhir['partOf'][0] != null) {
      const entryId = fhir['partOf'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.research.Study', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.partOf = mappedResources[entryId];
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_contact of fhir['contact'] || []) {
      inst.contactDetail = inst.contactDetail || [];
      const inst_contactDetail = FHIRHelper.createInstanceFromFHIR('shr.core.ContactDetail', fhir_contact, shrId, allEntries, mappedResources, referencesOut, false);
      inst.contactDetail.push(inst_contactDetail);
    }
    if (fhir['jurisdiction'] != null && fhir['jurisdiction'][0] != null) {
      inst.jurisdiction = FHIRHelper.createInstanceFromFHIR('shr.research.Jurisdiction', fhir['jurisdiction'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_enrollment of fhir['enrollment'] || []) {
      inst.enrollment = inst.enrollment || [];
      const entryId = fhir_enrollment['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Group', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_enrollment = mappedResources[entryId];
      inst.enrollment.push(inst_enrollment);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['sponsor'] != null) {
      const entryId = fhir['sponsor']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.sponsor = mappedResources[entryId];
    }
    if (fhir['principalInvestigator'] != null) {
      const entryId = fhir['principalInvestigator']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.principalInvestigator = mappedResources[entryId];
    }
    for (const fhir_site of fhir['site'] || []) {
      inst.facility = inst.facility || [];
      const entryId = fhir_site['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Facility', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      const inst_facility = mappedResources[entryId];
      inst.facility.push(inst_facility);
    }
    if (fhir['reasonStopped'] != null) {
      inst.terminationReason = FHIRHelper.createInstanceFromFHIR('shr.research.TerminationReason', fhir['reasonStopped'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_note of fhir['note'] || []) {
      inst.annotation = inst.annotation || [];
      const inst_annotation = FHIRHelper.createInstanceFromFHIR('shr.core.Annotation', fhir_note, shrId, allEntries, mappedResources, referencesOut, false);
      inst.annotation.push(inst_annotation);
    }
    if (fhir['arm'] != null && fhir['arm'][0] != null) {
      if (fhir['arm'][0]['name'] != null) {
        inst.studyArm = inst.studyArm || [];
        const inst_studyArm = FHIRHelper.createInstanceFromFHIR('shr.research.StudyArm', {}, shrId);
        inst.studyArm.push(inst_studyArm);
        inst_studyArm.title = FHIRHelper.createInstanceFromFHIR('shr.core.Title', fhir['arm'][0]['name'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['arm'][0]['code'] != null) {
        inst.studyArm = inst.studyArm || [];
        const inst_studyArm = FHIRHelper.createInstanceFromFHIR('shr.research.StudyArm', {}, shrId);
        inst.studyArm.push(inst_studyArm);
        inst_studyArm.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['arm'][0]['code'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['arm'][0]['description'] != null) {
        inst.studyArm = inst.studyArm || [];
        const inst_studyArm = FHIRHelper.createInstanceFromFHIR('shr.research.StudyArm', {}, shrId);
        inst.studyArm.push(inst_studyArm);
        inst_studyArm.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['arm'][0]['description'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default Study;
