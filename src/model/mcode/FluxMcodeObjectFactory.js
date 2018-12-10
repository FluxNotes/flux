import { getNamespaceAndName } from '../json-helper';
import FluxCancerProgression from './FluxCancerProgression';
import FluxEvidence from './FluxEvidence';
import FluxHistologicGrade from '../oncology/FluxHistologicGrade';
import FluxTNMStage from '../oncology/FluxTNMStage';
import McodeObjectFactory from './McodeObjectFactory';

export default class FluxMcodeObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'mcode') {
            throw new Error(`Unsupported type in ShrMcodeObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use McodeObjectFactory
        switch (elementName) {
            case 'CancerStageInformation': return new FluxTNMStage(json, type, patientRecord);
            case 'CancerHistologicGrade': return new FluxHistologicGrade(json, type, patientRecord);
            case 'CancerProgression': return new FluxCancerProgression(json, type, patientRecord);
            case 'Evidence': return new FluxEvidence(json, type, patientRecord);
            default: return McodeObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}