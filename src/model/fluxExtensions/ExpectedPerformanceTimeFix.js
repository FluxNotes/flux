import ExpectedPerformanceTime from "../shr/core/ExpectedPerformanceTime";
import { FHIRHelper, uuid } from '../json-helper';

export default class ExpectedPerformanceTimeFix extends ExpectedPerformanceTime {
    static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
        const inst = new ExpectedPerformanceTimeFix();
        if (!asExtension && fhir != null) {
          // reminder: ExpectedPerformanceTime.value can be: (dateTime|TimePeriod|Timing)
    
          switch(fhirType) {
            case 'dateTime':
              inst.value = fhir;
              break;
            
            case 'Timing':
                inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Timing', fhir, 'Timing', shrId, allEntries, mappedResources, referencesOut);
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
