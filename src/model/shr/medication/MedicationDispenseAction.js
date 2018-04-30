import { setPropertiesFromJSON } from '../../json-helper';

import MedicationAction from './MedicationAction';

/**
 * Generated class for shr.medication.MedicationDispenseAction.
 * @extends MedicationAction
 */
class MedicationDispenseAction extends MedicationAction {

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
   * @returns {MedicationDispenseAction} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {MedicationDispenseAction} this.
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
   * @returns {MedicationDispenseAction} this.
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
   * @returns {MedicationDispenseAction} this.
   */
  withSupplyDuration(supplyDuration) {
    this.supplyDuration = supplyDuration; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationDispenseAction class.
   * The JSON must be valid against the MedicationDispenseAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispenseAction} An instance of MedicationDispenseAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispenseAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationDispenseAction class to a JSON object.
   * The JSON is expected to be valid against the MedicationDispenseAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationDispenseAction' };
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
}
export default MedicationDispenseAction;
