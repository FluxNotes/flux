import { setPropertiesFromJSON } from '../../json-helper';

import ConditionPresenceContext from '../../cimi/context/ConditionPresenceContext';

/**
 * Generated class for shr.wound.WoundPresenceContext.
 * @extends ConditionPresenceContext
 */
class WoundPresenceContext extends ConditionPresenceContext {

  /**
   * Get the Onset.
   * @returns {Onset} The cimi.context.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The cimi.context.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The cimi.context.Onset
   * @returns {WoundPresenceContext} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The cimi.context.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The cimi.context.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The cimi.context.Abatement
   * @returns {WoundPresenceContext} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The cimi.context.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * @param {Certainty} certainty - The cimi.context.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Set the Certainty and return 'this' for chaining.
   * @param {Certainty} certainty - The cimi.context.Certainty
   * @returns {WoundPresenceContext} this.
   */
  withCertainty(certainty) {
    this.certainty = certainty; return this;
  }

  /**
   * Get the EpisodeOfWound.
   * @returns {EpisodeOfWound} The shr.wound.EpisodeOfWound
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the EpisodeOfWound.
   * This field/value is required.
   * @param {EpisodeOfWound} clinicalStatus - The shr.wound.EpisodeOfWound
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the EpisodeOfWound and return 'this' for chaining.
   * This field/value is required.
   * @param {EpisodeOfWound} clinicalStatus - The shr.wound.EpisodeOfWound
   * @returns {WoundPresenceContext} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The cimi.context.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The cimi.context.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The cimi.context.Severity
   * @returns {WoundPresenceContext} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
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
   * @returns {WoundPresenceContext} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the PressureUlcerStageNPUAP.
   * @returns {PressureUlcerStageNPUAP} The shr.wound.PressureUlcerStageNPUAP
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the PressureUlcerStageNPUAP.
   * @param {PressureUlcerStageNPUAP} stage - The shr.wound.PressureUlcerStageNPUAP
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Set the PressureUlcerStageNPUAP and return 'this' for chaining.
   * @param {PressureUlcerStageNPUAP} stage - The shr.wound.PressureUlcerStageNPUAP
   * @returns {WoundPresenceContext} this.
   */
  withStage(stage) {
    this.stage = stage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundPresenceContext class.
   * The JSON must be valid against the WoundPresenceContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundPresenceContext} An instance of WoundPresenceContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundPresenceContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundPresenceContext class to a JSON object.
   * The JSON is expected to be valid against the WoundPresenceContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundPresenceContext' } };
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
    if (this.whenClinicallyRecognized != null) {
      inst['WhenClinicallyRecognized'] = typeof this.whenClinicallyRecognized.toJSON === 'function' ? this.whenClinicallyRecognized.toJSON() : this.whenClinicallyRecognized;
    }
    if (this.preexisting != null) {
      inst['Preexisting'] = typeof this.preexisting.toJSON === 'function' ? this.preexisting.toJSON() : this.preexisting;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.stage != null) {
      inst['Stage'] = typeof this.stage.toJSON === 'function' ? this.stage.toJSON() : this.stage;
    }
    return inst;
  }
}
export default WoundPresenceContext;
