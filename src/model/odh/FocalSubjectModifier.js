import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

/**
 * Generated class for odh.FocalSubjectModifier.
 */
class FocalSubjectModifier {

  /**
   * Get the value (aliases relationshipToPersonOfRecord).
   * @returns {RelationshipToPersonOfRecord} The shr.base.RelationshipToPersonOfRecord
   */
  get value() {
    return this._relationshipToPersonOfRecord;
  }

  /**
   * Set the value (aliases relationshipToPersonOfRecord).
   * This field/value is required.
   * @param {RelationshipToPersonOfRecord} value - The shr.base.RelationshipToPersonOfRecord
   */
  set value(value) {
    this._relationshipToPersonOfRecord = value;
  }

  /**
   * Set the value (aliases relationshipToPersonOfRecord) and return 'this' for chaining.
   * This field/value is required.
   * @param {RelationshipToPersonOfRecord} value - The shr.base.RelationshipToPersonOfRecord
   * @returns {FocalSubjectModifier} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

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
   * @returns {FocalSubjectModifier} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the FocalSubjectModifier class.
   * The JSON must be valid against the FocalSubjectModifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {FocalSubjectModifier} An instance of FocalSubjectModifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new FocalSubjectModifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the FocalSubjectModifier class to a JSON object.
   * The JSON is expected to be valid against the FocalSubjectModifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/odh/FocalSubjectModifier' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the FocalSubjectModifier class to a FHIR object.
   * The FHIR is expected to be valid against the FocalSubjectModifier FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.relationshipToPersonOfRecord != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.relationshipToPersonOfRecord.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/odh-FocalSubjectModifier-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the FocalSubjectModifier class.
   * The FHIR must be valid against the FocalSubjectModifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {FocalSubjectModifier} An instance of FocalSubjectModifier populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new FocalSubjectModifier();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelationshipToPersonOfRecord-extension');
      if (match_1 != null) {
        inst.relationshipToPersonOfRecord = createInstanceFromFHIR('shr.base.RelationshipToPersonOfRecord', match_1, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.base.RelationshipToPersonOfRecord', fhir);
    }
    return inst;
  }

}
export default FocalSubjectModifier;
