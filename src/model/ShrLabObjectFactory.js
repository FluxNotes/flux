import FluxTest from './lab/FluxTest';
import Lang from 'lodash';

export default class ShrLabObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "Test": FluxTest
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}