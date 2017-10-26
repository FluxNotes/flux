import Injury from './shr/condition/Injury';

const _elementsToClassNames = { "Injury": Injury
                              };

export default class ShrConditionObjectFactory {
    static createInstance(elementName, entry) {
        return new _elementsToClassNames[elementName](entry);
    }
}