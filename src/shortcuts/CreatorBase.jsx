import Patient from '../patient/Patient';
import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class CreatorBase extends Shortcut {
    constructor(onUpdate, metadata, object) {
        super();
        this.metadata = metadata;
        this.text = "#" + this.metadata["name"];
        if (Lang.isUndefined(object)) {
            let createMethod = "createNew" + this.metadata["valueObject"];
            this.object = Patient[createMethod]();
            this.isObjectNew = true;
        } else {
            this.object = object;
            this.isObjectNew = false;
        }
		this.setValueObject(this.object);
    }
    
	initialize(contextManager) {
		super.initialize(contextManager);
	}

    getFormSpec() {
        return  {
                    tagName: this.metadata["form"],
                    props:  {   
                                updateValue: this.setAttributeValue,
                                object: this.object,
                                ...this.configuration
                            },
                    children: []
                };
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.removeChild(this);
        }
        return result;
    }

    getAsString() { 
        const structuredPhrase = this.metadata["structuredPhrase"];
    }
}