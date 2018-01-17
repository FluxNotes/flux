import { getNamespaceAndName } from './json-helper';
import ShrActionObjectFactory from './shr/action/ShrActionObjectFactory';
import ShrAdverseObjectFactory from './shr/adverse/ShrAdverseObjectFactory';
import ShrAllergyObjectFactory from './shr/allergy/ShrAllergyObjectFactory';
import ShrBaseObjectFactory from './shr/base/ShrBaseObjectFactory';
import ShrBehaviorObjectFactory from './shr/behavior/ShrBehaviorObjectFactory';
import ShrCareplanObjectFactory from './shr/careplan/ShrCareplanObjectFactory';
import ShrConditionObjectFactory from './shr/condition/ShrConditionObjectFactory';
import ShrCoreObjectFactory from './shr/core/ShrCoreObjectFactory';
import ShrDeviceObjectFactory from './shr/device/ShrDeviceObjectFactory';
import ShrEncounterObjectFactory from './shr/encounter/ShrEncounterObjectFactory';
import ShrEntityObjectFactory from './shr/entity/ShrEntityObjectFactory';
import ShrEnvironmentObjectFactory from './shr/environment/ShrEnvironmentObjectFactory';
import ShrFamilyhistoryObjectFactory from './shr/familyhistory/ShrFamilyhistoryObjectFactory';
import ShrFinancialObjectFactory from './shr/financial/ShrFinancialObjectFactory';
import ShrFindingObjectFactory from './shr/finding/ShrFindingObjectFactory';
import ShrImmunizationObjectFactory from './shr/immunization/ShrImmunizationObjectFactory';
import ShrLifehistoryObjectFactory from './shr/lifehistory/ShrLifehistoryObjectFactory';
import ShrMedicationObjectFactory from './shr/medication/ShrMedicationObjectFactory';
import ShrOncologyObjectFactory from './shr/oncology/ShrOncologyObjectFactory';
import ShrProcedureObjectFactory from './shr/procedure/ShrProcedureObjectFactory';
import ShrResearchObjectFactory from './shr/research/ShrResearchObjectFactory';
import ShrSexObjectFactory from './shr/sex/ShrSexObjectFactory';
import ShrSkinObjectFactory from './shr/skin/ShrSkinObjectFactory';
import ShrVitalObjectFactory from './shr/vital/ShrVitalObjectFactory';

/**
 * Generated top-level object factory for SHR classes.
 */
export default class ObjectFactory {
  /**
   * Create an instance of a class from its JSON representation.
   * @param {Object} json - The element data in JSON format (use `{}` and provide `type` for a blank instance)
   * @param {string} [type] - The (optional) type of the element (e.g., 'http://standardhealthrecord.org/spec/shr/demographics/PersonOfRecord').  This is only used if the type cannot be extracted from the JSON.
   * @returns {Object} An instance of the requested class populated with the provided data
   */
  static createInstance(json, type) {
    const { namespace } = getNamespaceAndName(json, type);
    switch (namespace) {
    case 'shr.action': return ShrActionObjectFactory.createInstance(json, type);
    case 'shr.adverse': return ShrAdverseObjectFactory.createInstance(json, type);
    case 'shr.allergy': return ShrAllergyObjectFactory.createInstance(json, type);
    case 'shr.base': return ShrBaseObjectFactory.createInstance(json, type);
    case 'shr.behavior': return ShrBehaviorObjectFactory.createInstance(json, type);
    case 'shr.careplan': return ShrCareplanObjectFactory.createInstance(json, type);
    case 'shr.condition': return ShrConditionObjectFactory.createInstance(json, type);
    case 'shr.core': return ShrCoreObjectFactory.createInstance(json, type);
    case 'shr.device': return ShrDeviceObjectFactory.createInstance(json, type);
    case 'shr.encounter': return ShrEncounterObjectFactory.createInstance(json, type);
    case 'shr.entity': return ShrEntityObjectFactory.createInstance(json, type);
    case 'shr.environment': return ShrEnvironmentObjectFactory.createInstance(json, type);
    case 'shr.familyhistory': return ShrFamilyhistoryObjectFactory.createInstance(json, type);
    case 'shr.financial': return ShrFinancialObjectFactory.createInstance(json, type);
    case 'shr.finding': return ShrFindingObjectFactory.createInstance(json, type);
    case 'shr.immunization': return ShrImmunizationObjectFactory.createInstance(json, type);
    case 'shr.lifehistory': return ShrLifehistoryObjectFactory.createInstance(json, type);
    case 'shr.medication': return ShrMedicationObjectFactory.createInstance(json, type);
    case 'shr.oncology': return ShrOncologyObjectFactory.createInstance(json, type);
    case 'shr.procedure': return ShrProcedureObjectFactory.createInstance(json, type);
    case 'shr.research': return ShrResearchObjectFactory.createInstance(json, type);
    case 'shr.sex': return ShrSexObjectFactory.createInstance(json, type);
    case 'shr.skin': return ShrSkinObjectFactory.createInstance(json, type);
    case 'shr.vital': return ShrVitalObjectFactory.createInstance(json, type);
    }
    throw new Error(`Unsupported namespace: ${namespace}`);
  }
}
