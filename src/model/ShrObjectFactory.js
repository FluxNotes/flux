import ShrActorObjectFactory from './ShrActorObjectFactory';
import ShrAllergyObjectFactory from './ShrAllergyObjectFactory';
import ShrBaseObjectFactory from './ShrBaseObjectFactory';
import ShrConditionObjectFactory from './ShrConditionObjectFactory';
import ShrCoreObjectFactory from './ShrCoreObjectFactory';
import ShrDemographicsObjectFactory from './ShrDemographicsObjectFactory';
import ShrLabObjectFactory from './ShrLabObjectFactory';
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
    "actor": ShrActorObjectFactory,
    "allergy": ShrAllergyObjectFactory,
    "base": ShrBaseObjectFactory,
    "condition": ShrConditionObjectFactory,
    "core": ShrCoreObjectFactory,
    "demographics": ShrDemographicsObjectFactory,
    "lab": ShrLabObjectFactory,
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
