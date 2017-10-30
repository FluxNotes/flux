import Immunization from './Immunization';

/** Generated from SHR definition for shr.immunization.ImmunizationNotGiven */
class ImmunizationNotGiven extends Immunization {

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
   * Getter for shr.core.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

  /**
   * Getter for shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Setter for shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBodyVal) {
    this._routeIntoBody = routeIntoBodyVal;
  }

  /**
   * Getter for shr.medication.AmountOfMedication
   */
  get amountOfMedication() {
    return this._amountOfMedication;
  }

  /**
   * Setter for shr.medication.AmountOfMedication
   */
  set amountOfMedication(amountOfMedicationVal) {
    this._amountOfMedication = amountOfMedicationVal;
  }

  // Ommitting getter/setter for field: TBD<DoseSequenceNumber>

}

export default ImmunizationNotGiven;
