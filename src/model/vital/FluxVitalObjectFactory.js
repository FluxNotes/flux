import { getNamespaceAndName } from '../json-helper';
import ShrVitalObjectFactory from '../shr/vital/ShrVitalObjectFactory';
import FluxBloodPressure from './FluxBloodPressure';
import FluxBodyTemperature from './FluxBodyTemperature';
import FluxBodyWeight from './FluxBodyWeight';
import FluxHeartRate from './FluxHeartRate';


export default class FluxVitalObjectFactory {
    static createInstance(json, type) {
        const { namespace, elementName } = getNamespaceAndName(json, type);
        if (namespace !== 'shr.vital') {
            throw new Error(`Unsupported type in ShrVitalObjectFactory: ${type}`);
        }
        // returns Flux wrapper class if found, otherwise use ShrVitalObjectFactory
        switch (elementName) {
            case 'BloodPressure': return new FluxBloodPressure(json);
            case 'BodyTemperature': return new FluxBodyTemperature(json);
            case 'BodyWeight': return new FluxBodyWeight(json);
            case 'HeartRate': return new FluxHeartRate(json);
            default: return ShrVitalObjectFactory.createInstance(json, type);
        }
    }
}