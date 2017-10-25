import ShrBaseObjectFactory from './ShrBaseObjectFactory';
import ShrCoreObjectFactory from './ShrCoreObjectFactory';
import ShrDemographicsObjectFactory from './ShrDemographicsObjectFactory';
import ShrOncologyObjectFactory from './ShrOncologyObjectFactory';

export default class ShrObjectFactory {
    createInstance(entryType) {
        const classSpec = this._entryTypeToClassSpec(entryType);
        const factory = namespaceFactories[classSpec.namespace];
        return factory.createInstance(classSpec.elementName);
    }

    _entryTypeToClassSpec(entryType) {
        //http://standardhealthrecord.org/demographics/PersonOfRecord
        if (entryType.startsWith("http://standardhealthrecord.org/")) {
            let path = entryType.substring("http://standardhealthrecord.org/".length);
            let slashPos = path.indexOf("/");
            let namespace = path.substring(0, slashPos);
            let elementName = path.substring(slashPos+1);
            return { "namespace": namespace, "elementName":elementName };
        }
        throw new Error("unexpected path in entryType: " + entryType);
    }
    
    namespaceFactories = {
        "base": ShrBaseObjectFactory,
        "core": ShrCoreObjectFactory,
        "demographics": ShrDemographicsObjectFactory,
        "oncology": ShrOncologyObjectFactory
    }
}