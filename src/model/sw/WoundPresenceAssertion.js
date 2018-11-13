import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import ConditionPresentAssertion from '../shr/base/ConditionPresentAssertion';

/**
 * Generated class for sw.WoundPresenceAssertion.
 * @extends ConditionPresentAssertion
 */
class WoundPresenceAssertion extends ConditionPresentAssertion {

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
   * @returns {WoundPresenceAssertion} this.
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
   * @returns {WoundPresenceAssertion} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
  }

  /**
   * Get the WoundIdentifier.
   * @returns {WoundIdentifier} The sw.WoundIdentifier
   */
  get objectIdentifier() {
    return this._objectIdentifier;
  }

  /**
   * Set the WoundIdentifier.
   * @param {WoundIdentifier} objectIdentifier - The sw.WoundIdentifier
   */
  set objectIdentifier(objectIdentifier) {
    this._objectIdentifier = objectIdentifier;
  }

  /**
   * Set the WoundIdentifier and return 'this' for chaining.
   * @param {WoundIdentifier} objectIdentifier - The sw.WoundIdentifier
   * @returns {WoundPresenceAssertion} this.
   */
  withObjectIdentifier(objectIdentifier) {
    this.objectIdentifier = objectIdentifier; return this;
  }

  /**
   * Get the Certainty.
   * @returns {Certainty} The shr.base.Certainty
   */
  get certainty() {
    return this._certainty;
  }

  /**
   * Set the Certainty.
   * @param {Certainty} certainty - The shr.base.Certainty
   */
  set certainty(certainty) {
    this._certainty = certainty;
  }

  /**
   * Set the Certainty and return 'this' for chaining.
   * @param {Certainty} certainty - The shr.base.Certainty
   * @returns {WoundPresenceAssertion} this.
   */
  withCertainty(certainty) {
    this.certainty = certainty; return this;
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
   * @returns {WoundPresenceAssertion} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the WoundAnatomicalLocation array.
   * @returns {Array<WoundAnatomicalLocation>} The sw.WoundAnatomicalLocation array
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the WoundAnatomicalLocation array.
   * This field/value is required.
   * @param {Array<WoundAnatomicalLocation>} anatomicalLocation - The sw.WoundAnatomicalLocation array
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the WoundAnatomicalLocation array and return 'this' for chaining.
   * This field/value is required.
   * @param {Array<WoundAnatomicalLocation>} anatomicalLocation - The sw.WoundAnatomicalLocation array
   * @returns {WoundPresenceAssertion} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
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
   * @returns {WoundPresenceAssertion} this.
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
   * @returns {WoundPresenceAssertion} this.
   */
  withCriticality(criticality) {
    this.criticality = criticality; return this;
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
   * @returns {WoundPresenceAssertion} this.
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
   * @returns {WoundPresenceAssertion} this.
   */
  withAbatement(abatement) {
    this.abatement = abatement; return this;
  }

  /**
   * Get the WoundTypeEtiology.
   * @returns {WoundTypeEtiology} The sw.WoundTypeEtiology
   */
  get conditionCause() {
    return this._conditionCause;
  }

  /**
   * Set the WoundTypeEtiology.
   * @param {WoundTypeEtiology} conditionCause - The sw.WoundTypeEtiology
   */
  set conditionCause(conditionCause) {
    this._conditionCause = conditionCause;
  }

  /**
   * Set the WoundTypeEtiology and return 'this' for chaining.
   * @param {WoundTypeEtiology} conditionCause - The sw.WoundTypeEtiology
   * @returns {WoundPresenceAssertion} this.
   */
  withConditionCause(conditionCause) {
    this.conditionCause = conditionCause; return this;
  }

  /**
   * Get the Device.
   * @returns {Device} The shr.entity.Device
   */
  get device() {
    return this._device;
  }

  /**
   * Set the Device.
   * @param {Device} device - The shr.entity.Device
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the Device and return 'this' for chaining.
   * @param {Device} device - The shr.entity.Device
   * @returns {WoundPresenceAssertion} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the Precondition.
   * @returns {Precondition} The shr.base.Precondition
   */
  get precondition() {
    return this._precondition;
  }

  /**
   * Set the Precondition.
   * @param {Precondition} precondition - The shr.base.Precondition
   */
  set precondition(precondition) {
    this._precondition = precondition;
  }

  /**
   * Set the Precondition and return 'this' for chaining.
   * @param {Precondition} precondition - The shr.base.Precondition
   * @returns {WoundPresenceAssertion} this.
   */
  withPrecondition(precondition) {
    this.precondition = precondition; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundPresenceAssertion class.
   * The JSON must be valid against the WoundPresenceAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundPresenceAssertion} An instance of WoundPresenceAssertion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundPresenceAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the WoundPresenceAssertion class to a JSON object.
   * The JSON is expected to be valid against the WoundPresenceAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/sw/WoundPresenceAssertion' };
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
    if (this.conditionCause != null) {
      inst['ConditionCause'] = typeof this.conditionCause.toJSON === 'function' ? this.conditionCause.toJSON() : this.conditionCause;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.precondition != null) {
      inst['Precondition'] = typeof this.precondition.toJSON === 'function' ? this.precondition.toJSON() : this.precondition;
    }
    return inst;
  }

  /**
   * Serializes an instance of the WoundPresenceAssertion class to a FHIR object.
   * The FHIR is expected to be valid against the WoundPresenceAssertion FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'Condition';
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
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
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.onset != null) {
      inst['onsetDateTime'] = typeof this.onset.toFHIR === 'function' ? this.onset.toFHIR() : this.onset;
    }
    if (this.abatement != null) {
      inst['abatementDateTime'] = typeof this.abatement.toFHIR === 'function' ? this.abatement.toFHIR() : this.abatement;
    }
    if (this.stageInformation != null) {
      inst['stage'] = typeof this.stageInformation.toFHIR === 'function' ? this.stageInformation.toFHIR() : this.stageInformation;
    }
    if (this.stageInformation != null && this.stageInformation.stageSummary != null) {
      if(inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['summary'] = typeof this.stageInformation.stageSummary.toFHIR === 'function' ? this.stageInformation.stageSummary.toFHIR() : this.stageInformation.stageSummary;
    }
    if (this.stageInformation != null && this.stageInformation.stageDetail != null) {
      if(inst['stage'] === undefined) {
        inst['stage'] = {};
      }
      inst['stage']['assessment'] = inst ['stage']['assessment'] || [];
      inst['stage']['assessment'].push(typeof this.stageInformation.stageDetail.toFHIR === 'function' ? this.stageInformation.stageDetail.toFHIR() : this.stageInformation.stageDetail);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the WoundPresenceAssertion class.
   * The FHIR must be valid against the WoundPresenceAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {WoundPresenceAssertion} An instance of WoundPresenceAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new WoundPresenceAssertion();
    if (fhir['extension'] != null) {
      if(inst.woundAnatomicalLocation == null) {
        inst.woundAnatomicalLocation = createInstanceFromFHIR('sw.WoundAnatomicalLocation', {});
      }
      const match = fhir['extension'].find(e => e.url == 'http://hl7.org/fhir/StructureDefinition/condition-targetBodySite');
      if (match != null) {
        inst.woundAnatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', match, true);
      }
    }
    if (fhir['identifier'] != null) {
      inst.woundIdentifier = createInstanceFromFHIR('sw.WoundIdentifier', fhir['identifier'][0]);
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
    if (fhir['abatementDateTime'] != null) {
      inst.abatement = createInstanceFromFHIR('shr.base.Abatement', fhir['abatementDateTime']);
    }
    if (fhir['stage'] != null) {
      inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', fhir['stage']);
    }
    if (fhir['stage'] != null && fhir['stage']['summary'] != null) {
      if(inst.stageInformation == null) {
        inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', {});
      }
      inst.stageInformation.stageSummary = createInstanceFromFHIR('shr.base.StageSummary', fhir['stage']['summary']);
    }
    if (fhir['stage'] != null && fhir['stage']['assessment'] != null) {
      if(inst.stageInformation == null) {
        inst.stageInformation = createInstanceFromFHIR('shr.base.StageInformation', {});
      }
      inst.stageInformation.stageDetail = createInstanceFromFHIR('shr.base.StageDetail', fhir['stage']['assessment'][0]);
    }
    return inst;
  }

}
export default WoundPresenceAssertion;
