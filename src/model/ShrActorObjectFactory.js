import FluxDeceased from './actor/FluxDeceased';
import Lang from 'lodash';

export default class ShrActorObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "Deceased": FluxDeceased
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}