import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionStatement from './ActionStatement';

/**
 * Generated class for shr.base.ActionRequestedAgainst.
 * @extends ActionStatement
 */
class ActionRequestedAgainst extends ActionStatement {

  /**
   * Deserializes JSON data to an instance of the ActionRequestedAgainst class.
   * The JSON must be valid against the ActionRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionRequestedAgainst} An instance of ActionRequestedAgainst populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionRequestedAgainst class to a JSON object.
   * The JSON is expected to be valid against the ActionRequestedAgainst JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ActionRequestedAgainst' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.patient != null) {
      inst['Patient'] = typeof this.patient.toJSON === 'function' ? this.patient.toJSON() : this.patient;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the ActionRequestedAgainst class to a FHIR object.
   * The FHIR is expected to be valid against the ActionRequestedAgainst FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.topicCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR(true) : this.topicCode);
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.category.toFHIR === 'function' ? this.category.toFHIR(true) : this.category);
    }
    if (this.patient != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR(true) : this.patient);
    }
    if (this.encounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR(true) : this.encounter);
    }
    if (this.reason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.reason.toFHIR === 'function' ? this.reason.toFHIR(true) : this.reason);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionRequestedAgainst class.
   * The FHIR must be valid against the ActionRequestedAgainst FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ActionRequestedAgainst} An instance of ActionRequestedAgainst populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ActionRequestedAgainst();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-TopicCode-extension');
      if (match != null) {
        inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Category-extension');
      if (match != null) {
        inst.category = createInstanceFromFHIR('shr.core.Category', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Patient-extension');
      if (match != null) {
        inst.patient = createInstanceFromFHIR('shr.entity.Patient', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-Encounter-extension');
      if (match != null) {
        inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Reason-extension');
      if (match != null) {
        inst.reason = createInstanceFromFHIR('shr.base.Reason', match, true);
      }
    }
    return inst;
  }

}
export default ActionRequestedAgainst;
