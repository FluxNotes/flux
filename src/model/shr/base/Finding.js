import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import NonIndependentFinding from './NonIndependentFinding';

/**
 * Generated class for shr.base.Finding.
 * @extends NonIndependentFinding
 */
class Finding extends NonIndependentFinding {

  /**
   * Get the Patient.
   * @returns {Patient} The shr.entity.Patient
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the Patient.
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {Finding} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the Encounter.
   * @returns {Encounter} The shr.encounter.Encounter
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Set the Encounter.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   */
  set encounter(encounter) {
    this._encounter = encounter;
  }

  /**
   * Set the Encounter and return 'this' for chaining.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   * @returns {Finding} this.
   */
  withEncounter(encounter) {
    this.encounter = encounter; return this;
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
   * @returns {Finding} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
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
   * @returns {Finding} this.
   */
  withSpecificFocusOfFinding(specificFocusOfFinding) {
    this.specificFocusOfFinding = specificFocusOfFinding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Finding class.
   * The JSON must be valid against the Finding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Finding} An instance of Finding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Finding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Finding class to a JSON object.
   * The JSON is expected to be valid against the Finding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Finding' } };
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
    return inst;
  }

  /**
   * Serializes an instance of the Finding class to a FHIR object.
   * The FHIR is expected to be valid against the Finding FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Finding class.
   * The FHIR must be valid against the Finding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Finding} An instance of Finding populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Finding();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    return inst;
  }

}
export default Finding;
