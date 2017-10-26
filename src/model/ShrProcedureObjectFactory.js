import Procedure from './shr/procedure/Procedure';

const _elementsToClassNames = { "Procedure": Procedure
                              };

export default class c {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}