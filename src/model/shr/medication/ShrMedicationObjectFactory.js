import { getNamespaceAndName, getNamespaceAndNameFromFHIR } from '../../json-helper';
import MedicationStatement from './MedicationStatement';
import AdditionalDosageInstruction from './AdditionalDosageInstruction';
import DosageMethod from './DosageMethod';
import Dosage from './Dosage';
import DoseAmount from './DoseAmount';
import TimingOfDoses from './TimingOfDoses';
import AsNeededIndicator from './AsNeededIndicator';
import DosageInstructionsText from './DosageInstructionsText';
import DosageBodySite from './DosageBodySite';
import MaximumDosePerTimePeriod from './MaximumDosePerTimePeriod';
import MedicationAdministered from './MedicationAdministered';
import MedicationAdherence from './MedicationAdherence';
import AdherenceFrequency from './AdherenceFrequency';
import MedicationNonAdherenceReason from './MedicationNonAdherenceReason';
import MedicationNotAdministered from './MedicationNotAdministered';
import MedicationRequested from './MedicationRequested';
import NumberOfRefillsAllowed from './NumberOfRefillsAllowed';
import QuantityPerDispense from './QuantityPerDispense';
import SupplyDuration from './SupplyDuration';
import SubstitutionAllowed from './SubstitutionAllowed';
import MedicationNotPrescribed from './MedicationNotPrescribed';
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
    case 'MedicationStatement': return MedicationStatement.fromJSON(json);
    case 'AdditionalDosageInstruction': return AdditionalDosageInstruction.fromJSON(json);
    case 'DosageMethod': return DosageMethod.fromJSON(json);
    case 'Dosage': return Dosage.fromJSON(json);
    case 'DoseAmount': return DoseAmount.fromJSON(json);
    case 'TimingOfDoses': return TimingOfDoses.fromJSON(json);
    case 'AsNeededIndicator': return AsNeededIndicator.fromJSON(json);
    case 'DosageInstructionsText': return DosageInstructionsText.fromJSON(json);
    case 'DosageBodySite': return DosageBodySite.fromJSON(json);
    case 'MaximumDosePerTimePeriod': return MaximumDosePerTimePeriod.fromJSON(json);
    case 'MedicationAdministered': return MedicationAdministered.fromJSON(json);
    case 'MedicationAdherence': return MedicationAdherence.fromJSON(json);
    case 'AdherenceFrequency': return AdherenceFrequency.fromJSON(json);
    case 'MedicationNonAdherenceReason': return MedicationNonAdherenceReason.fromJSON(json);
    case 'MedicationNotAdministered': return MedicationNotAdministered.fromJSON(json);
    case 'MedicationRequested': return MedicationRequested.fromJSON(json);
    case 'NumberOfRefillsAllowed': return NumberOfRefillsAllowed.fromJSON(json);
    case 'QuantityPerDispense': return QuantityPerDispense.fromJSON(json);
    case 'SupplyDuration': return SupplyDuration.fromJSON(json);
    case 'SubstitutionAllowed': return SubstitutionAllowed.fromJSON(json);
    case 'MedicationNotPrescribed': return MedicationNotPrescribed.fromJSON(json);
    case 'MedicationDispensed': return MedicationDispensed.fromJSON(json);
    case 'MedicationNotDispensed': return MedicationNotDispensed.fromJSON(json);
    case 'MedicationChange': return MedicationChange.fromJSON(json);
    case 'MedicationBeforeChange': return MedicationBeforeChange.fromJSON(json);
    case 'MedicationAfterChange': return MedicationAfterChange.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
    }
  }

  /**
   * Convert an instance of a class from its FHIR representation.
   * @param {Object} fhir - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstanceFromFHIR(fhir, type, asExtension=false) {
    const { namespace, elementName } = getNamespaceAndNameFromFHIR(fhir, type);
    if (namespace !== 'shr.medication') {
      throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'MedicationStatement': return MedicationStatement.fromFHIR(fhir, asExtension);
    case 'AdditionalDosageInstruction': return AdditionalDosageInstruction.fromFHIR(fhir, asExtension);
    case 'DosageMethod': return DosageMethod.fromFHIR(fhir, asExtension);
    case 'Dosage': return Dosage.fromFHIR(fhir, asExtension);
    case 'DoseAmount': return DoseAmount.fromFHIR(fhir, asExtension);
    case 'TimingOfDoses': return TimingOfDoses.fromFHIR(fhir, asExtension);
    case 'AsNeededIndicator': return AsNeededIndicator.fromFHIR(fhir, asExtension);
    case 'DosageInstructionsText': return DosageInstructionsText.fromFHIR(fhir, asExtension);
    case 'DosageBodySite': return DosageBodySite.fromFHIR(fhir, asExtension);
    case 'MaximumDosePerTimePeriod': return MaximumDosePerTimePeriod.fromFHIR(fhir, asExtension);
    case 'MedicationAdministered': return MedicationAdministered.fromFHIR(fhir, asExtension);
    case 'MedicationAdherence': return MedicationAdherence.fromFHIR(fhir, asExtension);
    case 'AdherenceFrequency': return AdherenceFrequency.fromFHIR(fhir, asExtension);
    case 'MedicationNonAdherenceReason': return MedicationNonAdherenceReason.fromFHIR(fhir, asExtension);
    case 'MedicationNotAdministered': return MedicationNotAdministered.fromFHIR(fhir, asExtension);
    case 'MedicationRequested': return MedicationRequested.fromFHIR(fhir, asExtension);
    case 'NumberOfRefillsAllowed': return NumberOfRefillsAllowed.fromFHIR(fhir, asExtension);
    case 'QuantityPerDispense': return QuantityPerDispense.fromFHIR(fhir, asExtension);
    case 'SupplyDuration': return SupplyDuration.fromFHIR(fhir, asExtension);
    case 'SubstitutionAllowed': return SubstitutionAllowed.fromFHIR(fhir, asExtension);
    case 'MedicationNotPrescribed': return MedicationNotPrescribed.fromFHIR(fhir, asExtension);
    case 'MedicationDispensed': return MedicationDispensed.fromFHIR(fhir, asExtension);
    case 'MedicationNotDispensed': return MedicationNotDispensed.fromFHIR(fhir, asExtension);
    case 'MedicationChange': return MedicationChange.fromFHIR(fhir, asExtension);
    case 'MedicationBeforeChange': return MedicationBeforeChange.fromFHIR(fhir, asExtension);
    case 'MedicationAfterChange': return MedicationAfterChange.fromFHIR(fhir, asExtension);
    default: throw new Error(`Unsupported type in ShrMedicationObjectFactory: ${type}`);
    }
  }
}
