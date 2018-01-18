import { getNamespaceAndName } from '../../json-helper';
import ExposureMethod from './ExposureMethod';
import FinancialSituationPanel from './FinancialSituationPanel';
import AnnualIncome from './AnnualIncome';
import IncomeSource from './IncomeSource';
import IncomeStability from './IncomeStability';
import CanAffordFood from './CanAffordFood';
import CanAffordHousing from './CanAffordHousing';
import CanAffordClothing from './CanAffordClothing';
import CanAffordUtilities from './CanAffordUtilities';
import CanAffordTransportation from './CanAffordTransportation';
import CanAffordMedication from './CanAffordMedication';
import CanAffordDentalCare from './CanAffordDentalCare';
import CanAffordChildCare from './CanAffordChildCare';
import NonCashBenefit from './NonCashBenefit';
import HouseholdSituationPanel from './HouseholdSituationPanel';
import HouseholdSize from './HouseholdSize';
import Coinhabitant from './Coinhabitant';
import NumberOfDependents from './NumberOfDependents';
import ExposureToAgent from './ExposureToAgent';
import ExposureSourceOrVector from './ExposureSourceOrVector';
import ExposureAmount from './ExposureAmount';
import ExposureReason from './ExposureReason';
import ExposureRoute from './ExposureRoute';
import AnimalExposure from './AnimalExposure';
import SocialEnvironment from './SocialEnvironment';
import TransportationAvailability from './TransportationAvailability';
import HousingSecurity from './HousingSecurity';
import PhysicalSafety from './PhysicalSafety';
import EmotionalSafety from './EmotionalSafety';
import DomesticViolence from './DomesticViolence';
import HomeEnvironmentRisk from './HomeEnvironmentRisk';

/**
 * Generated object factory for the shr.environment namespace.
 */
export default class ShrEnvironmentObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.environment') {
      throw new Error(`Unsupported type in ShrEnvironmentObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ExposureMethod': return ExposureMethod.fromJSON(json);
    case 'FinancialSituationPanel': return FinancialSituationPanel.fromJSON(json);
    case 'AnnualIncome': return AnnualIncome.fromJSON(json);
    case 'IncomeSource': return IncomeSource.fromJSON(json);
    case 'IncomeStability': return IncomeStability.fromJSON(json);
    case 'CanAffordFood': return CanAffordFood.fromJSON(json);
    case 'CanAffordHousing': return CanAffordHousing.fromJSON(json);
    case 'CanAffordClothing': return CanAffordClothing.fromJSON(json);
    case 'CanAffordUtilities': return CanAffordUtilities.fromJSON(json);
    case 'CanAffordTransportation': return CanAffordTransportation.fromJSON(json);
    case 'CanAffordMedication': return CanAffordMedication.fromJSON(json);
    case 'CanAffordDentalCare': return CanAffordDentalCare.fromJSON(json);
    case 'CanAffordChildCare': return CanAffordChildCare.fromJSON(json);
    case 'NonCashBenefit': return NonCashBenefit.fromJSON(json);
    case 'HouseholdSituationPanel': return HouseholdSituationPanel.fromJSON(json);
    case 'HouseholdSize': return HouseholdSize.fromJSON(json);
    case 'Coinhabitant': return Coinhabitant.fromJSON(json);
    case 'NumberOfDependents': return NumberOfDependents.fromJSON(json);
    case 'ExposureToAgent': return ExposureToAgent.fromJSON(json);
    case 'ExposureSourceOrVector': return ExposureSourceOrVector.fromJSON(json);
    case 'ExposureAmount': return ExposureAmount.fromJSON(json);
    case 'ExposureReason': return ExposureReason.fromJSON(json);
    case 'ExposureRoute': return ExposureRoute.fromJSON(json);
    case 'AnimalExposure': return AnimalExposure.fromJSON(json);
    case 'SocialEnvironment': return SocialEnvironment.fromJSON(json);
    case 'TransportationAvailability': return TransportationAvailability.fromJSON(json);
    case 'HousingSecurity': return HousingSecurity.fromJSON(json);
    case 'PhysicalSafety': return PhysicalSafety.fromJSON(json);
    case 'EmotionalSafety': return EmotionalSafety.fromJSON(json);
    case 'DomesticViolence': return DomesticViolence.fromJSON(json);
    case 'HomeEnvironmentRisk': return HomeEnvironmentRisk.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrEnvironmentObjectFactory: ${type}`);
    }
  }
}
