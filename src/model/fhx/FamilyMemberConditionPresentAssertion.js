import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import PresenceAssertion from '../shr/base/PresenceAssertion';

/**
 * Generated class for fhx.FamilyMemberConditionPresentAssertion.
 * @extends PresenceAssertion
 */
class FamilyMemberConditionPresentAssertion extends PresenceAssertion {

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
   * @returns {FamilyMemberConditionPresentAssertion} this.
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
   * @returns {FamilyMemberConditionPresentAssertion} this.
   */
  withFindingTopicCode(findingTopicCode) {
    this.findingTopicCode = findingTopicCode; return this;
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
   * @returns {FamilyMemberConditionPresentAssertion} this.
   */
  withOnset(onset) {
    this.onset = onset; return this;
  }

  /**
   * Get the ConditionOutcome.
   * @returns {ConditionOutcome} The fhx.ConditionOutcome
   */
  get conditionOutcome() {
    return this._conditionOutcome;
  }

  /**
   * Set the ConditionOutcome.
   * @param {ConditionOutcome} conditionOutcome - The fhx.ConditionOutcome
   */
  set conditionOutcome(conditionOutcome) {
    this._conditionOutcome = conditionOutcome;
  }

  /**
   * Set the ConditionOutcome and return 'this' for chaining.
   * @param {ConditionOutcome} conditionOutcome - The fhx.ConditionOutcome
   * @returns {FamilyMemberConditionPresentAssertion} this.
   */
  withConditionOutcome(conditionOutcome) {
    this.conditionOutcome = conditionOutcome; return this;
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
   * @returns {FamilyMemberConditionPresentAssertion} this.
   */
  withFindingMethod(findingMethod) {
    this.findingMethod = findingMethod; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FamilyMemberConditionPresentAssertion class.
   * The JSON must be valid against the FamilyMemberConditionPresentAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FamilyMemberConditionPresentAssertion} An instance of FamilyMemberConditionPresentAssertion populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FamilyMemberConditionPresentAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FamilyMemberConditionPresentAssertion class to a JSON object.
   * The JSON is expected to be valid against the FamilyMemberConditionPresentAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/fhx/FamilyMemberConditionPresentAssertion' };
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
    if (this.onset != null) {
      inst['Onset'] = typeof this.onset.toJSON === 'function' ? this.onset.toJSON() : this.onset;
    }
    if (this.conditionOutcome != null) {
      inst['ConditionOutcome'] = typeof this.conditionOutcome.toJSON === 'function' ? this.conditionOutcome.toJSON() : this.conditionOutcome;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    return inst;
  }

  /**
   * Serializes an instance of the FamilyMemberConditionPresentAssertion class to a FHIR object.
   * The FHIR is expected to be valid against the FamilyMemberConditionPresentAssertion FHIR profile, but no validation checks are performed.
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
    if (this.objectIdentifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.objectIdentifier.toFHIR === 'function' ? this.objectIdentifier.toFHIR(true) : this.objectIdentifier);
    }
    if (this.certainty != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.certainty.toFHIR === 'function' ? this.certainty.toFHIR(true) : this.certainty);
    }
    if (this.onset != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.onset.toFHIR === 'function' ? this.onset.toFHIR(true) : this.onset);
    }
    if (this.conditionOutcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.conditionOutcome.toFHIR === 'function' ? this.conditionOutcome.toFHIR(true) : this.conditionOutcome);
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/fhx-FamilyMemberConditionPresentAssertion-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FamilyMemberConditionPresentAssertion class.
   * The FHIR must be valid against the FamilyMemberConditionPresentAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {FamilyMemberConditionPresentAssertion} An instance of FamilyMemberConditionPresentAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new FamilyMemberConditionPresentAssertion();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default FamilyMemberConditionPresentAssertion;
