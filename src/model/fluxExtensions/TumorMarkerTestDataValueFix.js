import TumorMarkerTestDataValue from '../onco/core/TumorMarkerTestDataValue';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the onco.core.TumorMarkerTestDataValue.fromFHIR function with a version that handles various different FHIR types correctly.
 
 * See this bug for more information: https://github.com/standardhealth/shr-es6-export/issues/35
 */ 
export default class TumorMarkerTestDataValueFix extends TumorMarkerTestDataValue {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new TumorMarkerTestDataValueFix();
    if (!asExtension && fhir != null) {
      // reminder: TumorMarkerTestDataValue.value can be: (CodeableConcept|Quantity|Ratio)

      switch(fhirType) {
        case 'CodeableConcept':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.CodeableConcept', fhir, 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut);
          break;

        case 'Quantity':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Quantity', fhir, 'Quantity', shrId, allEntries, mappedResources, referencesOut);
          break;

        case 'Ratio':
          inst.value = FHIRHelper.createInstanceFromFHIR('shr.core.Ratio', fhir, 'Ratio', shrId, allEntries, mappedResources, referencesOut);
          break;

        default:
          // do nothing
      }
    }
    return inst;
  }
}