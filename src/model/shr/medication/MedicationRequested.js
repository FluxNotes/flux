import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * @returns {MedicationRequested} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
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
   * Serializes an instance of the MedicationRequested class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationRequested FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'MedicationRequest';
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.requestIntent != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.requestIntent.toFHIR === 'function' ? this.requestIntent.toFHIR(true) : this.requestIntent);
    }
    if (this.expectedPerformerType != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedPerformerType.toFHIR === 'function' ? this.expectedPerformerType.toFHIR(true) : this.expectedPerformerType);
    }
    if (this.expectedMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.expectedMethod.toFHIR === 'function' ? this.expectedMethod.toFHIR(true) : this.expectedMethod);
    }
    if (this.patientInstructions != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patientInstructions.toFHIR === 'function' ? this.patientInstructions.toFHIR(true) : this.patientInstructions);
    }
    if (this.communicationMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.communicationMethod.toFHIR === 'function' ? this.communicationMethod.toFHIR(true) : this.communicationMethod);
    }
    if (this.substitutionAllowed != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.substitutionAllowed.toFHIR === 'function' ? this.substitutionAllowed.toFHIR(true) : this.substitutionAllowed);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.priorityRank != null) {
      inst['priority'] = typeof this.priorityRank.toFHIR === 'function' ? this.priorityRank.toFHIR() : this.priorityRank;
    }
    if (this.medication != null) {
      inst['medicationReference'] = typeof this.medication.toFHIR === 'function' ? this.medication.toFHIR() : this.medication;
    }
    if (this.reason != null) {
      inst['reasonCode'] = inst ['reasonCode'] || [];
      inst['reasonCode'] = inst['reasonCode'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.performerInstructions != null) {
      if(inst['note'] === undefined) {
        inst['note'] = {};
      }
      inst['note']['text'] = typeof this.performerInstructions.toFHIR === 'function' ? this.performerInstructions.toFHIR() : this.performerInstructions;
    }
    if (this.dosage != null) {
      inst['dosageInstruction'] = inst ['dosageInstruction'] || [];
      inst['dosageInstruction'].push(typeof this.dosage.toFHIR === 'function' ? this.dosage.toFHIR() : this.dosage);
    }
    if (this.expectedPerformanceTime != null) {
      if(inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['validityPeriod'] = typeof this.expectedPerformanceTime.toFHIR === 'function' ? this.expectedPerformanceTime.toFHIR() : this.expectedPerformanceTime;
    }
    if (this.numberOfRefillsAllowed != null) {
      if(inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['numberOfRepeatsAllowed'] = typeof this.numberOfRefillsAllowed.toFHIR === 'function' ? this.numberOfRefillsAllowed.toFHIR() : this.numberOfRefillsAllowed;
    }
    if (this.quantityPerDispense != null) {
      if(inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['quantity'] = typeof this.quantityPerDispense.toFHIR === 'function' ? this.quantityPerDispense.toFHIR() : this.quantityPerDispense;
    }
    if (this.supplyDuration != null) {
      if(inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['expectedSupplyDuration'] = typeof this.supplyDuration.toFHIR === 'function' ? this.supplyDuration.toFHIR() : this.supplyDuration;
    }
    if (this.expectedPerformer != null && this.expectedPerformer.organization != null) {
      if(inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['performer'] = typeof this.expectedPerformer.organization.toFHIR === 'function' ? this.expectedPerformer.organization.toFHIR() : this.expectedPerformer.organization;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationRequested class.
   * The FHIR must be valid against the MedicationRequested FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationRequested} An instance of MedicationRequested populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationRequested();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['priority'] != null) {
      inst.priorityRank = createInstanceFromFHIR('shr.core.PriorityRank', fhir['priority']);
    }
    if (fhir['medicationReference'] != null) {
      inst.medication = createInstanceFromFHIR('shr.entity.Medication', fhir['medicationReference']);
    }
    if (fhir['reasonCode'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonCode'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    if (fhir['note'] != null && fhir['note']['text'] != null) {
      inst.performerInstructions = createInstanceFromFHIR('shr.base.PerformerInstructions', fhir['note']['text']);
    }
    if (fhir['dosageInstruction'] != null) {
      inst.dosage = createInstanceFromFHIR('shr.medication.Dosage', fhir['dosageInstruction'][0]);
    }
    if (fhir['dispenseRequest'] != null && fhir['dispenseRequest']['validityPeriod'] != null) {
      inst.expectedPerformanceTime = createInstanceFromFHIR('shr.base.ExpectedPerformanceTime', fhir['dispenseRequest']['validityPeriod']);
    }
    if (fhir['dispenseRequest'] != null && fhir['dispenseRequest']['numberOfRepeatsAllowed'] != null) {
      inst.numberOfRefillsAllowed = createInstanceFromFHIR('shr.medication.NumberOfRefillsAllowed', fhir['dispenseRequest']['numberOfRepeatsAllowed']);
    }
    if (fhir['dispenseRequest'] != null && fhir['dispenseRequest']['quantity'] != null) {
      inst.quantityPerDispense = createInstanceFromFHIR('shr.medication.QuantityPerDispense', fhir['dispenseRequest']['quantity']);
    }
    if (fhir['dispenseRequest'] != null && fhir['dispenseRequest']['expectedSupplyDuration'] != null) {
      inst.supplyDuration = createInstanceFromFHIR('shr.medication.SupplyDuration', fhir['dispenseRequest']['expectedSupplyDuration']);
    }
    if (fhir['dispenseRequest'] != null && fhir['dispenseRequest']['performer'] != null) {
      if(inst.expectedPerformer == null) {
        inst.expectedPerformer = createInstanceFromFHIR('shr.base.ExpectedPerformer', {});
      }
      inst.expectedPerformer.value = createInstanceFromFHIR('shr.entity.Organization', fhir['dispenseRequest']['performer']);
    }
    return inst;
  }

}
export default MedicationRequested;
