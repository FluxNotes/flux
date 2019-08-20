import { getNamespaceAndName } from '../json-helper';
import FluxCancerDisorderPresent from './FluxCancerDisorderPresent';
import FluxTumorMarker from './FluxTumorMarker';
import FluxEvidenceType from './FluxEvidenceType';
import FluxCancerHistologicGrade from './FluxCancerHistologicGrade';
import FluxCancerHistologicType from './FluxCancerHistologicType';
import FluxKarnofskyPerformanceStatus from './FluxKarnofskyPerformanceStatus';
import OncocoreObjectFactory from './OncocoreObjectFactory';
import FluxTNMClinicalPrimaryTumorClassification from './FluxTNMClinicalPrimaryTumorClassification';
import FluxTNMClinicalDistantMetastasesClassification from './FluxTNMClinicalDistantMetastasesClassification';
import FluxTNMClinicalRegionalNodesClassification from './FluxTNMClinicalRegionalNodesClassification';
import FluxTNMClinicalStageGroup from './FluxTNMClinicalStageGroup';
import FluxTNMPathologicStageGroup from './FluxTNMPathologicStageGroup';
import FluxCancerDiseaseStatus from './FluxCancerDiseaseStatus';

export default class FluxOncocoreObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'oncocore') {
            throw new Error(`Unsupported type in OncocoreObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use OncocoreObjectFactory
        switch (elementName) {
            case 'CancerDiseaseStatus': return new FluxCancerDiseaseStatus(json, type, patientRecord);
            case 'CancerDisorderPresent': return new FluxCancerDisorderPresent(json, type, patientRecord);
            case 'CancerHistologicGrade': return new FluxCancerHistologicGrade(json, type, patientRecord);
            case 'CancerHistologicType': return new FluxCancerHistologicType(json, type, patientRecord);
            case 'TumorMarker': return new FluxTumorMarker(json);
            case 'TNMClinicalStageGroup': return new FluxTNMClinicalStageGroup(json, patientRecord);
            case 'TNMPathologicStageGroup': return new FluxTNMPathologicStageGroup(json, patientRecord);
            case 'TNMClinicalPrimaryTumorClassification': return new FluxTNMClinicalPrimaryTumorClassification(json);
            case 'TNMClinicalDistantMetastasesClassification': return new FluxTNMClinicalDistantMetastasesClassification(json);
            case 'TNMClinicalRegionalNodesClassification': return new FluxTNMClinicalRegionalNodesClassification(json);
            case 'EvidenceType': return new FluxEvidenceType(json, type, patientRecord);
            case 'KarnofskyPerformanceStatus': return new FluxKarnofskyPerformanceStatus(json, type, patientRecord);
            default: return OncocoreObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}
