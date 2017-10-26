import PersonOfRecord from './shr/demographics/PersonOfRecord';
import Photograph from './shr/demographics/Photograph';

const _elementsToClassNames = { "PersonOfRecord": PersonOfRecord,
                                "Photograph": Photograph
                              };

export default class ShrDemographicsObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}