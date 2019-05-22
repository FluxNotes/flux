/* eslint-disable */
import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../../json-helper';
import ProcedureCode from './ProcedureCode';
import ProcedurePerformed from './ProcedurePerformed';
import InputFinding from './InputFinding';
import Indication from './Indication';
import FHIRProcedureParticipant from './FHIRProcedureParticipant';
import OutputFinding from './OutputFinding';
import ProcedureNotPerformed from './ProcedureNotPerformed';
import ProcedureRequested from './ProcedureRequested';
import ProcedureRequestedAgainst from './ProcedureRequestedAgainst';
import ImagingProcedurePerformed from './ImagingProcedurePerformed';
import ImagingSubstance from './ImagingSubstance';
import LaboratoryProcedurePerformed from './LaboratoryProcedurePerformed';
import SurgicalProcedurePerformed from './SurgicalProcedurePerformed';
import DirectSite from './DirectSite';
import DirectSiteCode from './DirectSiteCode';
import IndirectSite from './IndirectSite';
import IndirectSiteCode from './IndirectSiteCode';
import SurgicalApproach from './SurgicalApproach';
import Access from './Access';
import UsingDevice from './UsingDevice';
import UsingDeviceCode from './UsingDeviceCode';
import UsingAccessDevice from './UsingAccessDevice';
import UsingAccessDeviceCode from './UsingAccessDeviceCode';
import IndirectDevice from './IndirectDevice';
import IndirectDeviceCode from './IndirectDeviceCode';
import SpecimenCollectionPerformed from './SpecimenCollectionPerformed';
import AmountOrSize from './AmountOrSize';
import DiagnosticImagingPerformed from './DiagnosticImagingPerformed';

/**
 * Generated object factory for the shr.procedure namespace.
 */
export default class ShrProcedureObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.procedure') {
      throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ProcedureCode': return ProcedureCode.fromJSON(json);
    case 'ProcedurePerformed': return ProcedurePerformed.fromJSON(json);
    case 'InputFinding': return InputFinding.fromJSON(json);
    case 'Indication': return Indication.fromJSON(json);
    case 'FHIRProcedureParticipant': return FHIRProcedureParticipant.fromJSON(json);
    case 'OutputFinding': return OutputFinding.fromJSON(json);
    case 'ProcedureNotPerformed': return ProcedureNotPerformed.fromJSON(json);
    case 'ProcedureRequested': return ProcedureRequested.fromJSON(json);
    case 'ProcedureRequestedAgainst': return ProcedureRequestedAgainst.fromJSON(json);
    case 'ImagingProcedurePerformed': return ImagingProcedurePerformed.fromJSON(json);
    case 'ImagingSubstance': return ImagingSubstance.fromJSON(json);
    case 'LaboratoryProcedurePerformed': return LaboratoryProcedurePerformed.fromJSON(json);
    case 'SurgicalProcedurePerformed': return SurgicalProcedurePerformed.fromJSON(json);
    case 'DirectSite': return DirectSite.fromJSON(json);
    case 'DirectSiteCode': return DirectSiteCode.fromJSON(json);
    case 'IndirectSite': return IndirectSite.fromJSON(json);
    case 'IndirectSiteCode': return IndirectSiteCode.fromJSON(json);
    case 'SurgicalApproach': return SurgicalApproach.fromJSON(json);
    case 'Access': return Access.fromJSON(json);
    case 'UsingDevice': return UsingDevice.fromJSON(json);
    case 'UsingDeviceCode': return UsingDeviceCode.fromJSON(json);
    case 'UsingAccessDevice': return UsingAccessDevice.fromJSON(json);
    case 'UsingAccessDeviceCode': return UsingAccessDeviceCode.fromJSON(json);
    case 'IndirectDevice': return IndirectDevice.fromJSON(json);
    case 'IndirectDeviceCode': return IndirectDeviceCode.fromJSON(json);
    case 'SpecimenCollectionPerformed': return SpecimenCollectionPerformed.fromJSON(json);
    case 'AmountOrSize': return AmountOrSize.fromJSON(json);
    case 'DiagnosticImagingPerformed': return DiagnosticImagingPerformed.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'shr.procedure') {
      throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ProcedureCode': return ProcedureCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProcedurePerformed': return ProcedurePerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'InputFinding': return InputFinding.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'Indication': return Indication.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'FHIRProcedureParticipant': return FHIRProcedureParticipant.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'OutputFinding': return OutputFinding.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProcedureNotPerformed': return ProcedureNotPerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProcedureRequested': return ProcedureRequested.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ProcedureRequestedAgainst': return ProcedureRequestedAgainst.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ImagingProcedurePerformed': return ImagingProcedurePerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'ImagingSubstance': return ImagingSubstance.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'LaboratoryProcedurePerformed': return LaboratoryProcedurePerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SurgicalProcedurePerformed': return SurgicalProcedurePerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DirectSite': return DirectSite.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DirectSiteCode': return DirectSiteCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'IndirectSite': return IndirectSite.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'IndirectSiteCode': return IndirectSiteCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SurgicalApproach': return SurgicalApproach.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'Access': return Access.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'UsingDevice': return UsingDevice.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'UsingDeviceCode': return UsingDeviceCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'UsingAccessDevice': return UsingAccessDevice.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'UsingAccessDeviceCode': return UsingAccessDeviceCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'IndirectDevice': return IndirectDevice.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'IndirectDeviceCode': return IndirectDeviceCode.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SpecimenCollectionPerformed': return SpecimenCollectionPerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'AmountOrSize': return AmountOrSize.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'DiagnosticImagingPerformed': return DiagnosticImagingPerformed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
    }
  }
}
