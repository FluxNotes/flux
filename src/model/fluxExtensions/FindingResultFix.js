import FindingResult from '../shr/base/FindingResult';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the shr.base.FindingResult.fromFHIR function with a version that handles various different FHIR types correctly.
 
 * See this bug for more information: https://github.com/standardhealth/shr-es6-export/issues/35
 */ 
export default class FindingResultFix extends FindingResult {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new FindingResultFix();
    if (!asExtension && fhir != null) {
      // reminder: Reason.value can be: (CodeableConcept|Quantity|string|Range|Ratio|time|dateTime|TimePeriod)

      switch(fhirType) {
        case 'string':
        case 'time':
        case 'dateTime':
          inst.value = fhir;
          break;

        case 'CodeableConcept':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut);
          break;

        case 'Quantity':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Quantity', fhir, 'Quantity', shrId, allEntries, mappedResources, referencesOut);
          break;

        case 'Range':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Range', fhir, 'Range', shrId, allEntries, mappedResources, referencesOut);
          break;

        case 'Ratio':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Ratio', fhir, 'Ratio', shrId, allEntries, mappedResources, referencesOut);
          break;

        // the one instance here where the FHIR type != the SHR type name....
        case 'Period':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.TimePeriod', fhir, 'Period', shrId, allEntries, mappedResources, referencesOut);
          break;

        default:
          // do nothing
      }
    }
    return inst;
  }
}