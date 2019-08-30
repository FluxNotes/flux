// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

import Condition from '../../shr/core/Condition';

/**
 * Generated class for onco.core.CancerCondition.
 * @extends Condition
 */
class CancerCondition extends Condition {

  /**
   * Get the PractitionerInformationSource.
   * @returns {PractitionerInformationSource} The onco.core.PractitionerInformationSource
   */
  get personInformationSource() {
    return this._personInformationSource;
  }

  /**
   * Set the PractitionerInformationSource.
   * @param {PractitionerInformationSource} personInformationSource - The onco.core.PractitionerInformationSource
   */
  set personInformationSource(personInformationSource) {
    this._personInformationSource = personInformationSource;
  }

  /**
   * Set the PractitionerInformationSource and return 'this' for chaining.
   * @param {PractitionerInformationSource} personInformationSource - The onco.core.PractitionerInformationSource
   * @returns {CancerCondition} this.
   */
  withPersonInformationSource(personInformationSource) {
    this.personInformationSource = personInformationSource; return this;
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
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * This field/value is required.
   * @param {Category} category - The shr.core.Category
   * @returns {CancerCondition} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * @returns {CancerCondition} this.
   */
  withBodyLocation(bodyLocation) {
    this.bodyLocation = bodyLocation; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.core.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.core.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.core.Severity
   * @returns {CancerCondition} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the HistologyMorphologyBehavior.
   * @returns {HistologyMorphologyBehavior} The onco.core.HistologyMorphologyBehavior
   */
  get histologyMorphologyBehavior() {
    return this._histologyMorphologyBehavior;
  }

  /**
   * Set the HistologyMorphologyBehavior.
   * @param {HistologyMorphologyBehavior} histologyMorphologyBehavior - The onco.core.HistologyMorphologyBehavior
   */
  set histologyMorphologyBehavior(histologyMorphologyBehavior) {
    this._histologyMorphologyBehavior = histologyMorphologyBehavior;
  }

  /**
   * Set the HistologyMorphologyBehavior and return 'this' for chaining.
   * @param {HistologyMorphologyBehavior} histologyMorphologyBehavior - The onco.core.HistologyMorphologyBehavior
   * @returns {CancerCondition} this.
   */
  withHistologyMorphologyBehavior(histologyMorphologyBehavior) {
    this.histologyMorphologyBehavior = histologyMorphologyBehavior; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CancerCondition class.
   * The JSON must be valid against the CancerCondition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CancerCondition} An instance of CancerCondition populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('onco.core', 'CancerCondition');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CancerCondition class to a JSON object.
   * The JSON is expected to be valid against the CancerCondition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/onco/core/CancerCondition' } };
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
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.personInformationSource != null) {
      inst['PersonInformationSource'] = typeof this.personInformationSource.toJSON === 'function' ? this.personInformationSource.toJSON() : this.personInformationSource;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.bodyLocation != null) {
      inst['BodyLocation'] = this.bodyLocation.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.stageInformation != null) {
      inst['StageInformation'] = typeof this.stageInformation.toJSON === 'function' ? this.stageInformation.toJSON() : this.stageInformation;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.evidence != null) {
      inst['Evidence'] = typeof this.evidence.toJSON === 'function' ? this.evidence.toJSON() : this.evidence;
    }
    if (this.dateOfDiagnosis != null) {
      inst['DateOfDiagnosis'] = typeof this.dateOfDiagnosis.toJSON === 'function' ? this.dateOfDiagnosis.toJSON() : this.dateOfDiagnosis;
    }
    if (this.histologyMorphologyBehavior != null) {
      inst['HistologyMorphologyBehavior'] = typeof this.histologyMorphologyBehavior.toJSON === 'function' ? this.histologyMorphologyBehavior.toJSON() : this.histologyMorphologyBehavior;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CancerCondition class.
   * The FHIR must be valid against the CancerCondition FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CancerCondition} An instance of CancerCondition populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('onco.core', 'CancerCondition');
    const inst = new klass();
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-DateOfDiagnosis-extension') {
        inst.dateOfDiagnosis = FHIRHelper.createInstanceFromFHIR('shr.core.DateOfDiagnosis', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/onco-core-HistologyMorphologyBehavior-extension') {
        inst.histologyMorphologyBehavior = FHIRHelper.createInstanceFromFHIR('onco.core.HistologyMorphologyBehavior', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['patient'] != null) {
      const entryId = fhir['patient']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.subjectOfRecord = mappedResources[entryId];
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
    if (fhir['asserter'] != null) {
      const entryId = fhir['asserter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Practitioner', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.personInformationSource = mappedResources[entryId];
    }
    if (fhir['dateRecorded'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.StatementDateTime', fhir['dateRecorded'], 'date', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['code'] != null) {
      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['category'] != null) {
      inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir['category'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['clinicalStatus'] != null) {
      inst.clinicalStatus = FHIRHelper.createInstanceFromFHIR('shr.core.ClinicalStatus', fhir['clinicalStatus'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['verificationStatus'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['verificationStatus'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetDateTime'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetRange'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['onsetString'] != null) {
      inst.onset = FHIRHelper.createInstanceFromFHIR('shr.core.Onset', fhir['onsetString'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementDateTime'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementBoolean'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementBoolean'], 'boolean', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementRange'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementRange'], 'Range', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['abatementString'] != null) {
      inst.abatement = FHIRHelper.createInstanceFromFHIR('shr.core.Abatement', fhir['abatementString'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['stage'] != null) {
      inst.stageInformation = FHIRHelper.createInstanceFromFHIR('shr.core.StageInformation', fhir['stage'], 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir['stage']['summary'] != null) {
        inst.stageInformation.stageSummary = FHIRHelper.createInstanceFromFHIR('shr.core.StageSummary', fhir['stage']['summary'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['stage']['assessment'] != null && fhir['stage']['assessment'][0] != null) {
        const entryId = fhir['stage']['assessment'][0]['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Observation', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        inst.stageInformation.stageDetail = mappedResources[entryId];
      }
    }
    for (const fhir_evidence of fhir['evidence'] || []) {
      if (fhir_evidence['code'] != null) {
        inst.evidence = inst.evidence || FHIRHelper.createInstanceFromFHIR('shr.core.Evidence', {}, null, shrId);
        inst.evidence.manifestation = inst.evidence.manifestation || [];
        const inst_evidence_manifestation = FHIRHelper.createInstanceFromFHIR('shr.core.Manifestation', fhir_evidence['code'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        inst.evidence.manifestation.push(inst_evidence_manifestation);
      }
      for (const fhir_evidence_detail of fhir_evidence['detail'] || []) {
        inst.evidence = inst.evidence || FHIRHelper.createInstanceFromFHIR('shr.core.Evidence', {}, null, shrId);
        inst.evidence.domainResource = inst.evidence.domainResource || [];
        const entryId = fhir_evidence_detail['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.DomainResource', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
          }
        }
        const inst_evidence_domainResource = mappedResources[entryId];
        inst.evidence.domainResource.push(inst_evidence_domainResource);
      }
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
    return inst;
  }

}
export default CancerCondition;
