import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.entity.CollectionTime.
 */
class CollectionTime {

  /**
   * Get the choice value; one of: dateTime, shr.core.TimePeriod.
   * @returns {(dateTime|TimePeriod)} The choice value; one of: dateTime, shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod.
   * This field/value is required.
   * @param {(dateTime|TimePeriod)} value - The choice value; one of: dateTime, shr.core.TimePeriod
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: dateTime, shr.core.TimePeriod and return 'this' for chaining.
   * This field/value is required.
   * @param {(dateTime|TimePeriod)} value - The choice value; one of: dateTime, shr.core.TimePeriod
   * @returns {CollectionTime} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the CollectionTime class.
   * The JSON must be valid against the CollectionTime JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {CollectionTime} An instance of CollectionTime populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new CollectionTime();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the CollectionTime class to a JSON object.
   * The JSON is expected to be valid against the CollectionTime JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/CollectionTime' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the CollectionTime class to a FHIR object.
   * The FHIR is expected to be valid against the CollectionTime FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-CollectionTime-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the CollectionTime class.
   * The FHIR must be valid against the CollectionTime FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {CollectionTime} An instance of CollectionTime populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new CollectionTime();
    if (asExtension) {
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default CollectionTime;
