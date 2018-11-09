import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.medication.MedicationBeforeChange.
 */
class MedicationBeforeChange {

  /**
   * Get the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference.
   * @returns {Reference} The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The choice value; one of: shr.medication.MedicationRequested reference, shr.medication.MedicationStatement reference, shr.medication.MedicationAdministered reference
   * @returns {MedicationBeforeChange} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the MedicationBeforeChange class.
   * The JSON must be valid against the MedicationBeforeChange JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationBeforeChange} An instance of MedicationBeforeChange populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationBeforeChange();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationBeforeChange class to a JSON object.
   * The JSON is expected to be valid against the MedicationBeforeChange JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationBeforeChange' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationBeforeChange class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationBeforeChange FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-medication-MedicationBeforeChange-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationBeforeChange class.
   * The FHIR must be valid against the MedicationBeforeChange FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {MedicationBeforeChange} An instance of MedicationBeforeChange populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationBeforeChange();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default MedicationBeforeChange;
