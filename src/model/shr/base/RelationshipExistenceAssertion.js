import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ExistenceAssertion from './ExistenceAssertion';

/**
 * Generated class for shr.base.RelationshipExistenceAssertion.
 * @extends ExistenceAssertion
 */
class RelationshipExistenceAssertion extends ExistenceAssertion {

  /**
   * Deserializes JSON data to an instance of the RelationshipExistenceAssertion class.
   * The JSON must be valid against the RelationshipExistenceAssertion JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RelationshipExistenceAssertion} An instance of RelationshipExistenceAssertion populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new RelationshipExistenceAssertion();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RelationshipExistenceAssertion class to a JSON object.
   * The JSON is expected to be valid against the RelationshipExistenceAssertion JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/base/RelationshipExistenceAssertion' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.findingTopicCode != null) {
      inst['FindingTopicCode'] = typeof this.findingTopicCode.toJSON === 'function' ? this.findingTopicCode.toJSON() : this.findingTopicCode;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = typeof this.referenceRange.toJSON === 'function' ? this.referenceRange.toJSON() : this.referenceRange;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.objectIdentifier != null) {
      inst['ObjectIdentifier'] = typeof this.objectIdentifier.toJSON === 'function' ? this.objectIdentifier.toJSON() : this.objectIdentifier;
    }
    if (this.certainty != null) {
      inst['Certainty'] = typeof this.certainty.toJSON === 'function' ? this.certainty.toJSON() : this.certainty;
    }
    return inst;
  }

  /**
   * Serializes an instance of the RelationshipExistenceAssertion class to a FHIR object.
   * The FHIR is expected to be valid against the RelationshipExistenceAssertion FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.findingTopicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingTopicCode.toFHIR === 'function' ? this.findingTopicCode.toFHIR(true) : this.findingTopicCode);
    }
    if (this.exceptionValue != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.exceptionValue.toFHIR === 'function' ? this.exceptionValue.toFHIR(true) : this.exceptionValue);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR(true) : this.findingStatus);
    }
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.objectIdentifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.objectIdentifier.toFHIR === 'function' ? this.objectIdentifier.toFHIR(true) : this.objectIdentifier);
    }
    if (this.certainty != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.certainty.toFHIR === 'function' ? this.certainty.toFHIR(true) : this.certainty);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RelationshipExistenceAssertion class.
   * The FHIR must be valid against the RelationshipExistenceAssertion FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RelationshipExistenceAssertion} An instance of RelationshipExistenceAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new RelationshipExistenceAssertion();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.value = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    return inst;
  }

}
export default RelationshipExistenceAssertion;
