import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import ConditionPresentAssertion from '../shr/base/ConditionPresentAssertion';

/**
 * Generated class for mcode.CancerDisorder.
 * @extends ConditionPresentAssertion
 */
class CancerDisorder extends ConditionPresentAssertion {

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
   * @returns {CancerDisorder} this.
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
   * @returns {CancerDisorder} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
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
   * @returns {CancerDisorder} this.
   */
  withStageInformation(stageInformation) {
    this.stageInformation = stageInformation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CancerDisorder class.
   * The JSON must be valid against the CancerDisorder JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CancerDisorder} An instance of CancerDisorder populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new CancerDisorder();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CancerDisorder class to a JSON object.
   * The JSON is expected to be valid against the CancerDisorder JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/mcode/CancerDisorder' };
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
   * Serializes an instance of the CancerDisorder class to a FHIR object.
   * The FHIR is expected to be valid against the CancerDisorder FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the CancerDisorder class.
   * The FHIR must be valid against the CancerDisorder FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {CancerDisorder} An instance of CancerDisorder populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new CancerDisorder();
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
export default CancerDisorder;
