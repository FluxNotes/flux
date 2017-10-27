import PersonOfRecord from './shr/demographics/PersonOfRecord';
import Photograph from './shr/demographics/Photograph';
import Lang from 'lodash';

export default class ShrDemographicsObjectFactory {
    static createInstance(elementName, entry) {

        const _elementsToClassNames = { 
                                        "PersonOfRecord": PersonOfRecord,
                                        "Photograph": Photograph
                                      };
        let constructorName = _elementsToClassNames[elementName];
        if (Lang.isUndefined(constructorName)) throw new Error("Unsupported class in factory '" + this.name + "': '" + elementName + "'");
        return new constructorName(entry);
    }
}