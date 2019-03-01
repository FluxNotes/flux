import { getNamespaceAndName, getNamespaceAndNameFromFHIR, uuid } from '../json-helper';
import TumorPresent from './TumorPresent';
import IsPrimaryTumor from './IsPrimaryTumor';
import TumorDimensions from './TumorDimensions';
import TumorDimension1 from './TumorDimension1';
import TumorDimension2 from './TumorDimension2';
import TumorDimension3 from './TumorDimension3';
import SizeOfGrossTumorBed from './SizeOfGrossTumorBed';
import TumorMargins from './TumorMargins';
import TumorMarginDescription from './TumorMarginDescription';
import Cellularity from './Cellularity';
import PercentageInSituCarcinoma from './PercentageInSituCarcinoma';

/**
 * Generated object factory for the tumor namespace.
 */
export default class TumorObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'tumor') {
      throw new Error(`Unsupported type in TumorObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'TumorPresent': return TumorPresent.fromJSON(json);
    case 'IsPrimaryTumor': return IsPrimaryTumor.fromJSON(json);
    case 'TumorDimensions': return TumorDimensions.fromJSON(json);
    case 'TumorDimension1': return TumorDimension1.fromJSON(json);
    case 'TumorDimension2': return TumorDimension2.fromJSON(json);
    case 'TumorDimension3': return TumorDimension3.fromJSON(json);
    case 'SizeOfGrossTumorBed': return SizeOfGrossTumorBed.fromJSON(json);
    case 'TumorMargins': return TumorMargins.fromJSON(json);
    case 'TumorMarginDescription': return TumorMarginDescription.fromJSON(json);
    case 'Cellularity': return Cellularity.fromJSON(json);
    case 'PercentageInSituCarcinoma': return PercentageInSituCarcinoma.fromJSON(json);
    default: throw new Error(`Unsupported type in TumorObjectFactory: ${type}`);
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
    if (namespace !== 'tumor') {
      throw new Error(`Unsupported type in TumorObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'TumorPresent': return TumorPresent.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'IsPrimaryTumor': return IsPrimaryTumor.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorDimensions': return TumorDimensions.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorDimension1': return TumorDimension1.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorDimension2': return TumorDimension2.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorDimension3': return TumorDimension3.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'SizeOfGrossTumorBed': return SizeOfGrossTumorBed.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorMargins': return TumorMargins.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'TumorMarginDescription': return TumorMarginDescription.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'Cellularity': return Cellularity.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    case 'PercentageInSituCarcinoma': return PercentageInSituCarcinoma.fromFHIR(fhir, shrId, allEntries, mappedResources, referencesOut, asExtension);
    default: throw new Error(`Unsupported type in TumorObjectFactory: ${type}`);
    }
  }
}
