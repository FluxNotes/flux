import MedicationRequested from '../shr/medication/MedicationRequested';
import { FHIRHelper, uuid } from '../json-helper'; 

export default class MedicationRequestedFix extends MedicationRequested {

  // StatementDateTime is present in newer versions of the spec
  // this will become a shr.core.StatementDateTime, for now just make it a shr.core.BeginDateTime
  // since both only contain a value of type dateTime
  get statementDateTime() {
    return this._statementDateTime;
  }

  set statementDateTime(statementDateTime) {
    this._statementDateTime = statementDateTime;
  }

  withStatementDateTime(statementDateTime) {
    this.statementDateTime = statementDateTime; return this;
  }

  toJSON() {
    const inst = super.toJSON();

    if (this.statementDateTime != null) {
      inst['StatementDateTime'] = typeof this.statementDateTime.toJSON === 'function' ? this.statementDateTime.toJSON() : this.statementDateTime;
    }

    return inst;
  }

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);

    // reasonReference added since it doesn't seem to be in the spec
    if (fhir['reasonReference'] != null) {
      inst.reason = inst.reason || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.base.Reason', fhir['reasonReference'], 'Reference', shrId, allEntries, mappedResources, referencesOut, false);
      inst.reason.push(inst_reason);
    }
    if (fhir['dateWritten'] != null) {
      inst.statementDateTime = FHIRHelper.createInstanceFromFHIR('shr.core.BeginDateTime', fhir['dateWritten'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['medicationCodeableConcept'] != null) {
      inst.medication = FHIRHelper.createInstanceFromFHIR('shr.entity.Medication', {}, null, shrId, allEntries, mappedResources, referencesOut);
      inst.medication.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['medicationCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }

    return inst;
  }
}