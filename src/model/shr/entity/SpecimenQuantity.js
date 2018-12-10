import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.SpecimenQuantity.
 */
class SpecimenQuantity {

  /**
   * Get the value (aliases simpleQuantity).
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get value() {
    return this._simpleQuantity;
  }

  /**
   * Set the value (aliases simpleQuantity).
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   */
  set value(value) {
    this._simpleQuantity = value;
  }

  /**
   * Set the value (aliases simpleQuantity) and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} value - The shr.core.SimpleQuantity
   * @returns {SpecimenQuantity} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the SimpleQuantity.
   * @returns {SimpleQuantity} The shr.core.SimpleQuantity
   */
  get simpleQuantity() {
    return this._simpleQuantity;
  }

  /**
   * Set the SimpleQuantity.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   */
  set simpleQuantity(simpleQuantity) {
    this._simpleQuantity = simpleQuantity;
  }

  /**
   * Set the SimpleQuantity and return 'this' for chaining.
   * This field/value is required.
   * @param {SimpleQuantity} simpleQuantity - The shr.core.SimpleQuantity
   * @returns {SpecimenQuantity} this.
   */
  withSimpleQuantity(simpleQuantity) {
    this.simpleQuantity = simpleQuantity; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenQuantity class.
   * The JSON must be valid against the SpecimenQuantity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenQuantity} An instance of SpecimenQuantity populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SpecimenQuantity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SpecimenQuantity class to a JSON object.
   * The JSON is expected to be valid against the SpecimenQuantity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/SpecimenQuantity' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SpecimenQuantity class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenQuantity FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-SpecimenQuantity-extension';
      inst['valueReference'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecimenQuantity class.
   * The FHIR must be valid against the SpecimenQuantity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SpecimenQuantity} An instance of SpecimenQuantity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new SpecimenQuantity();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.SimpleQuantity', fhir);
    }
    return inst;
  }

}
export default SpecimenQuantity;
