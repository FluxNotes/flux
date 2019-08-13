import PrimaryCancerCondition from '../onco/core/PrimaryCancerCondition';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the original onco.core.PrimaryCancerCondition.fromFHIR function 
 * with a version that handles the extension.valueReference correctly.
 * 
 * See also: https://github.com/standardhealth/shr-es6-export/issues/57
 */ 
export default class PrimaryCancerConditionFix extends PrimaryCancerCondition {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    if (asExtension && fhir['valueReference']) {

      const entryId = fhir['valueReference']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('onco.core.PrimaryCancerCondition', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      return mappedResources[entryId];

    } else {
      return super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}