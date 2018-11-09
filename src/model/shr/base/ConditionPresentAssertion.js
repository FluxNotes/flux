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
   * Get the ConditionCause array.
   * @returns {Array<ConditionCause>} The shr.base.ConditionCause array
   */
  get conditionCause() {
    return this._conditionCause;
  }

  /**
   * Set the ConditionCause array.
   * @param {Array<ConditionCause>} conditionCause - The shr.base.ConditionCause array
   */
  set conditionCause(conditionCause) {
    this._conditionCause = conditionCause;
  }

  /**
   * Set the ConditionCause array and return 'this' for chaining.
   * @param {Array<ConditionCause>} conditionCause - The shr.base.ConditionCause array
   * @returns {ConditionPresentAssertion} this.
   */
  withConditionCause(conditionCause) {
    this.conditionCause = conditionCause; return this;
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
   * Get the WhenClinicallyRecognized.
   * @returns {WhenClinicallyRecognized} The shr.base.WhenClinicallyRecognized
   */
  get whenClinicallyRecognized() {
    return this._whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The shr.base.WhenClinicallyRecognized
   */
  set whenClinicallyRecognized(whenClinicallyRecognized) {
    this._whenClinicallyRecognized = whenClinicallyRecognized;
  }

  /**
   * Set the WhenClinicallyRecognized and return 'this' for chaining.
   * @param {WhenClinicallyRecognized} whenClinicallyRecognized - The shr.base.WhenClinicallyRecognized
   * @returns {ConditionPresentAssertion} this.
   */
  withWhenClinicallyRecognized(whenClinicallyRecognized) {
    this.whenClinicallyRecognized = whenClinicallyRecognized; return this;
  }

  /**
   * Get the PresentOnAdmission.
   * @returns {PresentOnAdmission} The shr.base.PresentOnAdmission
   */
  get presentOnAdmission() {
    return this._presentOnAdmission;
  }

  /**
   * Set the PresentOnAdmission.
   * @param {PresentOnAdmission} presentOnAdmission - The shr.base.PresentOnAdmission
   */
  set presentOnAdmission(presentOnAdmission) {
    this._presentOnAdmission = presentOnAdmission;
  }

  /**
   * Set the PresentOnAdmission and return 'this' for chaining.
   * @param {PresentOnAdmission} presentOnAdmission - The shr.base.PresentOnAdmission
   * @returns {ConditionPresentAssertion} this.
   */
  withPresentOnAdmission(presentOnAdmission) {
    this.presentOnAdmission = presentOnAdmission; return this;
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
   * Get the Stage.
   * @returns {Stage} The shr.base.Stage
   */
  get stage() {
    return this._stage;
  }

  /**
   * Set the Stage.
   * @param {Stage} stage - The shr.base.Stage
   */
  set stage(stage) {
    this._stage = stage;
  }

  /**
   * Set the Stage and return 'this' for chaining.
   * @param {Stage} stage - The shr.base.Stage
   * @returns {ConditionPresentAssertion} this.
   */
  withStage(stage) {
    this.stage = stage; return this;
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
  static fromJSON(json={}) {
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ConditionPresentAssertion' };
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
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
    }
    if (this.objectIdentifier != null) {
      inst['ObjectIdentifier'] = typeof this.objectIdentifier.toJSON === 'function' ? this.objectIdentifier.toJSON() : this.objectIdentifier;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.conditionCause != null) {
      inst['ConditionCause'] = this.conditionCause.map(f => f.toJSON());
    }
    if (this.clinicalStatus != null) {
      inst['ClinicalStatus'] = typeof this.clinicalStatus.toJSON === 'function' ? this.clinicalStatus.toJSON() : this.clinicalStatus;
    }
    if (this.whenClinicallyRecognized != null) {
      inst['WhenClinicallyRecognized'] = typeof this.whenClinicallyRecognized.toJSON === 'function' ? this.whenClinicallyRecognized.toJSON() : this.whenClinicallyRecognized;
    }
    if (this.presentOnAdmission != null) {
      inst['PresentOnAdmission'] = typeof this.presentOnAdmission.toJSON === 'function' ? this.presentOnAdmission.toJSON() : this.presentOnAdmission;
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
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Condition';
    if (this.anatomicalLocation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.anatomicalLocation.toFHIR === 'function' ? this.anatomicalLocation.toFHIR(true) : this.anatomicalLocation);
    }
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.findingMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR(true) : this.findingMethod);
    }
    if (this.relevantTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR(true) : this.relevantTime);
    }
    if (this.nonIndependentFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.nonIndependentFinding.toFHIR === 'function' ? this.nonIndependentFinding.toFHIR(true) : this.nonIndependentFinding);
    }
    if (this.objectIdentifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.objectIdentifier.toFHIR === 'function' ? this.objectIdentifier.toFHIR(true) : this.objectIdentifier);
    }
    if (this.certainty != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.certainty.toFHIR === 'function' ? this.certainty.toFHIR(true) : this.certainty);
    }
    if (this.conditionCause != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.conditionCause.toFHIR === 'function' ? this.conditionCause.toFHIR(true) : this.conditionCause);
    }
    if (this.whenClinicallyRecognized != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.whenClinicallyRecognized.toFHIR === 'function' ? this.whenClinicallyRecognized.toFHIR(true) : this.whenClinicallyRecognized);
    }
    if (this.presentOnAdmission != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.presentOnAdmission.toFHIR === 'function' ? this.presentOnAdmission.toFHIR(true) : this.presentOnAdmission);
    }
    if (this.criticality != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.criticality.toFHIR === 'function' ? this.criticality.toFHIR(true) : this.criticality);
    }
    if (this.clinicalStatus != null) {
      inst['clinicalStatus'] = typeof this.clinicalStatus.toFHIR === 'function' ? this.clinicalStatus.toFHIR() : this.clinicalStatus;
    }
    if (this.findingStatus != null) {
      inst['verificationStatus'] = typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR() : this.findingStatus;
    }
    if (this.category != null) {
      inst['category'] = inst ['category'] || [];
      inst['category'] = inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.severity != null) {
      inst['severity'] = typeof this.severity.toFHIR === 'function' ? this.severity.toFHIR() : this.severity;
    }
    if (this.findingTopicCode != null) {
      inst['code'] = typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR() : this.findingTopicCode;
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
    if (this.stage != null) {
      inst['stage'] = typeof this.stage.toFHIR === 'function' ? this.stage.toFHIR() : this.stage;
    }
    if (this.stage != null && this.stage.codeableConcept != null) {
      if(inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['summary'] = typeof this.stage.codeableConcept.toFHIR === 'function' ? this.stage.codeableConcept.toFHIR() : this.stage.codeableConcept;
    }
    if (this.stage != null && this.stage.stageDetail != null) {
      if(inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['assessment'] = inst ['stage']['assessment'] || [];
      inst['stage']['assessment'].push(typeof this.stage.stageDetail.toFHIR === 'function' ? this.stage.stageDetail.toFHIR() : this.stage.stageDetail);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ConditionPresentAssertion class.
   * The FHIR must be valid against the ConditionPresentAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ConditionPresentAssertion} An instance of ConditionPresentAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ConditionPresentAssertion();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/StructureDefinition/condition-targetBodySite');
      if (match != null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension');
      if (match != null) {
        inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension');
      if (match != null) {
        inst.patient = createInstanceFromFHIR('shr.entity.Patient', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension');
      if (match != null) {
        inst.specificFocusOfFinding = createInstanceFromFHIR('shr.base.SpecificFocusOfFinding', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingMethod-extension');
      if (match != null) {
        inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelevantTime-extension');
      if (match != null) {
        inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-NonIndependentFinding-extension');
      if (match != null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ObjectIdentifier-extension');
      if (match != null) {
        inst.objectIdentifier = createInstanceFromFHIR('shr.base.ObjectIdentifier', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Certainty-extension');
      if (match != null) {
        inst.certainty = createInstanceFromFHIR('shr.base.Certainty', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ConditionCause-extension');
      if (match != null) {
        inst.conditionCause = createInstanceFromFHIR('shr.base.ConditionCause', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-WhenClinicallyRecognized-extension');
      if (match != null) {
        inst.whenClinicallyRecognized = createInstanceFromFHIR('shr.base.WhenClinicallyRecognized', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-PresentOnAdmission-extension');
      if (match != null) {
        inst.presentOnAdmission = createInstanceFromFHIR('shr.base.PresentOnAdmission', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Criticality-extension');
      if (match != null) {
        inst.criticality = createInstanceFromFHIR('shr.base.Criticality', match, true);
      }
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
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['onset[x]'] != null) {
      inst.onset = createInstanceFromFHIR('shr.base.Onset', fhir['onset[x]']);
    }
    if (fhir['abatement[x]'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatement[x]']);
    }
    if (fhir['stage'] != null) {
      inst.stage = createInstanceFromFHIR('shr.base.Stage', fhir['stage']);
    }
    if (fhir['stage'] != null && fhir['stage']['summary'] != null) {
      if(inst.stage == null) {
        inst.stage = createInstanceFromFHIR('shr.base.Stage', {});
      }
      inst.stage.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', fhir['stage']['summary']);
    }
    if (fhir['stage'] != null && fhir['stage']['assessment'] != null) {
      if(inst.stage == null) {
        inst.stage = createInstanceFromFHIR('shr.base.Stage', {});
      }
      inst.stage.stageDetail = createInstanceFromFHIR('shr.base.StageDetail', fhir['stage']['assessment'][0]);
    }
    return inst;
  }

}
export default ConditionPresentAssertion;
