import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import PresenceAssertion from './PresenceAssertion';

/**
 * Generated class for shr.base.ConditionPresentAssertion.
 * @extends PresenceAssertion
 */
class ConditionPresentAssertion extends PresenceAssertion {

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
   * @returns {ConditionPresentAssertion} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the FindingTopicCode.
   * @returns {FindingTopicCode} The shr.base.FindingTopicCode
   */
  get findingTopicCode() {
    return this._findingTopicCode;
  }

  /**
   * Set the FindingTopicCode.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   */
  set findingTopicCode(findingTopicCode) {
    this._findingTopicCode = findingTopicCode;
  }

  /**
   * Set the FindingTopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingTopicCode} findingTopicCode - The shr.base.FindingTopicCode
   * @returns {ConditionPresentAssertion} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the Patient.
   * @returns {Patient} The shr.entity.Patient
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the Patient.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {ConditionPresentAssertion} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the SpecificFocusOfFinding.
   * @returns {SpecificFocusOfFinding} The shr.base.SpecificFocusOfFinding
   */
  get specificFocusOfFinding() {
    return this._specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   */
  set specificFocusOfFinding(specificFocusOfFinding) {
    this._specificFocusOfFinding = specificFocusOfFinding;
  }

  /**
   * Set the SpecificFocusOfFinding and return 'this' for chaining.
   * @param {SpecificFocusOfFinding} specificFocusOfFinding - The shr.base.SpecificFocusOfFinding
   * @returns {ConditionPresentAssertion} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
  }

  /**
   * Get the FindingMethod.
   * @returns {FindingMethod} The shr.base.FindingMethod
   */
  get findingMethod() {
    return this._findingMethod;
  }

  /**
   * Set the FindingMethod.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   */
  set findingMethod(findingMethod) {
    this._findingMethod = findingMethod;
  }

  /**
   * Set the FindingMethod and return 'this' for chaining.
   * @param {FindingMethod} findingMethod - The shr.base.FindingMethod
   * @returns {ConditionPresentAssertion} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
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
   * @returns {ConditionPresentAssertion} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the AnatomicalLocation array.
   * @returns {Array<AnatomicalLocation>} The shr.core.AnatomicalLocation array
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The shr.core.AnatomicalLocation array
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation array and return 'this' for chaining.
   * @param {Array<AnatomicalLocation>} anatomicalLocation - The shr.core.AnatomicalLocation array
   * @returns {ConditionPresentAssertion} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the ClinicalStatus.
   * @returns {ClinicalStatus} The shr.base.ClinicalStatus
   */
  get clinicalStatus() {
    return this._clinicalStatus;
  }

  /**
   * Set the ClinicalStatus.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   */
  set clinicalStatus(clinicalStatus) {
    this._clinicalStatus = clinicalStatus;
  }

  /**
   * Set the ClinicalStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {ClinicalStatus} clinicalStatus - The shr.base.ClinicalStatus
   * @returns {ConditionPresentAssertion} this.
   */
  withClinicalStatus(clinicalStatus) {
    this.clinicalStatus = clinicalStatus; return this;
  }

  /**
   * Get the Severity.
   * @returns {Severity} The shr.base.Severity
   */
  get severity() {
    return this._severity;
  }

  /**
   * Set the Severity.
   * @param {Severity} severity - The shr.base.Severity
   */
  set severity(severity) {
    this._severity = severity;
  }

  /**
   * Set the Severity and return 'this' for chaining.
   * @param {Severity} severity - The shr.base.Severity
   * @returns {ConditionPresentAssertion} this.
   */
  withSeverity(severity) {
    this.severity = severity; return this;
  }

  /**
   * Get the Criticality.
   * @returns {Criticality} The shr.base.Criticality
   */
  get criticality() {
    return this._criticality;
  }

  /**
   * Set the Criticality.
   * @param {Criticality} criticality - The shr.base.Criticality
   */
  set criticality(criticality) {
    this._criticality = criticality;
  }

  /**
   * Set the Criticality and return 'this' for chaining.
   * @param {Criticality} criticality - The shr.base.Criticality
   * @returns {ConditionPresentAssertion} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
  }

  /**
   * Get the StageInformation.
   * @returns {StageInformation} The shr.base.StageInformation
   */
  get stageInformation() {
    return this._stageInformation;
  }

  /**
   * Set the StageInformation.
   * @param {StageInformation} stageInformation - The shr.base.StageInformation
   */
  set stageInformation(stageInformation) {
    this._stageInformation = stageInformation;
  }

  /**
   * Set the StageInformation and return 'this' for chaining.
   * @param {StageInformation} stageInformation - The shr.base.StageInformation
   * @returns {ConditionPresentAssertion} this.
   */
  withStageInformation(stageInformation) {
    this.stageInformation = stageInformation; return this;
  }

  /**
   * Get the Onset.
   * @returns {Onset} The shr.base.Onset
   */
  get onset() {
    return this._onset;
  }

  /**
   * Set the Onset.
   * @param {Onset} onset - The shr.base.Onset
   */
  set onset(onset) {
    this._onset = onset;
  }

  /**
   * Set the Onset and return 'this' for chaining.
   * @param {Onset} onset - The shr.base.Onset
   * @returns {ConditionPresentAssertion} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the Abatement.
   * @returns {Abatement} The shr.base.Abatement
   */
  get abatement() {
    return this._abatement;
  }

  /**
   * Set the Abatement.
   * @param {Abatement} abatement - The shr.base.Abatement
   */
  set abatement(abatement) {
    this._abatement = abatement;
  }

  /**
   * Set the Abatement and return 'this' for chaining.
   * @param {Abatement} abatement - The shr.base.Abatement
   * @returns {ConditionPresentAssertion} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ConditionPresentAssertion class.
   * The JSON must be valid against the ConditionPresentAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ConditionPresentAssertion} An instance of ConditionPresentAssertion populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ConditionPresentAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ConditionPresentAssertion class to a JSON object.
   * The JSON is expected to be valid against the ConditionPresentAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/base/ConditionPresentAssertion' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.objectIdentifier != null) {
      inst['ObjectIdentifier'] = typeof this.objectIdentifier.toJSON === 'function' ? this.objectIdentifier.toJSON() : this.objectIdentifier;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.severity != null) {
      inst['Severity'] = typeof this.severity.toJSON === 'function' ? this.severity.toJSON() : this.severity;
    }
    if (this.criticality != null) {
      inst['Criticality'] = typeof this.criticality.toJSON === 'function' ? this.criticality.toJSON() : this.criticality;
    }
    if (this.stageInformation != null) {
      inst['StageInformation'] = typeof this.stageInformation.toJSON === 'function' ? this.stageInformation.toJSON() : this.stageInformation;
    }
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.abatement != null) {
      inst['Abatement'] = typeof this.abatement.toJSON === 'function' ? this.abatement.toJSON() : this.abatement;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ConditionPresentAssertion class to a FHIR object.
   * The FHIR is expected to be valid against the ConditionPresentAssertion FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Condition';
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR === 'function' ? this.anatomicalLocation.anatomicalLocationOrLandmarkCode.toFHIR(true) : this.anatomicalLocation.anatomicalLocationOrLandmarkCode);
    }
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
    }
    if (this.certainty != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.certainty.toFHIR === 'function' ? this.certainty.toFHIR(true) : this.certainty);
    }
    if (this.criticality != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.criticality.toFHIR === 'function' ? this.criticality.toFHIR(true) : this.criticality);
    }
    if (this.objectIdentifier != null) {
      inst['identifier'] = inst['identifier'] || [];
      inst['identifier'].push(typeof this.objectIdentifier.toFHIR === 'function' ? this.objectIdentifier.toFHIR() : this.objectIdentifier);
    }
    if (this.clinicalStatus != null) {
      inst['clinicalStatus'] = typeof this.clinicalStatus.toFHIR === 'function' ? this.clinicalStatus.toFHIR() : this.clinicalStatus;
    }
    if (this.findingStatus != null) {
      inst['verificationStatus'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'] = inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.severity != null) {
      inst['severity'] = typeof this.severity.toFHIR === 'function' ? this.severity.toFHIR() : this.severity;
    }
    if (this.findingTopicCode != null) {
      inst['code'] = typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR() : this.findingTopicCode;
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.onset != null) {
      inst['onset[x]'] = typeof this.onset.toFHIR === 'function' ? this.onset.toFHIR() : this.onset;
    }
    if (this.abatement != null) {
      inst['abatement[x]'] = typeof this.abatement.toFHIR === 'function' ? this.abatement.toFHIR() : this.abatement;
    }
    if (this.stageInformation != null) {
      inst['stage'] = typeof this.stageInformation.toFHIR === 'function' ? this.stageInformation.toFHIR() : this.stageInformation;
    }
    if (this.stageInformation != null && this.stageInformation.stageSummary != null) {
      if (inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['summary'] = typeof this.stageInformation.stageSummary.toFHIR === 'function' ? this.stageInformation.stageSummary.toFHIR() : this.stageInformation.stageSummary;
    }
    if (this.stageInformation != null && this.stageInformation.stageDetail != null) {
      if (inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['assessment'] = inst['stage']['assessment'] || [];
      inst['stage']['assessment'].push(typeof this.stageInformation.stageDetail.toFHIR === 'function' ? this.stageInformation.stageDetail.toFHIR() : this.stageInformation.stageDetail);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ConditionPresentAssertion class.
   * The FHIR must be valid against the ConditionPresentAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ConditionPresentAssertion} An instance of ConditionPresentAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new ConditionPresentAssertion();
    if (fhir['extension'] != null) {
      if (inst.anatomicalLocation === null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      const match = fhir['extension'].find(e => e.url === 'http://hl7.org/fhir/StructureDefinition/condition-targetBodySite');
      if (match != null) {
        inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', match, true);
      }
    }
    if (fhir['identifier'] != null) {
      inst.objectIdentifier = createInstanceFromFHIR('shr.base.ObjectIdentifier', fhir['identifier'][0]);
    }
    if (fhir['clinicalStatus'] != null) {
      inst.clinicalStatus = createInstanceFromFHIR('shr.base.ClinicalStatus', fhir['clinicalStatus']);
    }
    if (fhir['verificationStatus'] != null) {
      inst.findingStatus = createInstanceFromFHIR('shr.base.FindingStatus', fhir['verificationStatus']);
    }
    if (fhir['category'] != null) {
      inst.category = inst.category || [];
      inst.category = inst.category.concat(fhir['category'].map(f => createInstanceFromFHIR('shr.core.Category', f)));
    }
    if (fhir['severity'] != null) {
      inst.severity = createInstanceFromFHIR('shr.base.Severity', fhir['severity']);
    }
    if (fhir['code'] != null) {
      inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', fhir['code']);
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['onsetDateTime'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onsetDateTime']);
    }
    if (fhir['onsetAge'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onsetAge']);
    }
    if (fhir['onsetPeriod'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onsetPeriod']);
    }
    if (fhir['onsetRange'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onsetRange']);
    }
    if (fhir['onsetString'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onsetString']);
    }
    if (fhir['abatementDateTime'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementDateTime']);
    }
    if (fhir['abatementAge'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementAge']);
    }
    if (fhir['abatementBoolean'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementBoolean']);
    }
    if (fhir['abatementPeriod'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementPeriod']);
    }
    if (fhir['abatementRange'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementRange']);
    }
    if (fhir['abatementString'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementString']);
    }
    if (fhir['stage'] != null) {
      inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', fhir['stage']);
    }
    if (fhir['stage'] != null && fhir['stage']['summary'] != null) {
      if (inst.stageInformation === null) {
        inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', {});
      }
      inst.stageInformation.stageSummary = createInstanceFromFHIR('shr.base.StageSummary', fhir['stage']['summary']);
    }
    if (fhir['stage'] != null && fhir['stage']['assessment'] != null) {
      if (inst.stageInformation === null) {
        inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', {});
      }
      inst.stageInformation.stageDetail = createInstanceFromFHIR('shr.base.StageDetail', fhir['stage']['assessment'][0]);
    }
    return inst;
  }

}
export default ConditionPresentAssertion;
