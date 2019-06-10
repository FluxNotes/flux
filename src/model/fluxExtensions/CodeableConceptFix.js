import CodeableConcept from '../shr/core/CodeableConcept';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the original shr.core.CodeableConcept.fromFHIR function 
 * with a version that accepts strings or objects, in support of CIMPL's implicit conversions between code/Coding/CodeableConcept.
 * As of this writing (2019-06-06) the version of the exporter that supports CIMPL 5 does not support these implicit conversions,
 * but the version that supports CIMPL 6 does. Once the classes are re-generated based on a CIMPL6-defined spec, this can be removed.
 * 
 * See also: https://github.com/standardhealth/shr-es6-export/issues/37
 */ 
export default class CodeableConceptFix extends CodeableConcept {
  
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    if (typeof fhir === 'string') {
      const inst = new CodeableConceptFix();

      inst.coding = inst.coding || [];
      const inst_coding = FHIRHelper.createInstanceFromFHIR('shr.core.Coding', fhir, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
      inst.coding.push(inst_coding);

      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir, 'string', shrId, allEntries, mappedResources, referencesOut, false);

      return inst;
    } else {
      return super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}