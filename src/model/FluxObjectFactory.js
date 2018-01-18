import { getNamespaceAndName } from './json-helper';
import ObjectFactory from './ObjectFactory';

/*
 *  FluxObjectFactory class returns instances of Flux model classes
 *  Default case will return SHR model classes if no Flux wrapper class is found
 */
export default class FluxObjectFactory {
    static createInstance(json, type) {
        const { namespace } = getNamespaceAndName(json, type);
        switch (namespace) {
            default: {
                return ObjectFactory.createInstance(json, type);
            }
        }
    }
}