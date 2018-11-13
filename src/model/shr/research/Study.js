import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Serializes an instance of the Study class to a FHIR object.
   * The FHIR is expected to be valid against the Study FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'ResearchStudy';
    if (this.commentOrDescription != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.commentOrDescription.toFHIR === 'function' ? this.commentOrDescription.toFHIR(true) : this.commentOrDescription);
    }
    if (this.identifier != null) {
      inst['identifier'] = typeof this.identifier.toFHIR === 'function' ? this.identifier.toFHIR() : this.identifier;
    }
    if (this.title != null) {
      inst['title'] = typeof this.title.toFHIR === 'function' ? this.title.toFHIR() : this.title;
    }
    if (this.partOf != null) {
      inst['partOf'] = typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR() : this.partOf;
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.contactDetail != null) {
      inst['contact'] = inst ['contact'] || [];
      inst['contact'] = inst['contact'].concat(this.contactDetail.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.jurisdiction != null) {
      inst['jurisdiction'] = typeof this.jurisdiction.toFHIR === 'function' ? this.jurisdiction.toFHIR() : this.jurisdiction;
    }
    if (this.enrollment != null) {
      inst['enrollment'] = inst ['enrollment'] || [];
      inst['enrollment'] = inst['enrollment'].concat(this.enrollment.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (this.sponsor != null) {
      inst['sponsor'] = typeof this.sponsor.toFHIR === 'function' ? this.sponsor.toFHIR() : this.sponsor;
    }
    if (this.principalInvestigator != null) {
      inst['principalInvestigator'] = typeof this.principalInvestigator.toFHIR === 'function' ? this.principalInvestigator.toFHIR() : this.principalInvestigator;
    }
    if (this.facility != null) {
      inst['site'] = inst ['site'] || [];
      inst['site'] = inst['site'].concat(this.facility.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.terminationReason != null) {
      inst['reasonStopped'] = typeof this.terminationReason.toFHIR === 'function' ? this.terminationReason.toFHIR() : this.terminationReason;
    }
    if (this.annotation != null) {
      inst['note'] = inst ['note'] || [];
      inst['note'] = inst['note'].concat(this.annotation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.studyArm != null && this.studyArm.title != null) {
      if(inst['arm'] === undefined) {
        inst['arm'] = {};
      }
      inst['arm']['name'] = inst ['arm']['name'] || [];
      inst['arm']['name'] = inst['arm']['name'].concat(this.studyArm.title.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.studyArm != null && this.studyArm.type != null) {
      if(inst['arm'] === undefined) {
        inst['arm'] = {};
      }
      inst['arm']['code'] = inst ['arm']['code'] || [];
      inst['arm']['code'] = inst['arm']['code'].concat(this.studyArm.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.studyArm != null && this.studyArm.commentOrDescription != null) {
      if(inst['arm'] === undefined) {
        inst['arm'] = {};
      }
      inst['arm']['description'] = inst ['arm']['description'] || [];
      inst['arm']['description'] = inst['arm']['description'].concat(this.studyArm.commentOrDescription.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Study class.
   * The FHIR must be valid against the Study FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Study} An instance of Study populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Study();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CommentOrDescription-extension');
      if (match != null) {
        inst.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', match, true);
      }
    }
    if (fhir['identifier'] != null) {
      inst.identifier = createInstanceFromFHIR('shr.core.Identifier', fhir['identifier']);
    }
    if (fhir['title'] != null) {
      inst.title = createInstanceFromFHIR('shr.core.Title', fhir['title']);
    }
    if (fhir['partOf'] != null) {
      inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', fhir['partOf']);
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['contact'] != null) {
      inst.contactDetail = inst.contactDetail || [];
      inst.contactDetail = inst.contactDetail.concat(fhir['contact'].map(f => createInstanceFromFHIR('shr.core.ContactDetail', f)));
    }
    if (fhir['jurisdiction'] != null) {
      inst.jurisdiction = createInstanceFromFHIR('shr.research.Jurisdiction', fhir['jurisdiction']);
    }
    if (fhir['enrollment'] != null) {
      inst.enrollment = inst.enrollment || [];
      inst.enrollment = inst.enrollment.concat(fhir['enrollment'].map(f => createInstanceFromFHIR('shr.research.Enrollment', f)));
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period']);
    }
    if (fhir['sponsor'] != null) {
      inst.sponsor = createInstanceFromFHIR('shr.research.Sponsor', fhir['sponsor']);
    }
    if (fhir['principalInvestigator'] != null) {
      inst.principalInvestigator = createInstanceFromFHIR('shr.research.PrincipalInvestigator', fhir['principalInvestigator']);
    }
    if (fhir['site'] != null) {
      inst.facility = inst.facility || [];
      inst.facility = inst.facility.concat(fhir['site'].map(f => createInstanceFromFHIR('shr.entity.Facility', f)));
    }
    if (fhir['reasonStopped'] != null) {
      inst.terminationReason = createInstanceFromFHIR('shr.research.TerminationReason', fhir['reasonStopped']);
    }
    if (fhir['note'] != null) {
      inst.annotation = inst.annotation || [];
      inst.annotation = inst.annotation.concat(fhir['note'].map(f => createInstanceFromFHIR('shr.core.Annotation', f)));
    }
    if (fhir['arm'] != null && fhir['arm']['name'] != null) {
      if(inst.studyArm == null) {
        inst.studyArm = createInstanceFromFHIR('shr.research.StudyArm', {});
      }
      inst.studyArm.title = createInstanceFromFHIR('shr.core.Title', fhir['arm']['name']);
    }
    if (fhir['arm'] != null && fhir['arm']['code'] != null) {
      if(inst.studyArm == null) {
        inst.studyArm = createInstanceFromFHIR('shr.research.StudyArm', {});
      }
      inst.studyArm.type = createInstanceFromFHIR('shr.core.Type', fhir['arm']['code']);
    }
    if (fhir['arm'] != null && fhir['arm']['description'] != null) {
      if(inst.studyArm == null) {
        inst.studyArm = createInstanceFromFHIR('shr.research.StudyArm', {});
      }
      inst.studyArm.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['arm']['description']);
    }
    return inst;
  }

}
export default Study;
