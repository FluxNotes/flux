import TNMClinicalStageGroup from '../onco/core/TNMClinicalStageGroup';
import { FHIRHelper, uuid } from '../json-helper'; 

/**
 * This fix class updates fromFHIR in TNMClinicalStageGroup with a fix for ID matching.
 * 
 * See https://github.com/standardhealth/shr-es6-export/issues/40 for more info.
 */
export default class TNMClinicalStageGroupFix extends TNMClinicalStageGroup {

  static idsMatch(lhs, rhs) {
    if (lhs === rhs) return true;

    if (!lhs || !rhs) return false;

    if (lhs.endsWith(rhs) || rhs.endsWith(lhs)) return true;

    // slice off the urn:uuid: if either has one
    if (lhs.startsWith('urn:uuid:')) {
      lhs = lhs.slice(9);
    }
    if (rhs.startsWith('urn:uuid:')) {
      rhs = rhs.slice(9);
    }

    if (lhs.endsWith(rhs) || rhs.endsWith(lhs)) return true;

    // there are probably more combinations but this is enough for now

    return false;
  }

  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = super.fromFHIR(fhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);

    // this section mostly just copy & pasted but with slight tweaks to the ID matching
    // before:
    //  e.fullUrl === fhir_related['target']['reference'] 
    //  e.fullUrl === entryId
    // after:
    //   this.idsMatch(e.fullUrl, fhir_related['target']['reference'])
    //   this.idsMatch(e.fullUrl, entryId)

    // also the profile URLs had an extra DSTU2 in them for some reason???

    // added override check for inst.panelMembers

    for (const fhir_related of fhir['related'] || []) {
      inst.panelMembers = inst.panelMembers || FHIRHelper.createInstanceFromFHIR('shr.core.PanelMembers', {}, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => this.idsMatch(e.fullUrl, fhir_related['target']['reference'])), 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalPrimaryTumorCategory')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => this.idsMatch(e.fullUrl, entryId));
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('onco.core.TNMClinicalPrimaryTumorCategory', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalPrimaryTumorCategory';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => this.idsMatch(e.fullUrl, fhir_related['target']['reference'])), 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalRegionalNodesCategory')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => this.idsMatch(e.fullUrl, entryId));
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('onco.core.TNMClinicalRegionalNodesCategory', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalRegionalNodesCategory';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
      if (fhir_related['target'] != null && fhir_related['target']['reference'] != null && FHIRHelper.conformsToProfile(allEntries.find(e => this.idsMatch(e.fullUrl, fhir_related['target']['reference'])), 'http://hl7.org/fhir/us/shr/StructureDefinition/onco-core-TNMClinicalDistantMetastasesCategory')) {
        if (fhir_related['target'] != null) {
          inst.panelMembers.observation = inst.panelMembers.observation || [];
          const entryId = fhir_related['target']['reference'];
          if (!mappedResources[entryId]) {
            const referencedEntry = allEntries.find(e => this.idsMatch(e.fullUrl, entryId));
            if (referencedEntry) {
              mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('onco.core.TNMClinicalDistantMetastasesCategory', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
            }
          }
          let inst_panelMembers_observation;
          if (mappedResources[entryId]) {
            inst_panelMembers_observation = FHIRHelper.createReference(mappedResources[entryId], referencesOut);
          }
          else {
            const entryType = 'http://standardhealthrecord.org/spec/onco/core/TNMClinicalDistantMetastasesCategory';
            inst_panelMembers_observation = FHIRHelper.createReferenceWithoutObject(shrId, entryId, entryType);
          }
          inst.panelMembers.observation.push(inst_panelMembers_observation);
        }
      }
    }

    return inst;
  }
}