import Coding from '../shr/core/Coding';
import { FHIRHelper, uuid } from '../json-helper'; 

export default class CodingFix extends Coding {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    // special logic introduced for "implied conversions" between code/coding/codeableConcept
    // see https://github.com/standardhealth/shr-es6-export/issues/37
    if (typeof fhir === 'string') {
      const inst = new Coding();

      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir, 'code', shrId, allEntries, mappedResources, referencesOut, false);
      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir, 'string', shrId, allEntries, mappedResources, referencesOut, false);

      return inst;
    } else {
      return Coding.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}