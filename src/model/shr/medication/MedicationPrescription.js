import Dosage from './Dosage';
import Entry from '../base/Entry';
import Medication from './Medication';
import NonOccurrenceModifier from '../base/NonOccurrenceModifier';
import NumberOfRepeatsAllowed from './NumberOfRepeatsAllowed';
import PriorityOfRequest from '../base/PriorityOfRequest';
import QuantityPerDispense from './QuantityPerDispense';
import Request from '../base/Request';
import Status from '../base/Status';
import SupplyDuration from './SupplyDuration';

/** Generated from SHR definition for shr.medication.MedicationPrescription */
class MedicationPrescription extends Request {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        if (json.medication) this._medication = new Medication(json.medication);
        if (json.nonOccurrenceModifier) this._nonOccurrenceModifier = new NonOccurrenceModifier(json.nonOccurrenceModifier);
        if (json.status) this._status = new Status(json.status);
        if (json.priorityOfRequest) this._priorityOfRequest = new PriorityOfRequest(json.priorityOfRequest);
        if (json.dosage) this._dosage = new Dosage(json.dosage);
        if (json.numberOfRepeatsAllowed) this._numberOfRepeatsAllowed = new NumberOfRepeatsAllowed(json.numberOfRepeatsAllowed);
        if (json.quantityPerDispense) this._quantityPerDispense = new QuantityPerDispense(json.quantityPerDispense);
        if (json.supplyDuration) this._supplyDuration = new SupplyDuration(json.supplyDuration);
        if (json.prescribedBy) this._prescribedBy = json.prescribedBy;
        if (json.whenPrescribed) this._whenPrescribed = json.whenPrescribed;
    }

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.medication.Medication
   */
  get medication() {
    return this._medication;
  }

  /**
   * Setter for shr.medication.Medication
   */
  set medication(medicationVal) {
    this._medication = medicationVal;
  }

  /**
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
  }

  /**
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.base.PriorityOfRequest
   */
  get priorityOfRequest() {
    return this._priorityOfRequest;
  }

  /**
   * Setter for shr.base.PriorityOfRequest
   */
  set priorityOfRequest(priorityOfRequestVal) {
    this._priorityOfRequest = priorityOfRequestVal;
  }

  /**
   * Getter for shr.medication.Dosage
   */
  get dosage() {
    return this._dosage;
  }

  /**
   * Setter for shr.medication.Dosage
   */
  set dosage(dosageVal) {
    this._dosage = dosageVal;
  }

  /**
   * Getter for shr.medication.NumberOfRepeatsAllowed
   */
  get numberOfRepeatsAllowed() {
    return this._numberOfRepeatsAllowed;
  }

  /**
   * Setter for shr.medication.NumberOfRepeatsAllowed
   */
  set numberOfRepeatsAllowed(numberOfRepeatsAllowedVal) {
    this._numberOfRepeatsAllowed = numberOfRepeatsAllowedVal;
  }

  /**
   * Getter for shr.medication.QuantityPerDispense
   */
  get quantityPerDispense() {
    return this._quantityPerDispense;
  }

  /**
   * Setter for shr.medication.QuantityPerDispense
   */
  set quantityPerDispense(quantityPerDispenseVal) {
    this._quantityPerDispense = quantityPerDispenseVal;
  }

  /**
   * Getter for shr.medication.SupplyDuration
   */
  get supplyDuration() {
    return this._supplyDuration;
  }

  /**
   * Setter for shr.medication.SupplyDuration
   */
  set supplyDuration(supplyDurationVal) {
    this._supplyDuration = supplyDurationVal;
  }
  
  get prescribedBy() {
      return this._prescribedBy;
  }
  
  set prescribedBy(prescribedBy) {
      this._prescribedBy = prescribedBy;
  }
  
  get whenPrescribed() {
      return this._whenPrescribed;
  }
  
  set whenPrescribed(whenPrescribed) {
      this._whenPrescribed = whenPrescribed;
  }

}

export default MedicationPrescription;
