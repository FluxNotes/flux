import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.allergy.AllergyIntolerance.
 * @extends SpecializedFinding
 */
class AllergyIntolerance extends SpecializedFinding {

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
   * @returns {AllergyIntolerance} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the value (aliases codeableConcept).
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get value() {
    return this._codeableConcept;
  }

  /**
   * Set the value (aliases codeableConcept).
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   */
  set value(value) {
    this._codeableConcept = value;
  }

  /**
   * Set the value (aliases codeableConcept) and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} value - The shr.core.CodeableConcept
   * @returns {AllergyIntolerance} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the CodeableConcept.
   * @returns {CodeableConcept} The shr.core.CodeableConcept
   */
  get codeableConcept() {
    return this._codeableConcept;
  }

  /**
   * Set the CodeableConcept.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   */
  set codeableConcept(codeableConcept) {
    this._codeableConcept = codeableConcept;
  }

  /**
   * Set the CodeableConcept and return 'this' for chaining.
   * This field/value is required.
   * @param {CodeableConcept} codeableConcept - The shr.core.CodeableConcept
   * @returns {AllergyIntolerance} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
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
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Set the Subject and return 'this' for chaining.
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {AllergyIntolerance} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The shr.condition.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * @param {ClinicalStatus} clinicalStatus - The shr.condition.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * @param {ClinicalStatus} clinicalStatus - The shr.condition.ClinicalStatus
   * @returns {AllergyIntolerance} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the SubstanceCategory array.
   * @returns {Array<SubstanceCategory>} The shr.allergy.SubstanceCategory array
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Set the SubstanceCategory array.
   * @param {Array<SubstanceCategory>} substanceCategory - The shr.allergy.SubstanceCategory array
   */
  set substanceCategory(substanceCategory) {
    this._substanceCategory = substanceCategory;
  }

  /**
   * Set the SubstanceCategory array and return 'this' for chaining.
   * @param {Array<SubstanceCategory>} substanceCategory - The shr.allergy.SubstanceCategory array
   * @returns {AllergyIntolerance} this.
   */
  withSubstanceCategory(substanceCategory) {
    this.substanceCategory = substanceCategory; return this;
  }

  /**
   * Get the VerificationStatus.
   * @returns {VerificationStatus} The shr.allergy.VerificationStatus
   */
  get verificationStatus() {
    return this._verificationStatus;
  }

  /**
   * Set the VerificationStatus.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The shr.allergy.VerificationStatus
   */
  set verificationStatus(verificationStatus) {
    this._verificationStatus = verificationStatus;
  }

  /**
   * Set the VerificationStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {VerificationStatus} verificationStatus - The shr.allergy.VerificationStatus
   * @returns {AllergyIntolerance} this.
   */
  withVerificationStatus(verificationStatus) {
    this.verificationStatus = verificationStatus; return this;
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
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.entity.Type
   * @returns {AllergyIntolerance} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The shr.condition.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The shr.condition.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The shr.condition.Criticality
   * @returns {AllergyIntolerance} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
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
   * @returns {AllergyIntolerance} this.
   */
  withAdverseReaction(adverseReaction) {
    this.adverseReaction = adverseReaction; return this;
  }

  /**
   * Get the Onset.
   * @returns {Onset} The shr.condition.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The shr.condition.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The shr.condition.Onset
   * @returns {AllergyIntolerance} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The shr.condition.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The shr.condition.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The shr.condition.Abatement
   * @returns {AllergyIntolerance} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
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
   * @returns {AllergyIntolerance} this.
   */
  withMostRecentOccurrenceTime(mostRecentOccurrenceTime) {
    this.mostRecentOccurrenceTime = mostRecentOccurrenceTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AllergyIntolerance class.
   * The JSON must be valid against the AllergyIntolerance JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AllergyIntolerance} An instance of AllergyIntolerance populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AllergyIntolerance();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AllergyIntolerance class to a JSON object.
   * The JSON is expected to be valid against the AllergyIntolerance JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/allergy/AllergyIntolerance' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.substanceCategory != null) {
      inst['SubstanceCategory'] = this.substanceCategory.map(f => f.toJSON());
    }
    if (this.verificationStatus != null) {
      inst['VerificationStatus'] = typeof this.verificationStatus.toJSON === 'function' ? this.verificationStatus.toJSON() : this.verificationStatus;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.adverseReaction != null) {
      inst['AdverseReaction'] = this.adverseReaction.map(f => f.toJSON());
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['MostRecentOccurrenceTime'] = typeof this.mostRecentOccurrenceTime.toJSON === 'function' ? this.mostRecentOccurrenceTime.toJSON() : this.mostRecentOccurrenceTime;
    }
    return inst;
  }
  /**
   * Serializes an instance of the AllergyIntolerance class to a FHIR object.
   * The FHIR is expected to be valid against the AllergyIntolerance FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'AllergyIntolerance';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.focalSubject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubject.toFHIR(true));
    }
    if (this.focalSubjectReference != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.focalSubjectReference.toFHIR(true));
    }
    if (this.findingMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingMethod.toFHIR(true));
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.findingStatus.toFHIR(true));
    }
    if (this.evidence != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.evidence.toFHIR(true));
    }
    if (this.abatement != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.abatement.toFHIR(true));
    }
    if (this.clinicalStatus != null) {
      inst['clinicalStatus'] = typeof this.clinicalStatus.toFHIR === 'function' ? this.clinicalStatus.toFHIR() : this.clinicalStatus;
    }
    if (this.verificationStatus != null) {
      inst['verificationStatus'] = typeof this.verificationStatus.toFHIR === 'function' ? this.verificationStatus.toFHIR() : this.verificationStatus;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.substanceCategory != null) {
      inst['category'] = inst['category'] || [];
      inst['category'].concat(this.substanceCategory.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.criticality != null) {
      inst['criticality'] = typeof this.criticality.toFHIR === 'function' ? this.criticality.toFHIR() : this.criticality;
    }
    if (this.subject != null) {
      inst['patient'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.onset != null) {
      inst['onset[x]'] = typeof this.onset.toFHIR === 'function' ? this.onset.toFHIR() : this.onset;
    }
    if (this.author != null) {
      inst['recorder'] = typeof this.author.toFHIR === 'function' ? this.author.toFHIR() : this.author;
    }
    if (this.informant != null) {
      inst['asserter'] = typeof this.informant.toFHIR === 'function' ? this.informant.toFHIR() : this.informant;
    }
    if (this.mostRecentOccurrenceTime != null) {
      inst['lastOccurrence'] = typeof this.mostRecentOccurrenceTime.toFHIR === 'function' ? this.mostRecentOccurrenceTime.toFHIR() : this.mostRecentOccurrenceTime;
    }
    if (this.adverseReaction != null && this.adverseReaction.allergenIrritant != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['substance'] = inst['reaction']['substance'] || [];
      inst['reaction']['substance'].concat(this.adverseReaction.allergenIrritant.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseReaction != null && this.adverseReaction.manifestation != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['manifestation'] = inst['reaction']['manifestation'] || [];
      inst['reaction']['manifestation'].concat(this.adverseReaction.manifestation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseReaction != null && this.adverseReaction.details != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['description'] = inst['reaction']['description'] || [];
      inst['reaction']['description'].concat(this.adverseReaction.details.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseReaction != null && this.adverseReaction.occurrenceTime != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['onset'] = inst['reaction']['onset'] || [];
      inst['reaction']['onset'].concat(this.adverseReaction.occurrenceTime.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseReaction != null && this.adverseReaction.severity != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['severity'] = inst['reaction']['severity'] || [];
      inst['reaction']['severity'].concat(this.adverseReaction.severity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.adverseReaction != null && this.adverseReaction.routeIntoBody != null) {
      if (inst['reaction'] === undefined) {
        inst['reaction'] = {};
      }
      inst['reaction']['exposureRoute'] = inst['reaction']['exposureRoute'] || [];
      inst['reaction']['exposureRoute'].concat(this.adverseReaction.routeIntoBody.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default AllergyIntolerance;
