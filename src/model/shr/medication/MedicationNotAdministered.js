import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionNotPerformed from '../base/ActionNotPerformed';

/**
 * Generated class for shr.medication.MedicationNotAdministered.
 * @extends ActionNotPerformed
 */
class MedicationNotAdministered extends ActionNotPerformed {

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
   * @returns {MedicationNotAdministered} this.
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
   * @returns {MedicationNotAdministered} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * @returns {MedicationNotAdministered} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
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
   * @returns {MedicationNotAdministered} this.
   */
  withMedication(medication) {
    this.medication = medication; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotAdministered class.
   * The JSON must be valid against the MedicationNotAdministered JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotAdministered} An instance of MedicationNotAdministered populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotAdministered();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationNotAdministered class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotAdministered JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationNotAdministered' };
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
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = typeof this.relatedRequest.toJSON === 'function' ? this.relatedRequest.toJSON() : this.relatedRequest;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['NonOccurrenceTimeOrPeriod'] = typeof this.nonOccurrenceTimeOrPeriod.toJSON === 'function' ? this.nonOccurrenceTimeOrPeriod.toJSON() : this.nonOccurrenceTimeOrPeriod;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationNotAdministered class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationNotAdministered FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'MedicationAdministration';
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
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.category != null) {
      inst['category'] = typeof this.category.toFHIR === 'function' ? this.category.toFHIR() : this.category;
    }
    if (this.medication != null) {
      inst['medicationReference'] = typeof this.medication.toFHIR === 'function' ? this.medication.toFHIR() : this.medication;
    }
    if (this.nonOccurrenceTimeOrPeriod != null) {
      inst['effective[x]'] = typeof this.nonOccurrenceTimeOrPeriod.toFHIR === 'function' ? this.nonOccurrenceTimeOrPeriod.toFHIR() : this.nonOccurrenceTimeOrPeriod;
    }
    if (this.reason != null) {
      inst['reasonNotGiven'] = inst ['reasonNotGiven'] || [];
      inst['reasonNotGiven'] = inst['reasonNotGiven'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationNotAdministered class.
   * The FHIR must be valid against the MedicationNotAdministered FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {MedicationNotAdministered} An instance of MedicationNotAdministered populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationNotAdministered();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (fhir['category'] != null) {
      inst.category = createInstanceFromFHIR('shr.core.Category', fhir['category']);
    }
    if (fhir['medicationReference'] != null) {
      inst.medication = createInstanceFromFHIR('shr.entity.Medication', fhir['medicationReference']);
    }
    if (fhir['effectiveDateTime'] != null) {
      inst.nonOccurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.NonOccurrenceTimeOrPeriod', fhir['effectiveDateTime']);
    }
    if (fhir['effectivePeriod'] != null) {
      inst.nonOccurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.NonOccurrenceTimeOrPeriod', fhir['effectivePeriod']);
    }
    if (fhir['reasonNotGiven'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonNotGiven'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    return inst;
  }

}
export default MedicationNotAdministered;
