import RelatedCancerCondition from '../onco/core/RelatedCancerCondition';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class replaces the original onco.core.RelatedCancerCondition.fromFHIR function 
 * with a version that sets the value correctly as a reference instead of a full object.
 */ 
export default class RelatedCancerConditionFix extends RelatedCancerCondition {

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    if (asExtension && fhir['valueReference']) {
      const inst = new RelatedCancerConditionFix();
      
      const entryId = fhir['valueReference']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR(null, referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      if (mappedResources[entryId]) {
        inst.value = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
      }
      // no else in this case since we don't know which of the 3 possible types it is

      return inst;
    } else {
      return super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);
    }
  }
}