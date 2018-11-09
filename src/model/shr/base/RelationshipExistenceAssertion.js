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
  static fromJSON(json={}) {
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/RelationshipExistenceAssertion' } };
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
    if (this.specificFocusOfFinding != null) {
      inst['SpecificFocusOfFinding'] = typeof this.specificFocusOfFinding.toJSON === 'function' ? this.specificFocusOfFinding.toJSON() : this.specificFocusOfFinding;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.nonIndependentFinding != null) {
      inst['NonIndependentFinding'] = this.nonIndependentFinding.map(f => f.toJSON());
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
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
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
    if (this.specificFocusOfFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specificFocusOfFinding.toFHIR === 'function' ? this.specificFocusOfFinding.toFHIR(true) : this.specificFocusOfFinding);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.findingMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingMethod.toFHIR === 'function' ? this.findingMethod.toFHIR(true) : this.findingMethod);
    }
    if (this.findingStatus != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.findingStatus.toFHIR === 'function' ? this.findingStatus.toFHIR(true) : this.findingStatus);
    }
    if (this.relevantTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relevantTime.toFHIR === 'function' ? this.relevantTime.toFHIR(true) : this.relevantTime);
    }
    if (this.nonIndependentFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.nonIndependentFinding.toFHIR === 'function' ? this.nonIndependentFinding.toFHIR(true) : this.nonIndependentFinding);
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
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {RelationshipExistenceAssertion} An instance of RelationshipExistenceAssertion populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new RelationshipExistenceAssertion();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CodeableConcept-extension');
      if (match != null) {
        inst.codeableConcept = createInstanceFromFHIR('shr.core.CodeableConcept', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingTopicCode-extension');
      if (match != null) {
        inst.findingTopicCode = createInstanceFromFHIR('shr.base.FindingTopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ExceptionValue-extension');
      if (match != null) {
        inst.exceptionValue = createInstanceFromFHIR('shr.base.ExceptionValue', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension');
      if (match != null) {
        inst.patient = createInstanceFromFHIR('shr.entity.Patient', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-SpecificFocusOfFinding-extension');
      if (match != null) {
        inst.specificFocusOfFinding = createInstanceFromFHIR('shr.base.SpecificFocusOfFinding', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingMethod-extension');
      if (match != null) {
        inst.findingMethod = createInstanceFromFHIR('shr.base.FindingMethod', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-FindingStatus-extension');
      if (match != null) {
        inst.findingStatus = createInstanceFromFHIR('shr.base.FindingStatus', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelevantTime-extension');
      if (match != null) {
        inst.relevantTime = createInstanceFromFHIR('shr.base.RelevantTime', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-NonIndependentFinding-extension');
      if (match != null) {
        inst.nonIndependentFinding = createInstanceFromFHIR('shr.base.NonIndependentFinding', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ObjectIdentifier-extension');
      if (match != null) {
        inst.objectIdentifier = createInstanceFromFHIR('shr.base.ObjectIdentifier', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Certainty-extension');
      if (match != null) {
        inst.certainty = createInstanceFromFHIR('shr.base.Certainty', match, true);
      }
    }
    return inst;
  }

}
export default RelationshipExistenceAssertion;
