import { getNamespaceAndName } from './json-helper';
import ObjectFactory from './ObjectFactory';
import FluxBaseObjectFactory from './base/FluxBaseObjectFactory';
import FluxResearchObjectFactory from './research/FluxResearchObjectFactory';
import FluxAdverseObjectFactory from './adverse/FluxAdverseObjectFactory';
import FluxCoreObjectFactory from './core/FluxCoreObjectFactory';
import FluxEntityObjectFactory from './entity/FluxEntityObjectFactory';
import FluxEncounterObjectFactory from './encounter/FluxEncounterObjectFactory';
import FluxFindingObjectFactory from './finding/FluxFindingObjectFactory';
import FluxMedicationObjectFactory from './medication/FluxMedicationObjectFactory';
import FluxProcedureObjectFactory from './procedure/FluxProcedureObjectFactory';
import FluxAllergyObjectFactory from './allergy/FluxAllergyObjectFactory';
import FluxOncologyObjectFactory from './oncology/FluxOncologyObjectFactory';
import FluxVitalObjectFactory from './vital/FluxVitalObjectFactory';
import FluxOncocoreObjectFactory from './oncocore/FluxOncocoreObjectFactory';

/*
 *  FluxObjectFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class FluxObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace } = getNamespaceAndName(json, type);
        switch (namespace) {
            case 'shr.adverse': return FluxAdverseObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.allergy': return FluxAllergyObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.base': return FluxBaseObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.core': return FluxCoreObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.encounter': return FluxEncounterObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.entity': return FluxEntityObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.finding': return FluxFindingObjectFactory.createInstance(json, type, patientRecord);
            case 'oncocore': return FluxOncocoreObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.medication': return FluxMedicationObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.oncology': return FluxOncologyObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.procedure': return FluxProcedureObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.research': return FluxResearchObjectFactory.createInstance(json, type, patientRecord);
            case 'shr.vital': return FluxVitalObjectFactory.createInstance(json, type, patientRecord);
            default: return ObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}