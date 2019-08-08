import { getNamespaceAndName } from '../../json-helper';
import FluxPatientIdentifier from './FluxPatientIdentifier';
import ShrBaseObjectFactory from '../../shr/base/ShrBaseObjectFactory';
import FluxQuestionAnswer from './FluxQuestionAnswer';

export default class FluxBaseObjectFactory {
    static createInstance(json, type, patientRecord) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.base') {
            throw new Error(`Unsupported type in ShrBaseObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrBaseObjectFactory
        switch (elementName) {
            case 'QuestionAnswer': return new FluxQuestionAnswer(json, type, patientRecord);
            case 'PatientIdentifier': return new FluxPatientIdentifier(json, type, patientRecord);
            default: return ShrBaseObjectFactory.createInstance(json, type, patientRecord);
        }
    }
}