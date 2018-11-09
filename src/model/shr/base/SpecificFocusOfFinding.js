import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.SpecificFocusOfFinding.
 */
class SpecificFocusOfFinding {

  /**
   * Get the choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference.
   * @returns {(string|CodeableConcept|Identifier|Reference)} The choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference.
   * This field/value is required.
   * @param {(string|CodeableConcept|Identifier|Reference)} value - The choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference and return 'this' for chaining.
   * This field/value is required.
   * @param {(string|CodeableConcept|Identifier|Reference)} value - The choice value; one of: string, shr.core.CodeableConcept, shr.core.Identifier, shr.base.InformationItem reference
   * @returns {SpecificFocusOfFinding} this.
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
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   */
  set relationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this._relationshipToPersonOfRecord = relationshipToPersonOfRecord;
  }

  /**
   * Set the RelationshipToPersonOfRecord and return 'this' for chaining.
   * @param {RelationshipToPersonOfRecord} relationshipToPersonOfRecord - The shr.base.RelationshipToPersonOfRecord
   * @returns {SpecificFocusOfFinding} this.
   */
  withRelationshipToPersonOfRecord(relationshipToPersonOfRecord) {
    this.relationshipToPersonOfRecord = relationshipToPersonOfRecord; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecificFocusOfFinding class.
   * The JSON must be valid against the SpecificFocusOfFinding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecificFocusOfFinding} An instance of SpecificFocusOfFinding populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecificFocusOfFinding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SpecificFocusOfFinding class to a JSON object.
   * The JSON is expected to be valid against the SpecificFocusOfFinding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/SpecificFocusOfFinding' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relationshipToPersonOfRecord != null) {
      inst['RelationshipToPersonOfRecord'] = typeof this.relationshipToPersonOfRecord.toJSON === 'function' ? this.relationshipToPersonOfRecord.toJSON() : this.relationshipToPersonOfRecord;
    }
    return inst;
  }

  /**
   * Serializes an instance of the SpecificFocusOfFinding class to a FHIR object.
   * The FHIR is expected to be valid against the SpecificFocusOfFinding FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.string != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.string.toFHIR(true));
      }
      if (this.codeableConcept != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.codeableConcept.toFHIR(true));
      }
      if (this.identifier != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.identifier.toFHIR(true));
      }
      if (this.informationItem != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.informationItem.toFHIR(true));
      }
      if (this.relationshipToPersonOfRecord != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.relationshipToPersonOfRecord.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension';
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecificFocusOfFinding class.
   * The FHIR must be valid against the SpecificFocusOfFinding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {SpecificFocusOfFinding} An instance of SpecificFocusOfFinding populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SpecificFocusOfFinding();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/primitive-string-extension');
      if (match_1 != null) {
        inst.string = createInstanceFromFHIR('string', match_1, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match_2 != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match_2, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Identifier-extension');
      if (match_3 != null) {
        inst.identifier = createInstanceFromFHIR('shr.core.Identifier', match_3, true);
      }
      const match_4 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-InformationItem-extension');
      if (match_4 != null) {
        inst.informationItem = createInstanceFromFHIR('shr.base.InformationItem', match_4, true);
      }
      const match_5 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelationshipToPersonOfRecord-extension');
      if (match_5 != null) {
        inst.relationshipToPersonOfRecord = createInstanceFromFHIR('shr.base.RelationshipToPersonOfRecord', match_5, true);
      }
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR(null, fhir);
    }
    return inst;
  }

}
export default SpecificFocusOfFinding;
