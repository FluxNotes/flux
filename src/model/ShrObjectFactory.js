import ShrBaseObjectFactory from './ShrBaseObjectFactory';
import ShrConditionObjectFactory from './ShrConditionObjectFactory';
import ShrCoreObjectFactory from './ShrCoreObjectFactory';
import ShrDemographicsObjectFactory from './ShrDemographicsObjectFactory';
import ShrMedicationObjectFactory from './ShrMedicationObjectFactory';
import ShrOncologyObjectFactory from './ShrOncologyObjectFactory';
import ShrProcedureObjectFactory from './ShrProcedureObjectFactory';

const _entryTypeToClassSpec = (entryType) => {
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

const namespaceFactories = {
    "base": ShrBaseObjectFactory,
    "condition": ShrConditionObjectFactory,
    "core": ShrCoreObjectFactory,
    "demographics": ShrDemographicsObjectFactory,
    "medication": ShrMedicationObjectFactory,
    "oncology": ShrOncologyObjectFactory,
    "procedure": ShrProcedureObjectFactory
}
export default class ShrObjectFactory {
    static createInstance(entryType, entry) {
        const classSpec = _entryTypeToClassSpec(entryType);
        //console.log(classSpec.namespace + "/" + classSpec.elementName);
        const factory = namespaceFactories[classSpec.namespace];
        return factory.createInstance(classSpec.elementName, entry);
    }
}
