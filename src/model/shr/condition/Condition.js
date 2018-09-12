import { setPropertiesFromJSON } from '../../json-helper';

import SpecializedFinding from '../finding/SpecializedFinding';

/**
 * Generated class for shr.condition.Condition.
 * @extends SpecializedFinding
 */
class Condition extends SpecializedFinding {

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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {Condition} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.condition.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.condition.ClinicalStatus
   * @returns {Condition} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the BodySiteOrCode array.
   * @returns {Array<BodySiteOrCode>} The shr.entity.BodySiteOrCode array
   */
  get bodySiteOrCode() {
    return this._bodySiteOrCode;
  }

  /**
   * Set the BodySiteOrCode array.
   * @param {Array<BodySiteOrCode>} bodySiteOrCode - The shr.entity.BodySiteOrCode array
   */
  set bodySiteOrCode(bodySiteOrCode) {
    this._bodySiteOrCode = bodySiteOrCode;
  }

  /**
   * Set the BodySiteOrCode array and return 'this' for chaining.
   * @param {Array<BodySiteOrCode>} bodySiteOrCode - The shr.entity.BodySiteOrCode array
   * @returns {Condition} this.
   */
  withBodySiteOrCode(bodySiteOrCode) {
    this.bodySiteOrCode = bodySiteOrCode; return this;
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
   * @returns {Condition} this.
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
   * @returns {Condition} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Get the WhenClinicallyRecognized.
   * @returns {WhenClinicallyRecognized} The shr.condition.WhenClinicallyRecognized
   */
  get whenClinicallyRecognized() {
    return this._whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The shr.condition.WhenClinicallyRecognized
   */
  set whenClinicallyRecognized(whenClinicallyRecognized) {
    this._whenClinicallyRecognized = whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized and return 'this' for chaining.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The shr.condition.WhenClinicallyRecognized
   * @returns {Condition} this.
   */
  withWhenClinicallyRecognized(whenClinicallyRecognized) {
    this.whenClinicallyRecognized = whenClinicallyRecognized; return this;
  }

  /**
   * Get the Preexisting.
   * @returns {Preexisting} The shr.condition.Preexisting
   */
  get preexisting() {
    return this._preexisting;
  }

  /**
   * Set the Preexisting.
   * @param {Preexisting} preexisting - The shr.condition.Preexisting
   */
  set preexisting(preexisting) {
    this._preexisting = preexisting;
  }

  /**
   * Set the Preexisting and return 'this' for chaining.
   * @param {Preexisting} preexisting - The shr.condition.Preexisting
   * @returns {Condition} this.
   */
  withPreexisting(preexisting) {
    this.preexisting = preexisting; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.condition.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.condition.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.condition.Severity
   * @returns {Condition} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
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
   * @returns {Condition} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the Stage.
   * @returns {Stage} The shr.condition.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the Stage.
   * @param {Stage} stage - The shr.condition.Stage
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Set the Stage and return 'this' for chaining.
   * @param {Stage} stage - The shr.condition.Stage
   * @returns {Condition} this.
   */
  withStage(stage) {
    this.stage = stage; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Condition class.
   * The JSON must be valid against the Condition JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Condition} An instance of Condition populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Condition();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Condition class to a JSON object.
   * The JSON is expected to be valid against the Condition JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/condition/Condition' };
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
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.bodySiteOrCode != null) {
      inst['BodySiteOrCode'] = this.bodySiteOrCode.map(f => f.toJSON());
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
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
  /**
   * Serializes an instance of the Condition class to a FHIR object.
   * The FHIR is expected to be valid against the Condition FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Condition';
    if (this.bodySiteOrCode != null && this.bodySiteOrCode.bodySite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.bodySiteOrCode.bodySite.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
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
    if (this.whenClinicallyRecognized != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.whenClinicallyRecognized.toFHIR(true));
    }
    if (this.preexisting != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.preexisting.toFHIR(true));
    }
    if (this.criticality != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.criticality.toFHIR(true));
    }
    if (this.clinicalStatus != null) {
      inst['clinicalStatus'] = typeof this.clinicalStatus.toFHIR === 'function' ? this.clinicalStatus.toFHIR() : this.clinicalStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.severity != null) {
      inst['severity'] = typeof this.severity.toFHIR === 'function' ? this.severity.toFHIR() : this.severity;
    }
    if (this.bodySiteOrCode != null && this.bodySiteOrCode.codeableConcept != null) {
      inst['bodySite'] = inst['bodySite'] || [];
      inst['bodySite'].concat(this.bodySiteOrCode.codeableConcept.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.subject != null) {
      inst['subject'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.relatedEncounter != null) {
      inst['context'] = typeof this.relatedEncounter.toFHIR === 'function' ? this.relatedEncounter.toFHIR() : this.relatedEncounter;
    }
    if (this.onset != null) {
      inst['onset[x]'] = typeof this.onset.toFHIR === 'function' ? this.onset.toFHIR() : this.onset;
    }
    if (this.abatement != null) {
      inst['abatement[x]'] = typeof this.abatement.toFHIR === 'function' ? this.abatement.toFHIR() : this.abatement;
    }
    if (this.informant != null) {
      inst['asserter'] = typeof this.informant.toFHIR === 'function' ? this.informant.toFHIR() : this.informant;
    }
    if (this.stage != null) {
      inst['stage'] = typeof this.stage.toFHIR === 'function' ? this.stage.toFHIR() : this.stage;
    }
    if (this.stage != null && this.stage.codeableConcept != null) {
      if (inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['summary'] = typeof this.stage.codeableConcept.toFHIR === 'function' ? this.stage.codeableConcept.toFHIR() : this.stage.codeableConcept;
    }
    if (this.evidence != null) {
      inst['evidence'] = inst['evidence'] || [];
      inst['evidence'].concat(this.evidence.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default Condition;
