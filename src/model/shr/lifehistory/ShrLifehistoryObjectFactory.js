import { getNamespaceAndName } from '../../json-helper';
import PrenatalExposure from './PrenatalExposure';
import CongenitalAbnormality from './CongenitalAbnormality';
import EducationalAttainment from './EducationalAttainment';
import Employment from './Employment';
import Occupation from './Occupation';
import EmploymentStatus from './EmploymentStatus';
import MilitaryService from './MilitaryService';
import MilitaryStatus from './MilitaryStatus';
import MilitaryServiceDischargeStatus from './MilitaryServiceDischargeStatus';
import MilitaryBranch from './MilitaryBranch';
import MilitaryServiceEra from './MilitaryServiceEra';
import ServiceConnectedDisability from './ServiceConnectedDisability';
import Travel from './Travel';

/**
 * Generated object factory for the shr.lifehistory namespace.
 */
export default class ShrLifehistoryObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace, elementName } = getNamespaceAndName(json, type);
    if (namespace !== 'shr.lifehistory') {
      throw new Error(`Unsupported type in ShrLifehistoryObjectFactory: ${type}`);
    }
    switch (elementName) {
    case 'PrenatalExposure': return PrenatalExposure.fromJSON(json);
    case 'CongenitalAbnormality': return CongenitalAbnormality.fromJSON(json);
    case 'EducationalAttainment': return EducationalAttainment.fromJSON(json);
    case 'Employment': return Employment.fromJSON(json);
    case 'Occupation': return Occupation.fromJSON(json);
    case 'EmploymentStatus': return EmploymentStatus.fromJSON(json);
    case 'MilitaryService': return MilitaryService.fromJSON(json);
    case 'MilitaryStatus': return MilitaryStatus.fromJSON(json);
    case 'MilitaryServiceDischargeStatus': return MilitaryServiceDischargeStatus.fromJSON(json);
    case 'MilitaryBranch': return MilitaryBranch.fromJSON(json);
    case 'MilitaryServiceEra': return MilitaryServiceEra.fromJSON(json);
    case 'ServiceConnectedDisability': return ServiceConnectedDisability.fromJSON(json);
    case 'Travel': return Travel.fromJSON(json);
    default: throw new Error(`Unsupported type in ShrLifehistoryObjectFactory: ${type}`);
    }
  }
}
