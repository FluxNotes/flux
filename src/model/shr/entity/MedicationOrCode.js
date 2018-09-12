import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.entity.MedicationOrCode.
 */
class MedicationOrCode {

  /**
   * Get the choice value; one of: shr.core.CodeableConcept, shr.entity.Medication.
   * @returns {(CodeableConcept|Medication)} The choice value; one of: shr.core.CodeableConcept, shr.entity.Medication
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Medication.
   * This field/value is required.
   * @param {(CodeableConcept|Medication)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Medication
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.CodeableConcept, shr.entity.Medication and return 'this' for chaining.
   * This field/value is required.
   * @param {(CodeableConcept|Medication)} value - The choice value; one of: shr.core.CodeableConcept, shr.entity.Medication
   * @returns {MedicationOrCode} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationOrCode class.
   * The JSON must be valid against the MedicationOrCode JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationOrCode} An instance of MedicationOrCode populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new MedicationOrCode();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the MedicationOrCode class to a JSON object.
   * The JSON is expected to be valid against the MedicationOrCode JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/MedicationOrCode' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }
  /**
   * Serializes an instance of the MedicationOrCode class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationOrCode FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-MedicationOrCode-extension';
      inst['valueCodeableConcept'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }
}
export default MedicationOrCode;
