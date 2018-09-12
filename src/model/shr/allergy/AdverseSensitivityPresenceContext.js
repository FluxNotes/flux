import { setPropertiesFromJSON } from '../../json-helper';

import PresenceContext from '../../cimi/context/PresenceContext';

/**
 * Generated class for shr.allergy.AdverseSensitivityPresenceContext.
 * @extends PresenceContext
 */
class AdverseSensitivityPresenceContext extends PresenceContext {

  /**
   * Get the VerificationStatus.
   * @returns {VerificationStatus} The cimi.context.VerificationStatus
   */
  get verificationStatus() {
    return this._verificationStatus;
  }

  /**
   * Set the VerificationStatus.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The cimi.context.VerificationStatus
   */
  set verificationStatus(verificationStatus) {
    this._verificationStatus = verificationStatus;
  }

  /**
   * Set the VerificationStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The cimi.context.VerificationStatus
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withVerificationStatus(verificationStatus) {
    this.verificationStatus = verificationStatus; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The cimi.context.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * @param {ClinicalStatus} clinicalStatus - The cimi.context.ClinicalStatus
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The cimi.context.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The cimi.context.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The cimi.context.Criticality
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the MostRecentOccurrenceTime.
   * @returns {MostRecentOccurrenceTime} The shr.allergy.MostRecentOccurrenceTime
   */
  get mostRecentOccurrenceTime() {
    return this._mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.allergy.MostRecentOccurrenceTime
   */
  set mostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this._mostRecentOccurrenceTime = mostRecentOccurrenceTime;
  }

  /**
   * Set the MostRecentOccurrenceTime and return 'this' for chaining.
   * @param {MostRecentOccurrenceTime} mostRecentOccurrenceTime - The shr.allergy.MostRecentOccurrenceTime
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withMostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this.mostRecentOccurrenceTime = mostRecentOccurrenceTime; return this;
  }

  /**
   * Get the AdverseReaction array.
   * @returns {Array<AdverseReaction>} The shr.allergy.AdverseReaction array
   */
  get adverseReaction() {
    return this._adverseReaction;
  }

  /**
   * Set the AdverseReaction array.
   * @param {Array<AdverseReaction>} adverseReaction - The shr.allergy.AdverseReaction array
   */
  set adverseReaction(adverseReaction) {
    this._adverseReaction = adverseReaction;
  }

  /**
   * Set the AdverseReaction array and return 'this' for chaining.
   * @param {Array<AdverseReaction>} adverseReaction - The shr.allergy.AdverseReaction array
   * @returns {AdverseSensitivityPresenceContext} this.
   */
  withAdverseReaction(adverseReaction) {
    this.adverseReaction = adverseReaction; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseSensitivityPresenceContext class.
   * The JSON must be valid against the AdverseSensitivityPresenceContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseSensitivityPresenceContext} An instance of AdverseSensitivityPresenceContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AdverseSensitivityPresenceContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseSensitivityPresenceContext class to a JSON object.
   * The JSON is expected to be valid against the AdverseSensitivityPresenceContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/allergy/AdverseSensitivityPresenceContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.verificationStatus != null) {
      inst['VerificationStatus'] = typeof this.verificationStatus.toJSON === 'function' ? this.verificationStatus.toJSON() : this.verificationStatus;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['MostRecentOccurrenceTime'] = typeof this.mostRecentOccurrenceTime.toJSON === 'function' ? this.mostRecentOccurrenceTime.toJSON() : this.mostRecentOccurrenceTime;
    }
    if (this.adverseReaction != null) {
      inst['AdverseReaction'] = this.adverseReaction.map(f => f.toJSON());
    }
    return inst;
  }
}
export default AdverseSensitivityPresenceContext;
