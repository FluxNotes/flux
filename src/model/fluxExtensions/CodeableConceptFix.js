import CodeableConcept from '../shr/core/CodeableConcept';
import { FHIRHelper, uuid } from '../json-helper'; 

export default class CodeableConceptFix extends CodeableConcept {
  
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    if (typeof fhir === 'string') {
      const inst = new CodeableConcept();

      inst.coding = inst.coding || [];
      const inst_coding = FHIRHelper.createInstanceFromFHIR('shr.core.Coding', fhir, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
      inst.coding.push(inst_coding);

      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir, 'string', shrId, allEntries, mappedResources, referencesOut, false);

      return inst;
    } else {
      return CodeableConcept.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}