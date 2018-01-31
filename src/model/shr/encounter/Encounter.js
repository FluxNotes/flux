import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.encounter.Encounter.
 * @extends Action
 */
class Encounter extends Action {

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
   * Get the Subject.
   * @returns {Subject} The shr.base.Subject
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the Subject.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Get the ReferralDate.
   * @returns {ReferralDate} The shr.encounter.ReferralDate
   */
  get referralDate() {
    return this._referralDate;
  }

  /**
   * Set the ReferralDate.
   * @param {ReferralDate} referralDate - The shr.encounter.ReferralDate
   */
  set referralDate(referralDate) {
    this._referralDate = referralDate;
  }

  /**
   * Get the ReferralSourceType.
   * @returns {ReferralSourceType} The shr.encounter.ReferralSourceType
   */
  get referralSourceType() {
    return this._referralSourceType;
  }

  /**
   * Set the ReferralSourceType.
   * @param {ReferralSourceType} referralSourceType - The shr.encounter.ReferralSourceType
   */
  set referralSourceType(referralSourceType) {
    this._referralSourceType = referralSourceType;
  }

  /**
   * Get the TypeAsaCoding.
   * @returns {TypeAsaCoding} The shr.core.TypeAsaCoding
   */
  get typeAsaCoding() {
    return this._typeAsaCoding;
  }

  /**
   * Set the TypeAsaCoding.
   * @param {TypeAsaCoding} typeAsaCoding - The shr.core.TypeAsaCoding
   */
  set typeAsaCoding(typeAsaCoding) {
    this._typeAsaCoding = typeAsaCoding;
  }

  /**
   * Get the ServiceGiven array.
   * @returns {Array<ServiceGiven>} The shr.encounter.ServiceGiven array
   */
  get serviceGiven() {
    return this._serviceGiven;
  }

  /**
   * Set the ServiceGiven array.
   * @param {Array<ServiceGiven>} serviceGiven - The shr.encounter.ServiceGiven array
   */
  set serviceGiven(serviceGiven) {
    this._serviceGiven = serviceGiven;
  }

  /**
   * Get the ServiceProvider.
   * @returns {ServiceProvider} The shr.encounter.ServiceProvider
   */
  get serviceProvider() {
    return this._serviceProvider;
  }

  /**
   * Set the ServiceProvider.
   * @param {ServiceProvider} serviceProvider - The shr.encounter.ServiceProvider
   */
  set serviceProvider(serviceProvider) {
    this._serviceProvider = serviceProvider;
  }

  /**
   * Get the TreatmentCooperation.
   * @returns {TreatmentCooperation} The shr.encounter.TreatmentCooperation
   */
  get treatmentCooperation() {
    return this._treatmentCooperation;
  }

  /**
   * Set the TreatmentCooperation.
   * @param {TreatmentCooperation} treatmentCooperation - The shr.encounter.TreatmentCooperation
   */
  set treatmentCooperation(treatmentCooperation) {
    this._treatmentCooperation = treatmentCooperation;
  }

  /**
   * Get the PaymentSource.
   * @returns {PaymentSource} The shr.encounter.PaymentSource
   */
  get paymentSource() {
    return this._paymentSource;
  }

  /**
   * Set the PaymentSource.
   * @param {PaymentSource} paymentSource - The shr.encounter.PaymentSource
   */
  set paymentSource(paymentSource) {
    this._paymentSource = paymentSource;
  }

  // Ommitting getter/setter for TBD: HealthConcern

  // Ommitting getter/setter for TBD: PertinentFindings

  // Ommitting getter/setter for TBD: Diagnosis

  // Ommitting getter/setter for TBD: FullClinicalNote

  // Ommitting getter/setter for TBD: ClinicalSummary

  // Ommitting getter/setter for TBD: TreatmentServiceRendered

  // Ommitting getter/setter for TBD: CompletionStatus

  /**
   * Deserializes JSON data to an instance of the Encounter class.
   * The JSON must be valid against the Encounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Encounter} An instance of Encounter populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Encounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Encounter;
