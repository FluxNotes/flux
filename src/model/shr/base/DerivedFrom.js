import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.DerivedFrom.
 */
class DerivedFrom {

  /**
   * Get the value (aliases informationItem).
   * @returns {Reference} The shr.base.InformationItem reference
   */
  get value() {
    return this._informationItem;
  }

  /**
   * Set the value (aliases informationItem).
   * This field/value is required.
   * @param {Reference} value - The shr.base.InformationItem reference
   */
  set value(value) {
    this._informationItem = value;
  }

  /**
   * Set the value (aliases informationItem) and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} value - The shr.base.InformationItem reference
   * @returns {DerivedFrom} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the shr.base.InformationItem reference.
   * @returns {Reference} The shr.base.InformationItem reference
   */
  get informationItem() {
    return this._informationItem;
  }

  /**
   * Set the shr.base.InformationItem reference.
   * This field/value is required.
   * @param {Reference} informationItem - The shr.base.InformationItem reference
   */
  set informationItem(informationItem) {
    this._informationItem = informationItem;
  }

  /**
   * Set the shr.base.InformationItem reference and return 'this' for chaining.
   * This field/value is required.
   * @param {Reference} informationItem - The shr.base.InformationItem reference
   * @returns {DerivedFrom} this.
   */
  withInformationItem(informationItem) {
    this.informationItem = informationItem; return this;
  }

  /**
   * Deserializes JSON data to an instance of the DerivedFrom class.
   * The JSON must be valid against the DerivedFrom JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {DerivedFrom} An instance of DerivedFrom populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new DerivedFrom();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the DerivedFrom class to a JSON object.
   * The JSON is expected to be valid against the DerivedFrom JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/DerivedFrom' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the DerivedFrom class to a FHIR object.
   * The FHIR is expected to be valid against the DerivedFrom FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-DerivedFrom-extension';
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
   * Deserializes FHIR JSON data to an instance of the DerivedFrom class.
   * The FHIR must be valid against the DerivedFrom FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {DerivedFrom} An instance of DerivedFrom populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new DerivedFrom();
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.InformationItem', fhir);
    }
    return inst;
  }

}
export default DerivedFrom;
