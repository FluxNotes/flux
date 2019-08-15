import { getNamespaceAndName } from '../../json-helper';
import FluxBreastCancerGeneticAnalysisPanel from './FluxBreastCancerGeneticAnalysisPanel';
import FluxMitoticRate from './FluxMitoticRate';
import FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel from './FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel';

export default class FluxOncologyObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.oncology') {
            throw new Error(`Unsupported type in ShrOncologyObjectFactory: ${type}`);
        }

        // returns Flux wrapper class if found, otherwise use ShrOncologyObjectFactory
        switch (elementName) {
            case 'BreastCancerGeneticAnalysisPanel': return new FluxBreastCancerGeneticAnalysisPanel(json, patientRecord);
            case 'GastrointestinalStromalTumorCancerGeneticAnalysisPanel': return new FluxGastrointestinalStromalTumorCancerGeneticAnalysisPanel(json, patientRecord);
            case 'MitoticRate': return new FluxMitoticRate(json, patientRecord);
            default: console.error("unknown Flux wrapper in oncology package: " + elementName);
        }
    }
}