import MedicationRequest from '../shr/core/MedicationRequest';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class adds a reasonReference mapping to the shr.core.MedicationRequest class fromFHIR method.
 */
export default class MedicationRequestFix extends MedicationRequest {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);

    // reasonReference is in the spec and ES6 class but not mapped in fromFHIR for some reason. need to review
    if (fhir['reasonReference'] != null) {
      inst.reasonReference = inst.reasonReference || [];
      const inst_reason = FHIRHelper.createInstanceFromFHIR('shr.core.ReasonReference', fhir['reasonReference'], 'Reference', shrId, allEntries, mappedResources, referencesOut, false);
      inst.reasonReference.push(inst_reason);
    }

    return inst;
  }
}