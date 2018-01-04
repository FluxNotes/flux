import FluxInjury from './condition/FluxInjury';
import FluxCondition from './condition/FluxCondition'
import Lang from 'lodash';

export default class ShrConditionObjectFactory {
    static createInstance(elementName, entry) {
        const _elementsToClassNames = { 
                                "Injury": FluxInjury,
                                "Condition": FluxCondition
                              };

        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
    
}