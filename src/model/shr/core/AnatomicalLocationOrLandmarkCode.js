import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.AnatomicalLocationOrLandmarkCode.
 */
class AnatomicalLocationOrLandmarkCode {

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
   * @returns {AnatomicalLocationOrLandmarkCode} this.
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
   * @returns {AnatomicalLocationOrLandmarkCode} this.
   */
  withCodeableConcept(codeableConcept) {
    this.codeableConcept = codeableConcept; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AnatomicalLocationOrLandmarkCode class.
   * The JSON must be valid against the AnatomicalLocationOrLandmarkCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AnatomicalLocationOrLandmarkCode} An instance of AnatomicalLocationOrLandmarkCode populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AnatomicalLocationOrLandmarkCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the AnatomicalLocationOrLandmarkCode class to a JSON object.
   * The JSON is expected to be valid against the AnatomicalLocationOrLandmarkCode JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/AnatomicalLocationOrLandmarkCode' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the AnatomicalLocationOrLandmarkCode class to a FHIR object.
   * The FHIR is expected to be valid against the AnatomicalLocationOrLandmarkCode FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-AnatomicalLocationOrLandmarkCode-extension';
      inst['valueCodeableConcept'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the AnatomicalLocationOrLandmarkCode class.
   * The FHIR must be valid against the AnatomicalLocationOrLandmarkCode FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {AnatomicalLocationOrLandmarkCode} An instance of AnatomicalLocationOrLandmarkCode populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new AnatomicalLocationOrLandmarkCode();
    if (asExtension) {
      inst.value = fhir['valueCodeableConcept'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', fhir);
    }
    return inst;
  }

}
export default AnatomicalLocationOrLandmarkCode;
