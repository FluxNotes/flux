import { getNamespaceAndName } from '../json-helper';
import ShrOncologyObjectFactory from '../shr/oncology/ShrOncologyObjectFactory';
import FluxBreastCancer from './FluxBreastCancer';
import FluxBreastCancerGeneticAnalysisPanel from './FluxBreastCancerGeneticAnalysisPanel';
import FluxBRCA1Variant from './FluxBRCA1Variant';
import FluxBRCA2Variant from './FluxBRCA2Variant';
import FluxEstrogenReceptorStatus from './FluxEstrogenReceptorStatus';
import FluxHER2ReceptorStatus from './FluxHER2ReceptorStatus';
import FluxProgesteroneReceptorStatus from './FluxProgesteroneReceptorStatus';
import FluxHistologicGrade from './FluxHistologicGrade';
import FluxTNMStage from './FluxTNMStage';
import FluxTumorDimensions from './FluxTumorDimensions';
import FluxGastrointestinalStromalTumor from './FluxGastrointestinalStromalTumor';

export default class FluxOncologyObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.oncology') {
            throw new Error(`Unsupported type in ShrOncologyObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrOncologyObjectFactory
        switch (elementName) {
            case 'BRCA1Variant': return new FluxBRCA1Variant(json);
            case 'BRCA2Variant': return new FluxBRCA2Variant(json);
            case 'BreastCancer': return new FluxBreastCancer(json, patientRecord);
            case 'BreastCancerGeneticAnalysisPanel': return new FluxBreastCancerGeneticAnalysisPanel(json);
            case 'EstrogenReceptorStatus': return new FluxEstrogenReceptorStatus(json);
            case 'ProgesteroneReceptorStatus': return new FluxProgesteroneReceptorStatus(json);
            case 'HER2ReceptorStatus': return new FluxHER2ReceptorStatus(json);
            case 'HistologicGrade': return new FluxHistologicGrade(json);
            case 'TNMStage': return new FluxTNMStage(json);
            case 'TumorDimensions': return new FluxTumorDimensions(json);
            case 'GastrointestinalStromalTumor': return new FluxGastrointestinalStromalTumor(json, patientRecord);
            default: return ShrOncologyObjectFactory.createInstance(json, type);
        }
    }
}