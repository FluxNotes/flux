/** Generated from SHR definition for shr.encounter.Encounter */
class Encounter {

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
   * Getter for shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Setter for shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTimeVal) {
    this._occurrenceTime = occurrenceTimeVal;
  }

  /**
   * Getter for shr.encounter.ReferralDate
   */
  get referralDate() {
    return this._referralDate;
  }

  /**
   * Setter for shr.encounter.ReferralDate
   */
  set referralDate(referralDateVal) {
    this._referralDate = referralDateVal;
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
   * Getter for shr.encounter.ReferralSourceType
   */
  get referralSourceType() {
    return this._referralSourceType;
  }

  /**
   * Setter for shr.encounter.ReferralSourceType
   */
  set referralSourceType(referralSourceTypeVal) {
    this._referralSourceType = referralSourceTypeVal;
  }

  /**
   * Getter for shr.encounter.EncounterClass
   */
  get encounterClass() {
    return this._encounterClass;
  }

  /**
   * Setter for shr.encounter.EncounterClass
   */
  set encounterClass(encounterClassVal) {
    this._encounterClass = encounterClassVal;
  }

  /**
   * Getter for shr.encounter.ServiceGiven[]
   */
  get serviceGiven() {
    return this._serviceGiven;
  }

  /**
   * Setter for shr.encounter.ServiceGiven[]
   */
  set serviceGiven(serviceGivenVal) {
    this._serviceGiven = serviceGivenVal;
  }

  /**
   * Getter for shr.encounter.EncounterNonOccurrenceModifier
   */
  get encounterNonOccurrenceModifier() {
    return this._encounterNonOccurrenceModifier;
  }

  /**
   * Setter for shr.encounter.EncounterNonOccurrenceModifier
   */
  set encounterNonOccurrenceModifier(encounterNonOccurrenceModifierVal) {
    this._encounterNonOccurrenceModifier = encounterNonOccurrenceModifierVal;
  }

  /**
   * Getter for shr.actor.Participant[]
   */
  get participant() {
    return this._participant;
  }

  /**
   * Setter for shr.actor.Participant[]
   */
  set participant(participantVal) {
    this._participant = participantVal;
  }

  /**
   * Getter for shr.encounter.ProviderOrganization
   */
  get providerOrganization() {
    return this._providerOrganization;
  }

  /**
   * Setter for shr.encounter.ProviderOrganization
   */
  set providerOrganization(providerOrganizationVal) {
    this._providerOrganization = providerOrganizationVal;
  }

  /**
   * Getter for shr.encounter.Facility
   */
  get facility() {
    return this._facility;
  }

  /**
   * Setter for shr.encounter.Facility
   */
  set facility(facilityVal) {
    this._facility = facilityVal;
  }

  /**
   * Getter for shr.encounter.TreatmentCooperation
   */
  get treatmentCooperation() {
    return this._treatmentCooperation;
  }

  /**
   * Setter for shr.encounter.TreatmentCooperation
   */
  set treatmentCooperation(treatmentCooperationVal) {
    this._treatmentCooperation = treatmentCooperationVal;
  }

  // Ommitting getter/setter for field: TBD<HealthConcern>

  // Ommitting getter/setter for field: TBD<PertinentFindings>[]

  // Ommitting getter/setter for field: TBD<Diagnosis>[]

  // Ommitting getter/setter for field: TBD<FullClinicalNote>

  // Ommitting getter/setter for field: TBD<ClinicalSummary>

  // Ommitting getter/setter for field: TBD<TreatmentServiceRendered>[]

  // Ommitting getter/setter for field: TBD<CompletionStatus>

  /**
   * Getter for shr.encounter.PaymentSource
   */
  get paymentSource() {
    return this._paymentSource;
  }

  /**
   * Setter for shr.encounter.PaymentSource
   */
  set paymentSource(paymentSourceVal) {
    this._paymentSource = paymentSourceVal;
  }

}

export default Encounter;
