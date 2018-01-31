import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.medication.Dosage.
 */
class Dosage {

  /**
   * Get the DoseAmount.
   * @returns {DoseAmount} The shr.medication.DoseAmount
   */
  get doseAmount() {
    return this._doseAmount;
  }

  /**
   * Set the DoseAmount.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   */
  set doseAmount(doseAmount) {
    this._doseAmount = doseAmount;
  }

  /**
   * Get the TimingOfDoses.
   * @returns {TimingOfDoses} The shr.medication.TimingOfDoses
   */
  get timingOfDoses() {
    return this._timingOfDoses;
  }

  /**
   * Set the TimingOfDoses.
   * @param {TimingOfDoses} timingOfDoses - The shr.medication.TimingOfDoses
   */
  set timingOfDoses(timingOfDoses) {
    this._timingOfDoses = timingOfDoses;
  }

  /**
   * Get the AsNeededIndicator.
   * @returns {AsNeededIndicator} The shr.medication.AsNeededIndicator
   */
  get asNeededIndicator() {
    return this._asNeededIndicator;
  }

  /**
   * Set the AsNeededIndicator.
   * @param {AsNeededIndicator} asNeededIndicator - The shr.medication.AsNeededIndicator
   */
  set asNeededIndicator(asNeededIndicator) {
    this._asNeededIndicator = asNeededIndicator;
  }

  /**
   * Get the DoseInstructionsText.
   * @returns {DoseInstructionsText} The shr.medication.DoseInstructionsText
   */
  get doseInstructionsText() {
    return this._doseInstructionsText;
  }

  /**
   * Set the DoseInstructionsText.
   * @param {DoseInstructionsText} doseInstructionsText - The shr.medication.DoseInstructionsText
   */
  set doseInstructionsText(doseInstructionsText) {
    this._doseInstructionsText = doseInstructionsText;
  }

  /**
   * Get the AdditionalDoseInstruction array.
   * @returns {Array<AdditionalDoseInstruction>} The shr.medication.AdditionalDoseInstruction array
   */
  get additionalDoseInstruction() {
    return this._additionalDoseInstruction;
  }

  /**
   * Set the AdditionalDoseInstruction array.
   * @param {Array<AdditionalDoseInstruction>} additionalDoseInstruction - The shr.medication.AdditionalDoseInstruction array
   */
  set additionalDoseInstruction(additionalDoseInstruction) {
    this._additionalDoseInstruction = additionalDoseInstruction;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Get the AdministrationMethod.
   * @returns {AdministrationMethod} The shr.medication.AdministrationMethod
   */
  get administrationMethod() {
    return this._administrationMethod;
  }

  /**
   * Set the AdministrationMethod.
   * @param {AdministrationMethod} administrationMethod - The shr.medication.AdministrationMethod
   */
  set administrationMethod(administrationMethod) {
    this._administrationMethod = administrationMethod;
  }

  /**
   * Get the AdministrationBodySite.
   * @returns {AdministrationBodySite} The shr.medication.AdministrationBodySite
   */
  get administrationBodySite() {
    return this._administrationBodySite;
  }

  /**
   * Set the AdministrationBodySite.
   * @param {AdministrationBodySite} administrationBodySite - The shr.medication.AdministrationBodySite
   */
  set administrationBodySite(administrationBodySite) {
    this._administrationBodySite = administrationBodySite;
  }

  /**
   * Get the MaximumDosePerTimePeriod.
   * @returns {MaximumDosePerTimePeriod} The shr.medication.MaximumDosePerTimePeriod
   */
  get maximumDosePerTimePeriod() {
    return this._maximumDosePerTimePeriod;
  }

  /**
   * Set the MaximumDosePerTimePeriod.
   * @param {MaximumDosePerTimePeriod} maximumDosePerTimePeriod - The shr.medication.MaximumDosePerTimePeriod
   */
  set maximumDosePerTimePeriod(maximumDosePerTimePeriod) {
    this._maximumDosePerTimePeriod = maximumDosePerTimePeriod;
  }

  /**
   * Deserializes JSON data to an instance of the Dosage class.
   * The JSON must be valid against the Dosage JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Dosage} An instance of Dosage populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Dosage();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Dosage;
