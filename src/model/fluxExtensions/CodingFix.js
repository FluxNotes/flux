import Coding from '../shr/core/Coding';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the original shr.core.Coding.fromFHIR function 
 * with a version that accepts strings or objects, in support of CIMPL's implicit conversions between code/Coding/CodeableConcept.
 * As of this writing (2019-06-06) the version of the exporter that supports CIMPL 5 does not support these implicit conversions,
 * but the version that supports CIMPL 6 does. Once the classes are re-generated based on a CIMPL6-defined spec, this can be removed.
 * 
 * See also: https://github.com/standardhealth/shr-es6-export/issues/37
 */ 
export default class CodingFix extends Coding {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    // special logic introduced for "implied conversions" between code/coding/codeableConcept
    // see https://github.com/standardhealth/shr-es6-export/issues/37
    if (typeof fhir === 'string') {
      const inst = new CodingFix();

      inst.code = FHIRHelper.createInstanceFromFHIR('shr.core.Code', fhir, 'code', shrId, allEntries, mappedResources, referencesOut, false);
      inst.displayText = FHIRHelper.createInstanceFromFHIR('shr.core.DisplayText', fhir, 'string', shrId, allEntries, mappedResources, referencesOut, false);

      return inst;
    } else {
      return super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}