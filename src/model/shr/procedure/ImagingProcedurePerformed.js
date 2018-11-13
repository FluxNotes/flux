import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import ProcedurePerformed from './ProcedurePerformed';

/**
 * Generated class for shr.procedure.ImagingProcedurePerformed.
 * @extends ProcedurePerformed
 */
class ImagingProcedurePerformed extends ProcedurePerformed {

  /**
   * Get the ImagingSubstance array.
   * @returns {Array<ImagingSubstance>} The shr.procedure.ImagingSubstance array
   */
  get imagingSubstance() {
    return this._imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   */
  set imagingSubstance(imagingSubstance) {
    this._imagingSubstance = imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array and return 'this' for chaining.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   * @returns {ImagingProcedurePerformed} this.
   */
  withImagingSubstance(imagingSubstance) {
    this.imagingSubstance = imagingSubstance; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImagingProcedurePerformed class.
   * The JSON must be valid against the ImagingProcedurePerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingProcedurePerformed} An instance of ImagingProcedurePerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImagingProcedurePerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ImagingProcedurePerformed class to a JSON object.
   * The JSON is expected to be valid against the ImagingProcedurePerformed JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/ImagingProcedurePerformed' } };
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
    if (this.participation != null) {
      inst['Participation'] = this.participation.map(f => f.toJSON());
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
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = this.anatomicalLocation.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.precondition != null) {
      inst['Precondition'] = this.precondition.map(f => f.toJSON());
    }
    if (this.inputFinding != null) {
      inst['InputFinding'] = this.inputFinding.map(f => f.toJSON());
    }
    if (this.indication != null) {
      inst['Indication'] = this.indication.map(f => f.toJSON());
    }
    if (this.device != null) {
      inst['Device'] = this.device.map(f => f.toJSON());
    }
    if (this.location != null) {
      inst['Location'] = typeof this.location.toJSON === 'function' ? this.location.toJSON() : this.location;
    }
    if (this.outputFinding != null) {
      inst['OutputFinding'] = this.outputFinding.map(f => f.toJSON());
    }
    if (this.imagingSubstance != null) {
      inst['ImagingSubstance'] = this.imagingSubstance.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Serializes an instance of the ImagingProcedurePerformed class to a FHIR object.
   * The FHIR is expected to be valid against the ImagingProcedurePerformed FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.method != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.method.toFHIR === 'function' ? this.method.toFHIR(true) : this.method);
    }
    if (this.precondition != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.precondition.toFHIR === 'function' ? this.precondition.toFHIR(true) : this.precondition);
    }
    if (this.inputFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.inputFinding.toFHIR === 'function' ? this.inputFinding.toFHIR(true) : this.inputFinding);
    }
    if (this.indication != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.indication.toFHIR === 'function' ? this.indication.toFHIR(true) : this.indication);
    }
    if (this.device != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.device.toFHIR === 'function' ? this.device.toFHIR(true) : this.device);
    }
    if (this.location != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.location.toFHIR === 'function' ? this.location.toFHIR(true) : this.location);
    }
    if (this.outputFinding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.outputFinding.toFHIR === 'function' ? this.outputFinding.toFHIR(true) : this.outputFinding);
    }
    if (this.imagingSubstance != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.imagingSubstance.toFHIR === 'function' ? this.imagingSubstance.toFHIR(true) : this.imagingSubstance);
    }
    if (this.relatedRequest != null && this.relatedRequest.actionRequested != null) {
      inst['basedOn'] = inst ['basedOn'] || [];
      inst['basedOn'] = inst['basedOn'].concat(this.relatedRequest.actionRequested.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.partOf != null) {
      inst['partOf'] = inst ['partOf'] || [];
      inst['partOf'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR() : this.partOf);
    }
    if (this.status != null) {
      inst['status'] = typeof this.status.toFHIR === 'function' ? this.status.toFHIR() : this.status;
    }
    if (this.category != null) {
      inst['category'] = typeof this.category.toFHIR === 'function' ? this.category.toFHIR() : this.category;
    }
    if (this.topicCode != null) {
      inst['code'] = typeof this.topicCode.toFHIR === 'function' ? this.topicCode.toFHIR() : this.topicCode;
    }
    if (this.patient != null) {
      inst['subject'] = typeof this.patient.toFHIR === 'function' ? this.patient.toFHIR() : this.patient;
    }
    if (this.encounter != null) {
      inst['context'] = typeof this.encounter.toFHIR === 'function' ? this.encounter.toFHIR() : this.encounter;
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['performed[x]'] = typeof this.occurrenceTimeOrPeriod.toFHIR === 'function' ? this.occurrenceTimeOrPeriod.toFHIR() : this.occurrenceTimeOrPeriod;
    }
    if (this.participation != null && this.participation.participationType != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['role'] = inst ['performer']['role'] || [];
      inst['performer']['role'] = inst['performer']['role'].concat(this.participation.participationType.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.participation != null && this.participation.participant != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['actor'] = inst ['performer']['actor'] || [];
      inst['performer']['actor'] = inst['performer']['actor'].concat(this.participation.participant.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.participation != null && this.participation.onBehalfOf != null) {
      if(inst['performer'] === undefined) {
        inst['performer'] = {};
      }
      inst['performer']['onBehalfOf'] = inst ['performer']['onBehalfOf'] || [];
      inst['performer']['onBehalfOf'] = inst['performer']['onBehalfOf'].concat(this.participation.onBehalfOf.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.facility != null) {
      inst['location'] = typeof this.facility.toFHIR === 'function' ? this.facility.toFHIR() : this.facility;
    }
    if (this.reason != null) {
      inst['reasonCode'] = inst ['reasonCode'] || [];
      inst['reasonCode'] = inst['reasonCode'].concat(this.reason.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.anatomicalLocation != null && this.anatomicalLocation.anatomicalLocationOrLandmarkCode != null) {
      inst['bodySite'] = inst ['bodySite'] || [];
      inst['bodySite'] = inst['bodySite'].concat(this.anatomicalLocation.anatomicalLocationOrLandmarkCode.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.outcome != null) {
      inst['outcome'] = typeof this.outcome.toFHIR === 'function' ? this.outcome.toFHIR() : this.outcome;
    }
    if (this.annotation != null) {
      inst['note'] = inst ['note'] || [];
      inst['note'] = inst['note'].concat(this.annotation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ImagingProcedurePerformed class.
   * The FHIR must be valid against the ImagingProcedurePerformed FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ImagingProcedurePerformed} An instance of ImagingProcedurePerformed populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ImagingProcedurePerformed();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-Method-extension');
      if (match != null) {
        inst.method = createInstanceFromFHIR('shr.base.Method', match, true);
      }
    }
    if (fhir['basedOn'] != null) {
      if(inst.relatedRequest == null) {
        inst.relatedRequest = createInstanceFromFHIR('shr.base.RelatedRequest', {});
      }
      inst.relatedRequest.value = createInstanceFromFHIR('shr.base.ActionRequested', fhir['basedOn'][0]);
    }
    if (fhir['partOf'] != null) {
      inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', fhir['partOf'][0]);
    }
    if (fhir['status'] != null) {
      inst.status = createInstanceFromFHIR('shr.core.Status', fhir['status']);
    }
    if (fhir['category'] != null) {
      inst.category = createInstanceFromFHIR('shr.core.Category', fhir['category']);
    }
    if (fhir['code'] != null) {
      inst.topicCode = createInstanceFromFHIR('shr.base.TopicCode', fhir['code']);
    }
    if (fhir['subject'] != null) {
      inst.patient = createInstanceFromFHIR('shr.entity.Patient', fhir['subject']);
    }
    if (fhir['context'] != null) {
      inst.encounter = createInstanceFromFHIR('shr.encounter.Encounter', fhir['context']);
    }
    if (fhir['performedDateTime'] != null) {
      inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedDateTime']);
    }
    if (fhir['performedPeriod'] != null) {
      inst.occurrenceTimeOrPeriod = createInstanceFromFHIR('shr.core.OccurrenceTimeOrPeriod', fhir['performedPeriod']);
    }
    if (fhir['performer'] != null && fhir['performer']['role'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.participationType = createInstanceFromFHIR('shr.base.ParticipationType', fhir['performer']['role']);
    }
    if (fhir['performer'] != null && fhir['performer']['actor'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.participant = createInstanceFromFHIR('shr.base.Participant', fhir['performer']['actor']);
    }
    if (fhir['performer'] != null && fhir['performer']['onBehalfOf'] != null) {
      if(inst.participation == null) {
        inst.participation = createInstanceFromFHIR('shr.base.Participation', {});
      }
      inst.participation.onBehalfOf = createInstanceFromFHIR('shr.core.OnBehalfOf', fhir['performer']['onBehalfOf']);
    }
    if (fhir['location'] != null) {
      inst.facility = createInstanceFromFHIR('shr.entity.Facility', fhir['location']);
    }
    if (fhir['reasonCode'] != null) {
      inst.reason = inst.reason || [];
      inst.reason = inst.reason.concat(fhir['reasonCode'].map(f => createInstanceFromFHIR('shr.base.Reason', f)));
    }
    if (fhir['bodySite'] != null) {
      if(inst.anatomicalLocation == null) {
        inst.anatomicalLocation = createInstanceFromFHIR('shr.core.AnatomicalLocation', {});
      }
      inst.anatomicalLocation.anatomicalLocationOrLandmarkCode = createInstanceFromFHIR('shr.core.AnatomicalLocationOrLandmarkCode', fhir['bodySite'][0]);
    }
    if (fhir['outcome'] != null) {
      inst.outcome = createInstanceFromFHIR('shr.base.Outcome', fhir['outcome']);
    }
    if (fhir['note'] != null) {
      inst.annotation = inst.annotation || [];
      inst.annotation = inst.annotation.concat(fhir['note'].map(f => createInstanceFromFHIR('shr.core.Annotation', f)));
    }
    return inst;
  }

}
export default ImagingProcedurePerformed;
