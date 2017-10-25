import Study from './shr/base/Study';

export default class ShrBaseObjectFactory {
    createInstance(elementName) {
        return new _elementsToClassNames[elementName]();
    }
    
    _elementsToClassNames = { "Study": Study, "Entry": Entry };
}