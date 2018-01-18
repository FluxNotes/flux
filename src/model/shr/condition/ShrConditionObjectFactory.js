import { getNamespaceAndName } from '../../json-helper';
import ClinicalStatus from './ClinicalStatus';
import Criticality from './Criticality';
import Severity from './Severity';
import ConditionAbsent from './ConditionAbsent';
import Condition from './Condition';
import Onset from './Onset';
import WhenClinicallyRecognized from './WhenClinicallyRecognized';
import Preexisting from './Preexisting';
import Abatement from './Abatement';
import Stage from './Stage';
import DiseaseProgression from './DiseaseProgression';
import AcademicProblem from './AcademicProblem';
import Injury from './Injury';
import MentalHealthCondition from './MentalHealthCondition';

/**
 * Generated object factory for the shr.condition namespace.
 */
export default class ShrConditionObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.condition') {
      throw new Error(`Unsupported type in ShrConditionObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'ClinicalStatus': return ClinicalStatus.fromJSON(json);
    case 'Criticality': return Criticality.fromJSON(json);
    case 'Severity': return Severity.fromJSON(json);
    case 'ConditionAbsent': return ConditionAbsent.fromJSON(json);
    case 'Condition': return Condition.fromJSON(json);
    case 'Onset': return Onset.fromJSON(json);
    case 'WhenClinicallyRecognized': return WhenClinicallyRecognized.fromJSON(json);
    case 'Preexisting': return Preexisting.fromJSON(json);
    case 'Abatement': return Abatement.fromJSON(json);
    case 'Stage': return Stage.fromJSON(json);
    case 'DiseaseProgression': return DiseaseProgression.fromJSON(json);
    case 'AcademicProblem': return AcademicProblem.fromJSON(json);
    case 'Injury': return Injury.fromJSON(json);
    case 'MentalHealthCondition': return MentalHealthCondition.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrConditionObjectFactory: ${type}`);
    }
  }
}
