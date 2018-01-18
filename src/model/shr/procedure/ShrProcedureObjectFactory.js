import { getNamespaceAndName } from '../../json-helper';
import ProcedureAction from './ProcedureAction';
import ProcedurePerformed from './ProcedurePerformed';
import AssociatedStudy from './AssociatedStudy';
import SpecimenCollectionAction from './SpecimenCollectionAction';
import AmountOrSize from './AmountOrSize';
import ImagingAction from './ImagingAction';
import ImagingSubstance from './ImagingSubstance';
import LaboratoryProcedure from './LaboratoryProcedure';
import SurgicalProcedure from './SurgicalProcedure';
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
import ProcedureNotPerformed from './ProcedureNotPerformed';
import ProcedureRequested from './ProcedureRequested';
import ProcedureRequestedAgainst from './ProcedureRequestedAgainst';
import SpecimenCollectionPerformed from './SpecimenCollectionPerformed';
import SpecimenCollectionRequested from './SpecimenCollectionRequested';
import ImagingProcedurePerformed from './ImagingProcedurePerformed';
import ImagingProcedureRequested from './ImagingProcedureRequested';
import SurgicalProcedurePerformed from './SurgicalProcedurePerformed';
import SurgicalProcedureRequested from './SurgicalProcedureRequested';
import SurgicalProcedureNotPerformed from './SurgicalProcedureNotPerformed';
import SurgicalProcedureRequestedAgainst from './SurgicalProcedureRequestedAgainst';
import LaboratoryProcedurePerformed from './LaboratoryProcedurePerformed';
import LaboratoryProcedureRequested from './LaboratoryProcedureRequested';
import HIVScreeningTestPerformed from './HIVScreeningTestPerformed';
import HIVSupplementalTestPerformed from './HIVSupplementalTestPerformed';
import HIVScreeningTestRequested from './HIVScreeningTestRequested';
import HIVSupplementalTestRequested from './HIVSupplementalTestRequested';

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
    case 'ProcedureAction': return ProcedureAction.fromJSON(json);
    case 'ProcedurePerformed': return ProcedurePerformed.fromJSON(json);
    case 'AssociatedStudy': return AssociatedStudy.fromJSON(json);
    case 'SpecimenCollectionAction': return SpecimenCollectionAction.fromJSON(json);
    case 'AmountOrSize': return AmountOrSize.fromJSON(json);
    case 'ImagingAction': return ImagingAction.fromJSON(json);
    case 'ImagingSubstance': return ImagingSubstance.fromJSON(json);
    case 'LaboratoryProcedure': return LaboratoryProcedure.fromJSON(json);
    case 'SurgicalProcedure': return SurgicalProcedure.fromJSON(json);
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
    case 'ProcedureNotPerformed': return ProcedureNotPerformed.fromJSON(json);
    case 'ProcedureRequested': return ProcedureRequested.fromJSON(json);
    case 'ProcedureRequestedAgainst': return ProcedureRequestedAgainst.fromJSON(json);
    case 'SpecimenCollectionPerformed': return SpecimenCollectionPerformed.fromJSON(json);
    case 'SpecimenCollectionRequested': return SpecimenCollectionRequested.fromJSON(json);
    case 'ImagingProcedurePerformed': return ImagingProcedurePerformed.fromJSON(json);
    case 'ImagingProcedureRequested': return ImagingProcedureRequested.fromJSON(json);
    case 'SurgicalProcedurePerformed': return SurgicalProcedurePerformed.fromJSON(json);
    case 'SurgicalProcedureRequested': return SurgicalProcedureRequested.fromJSON(json);
    case 'SurgicalProcedureNotPerformed': return SurgicalProcedureNotPerformed.fromJSON(json);
    case 'SurgicalProcedureRequestedAgainst': return SurgicalProcedureRequestedAgainst.fromJSON(json);
    case 'LaboratoryProcedurePerformed': return LaboratoryProcedurePerformed.fromJSON(json);
    case 'LaboratoryProcedureRequested': return LaboratoryProcedureRequested.fromJSON(json);
    case 'HIVScreeningTestPerformed': return HIVScreeningTestPerformed.fromJSON(json);
    case 'HIVSupplementalTestPerformed': return HIVSupplementalTestPerformed.fromJSON(json);
    case 'HIVScreeningTestRequested': return HIVScreeningTestRequested.fromJSON(json);
    case 'HIVSupplementalTestRequested': return HIVSupplementalTestRequested.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrProcedureObjectFactory: ${type}`);
    }
  }
}
