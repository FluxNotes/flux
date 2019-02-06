import { getNamespaceAndName } from '../json-helper';
import FluxTumorDimensions from './FluxTumorDimensions';
import TumorObjectFactory from './TumorObjectFactory';
import FluxTumorMargins from './FluxTumorMargins';

export default class FluxTumorObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'tumor') {
            throw new Error(`Unsupported type in TumorObjectFactory: ${type}`);
        }

        // returns Flux wrapper class if found, otherwise use ShrTumorObjectFactory
        switch (elementName) {
            case 'TumorDimensions': return new FluxTumorDimensions(json, patientRecord);
            case 'TumorMargins': return new FluxTumorMargins(json, patientRecord);
            default: return TumorObjectFactory.createInstance(json, type);
        }
    }
}