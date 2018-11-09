import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Finding from './Finding';

/**
 * Generated class for shr.base.ClinicalNote.
 * @extends Finding
 */
class ClinicalNote extends Finding {

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
   * @returns {ClinicalNote} this.
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
   * @returns {ClinicalNote} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the AdditionalText.
   * @returns {AdditionalText} The shr.base.AdditionalText
   */
  get additionalText() {
    return this._additionalText;
  }

  /**
   * Set the AdditionalText.
   * This field/value is required.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   */
  set additionalText(additionalText) {
    this._additionalText = additionalText;
  }

  /**
   * Set the AdditionalText and return 'this' for chaining.
   * This field/value is required.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   * @returns {ClinicalNote} this.
   */
  withAdditionalText(additionalText) {
    this.additionalText = additionalText; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ClinicalNote class.
   * The JSON must be valid against the ClinicalNote JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ClinicalNote} An instance of ClinicalNote populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ClinicalNote();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ClinicalNote class to a JSON object.
   * The JSON is expected to be valid against the ClinicalNote JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ClinicalNote' };
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
    if (this.additionalText != null) {
      inst['AdditionalText'] = typeof this.additionalText.toJSON === 'function' ? this.additionalText.toJSON() : this.additionalText;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ClinicalNote class to a FHIR object.
   * The FHIR is expected to be valid against the ClinicalNote FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
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
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.findingMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR(true) : this.findingMethod);
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR(true) : this.findingStatus);
    }
    if (this.relevantTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR(true) : this.relevantTime);
    }
    if (this.nonIndependentFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.nonIndependentFinding.toFHIR === 'function' ? this.nonIndependentFinding.toFHIR(true) : this.nonIndependentFinding);
    }
    if (this.additionalText != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.additionalText.toFHIR === 'function' ? this.additionalText.toFHIR(true) : this.additionalText);
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-ClinicalNote-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ClinicalNote class.
   * The FHIR must be valid against the ClinicalNote FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ClinicalNote} An instance of ClinicalNote populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ClinicalNote();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension');
      if (match != null) {
        inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ReferenceRange-extension');
      if (match != null) {
        inst.referenceRange = createInstanceFromFHIR('shr.base.ReferenceRange', match, true);
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
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingMethod-extension');
      if (match != null) {
        inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingStatus-extension');
      if (match != null) {
        inst.findingStatus = createInstanceFromFHIR('shr.base.FindingStatus', match, true);
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
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-AdditionalText-extension');
      if (match != null) {
        inst.additionalText = createInstanceFromFHIR('shr.base.AdditionalText', match, true);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default ClinicalNote;
