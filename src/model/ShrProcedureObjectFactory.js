import Procedure from './shr/procedure/Procedure';
import Lang from 'lodash';

export default class c {
    static createInstance(elementName, entry) {
        const _elementsToClassNames =   {   
                                            "Procedure": Procedure 
                                        };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}