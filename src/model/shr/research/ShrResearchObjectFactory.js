import { getNamespaceAndName } from '../../json-helper';
import Study from './Study';
import Enrollment from './Enrollment';
import Sponsor from './Sponsor';
import Jurisdiction from './Jurisdiction';
import PrincipalInvestigator from './PrincipalInvestigator';
import TerminationReason from './TerminationReason';
import StudyArm from './StudyArm';
import ResearchSubject from './ResearchSubject';

/**
 * Generated object factory for the shr.research namespace.
 */
export default class ShrResearchObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.research') {
      throw new Error(`Unsupported type in ShrResearchObjectFactory: ${type}`);
    }
    switch (elementName) {
      case 'Study': return Study.fromJSON(json);
      case 'Enrollment': return Enrollment.fromJSON(json);
      case 'Sponsor': return Sponsor.fromJSON(json);
      case 'Jurisdiction': return Jurisdiction.fromJSON(json);
      case 'PrincipalInvestigator': return PrincipalInvestigator.fromJSON(json);
      case 'TerminationReason': return TerminationReason.fromJSON(json);
      case 'StudyArm': return StudyArm.fromJSON(json);
      case 'ResearchSubject': return ResearchSubject.fromJSON(json);
      default: throw new Error(`Unsupported type in ShrResearchObjectFactory: ${type}`);
    }
  }
}
