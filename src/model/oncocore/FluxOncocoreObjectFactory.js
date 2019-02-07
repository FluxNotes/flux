import { getNamespaceAndName } from '../json-helper';
import FluxCancerDisorder from './FluxCancerDisorder';
import FluxCancerProgression from './FluxCancerProgression';
import FluxEvidence from './FluxEvidence';
import FluxCancerHistologicGrade from './FluxCancerHistologicGrade';
import FluxCancerHistologicType from './FluxCancerHistologicType';
import FluxKarnofskyPerformanceStatus from './FluxKarnofskyPerformanceStatus';
import FluxTNMStage from '../oncology/FluxTNMStage';
import OncocoreObjectFactory from './OncocoreObjectFactory';

export default class FluxOncocoreObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'oncocore') {
            throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use OncocoreObjectFactory
        switch (elementName) {
            case 'CancerDisorder': return FluxCancerDisorder(json, type, patientRecord);
            case 'CancerHistologicGrade': return new FluxCancerHistologicGrade(json, type, patientRecord);
            case 'CancerHistologicType': return new FluxCancerHistologicType(json, type, patientRecord);
            case 'CancerProgression': return new FluxCancerProgression(json, type, patientRecord);
            case 'TNMClinicalStageGroup': return new FluxTNMStage(json, type, patientRecord);
            case 'Evidence': return new FluxEvidence(json, type, patientRecord);
            case 'KarnofskyPerformanceStatus': return new FluxKarnofskyPerformanceStatus(json, type, patientRecord);
            default: return OncocoreObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}