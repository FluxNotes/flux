import PersonOfRecord from './shr/demographics/PersonOfRecord';

class ShrDemographicsObjectFactory {
    createInstance(elementName) {
        return new _elementsToClassNames[elementName]();
    }
    
    _elementsToClassNames = { "PersonOfRecord": PersonOfRecord };
}