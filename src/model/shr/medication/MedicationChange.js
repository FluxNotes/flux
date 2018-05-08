import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.medication.MedicationChange.
 * @extends Action
 */
class MedicationChange extends Action {

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
   * @returns {MedicationChange} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {MedicationChange} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the PerformedContext.
   * @returns {PerformedContext} The shr.action.PerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the PerformedContext.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the PerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   * @returns {MedicationChange} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Get the MedicationBeforeChange array.
   * @returns {Array<MedicationBeforeChange>} The shr.medication.MedicationBeforeChange array
   */
  get medicationBeforeChange() {
    return this._medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   */
  set medicationBeforeChange(medicationBeforeChange) {
    this._medicationBeforeChange = medicationBeforeChange;
  }

  /**
   * Set the MedicationBeforeChange array and return 'this' for chaining.
   * @param {Array<MedicationBeforeChange>} medicationBeforeChange - The shr.medication.MedicationBeforeChange array
   * @returns {MedicationChange} this.
   */
  withMedicationBeforeChange(medicationBeforeChange) {
    this.medicationBeforeChange = medicationBeforeChange; return this;
  }

  /**
   * Get the MedicationAfterChange array.
   * @returns {Array<MedicationAfterChange>} The shr.medication.MedicationAfterChange array
   */
  get medicationAfterChange() {
    return this._medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   */
  set medicationAfterChange(medicationAfterChange) {
    this._medicationAfterChange = medicationAfterChange;
  }

  /**
   * Set the MedicationAfterChange array and return 'this' for chaining.
   * @param {Array<MedicationAfterChange>} medicationAfterChange - The shr.medication.MedicationAfterChange array
   * @returns {MedicationChange} this.
   */
  withMedicationAfterChange(medicationAfterChange) {
    this.medicationAfterChange = medicationAfterChange; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationChange class.
   * The JSON must be valid against the MedicationChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationChange} An instance of MedicationChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationChange class to a JSON object.
   * The JSON is expected to be valid against the MedicationChange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationChange' };
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
    if (this.medicationBeforeChange != null) {
      inst['MedicationBeforeChange'] = this.medicationBeforeChange.map(f => f.toJSON());
    }
    if (this.medicationAfterChange != null) {
      inst['MedicationAfterChange'] = this.medicationAfterChange.map(f => f.toJSON());
    }
    return inst;
  }
}
export default MedicationChange;
