import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

/**
 * Generated class for odh.EmployerPerson.
 */
class EmployerPerson {

  /**
   * Get the RelationshipToPersonOfRecord.
   * @returns {RelationshipToPersonOfRecord} The shr.base.RelationshipToPersonOfRecord
   */
  get relationshipToPersonOfRecord() {
    return this._relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord.
   * This field/value is required.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   */
  set relationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this._relationshipToPersonOfRecord = relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord and return 'this' for chaining.
   * This field/value is required.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   * @returns {EmployerPerson} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the EmployerPerson class.
   * The JSON must be valid against the EmployerPerson JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EmployerPerson} An instance of EmployerPerson populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EmployerPerson();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the EmployerPerson class to a JSON object.
   * The JSON is expected to be valid against the EmployerPerson JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/EmployerPerson' } };
    if (this.relationshipToPersonOfRecord != null) {
      inst['RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }

  /**
   * Serializes an instance of the EmployerPerson class to a FHIR object.
   * The FHIR is expected to be valid against the EmployerPerson FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.relationshipToPersonOfRecord != null) {
      inst['relationship'] = typeof this.relationshipToPersonOfRecord.toFHIR === 'function' ? this.relationshipToPersonOfRecord.toFHIR() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the EmployerPerson class.
   * The FHIR must be valid against the EmployerPerson FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {EmployerPerson} An instance of EmployerPerson populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new EmployerPerson();
    if (fhir['relationship'] != null) {
      inst.relationshipToPersonOfRecord = createInstanceFromFHIR('shr.base.RelationshipToPersonOfRecord', fhir['relationship']);
    }
    return inst;
  }

}
export default EmployerPerson;
