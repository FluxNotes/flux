import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Outcome.
 */
class Outcome {

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
   * @returns {Outcome} this.
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
   * @returns {Outcome} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Get the shr.base.Finding reference array.
   * @returns {Array<Reference>} The shr.base.Finding reference array
   */
  get finding() {
    return this._finding;
  }

  /**
   * Set the shr.base.Finding reference array.
   * @param {Array<Reference>} finding - The shr.base.Finding reference array
   */
  set finding(finding) {
    this._finding = finding;
  }

  /**
   * Set the shr.base.Finding reference array and return 'this' for chaining.
   * @param {Array<Reference>} finding - The shr.base.Finding reference array
   * @returns {Outcome} this.
   */
  withFinding(finding) {
    this.finding = finding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Outcome class.
   * The JSON must be valid against the Outcome JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Outcome} An instance of Outcome populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Outcome();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Outcome class to a JSON object.
   * The JSON is expected to be valid against the Outcome JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Outcome' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.finding != null) {
      inst['Finding'] = this.finding.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the Outcome class to a FHIR object.
   * The FHIR is expected to be valid against the Outcome FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.codeableConcept != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.codeableConcept.toFHIR(true));
      }
      if (this.finding != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.finding.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-Outcome-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Outcome class.
   * The FHIR must be valid against the Outcome FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Outcome} An instance of Outcome populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Outcome();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match_1 != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match_1, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Finding-extension');
      if (match_3 != null) {
        inst.finding = createInstanceFromFHIR('shr.base.Finding', match_3, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir);
    }
    return inst;
  }

}
export default Outcome;
