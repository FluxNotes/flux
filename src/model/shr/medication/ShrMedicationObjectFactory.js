import { getNamespaceAndName } from '../../json-helper';
import RouteIntoBody from './RouteIntoBody';
import MedicationAction from './MedicationAction';
import AdditionalDoseInstruction from './AdditionalDoseInstruction';
import AdministrationMethod from './AdministrationMethod';
import Dosage from './Dosage';
import DoseAmount from './DoseAmount';
import TimingOfDoses from './TimingOfDoses';
import AsNeededIndicator from './AsNeededIndicator';
import DoseInstructionsText from './DoseInstructionsText';
import AdministrationBodySite from './AdministrationBodySite';
import MaximumDosePerTimePeriod from './MaximumDosePerTimePeriod';
import MedicationDispenseAction from './MedicationDispenseAction';
import NumberOfRefillsAllowed from './NumberOfRefillsAllowed';
import QuantityPerDispense from './QuantityPerDispense';
import SupplyDuration from './SupplyDuration';
import MedicationUsed from './MedicationUsed';
import Adherence from './Adherence';
import MedicationNotUsed from './MedicationNotUsed';
import MedicationRequested from './MedicationRequested';
import MedicationNotRequested from './MedicationNotRequested';
import MedicationDispensed from './MedicationDispensed';
import MedicationNotDispensed from './MedicationNotDispensed';
import MedicationChange from './MedicationChange';
import MedicationBeforeChange from './MedicationBeforeChange';
import MedicationAfterChange from './MedicationAfterChange';

/**
 * Generated object factory for the shr.medication namespace.
 */
export default class ShrMedicationObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.medication') {
      throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'RouteIntoBody': return RouteIntoBody.fromJSON(json);
    case 'MedicationAction': return MedicationAction.fromJSON(json);
    case 'AdditionalDoseInstruction': return AdditionalDoseInstruction.fromJSON(json);
    case 'AdministrationMethod': return AdministrationMethod.fromJSON(json);
    case 'Dosage': return Dosage.fromJSON(json);
    case 'DoseAmount': return DoseAmount.fromJSON(json);
    case 'TimingOfDoses': return TimingOfDoses.fromJSON(json);
    case 'AsNeededIndicator': return AsNeededIndicator.fromJSON(json);
    case 'DoseInstructionsText': return DoseInstructionsText.fromJSON(json);
    case 'AdministrationBodySite': return AdministrationBodySite.fromJSON(json);
    case 'MaximumDosePerTimePeriod': return MaximumDosePerTimePeriod.fromJSON(json);
    case 'MedicationDispenseAction': return MedicationDispenseAction.fromJSON(json);
    case 'NumberOfRefillsAllowed': return NumberOfRefillsAllowed.fromJSON(json);
    case 'QuantityPerDispense': return QuantityPerDispense.fromJSON(json);
    case 'SupplyDuration': return SupplyDuration.fromJSON(json);
    case 'MedicationUsed': return MedicationUsed.fromJSON(json);
    case 'Adherence': return Adherence.fromJSON(json);
    case 'MedicationNotUsed': return MedicationNotUsed.fromJSON(json);
    case 'MedicationRequested': return MedicationRequested.fromJSON(json);
    case 'MedicationNotRequested': return MedicationNotRequested.fromJSON(json);
    case 'MedicationDispensed': return MedicationDispensed.fromJSON(json);
    case 'MedicationNotDispensed': return MedicationNotDispensed.fromJSON(json);
    case 'MedicationChange': return MedicationChange.fromJSON(json);
    case 'MedicationBeforeChange': return MedicationBeforeChange.fromJSON(json);
    case 'MedicationAfterChange': return MedicationAfterChange.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
    }
  }
}
