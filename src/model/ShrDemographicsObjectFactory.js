import PersonOfRecord from './shr/demographics/PersonOfRecord';

const _elementsToClassNames = { "PersonOfRecord": PersonOfRecord };

export default class ShrDemographicsObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}