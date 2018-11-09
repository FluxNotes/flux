import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import MedicationStatement from '../shr/medication/MedicationStatement';

/**
 * Generated class for mcode.MedicationTreatmentPerformed.
 * @extends MedicationStatement
 */
class MedicationTreatmentPerformed extends MedicationStatement {

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
   * @returns {MedicationTreatmentPerformed} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {MedicationTreatmentPerformed} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {MedicationTreatmentPerformed} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The shr.base.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   * @returns {MedicationTreatmentPerformed} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the TreatmentIntent.
   * @returns {TreatmentIntent} The mcode.TreatmentIntent
   */
  get treatmentIntent() {
    return this._treatmentIntent;
  }

  /**
   * Set the TreatmentIntent.
   * @param {TreatmentIntent} treatmentIntent - The mcode.TreatmentIntent
   */
  set treatmentIntent(treatmentIntent) {
    this._treatmentIntent = treatmentIntent;
  }

  /**
   * Set the TreatmentIntent and return 'this' for chaining.
   * @param {TreatmentIntent} treatmentIntent - The mcode.TreatmentIntent
   * @returns {MedicationTreatmentPerformed} this.
   */
  withTreatmentIntent(treatmentIntent) {
    this.treatmentIntent = treatmentIntent; return this;
  }

  /**
   * Get the LineOfTherapy.
   * @returns {LineOfTherapy} The mcode.LineOfTherapy
   */
  get lineOfTherapy() {
    return this._lineOfTherapy;
  }

  /**
   * Set the LineOfTherapy.
   * @param {LineOfTherapy} lineOfTherapy - The mcode.LineOfTherapy
   */
  set lineOfTherapy(lineOfTherapy) {
    this._lineOfTherapy = lineOfTherapy;
  }

  /**
   * Set the LineOfTherapy and return 'this' for chaining.
   * @param {LineOfTherapy} lineOfTherapy - The mcode.LineOfTherapy
   * @returns {MedicationTreatmentPerformed} this.
   */
  withLineOfTherapy(lineOfTherapy) {
    this.lineOfTherapy = lineOfTherapy; return this;
  }

  /**
   * Get the RegimenIdentifier.
   * @returns {RegimenIdentifier} The mcode.RegimenIdentifier
   */
  get regimenIdentifier() {
    return this._regimenIdentifier;
  }

  /**
   * Set the RegimenIdentifier.
   * @param {RegimenIdentifier} regimenIdentifier - The mcode.RegimenIdentifier
   */
  set regimenIdentifier(regimenIdentifier) {
    this._regimenIdentifier = regimenIdentifier;
  }

  /**
   * Set the RegimenIdentifier and return 'this' for chaining.
   * @param {RegimenIdentifier} regimenIdentifier - The mcode.RegimenIdentifier
   * @returns {MedicationTreatmentPerformed} this.
   */
  withRegimenIdentifier(regimenIdentifier) {
    this.regimenIdentifier = regimenIdentifier; return this;
  }

  /**
   * Get the RegimenName.
   * @returns {RegimenName} The mcode.RegimenName
   */
  get regimenName() {
    return this._regimenName;
  }

  /**
   * Set the RegimenName.
   * @param {RegimenName} regimenName - The mcode.RegimenName
   */
  set regimenName(regimenName) {
    this._regimenName = regimenName;
  }

  /**
   * Set the RegimenName and return 'this' for chaining.
   * @param {RegimenName} regimenName - The mcode.RegimenName
   * @returns {MedicationTreatmentPerformed} this.
   */
  withRegimenName(regimenName) {
    this.regimenName = regimenName; return this;
  }

  /**
   * Get the RegimenStartDate.
   * @returns {RegimenStartDate} The mcode.RegimenStartDate
   */
  get regimenStartDate() {
    return this._regimenStartDate;
  }

  /**
   * Set the RegimenStartDate.
   * @param {RegimenStartDate} regimenStartDate - The mcode.RegimenStartDate
   */
  set regimenStartDate(regimenStartDate) {
    this._regimenStartDate = regimenStartDate;
  }

  /**
   * Set the RegimenStartDate and return 'this' for chaining.
   * @param {RegimenStartDate} regimenStartDate - The mcode.RegimenStartDate
   * @returns {MedicationTreatmentPerformed} this.
   */
  withRegimenStartDate(regimenStartDate) {
    this.regimenStartDate = regimenStartDate; return this;
  }

  /**
   * Get the RegimenStopDate.
   * @returns {RegimenStopDate} The mcode.RegimenStopDate
   */
  get regimenStopDate() {
    return this._regimenStopDate;
  }

  /**
   * Set the RegimenStopDate.
   * @param {RegimenStopDate} regimenStopDate - The mcode.RegimenStopDate
   */
  set regimenStopDate(regimenStopDate) {
    this._regimenStopDate = regimenStopDate;
  }

  /**
   * Set the RegimenStopDate and return 'this' for chaining.
   * @param {RegimenStopDate} regimenStopDate - The mcode.RegimenStopDate
   * @returns {MedicationTreatmentPerformed} this.
   */
  withRegimenStopDate(regimenStopDate) {
    this.regimenStopDate = regimenStopDate; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationTreatmentPerformed class.
   * The JSON must be valid against the MedicationTreatmentPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationTreatmentPerformed} An instance of MedicationTreatmentPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationTreatmentPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationTreatmentPerformed class to a JSON object.
   * The JSON is expected to be valid against the MedicationTreatmentPerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/mcode/MedicationTreatmentPerformed' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participant != null) {
      inst['Participant'] = this.participant.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
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
    if (this.treatmentIntent != null) {
      inst['TreatmentIntent'] = typeof this.treatmentIntent.toJSON === 'function' ? this.treatmentIntent.toJSON() : this.treatmentIntent;
    }
    if (this.lineOfTherapy != null) {
      inst['LineOfTherapy'] = typeof this.lineOfTherapy.toJSON === 'function' ? this.lineOfTherapy.toJSON() : this.lineOfTherapy;
    }
    if (this.regimenIdentifier != null) {
      inst['RegimenIdentifier'] = typeof this.regimenIdentifier.toJSON === 'function' ? this.regimenIdentifier.toJSON() : this.regimenIdentifier;
    }
    if (this.regimenName != null) {
      inst['RegimenName'] = typeof this.regimenName.toJSON === 'function' ? this.regimenName.toJSON() : this.regimenName;
    }
    if (this.regimenStartDate != null) {
      inst['RegimenStartDate'] = typeof this.regimenStartDate.toJSON === 'function' ? this.regimenStartDate.toJSON() : this.regimenStartDate;
    }
    if (this.regimenStopDate != null) {
      inst['RegimenStopDate'] = typeof this.regimenStopDate.toJSON === 'function' ? this.regimenStopDate.toJSON() : this.regimenStopDate;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationTreatmentPerformed class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationTreatmentPerformed FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'MedicationStatement';
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.participant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.participant.toFHIR === 'function' ? this.participant.toFHIR(true) : this.participant);
    }
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.facility != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR(true) : this.facility);
    }
    if (this.outcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR(true) : this.outcome);
    }
    if (this.treatmentIntent != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.treatmentIntent.toFHIR === 'function' ? this.treatmentIntent.toFHIR(true) : this.treatmentIntent);
    }
    if (this.lineOfTherapy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.lineOfTherapy.toFHIR === 'function' ? this.lineOfTherapy.toFHIR(true) : this.lineOfTherapy);
    }
    if (this.regimenIdentifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.regimenIdentifier.toFHIR === 'function' ? this.regimenIdentifier.toFHIR(true) : this.regimenIdentifier);
    }
    if (this.regimenName != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.regimenName.toFHIR === 'function' ? this.regimenName.toFHIR(true) : this.regimenName);
    }
    if (this.regimenStartDate != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.regimenStartDate.toFHIR === 'function' ? this.regimenStartDate.toFHIR(true) : this.regimenStartDate);
    }
    if (this.regimenStopDate != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.regimenStopDate.toFHIR === 'function' ? this.regimenStopDate.toFHIR(true) : this.regimenStopDate);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.category != null) {
      inst['category'] = typeof this.category.toFHIR === 'function' ? this.category.toFHIR() : this.category;
    }
    if (this.medication != null) {
      inst['medicationReference'] = typeof this.medication.toFHIR === 'function' ? this.medication.toFHIR() : this.medication;
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['effective[x]'] = typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR() : this.occurrenceTimeOrPeriod;
    }
    if (this.reason != null) {
      inst['reasonCode'] = inst ['reasonCode'] || [];
      inst['reasonCode'] = inst['reasonCode'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.dosage != null) {
      inst['dosage'] = inst ['dosage'] || [];
      inst['dosage'].push(typeof this.dosage.toFHIR === 'function' ? this.dosage.toFHIR() : this.dosage);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationTreatmentPerformed class.
   * The FHIR must be valid against the MedicationTreatmentPerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {MedicationTreatmentPerformed} An instance of MedicationTreatmentPerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationTreatmentPerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension');
      if (match != null) {
        inst.patient = createInstanceFromFHIR('shr.entity.Patient', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Participant-extension');
      if (match != null) {
        inst.participant = createInstanceFromFHIR('shr.base.Participant', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelatedRequest-extension');
      if (match != null) {
        inst.relatedRequest = createInstanceFromFHIR('shr.base.RelatedRequest', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Facility-extension');
      if (match != null) {
        inst.facility = createInstanceFromFHIR('shr.entity.Facility', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Outcome-extension');
      if (match != null) {
        inst.outcome = createInstanceFromFHIR('shr.base.Outcome', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-TreatmentIntent-extension');
      if (match != null) {
        inst.treatmentIntent = createInstanceFromFHIR('mcode.TreatmentIntent', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-LineOfTherapy-extension');
      if (match != null) {
        inst.lineOfTherapy = createInstanceFromFHIR('mcode.LineOfTherapy', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-RegimenIdentifier-extension');
      if (match != null) {
        inst.regimenIdentifier = createInstanceFromFHIR('mcode.RegimenIdentifier', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-RegimenName-extension');
      if (match != null) {
        inst.regimenName = createInstanceFromFHIR('mcode.RegimenName', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-RegimenStartDate-extension');
      if (match != null) {
        inst.regimenStartDate = createInstanceFromFHIR('mcode.RegimenStartDate', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/mcode-RegimenStopDate-extension');
      if (match != null) {
        inst.regimenStopDate = createInstanceFromFHIR('mcode.RegimenStopDate', match, true);
      }
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['category'] != null) {
      inst.category = createInstanceFromFHIR('shr.core.Category', fhir['category']);
    }
    if (fhir['medicationReference'] != null) {
      inst.medication = createInstanceFromFHIR('shr.entity.Medication', fhir['medicationReference']);
    }
    if (fhir['effective[x]'] != null) {
      inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['effective[x]']);
    }
    if (fhir['reasonCode'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonCode'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    if (fhir['dosage'] != null) {
      inst.dosage = createInstanceFromFHIR('shr.medication.Dosage', fhir['dosage'][0]);
    }
    return inst;
  }

}
export default MedicationTreatmentPerformed;
