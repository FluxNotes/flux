import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import InformationItem from './InformationItem';

/**
 * Generated class for shr.base.ActionStatement.
 * @extends InformationItem
 */
class ActionStatement extends InformationItem {

  /**
   * Get the TopicCode.
   * @returns {TopicCode} The shr.base.TopicCode
   */
  get topicCode() {
    return this._topicCode;
  }

  /**
   * Set the TopicCode.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   */
  set topicCode(topicCode) {
    this._topicCode = topicCode;
  }

  /**
   * Set the TopicCode and return 'this' for chaining.
   * This field/value is required.
   * @param {TopicCode} topicCode - The shr.base.TopicCode
   * @returns {ActionStatement} this.
   */
  withTopicCode(topicCode) {
    this.topicCode = topicCode; return this;
  }

  /**
   * Get the Category.
   * @returns {Category} The shr.core.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category.
   * @param {Category} category - The shr.core.Category
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category and return 'this' for chaining.
   * @param {Category} category - The shr.core.Category
   * @returns {ActionStatement} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the Patient.
   * @returns {Patient} The shr.entity.Patient
   */
  get patient() {
    return this._patient;
  }

  /**
   * Set the Patient.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   */
  set patient(patient) {
    this._patient = patient;
  }

  /**
   * Set the Patient and return 'this' for chaining.
   * This field/value is required.
   * @param {Patient} patient - The shr.entity.Patient
   * @returns {ActionStatement} this.
   */
  withPatient(patient) {
    this.patient = patient; return this;
  }

  /**
   * Get the Encounter.
   * @returns {Encounter} The shr.encounter.Encounter
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Set the Encounter.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   */
  set encounter(encounter) {
    this._encounter = encounter;
  }

  /**
   * Set the Encounter and return 'this' for chaining.
   * @param {Encounter} encounter - The shr.encounter.Encounter
   * @returns {ActionStatement} this.
   */
  withEncounter(encounter) {
    this.encounter = encounter; return this;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.base.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.base.Reason array
   * @returns {ActionStatement} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionStatement class.
   * The JSON must be valid against the ActionStatement JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionStatement} An instance of ActionStatement populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionStatement();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionStatement class to a JSON object.
   * The JSON is expected to be valid against the ActionStatement JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/ActionStatement' } };
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
   * Serializes an instance of the ActionStatement class to a FHIR object.
   * The FHIR is expected to be valid against the ActionStatement FHIR profile, but no validation checks are performed.
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
   * Deserializes FHIR JSON data to an instance of the ActionStatement class.
   * The FHIR must be valid against the ActionStatement FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ActionStatement} An instance of ActionStatement populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ActionStatement();
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
export default ActionStatement;
