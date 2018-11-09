import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ActionPerformed from '../base/ActionPerformed';

/**
 * Generated class for shr.medication.MedicationDispensed.
 * @extends ActionPerformed
 */
class MedicationDispensed extends ActionPerformed {

  /**
   * Deserializes JSON data to an instance of the MedicationDispensed class.
   * The JSON must be valid against the MedicationDispensed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {MedicationDispensed} An instance of MedicationDispensed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new MedicationDispensed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the MedicationDispensed class to a JSON object.
   * The JSON is expected to be valid against the MedicationDispensed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/medication/MedicationDispensed' } };
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.participant != null) {
      inst['Participant'] = this.participant.map(f => f.toJSON());
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.method != null) {
      inst['Method'] = typeof this.method.toJSON === 'function' ? this.method.toJSON() : this.method;
    }
    if (this.relatedRequest != null) {
      inst['RelatedRequest'] = this.relatedRequest.map(f => f.toJSON());
    }
    if (this.facility != null) {
      inst['Facility'] = typeof this.facility.toJSON === 'function' ? this.facility.toJSON() : this.facility;
    }
    if (this.outcome != null) {
      inst['Outcome'] = typeof this.outcome.toJSON === 'function' ? this.outcome.toJSON() : this.outcome;
    }
    return inst;
  }

  /**
   * Serializes an instance of the MedicationDispensed class to a FHIR object.
   * The FHIR is expected to be valid against the MedicationDispensed FHIR profile, but no validation checks are performed.
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
    if (this.occurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR(true) : this.occurrenceTimeOrPeriod);
    }
    if (this.participant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.participant.toFHIR === 'function' ? this.participant.toFHIR(true) : this.participant);
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.status.toFHIR === 'function' ? this.status.toFHIR(true) : this.status);
    }
    if (this.method != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.method.toFHIR === 'function' ? this.method.toFHIR(true) : this.method);
    }
    if (this.relatedRequest != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.relatedRequest.toFHIR === 'function' ? this.relatedRequest.toFHIR(true) : this.relatedRequest);
    }
    if (this.facility != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR(true) : this.facility);
    }
    if (this.outcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR(true) : this.outcome);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the MedicationDispensed class.
   * The FHIR must be valid against the MedicationDispensed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {MedicationDispensed} An instance of MedicationDispensed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new MedicationDispensed();
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
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-OccurrenceTimeOrPeriod-extension');
      if (match != null) {
        inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Participant-extension');
      if (match != null) {
        inst.participant = createInstanceFromFHIR('shr.base.Participant', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Status-extension');
      if (match != null) {
        inst.status = createInstanceFromFHIR('shr.core.Status', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension');
      if (match != null) {
        inst.method = createInstanceFromFHIR('shr.base.Method', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RelatedRequest-extension');
      if (match != null) {
        inst.relatedRequest = createInstanceFromFHIR('shr.base.RelatedRequest', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Facility-extension');
      if (match != null) {
        inst.facility = createInstanceFromFHIR('shr.entity.Facility', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Outcome-extension');
      if (match != null) {
        inst.outcome = createInstanceFromFHIR('shr.base.Outcome', match, true);
      }
    }
    return inst;
  }

}
export default MedicationDispensed;
