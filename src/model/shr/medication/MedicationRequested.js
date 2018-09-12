import { setPropertiesFromJSON } from '../../json-helper';

import MedicationDispenseAction from './MedicationDispenseAction';

/**
 * Generated class for shr.medication.MedicationRequested.
 * @extends MedicationDispenseAction
 */
class MedicationRequested extends MedicationDispenseAction {

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
   * Get the RequestedContext.
   * @returns {RequestedContext} The shr.action.RequestedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedContext.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the RequestedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   * @returns {MedicationRequested} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationRequested class.
   * The JSON must be valid against the MedicationRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationRequested} An instance of MedicationRequested populated with the JSON data
   */
  static fromJSON(json = {}) {
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
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/medication/MedicationRequested' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.medicationOrCode != null) {
      inst['MedicationOrCode'] = typeof this.medicationOrCode.toJSON === 'function' ? this.medicationOrCode.toJSON() : this.medicationOrCode;
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
    return inst;
  }
  /**
   * Serializes an instance of the MedicationRequested class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationRequested FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'MedicationRequest';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.medicationOrCode != null) {
      inst['medication[x]'] = typeof this.medicationOrCode.toFHIR === 'function' ? this.medicationOrCode.toFHIR() : this.medicationOrCode;
    }
    if (this.dosage != null) {
      inst['dosageInstruction'] = inst['dosageInstruction'] || [];
      inst['dosageInstruction'].push(typeof this.dosage.toFHIR === 'function' ? this.dosage.toFHIR() : this.dosage);
    }
    if (this.numberOfRefillsAllowed != null) {
      if (inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['numberOfRepeatsAllowed'] = typeof this.numberOfRefillsAllowed.toFHIR === 'function' ? this.numberOfRefillsAllowed.toFHIR() : this.numberOfRefillsAllowed;
    }
    if (this.quantityPerDispense != null) {
      if (inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['quantity'] = typeof this.quantityPerDispense.toFHIR === 'function' ? this.quantityPerDispense.toFHIR() : this.quantityPerDispense;
    }
    if (this.supplyDuration != null) {
      if (inst['dispenseRequest'] === undefined) {
        inst['dispenseRequest'] = {};
      }
      inst['dispenseRequest']['expectedSupplyDuration'] = typeof this.supplyDuration.toFHIR === 'function' ? this.supplyDuration.toFHIR() : this.supplyDuration;
    }
    return inst;
  }
}
export default MedicationRequested;
