import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import ActionRequested from '../base/ActionRequested';

/**
 * Generated class for shr.medication.MedicationRequested.
 * @extends ActionRequested
 */
class MedicationRequested extends ActionRequested {

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
   * @returns {MedicationRequested} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.base.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   * @returns {MedicationRequested} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Get the Requester.
   * @returns {Requester} The shr.base.Requester
   */
  get requester() {
    return this._requester;
  }

  /**
   * Set the Requester.
   * This field/value is required.
   * @param {Requester} requester - The shr.base.Requester
   */
  set requester(requester) {
    this._requester = requester;
  }

  /**
   * Set the Requester and return 'this' for chaining.
   * This field/value is required.
   * @param {Requester} requester - The shr.base.Requester
   * @returns {MedicationRequested} this.
   */
  withRequester(requester) {
    this.requester = requester; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {MedicationRequested} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
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
   * @returns {MedicationRequested} this.
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
   * @returns {MedicationRequested} this.
   */
  withDosage(dosage) {
    this.dosage = dosage; return this;
  }

  /**
   * Get the NumberOfRefillsAllowed.
   * @returns {NumberOfRefillsAllowed} The shr.medication.NumberOfRefillsAllowed
   */
  get numberOfRefillsAllowed() {
    return this._numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The shr.medication.NumberOfRefillsAllowed
   */
  set numberOfRefillsAllowed(numberOfRefillsAllowed) {
    this._numberOfRefillsAllowed = numberOfRefillsAllowed;
  }

  /**
   * Set the NumberOfRefillsAllowed and return 'this' for chaining.
   * @param {NumberOfRefillsAllowed} numberOfRefillsAllowed - The shr.medication.NumberOfRefillsAllowed
   * @returns {MedicationRequested} this.
   */
  withNumberOfRefillsAllowed(numberOfRefillsAllowed) {
    this.numberOfRefillsAllowed = numberOfRefillsAllowed; return this;
  }

  /**
   * Get the QuantityPerDispense.
   * @returns {QuantityPerDispense} The shr.medication.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense.
   * @param {QuantityPerDispense} quantityPerDispense - The shr.medication.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispense) {
    this._quantityPerDispense = quantityPerDispense;
  }

  /**
   * Set the QuantityPerDispense and return 'this' for chaining.
   * @param {QuantityPerDispense} quantityPerDispense - The shr.medication.QuantityPerDispense
   * @returns {MedicationRequested} this.
   */
  withQuantityPerDispense(quantityPerDispense) {
    this.quantityPerDispense = quantityPerDispense; return this;
  }

  /**
   * Get the SupplyDuration.
   * @returns {SupplyDuration} The shr.medication.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Set the SupplyDuration.
   * @param {SupplyDuration} supplyDuration - The shr.medication.SupplyDuration
   */
  set supplyDuration(supplyDuration) {
    this._supplyDuration = supplyDuration;
  }

  /**
   * Set the SupplyDuration and return 'this' for chaining.
   * @param {SupplyDuration} supplyDuration - The shr.medication.SupplyDuration
   * @returns {MedicationRequested} this.
   */
  withSupplyDuration(supplyDuration) {
    this.supplyDuration = supplyDuration; return this;
  }

  /**
   * Get the SubstitutionAllowed.
   * @returns {SubstitutionAllowed} The shr.medication.SubstitutionAllowed
   */
  get substitutionAllowed() {
    return this._substitutionAllowed;
  }

  /**
   * Set the SubstitutionAllowed.
   * @param {SubstitutionAllowed} substitutionAllowed - The shr.medication.SubstitutionAllowed
   */
  set substitutionAllowed(substitutionAllowed) {
    this._substitutionAllowed = substitutionAllowed;
  }

  /**
   * Set the SubstitutionAllowed and return 'this' for chaining.
   * @param {SubstitutionAllowed} substitutionAllowed - The shr.medication.SubstitutionAllowed
   * @returns {MedicationRequested} this.
   */
  withSubstitutionAllowed(substitutionAllowed) {
    this.substitutionAllowed = substitutionAllowed; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationRequested class.
   * The JSON must be valid against the MedicationRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationRequested} An instance of MedicationRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationRequested class to a JSON object.
   * The JSON is expected to be valid against the MedicationRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationRequested' };
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
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.requester != null) {
      inst['Requester'] = typeof this.requester.toJSON === 'function' ? this.requester.toJSON() : this.requester;
    }
    if (this.requestIntent != null) {
      inst['RequestIntent'] = typeof this.requestIntent.toJSON === 'function' ? this.requestIntent.toJSON() : this.requestIntent;
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = typeof this.expectedPerformanceTime.toJSON === 'function' ? this.expectedPerformanceTime.toJSON() : this.expectedPerformanceTime;
    }
    if (this.expectedPerformerType != null) {
      inst['ExpectedPerformerType'] = typeof this.expectedPerformerType.toJSON === 'function' ? this.expectedPerformerType.toJSON() : this.expectedPerformerType;
    }
    if (this.expectedPerformer != null) {
      inst['ExpectedPerformer'] = typeof this.expectedPerformer.toJSON === 'function' ? this.expectedPerformer.toJSON() : this.expectedPerformer;
    }
    if (this.expectedMethod != null) {
      inst['ExpectedMethod'] = typeof this.expectedMethod.toJSON === 'function' ? this.expectedMethod.toJSON() : this.expectedMethod;
    }
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
    }
    if (this.performerInstructions != null) {
      inst['PerformerInstructions'] = typeof this.performerInstructions.toJSON === 'function' ? this.performerInstructions.toJSON() : this.performerInstructions;
    }
    if (this.patientInstructions != null) {
      inst['PatientInstructions'] = typeof this.patientInstructions.toJSON === 'function' ? this.patientInstructions.toJSON() : this.patientInstructions;
    }
    if (this.communicationMethod != null) {
      inst['CommunicationMethod'] = typeof this.communicationMethod.toJSON === 'function' ? this.communicationMethod.toJSON() : this.communicationMethod;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    if (this.numberOfRefillsAllowed != null) {
      inst['NumberOfRefillsAllowed'] = typeof this.numberOfRefillsAllowed.toJSON === 'function' ? this.numberOfRefillsAllowed.toJSON() : this.numberOfRefillsAllowed;
    }
    if (this.quantityPerDispense != null) {
      inst['QuantityPerDispense'] = typeof this.quantityPerDispense.toJSON === 'function' ? this.quantityPerDispense.toJSON() : this.quantityPerDispense;
    }
    if (this.supplyDuration != null) {
      inst['SupplyDuration'] = typeof this.supplyDuration.toJSON === 'function' ? this.supplyDuration.toJSON() : this.supplyDuration;
    }
    if (this.substitutionAllowed != null) {
      inst['SubstitutionAllowed'] = typeof this.substitutionAllowed.toJSON === 'function' ? this.substitutionAllowed.toJSON() : this.substitutionAllowed;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationRequested class.
   * The FHIR must be valid against the MedicationRequested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationRequested} An instance of MedicationRequested populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new MedicationRequested();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/medication/MedicationRequested');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension') {
        inst.patient = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension') {
        inst.encounter = FHIRHelper.createInstanceFromFHIR('shr.encounter.Encounter', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-RequestIntent-extension') {
        inst.requestIntent = FHIRHelper.createInstanceFromFHIR('shr.base.RequestIntent', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedPerformerType-extension') {
        inst.expectedPerformerType = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformerType', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-ExpectedMethod-extension') {
        inst.expectedMethod = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-PatientInstructions-extension') {
        inst.patientInstructions = FHIRHelper.createInstanceFromFHIR('shr.base.PatientInstructions', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-base-CommunicationMethod-extension') {
        inst.communicationMethod = FHIRHelper.createInstanceFromFHIR('shr.base.CommunicationMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-medication-SubstitutionAllowed-extension') {
        inst.substitutionAllowed = FHIRHelper.createInstanceFromFHIR('shr.medication.SubstitutionAllowed', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['priority'] != null) {
      inst.priorityRank = FHIRHelper.createInstanceFromFHIR('shr.core.PriorityRank', fhir['priority'], shrId, allEntries, mappedResources, referencesOut, false);
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
    if (fhir['requester'] != null) {
      inst.requester = FHIRHelper.createInstanceFromFHIR('shr.base.Requester', fhir['requester'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_reasonCode of fhir['reasonCode'] || []) {
      inst.reason = inst.reason || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir_reasonCode, shrId, allEntries, mappedResources, referencesOut, false);
      inst.reason.push(inst_reason);
    }
    if (fhir['note'] != null && fhir['note'][0] != null) {
      if (fhir['note'][0]['text'] != null) {
        inst.performerInstructions = FHIRHelper.createInstanceFromFHIR('shr.base.PerformerInstructions', fhir['note'][0]['text'], shrId, allEntries, mappedResources, referencesOut, false);
      }
    }
    if (fhir['dosageInstruction'] != null && fhir['dosageInstruction'][0] != null) {
      inst.dosage = FHIRHelper.createInstanceFromFHIR('shr.medication.Dosage', fhir['dosageInstruction'][0], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['dispenseRequest'] != null) {
      if (fhir['dispenseRequest']['validityPeriod'] != null) {
        inst.expectedPerformanceTime = FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir['dispenseRequest']['validityPeriod'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['numberOfRepeatsAllowed'] != null) {
        inst.numberOfRefillsAllowed = FHIRHelper.createInstanceFromFHIR('shr.medication.NumberOfRefillsAllowed', fhir['dispenseRequest']['numberOfRepeatsAllowed'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['quantity'] != null) {
        inst.quantityPerDispense = FHIRHelper.createInstanceFromFHIR('shr.medication.QuantityPerDispense', fhir['dispenseRequest']['quantity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['expectedSupplyDuration'] != null) {
        inst.supplyDuration = FHIRHelper.createInstanceFromFHIR('shr.medication.SupplyDuration', fhir['dispenseRequest']['expectedSupplyDuration'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['dispenseRequest']['performer'] != null) {
        inst.expectedPerformer = inst.expectedPerformer || FHIRHelper.createInstanceFromFHIR('shr.base.ExpectedPerformer', {}, shrId);
        const entryId = fhir['dispenseRequest']['performer']['reference'];
        if (!mappedResources[entryId]) {
          const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
          if (referencedEntry) {
            mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Organization', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
          }
        }
        if (mappedResources[entryId]) {
          inst.expectedPerformer.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
        }
        else {
          const entryType = 'http://standardhealthrecord.org/spec/shr/entity/Organization';
          inst.expectedPerformer.value = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
        }
      }
    }
    return inst;
  }

}
export default MedicationRequested;
