import { setPropertiesFromJSON } from '../../json-helper';

import MedicationAction from './MedicationAction';

/**
 * Generated class for shr.medication.MedicationNotRequested.
 * @extends MedicationAction
 */
class MedicationNotRequested extends MedicationAction {

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
   * @returns {MedicationNotRequested} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RequestedAgainstContext.
   * @returns {RequestedAgainstContext} The shr.action.RequestedAgainstContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedAgainstContext.
   * This field/value is required.
   * @param {RequestedAgainstContext} actionContext - The shr.action.RequestedAgainstContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the RequestedAgainstContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedAgainstContext} actionContext - The shr.action.RequestedAgainstContext
   * @returns {MedicationNotRequested} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationNotRequested class.
   * The JSON must be valid against the MedicationNotRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationNotRequested} An instance of MedicationNotRequested populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationNotRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationNotRequested class to a JSON object.
   * The JSON is expected to be valid against the MedicationNotRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationNotRequested' };
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
    return inst;
  }
}
export default MedicationNotRequested;
