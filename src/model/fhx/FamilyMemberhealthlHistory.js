import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import Finding from '../shr/base/Finding';

/**
 * Generated class for fhx.FamilyMemberhealthlHistory.
 * @extends Finding
 */
class FamilyMemberhealthlHistory extends Finding {

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
   * @returns {FamilyMemberhealthlHistory} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @returns {FamilyMemberhealthlHistory} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the FindingStatus.
   * @returns {FindingStatus} The shr.base.FindingStatus
   */
  get findingStatus() {
    return this._findingStatus;
  }

  /**
   * Set the FindingStatus.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.base.FindingStatus
   */
  set findingStatus(findingStatus) {
    this._findingStatus = findingStatus;
  }

  /**
   * Set the FindingStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.base.FindingStatus
   * @returns {FamilyMemberhealthlHistory} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
  }

  /**
   * Get the FamilyMemberConditionPresentAssertion array.
   * @returns {Array<FamilyMemberConditionPresentAssertion>} The fhx.FamilyMemberConditionPresentAssertion array
   */
  get familyMemberConditionPresentAssertion() {
    return this._familyMemberConditionPresentAssertion;
  }

  /**
   * Set the FamilyMemberConditionPresentAssertion array.
   * @param {Array<FamilyMemberConditionPresentAssertion>} familyMemberConditionPresentAssertion - The fhx.FamilyMemberConditionPresentAssertion array
   */
  set familyMemberConditionPresentAssertion(familyMemberConditionPresentAssertion) {
    this._familyMemberConditionPresentAssertion = familyMemberConditionPresentAssertion;
  }

  /**
   * Set the FamilyMemberConditionPresentAssertion array and return 'this' for chaining.
   * @param {Array<FamilyMemberConditionPresentAssertion>} familyMemberConditionPresentAssertion - The fhx.FamilyMemberConditionPresentAssertion array
   * @returns {FamilyMemberhealthlHistory} this.
   */
  withFamilyMemberConditionPresentAssertion(familyMemberConditionPresentAssertion) {
    this.familyMemberConditionPresentAssertion = familyMemberConditionPresentAssertion; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FamilyMemberhealthlHistory class.
   * The JSON must be valid against the FamilyMemberhealthlHistory JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FamilyMemberhealthlHistory} An instance of FamilyMemberhealthlHistory populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FamilyMemberhealthlHistory();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FamilyMemberhealthlHistory class to a JSON object.
   * The JSON is expected to be valid against the FamilyMemberhealthlHistory JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/fhx/FamilyMemberhealthlHistory' };
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
    if (this.familyMemberConditionPresentAssertion != null) {
      inst['FamilyMemberConditionPresentAssertion'] = this.familyMemberConditionPresentAssertion.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the FamilyMemberhealthlHistory class to a FHIR object.
   * The FHIR is expected to be valid against the FamilyMemberhealthlHistory FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.findingTopicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR(true) : this.findingTopicCode);
    }
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
    }
    if (this.referenceRange != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.referenceRange.toFHIR === 'function' ? this.referenceRange.toFHIR(true) : this.referenceRange);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR(true) : this.findingStatus);
    }
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.familyMemberConditionPresentAssertion != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.familyMemberConditionPresentAssertion.toFHIR === 'function' ? this.familyMemberConditionPresentAssertion.toFHIR(true) : this.familyMemberConditionPresentAssertion);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FamilyMemberhealthlHistory class.
   * The FHIR must be valid against the FamilyMemberhealthlHistory FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {FamilyMemberhealthlHistory} An instance of FamilyMemberhealthlHistory populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new FamilyMemberhealthlHistory();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    return inst;
  }

}
export default FamilyMemberhealthlHistory;
