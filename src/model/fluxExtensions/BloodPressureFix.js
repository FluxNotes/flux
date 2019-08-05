import BloodPressure from '../shr/core/BloodPressure';
import { FHIRHelper, uuid } from '../json-helper'; 


export default class BloodPressureFix extends BloodPressure {


  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {

    const tweakedFhir = Object.assign({}, fhir); // simple dup so we can remove fhir['component']
    delete tweakedFhir.component;

    const inst = super.fromFHIR(tweakedFhir, fhirType, shrId, allEntries, mappedResources, referencesOut, asExtension);

    for (const fhir_component of fhir['component'] || []) {
      inst.components = inst.components || FHIRHelper.createInstanceFromFHIR('shr.core.Components', {}, null, shrId);
      inst.components.observationComponent = inst.components.observationComponent || [];
      if (fhir_component['code'] != null && fhir_component['code']['coding'] != null && fhir_component['code']['coding'].some(g => g['code'] != null && g['code'] === '8480-6')) {
        const inst_components_observationComponent = FHIRHelper.createInstanceFromFHIR('shr.core.SystolicPressure', fhir_component, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
        inst.components.observationComponent.push(inst_components_observationComponent);
      }
      if (fhir_component['code'] != null && fhir_component['code']['coding'] != null && fhir_component['code']['coding'].some(g => g['code'] != null && g['code'] === '8462-4')) {
        const inst_components_observationComponent = FHIRHelper.createInstanceFromFHIR('shr.core.DiastolicPressure', fhir_component, 'BackboneElement', shrId, allEntries, mappedResources, referencesOut, false);
        inst.components.observationComponent.push(inst_components_observationComponent);      
      }
    }

    return inst;
  }
}