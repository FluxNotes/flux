import { getNamespaceAndName } from './json-helper';
import ObjectFactory from './ObjectFactory';
import FluxBaseObjectFactory from './base/FluxBaseObjectFactory';
import FluxResearchObjectFactory from './research/FluxResearchObjectFactory';
import FluxAdverseObjectFactory from './adverse/FluxAdverseObjectFactory';
import FluxCoreObjectFactory from './core/FluxCoreObjectFactory';
import FluxEntityObjectFactory from './entity/FluxEntityObjectFactory';
import FluxConditionObjectFactory from './condition/FluxConditionObjectFactory';
import FluxFindingObjectFactory from './finding/FluxFindingObjectFactory';
import FluxMedicationObjectFactory from './medication/FluxMedicationObjectFactory';
import FluxProcedureObjectFactory from './procedure/FluxProcedureObjectFactory';
import FluxOncologyObjectFactory from './oncology/FluxOncologyObjectFactory';

/*
 *  FluxObjectFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class FluxObjectFactory {
    static createInstance(json, type) {
        const { namespace } = getNamespaceAndName(json, type);
        switch (namespace) {
            case 'shr.adverse': return FluxAdverseObjectFactory.createInstance(json, type);
            case 'shr.base': return FluxBaseObjectFactory.createInstance(json, type);
            case 'shr.condition': return FluxConditionObjectFactory.createInstance(json, type);
            case 'shr.core': return FluxCoreObjectFactory.createInstance(json, type);
            case 'shr.entity': return FluxEntityObjectFactory.createInstance(json, type);
            case 'shr.finding': return FluxFindingObjectFactory.createInstance(json, type);
            case 'shr.medication': return FluxMedicationObjectFactory.createInstance(json, type);
            case 'shr.oncology': return FluxOncologyObjectFactory.createInstance(json, type);
            case 'shr.procedure': return FluxProcedureObjectFactory.createInstance(json, type);
            case 'shr.research': return FluxResearchObjectFactory.createInstance(json, type);
            case 'shr.research': return FluxResearchObjectFactory.createInstance(json, type);
            default: return ObjectFactory.createInstance(json, type);
        }
    }
}