import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ActionPerformed from '../base/ActionPerformed';

/**
 * Generated class for shr.medication.MedicationAdministered.
 * @extends ActionPerformed
 */
class MedicationAdministered extends ActionPerformed {

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
   * @returns {MedicationAdministered} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {MedicationAdministered} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the Participation array.
   * @returns {Array<Participation>} The shr.base.Participation array
   */
  get participation() {
    return this._participation;
  }

  /**
   * Set the Participation array.
   * @param {Array<Participation>} participation - The shr.base.Participation array
   */
  set participation(participation) {
    this._participation = participation;
  }

  /**
   * Set the Participation array and return 'this' for chaining.
   * @param {Array<Participation>} participation - The shr.base.Participation array
   * @returns {MedicationAdministered} this.
   */
  withParticipation(participation) {
    this.participation = participation; return this;
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
   * @returns {MedicationAdministered} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Method.
   * @returns {Method} The shr.base.Method
   */
  get method() {
    return this._method;
  }

  /**
   * Set the Method.
   * @param {Method} method - The shr.base.Method
   */
  set method(method) {
    this._method = method;
  }

  /**
   * Set the Method and return 'this' for chaining.
   * @param {Method} method - The shr.base.Method
   * @returns {MedicationAdministered} this.
   */
  withMethod(method) {
    this.method = method; return this;
  }

  /**
   * Get the RelatedRequest.
   * @returns {RelatedRequest} The shr.base.RelatedRequest
   */
  get relatedRequest() {
    return this._relatedRequest;
  }

  /**
   * Set the RelatedRequest.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   */
  set relatedRequest(relatedRequest) {
    this._relatedRequest = relatedRequest;
  }

  /**
   * Set the RelatedRequest and return 'this' for chaining.
   * @param {RelatedRequest} relatedRequest - The shr.base.RelatedRequest
   * @returns {MedicationAdministered} this.
   */
  withRelatedRequest(relatedRequest) {
    this.relatedRequest = relatedRequest; return this;
  }

  /**
   * Get the Medication.
   * @returns {Medication} The shr.entity.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Set the Medication.
   * This field/value is required.
   * @param {Medication} medication - The shr.entity.Medication
   */
  set medication(medication) {
    this._medication = medication;
  }

  /**
   * Set the Medication and return 'this' for chaining.
   * This field/value is required.
   * @param {Medication} medication - The shr.entity.Medication
   * @returns {MedicationAdministered} this.
   */
  withMedication(medication) {
    this.medication = medication; return this;
  }

  /**
   * Get the Dosage.
   * @returns {Dosage} The shr.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Set the Dosage.
   * @param {Dosage} dosage - The shr.medication.Dosage
   */
  set dosage(dosage) {
    this._dosage = dosage;
  }

  /**
   * Set the Dosage and return 'this' for chaining.
   * @param {Dosage} dosage - The shr.medication.Dosage
   * @returns {MedicationAdministered} this.
   */
  withDosage(dosage) {
    this.dosage = dosage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationAdministered class.
   * The JSON must be valid against the MedicationAdministered JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationAdministered} An instance of MedicationAdministered populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationAdministered();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationAdministered class to a JSON object.
   * The JSON is expected to be valid against the MedicationAdministered JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationAdministered' };
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationAdministered class.
   * The FHIR must be valid against the MedicationAdministered FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationAdministered} An instance of MedicationAdministered populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MedicationAdministered();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/medication/MedicationAdministered');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension') {
        inst.category = FHIRHelper.createInstanceFromFHIR('shr.core.Category', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Facility-extension') {
        inst.facility = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.Facility', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true), referencesOut);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-Outcome-extension') {
        inst.outcome = FHIRHelper.createInstanceFromFHIR('shr.base.Outcome', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['patient'] != null) {
      const entryId = fhir['patient']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.patient = mappedResources[entryId];
    }
    if (fhir['practitioner'] != null) {
      inst.participation = inst.participation || [];
      const inst_participation = FHIRHelper.createInstanceFromFHIR('shr.base.Participation', {}, shrId);
      inst.participation.push(inst_participation);
      const entryId = fhir['practitioner']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Practitioner', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst_participation.participant = mappedResources[entryId];
    }
    if (fhir['encounter'] != null) {
      const entryId = fhir['encounter']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.encounter = mappedResources[entryId];
    }
    if (fhir['prescription'] != null) {
      const entryId = fhir['prescription']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.medication.MedicationRequested', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.relatedRequest = mappedResources[entryId];
    }
    for (const fhir_reasonGiven of fhir['reasonGiven'] || []) {
      inst.reason = inst.reason || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_reasonGiven, shrId, allEntries, mappedResources, referencesOut, false);
      inst.reason.push(inst_reason);
    }
    if (fhir['effectiveTimeDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = FHIRHelper.createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['effectiveTimeDateTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['medicationReference'] != null) {
      const entryId = fhir['medicationReference']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Medication', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.medication = mappedResources[entryId];
    }
    if (fhir['dosage'] != null) {
      if (fhir['dosage']['route'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.medication.Dosage', {}, shrId);
        inst.dosage.routeIntoBody = FHIRHelper.createInstanceFromFHIR('shr.core.RouteIntoBody', fhir['dosage']['route'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage']['method'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.medication.Dosage', {}, shrId);
        inst.dosage.dosageMethod = FHIRHelper.createInstanceFromFHIR('shr.medication.DosageMethod', fhir['dosage']['method'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dosage']['quantity'] != null) {
        inst.dosage = inst.dosage || FHIRHelper.createInstanceFromFHIR('shr.medication.Dosage', {}, shrId);
        inst.dosage.doseAmount = inst.dosage.doseAmount || FHIRHelper.createInstanceFromFHIR('shr.medication.DoseAmount', {}, shrId);
        inst.dosage.doseAmount.value = FHIRHelper.createInstanceFromFHIR('shr.core.SimpleQuantity', fhir['dosage']['quantity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    return inst;
  }

}
export default MedicationAdministered;
