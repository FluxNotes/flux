import AdditionalDoseInstruction from './AdditionalDoseInstruction';
import AdministrationBodySite from './AdministrationBodySite';
import AdministrationMethod from './AdministrationMethod';
import AmountPerDose from './AmountPerDose';
import DoseAsNeededIndicator from './DoseAsNeededIndicator';
import DoseInstructionsText from './DoseInstructionsText';
import MaximumDosePerTimePeriod from './MaximumDosePerTimePeriod';
import RouteIntoBody from './RouteIntoBody';
import TimingOfDoses from './TimingOfDoses';

/** Generated from SHR definition for shr.medication.Dosage */
class Dosage {
    constructor(json) {
        if (json.amountPerDose) this._amountPerDose = new AmountPerDose(json.amountPerDose);
        if (json.timingOfDoses) this._timingOfDoses = new TimingOfDoses(json.timingOfDoses);
        if (json.doseAsNeededIndicator) this._doseAsNeededIndicator = new DoseAsNeededIndicator(json.doseAsNeededIndicator);
        if (json.doseInstructionsText) this._doseInstructionsText = new DoseInstructionsText(json.doseInstructionsText);
        if (json.additionalDoseInstruction) this._additionalDoseInstruction = new AdditionalDoseInstruction(json.additionalDoseInstruction);
        if (json.routeIntoBody) this._routeIntoBody = new RouteIntoBody(json.routeIntoBody);
        if (json.administrationMethod) this._administrationMethod = new AdministrationMethod(json.administrationMethod);
        if (json.administrationBodySite) this._administrationBodySite = new AdministrationBodySite(json.administrationBodySite);
        if (json.maximumDosePerTimePeriod) this._maximumDosePerTimePeriod = new MaximumDosePerTimePeriod(json.maximumDosePerTimePeriod);
    }

  /**
   * Getter for shr.medication.AmountPerDose
   */
  get amountPerDose() {
    return this._amountPerDose;
  }

  /**
   * Setter for shr.medication.AmountPerDose
   */
  set amountPerDose(amountPerDoseVal) {
    this._amountPerDose = amountPerDoseVal;
  }

  /**
   * Getter for shr.medication.TimingOfDoses
   */
  get timingOfDoses() {
    return this._timingOfDoses;
  }

  /**
   * Setter for shr.medication.TimingOfDoses
   */
  set timingOfDoses(timingOfDosesVal) {
    this._timingOfDoses = timingOfDosesVal;
  }

  /**
   * Getter for shr.medication.DoseAsNeededIndicator
   */
  get doseAsNeededIndicator() {
    return this._doseAsNeededIndicator;
  }

  /**
   * Setter for shr.medication.DoseAsNeededIndicator
   */
  set doseAsNeededIndicator(doseAsNeededIndicatorVal) {
    this._doseAsNeededIndicator = doseAsNeededIndicatorVal;
  }

  /**
   * Getter for shr.medication.DoseInstructionsText
   */
  get doseInstructionsText() {
    return this._doseInstructionsText;
  }

  /**
   * Setter for shr.medication.DoseInstructionsText
   */
  set doseInstructionsText(doseInstructionsTextVal) {
    this._doseInstructionsText = doseInstructionsTextVal;
  }

  /**
   * Getter for shr.medication.AdditionalDoseInstruction[]
   */
  get additionalDoseInstruction() {
    return this._additionalDoseInstruction;
  }

  /**
   * Setter for shr.medication.AdditionalDoseInstruction[]
   */
  set additionalDoseInstruction(additionalDoseInstructionVal) {
    this._additionalDoseInstruction = additionalDoseInstructionVal;
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
   * Getter for shr.medication.AdministrationMethod
   */
  get administrationMethod() {
    return this._administrationMethod;
  }

  /**
   * Setter for shr.medication.AdministrationMethod
   */
  set administrationMethod(administrationMethodVal) {
    this._administrationMethod = administrationMethodVal;
  }

  /**
   * Getter for shr.medication.AdministrationBodySite
   */
  get administrationBodySite() {
    return this._administrationBodySite;
  }

  /**
   * Setter for shr.medication.AdministrationBodySite
   */
  set administrationBodySite(administrationBodySiteVal) {
    this._administrationBodySite = administrationBodySiteVal;
  }

  /**
   * Getter for shr.medication.MaximumDosePerTimePeriod[]
   */
  get maximumDosePerTimePeriod() {
    return this._maximumDosePerTimePeriod;
  }

  /**
   * Setter for shr.medication.MaximumDosePerTimePeriod[]
   */
  set maximumDosePerTimePeriod(maximumDosePerTimePeriodVal) {
    this._maximumDosePerTimePeriod = maximumDosePerTimePeriodVal;
  }

}

export default Dosage;
