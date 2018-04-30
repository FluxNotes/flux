import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.medication.MedicationAction.
 * @extends Action
 */
class MedicationAction extends Action {

  /**
   * Get the MedicationOrCode.
   * @returns {MedicationOrCode} The shr.entity.MedicationOrCode
   */
  get medicationOrCode() {
    return this._medicationOrCode;
  }

  /**
   * Set the MedicationOrCode.
   * This field/value is required.
   * @param {MedicationOrCode} medicationOrCode - The shr.entity.MedicationOrCode
   */
  set medicationOrCode(medicationOrCode) {
    this._medicationOrCode = medicationOrCode;
  }

  /**
   * Set the MedicationOrCode and return 'this' for chaining.
   * This field/value is required.
   * @param {MedicationOrCode} medicationOrCode - The shr.entity.MedicationOrCode
   * @returns {MedicationAction} this.
   */
  withMedicationOrCode(medicationOrCode) {
    this.medicationOrCode = medicationOrCode; return this;
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
   * @returns {MedicationAction} this.
   */
  withDosage(dosage) {
    this.dosage = dosage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationAction class.
   * The JSON must be valid against the MedicationAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationAction} An instance of MedicationAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationAction class to a JSON object.
   * The JSON is expected to be valid against the MedicationAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationAction' } };
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
export default MedicationAction;
