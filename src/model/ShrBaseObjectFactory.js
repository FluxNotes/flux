import Entry from './shr/base/Entry';
import Study from './shr/base/Study';

const _elementsToClassNames = { "Study": Study, "Entry": Entry };

export default class ShrBaseObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}