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
        
        // get attribute descriptions
        const metadataVOA = this.metadata["valueObjectAttributes"];
        this.valueObjectAttributes = {};
        metadataVOA.forEach((attrib) => {
            attrib["attributePath"] = attrib["attribute"].split(".");
            this.valueObjectAttributes[attrib.name] = attrib;
        });
		this.setAttributeValue = this.setAttributeValue.bind(this);
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
        //#staging #${T} #${N} #${M}
        console.log("structured phrase: " + structuredPhrase);
        let last = 0, valueName, value;
        let start = structuredPhrase.indexOf("${"), end;
        let result = "";
        let haveAValue = false;
        while (start !== -1) {
            result += structuredPhrase.substring(last, start);
            end = structuredPhrase.indexOf("}", start + 2);
            valueName = structuredPhrase.substring(start + 2, end);
            value = this.getAttributeValue(valueName);
            if (value === '') {
                value = '?';
            } else {
                haveAValue = true;
            }
            result += value;
            last = end + 1;
            start = structuredPhrase.indexOf("${", last);
        }
        if (last < structuredPhrase.length) {
            result += structuredPhrase.substring(last);
        }
        if (!haveAValue) {
            return this.text;
        }
        return result;
    }

	getAttributeValue(name) {
        const voa = this.valueObjectAttributes[name];
        const attributePath = voa["attributePath"];
        const len = attributePath.length;
        let i;
        let result = this.valueObject;
        for (i = 0; i < len; i++) {
            result = result[attributePath[i]];
        }
        return result;
    }

	setAttributeValue(name, value, publishChanges = true) {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.text + "'");
        const setObject = voa["setObject"];
        const setMethod = voa["setMethod"];
        console.log("invoke method '" + setMethod + "' on object '" + setObject + "'");
        setObject[setMethod](this.valueObject, value);
        if (this.isContext()) this.updateContextStatus();
		if (this.onUpdate) this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}
}