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
        this.values = {};
        metadataVOA.forEach((attrib) => {
            if (Lang.isUndefined(attrib["attribute"])) {
                this.values[attrib.name] = false;
                attrib["attributePath"] = null;
                attrib["type"] = "boolean";
            } else {
                if (attrib["attribute"].includes("[]")) {
                    attrib["type"] = "list";
                } else {    
                    attrib["type"] = "string";
                }
                attrib["attributePath"] = attrib["attribute"].split(".");
                
            }
            this.valueObjectAttributes[attrib.name] = attrib;
        });
        this.onUpdate = onUpdate;
		this.setAttributeValue = this.setAttributeValue.bind(this);
    }
    
	initialize(contextManager) {
		super.initialize(contextManager);
        this.parentContext = contextManager.getCurrentContext();
        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
	}
    
    isContext() {
        return this.metadata.isContext;
    }

    getShortcutType() {
        return this.metadata["id"];
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

        
        let last = 0, valueName, value;
        let start = structuredPhrase.indexOf("${"), end;
        let result = "";
        let haveAValue = false;
        let isConditional;
        let conditional, start2, end2, before, after;
        while (start !== -1) {
            if (last !== start) {
                result += structuredPhrase.substring(last, start);
            }
            end = structuredPhrase.indexOf("}", start + 2);
            valueName = structuredPhrase.substring(start + 2, end);
            isConditional = valueName.startsWith("%");
            if (isConditional) {
                end = structuredPhrase.indexOf("}", end + 1); // adjust end to be 2nd close bracket
                conditional = structuredPhrase.substring(start + 3, end);
                //conditional = valueName.substring(1);
                start2 = conditional.indexOf("${");
                end2 = conditional.indexOf("}", start2 + 2);
                valueName = conditional.substring(start2 + 2, end2);
                before = conditional.substring(0, start2);
                after = conditional.substring(end2+1);
                value = this.getAttributeValue(valueName);
                if (!Lang.isNull(value) && value !== '') {
                    haveAValue = true;
                    result += before;
                    result += value;
                    result += after;
                }
            } else {
                value = this.getAttributeValue(valueName);
                //console.log(value);
                if (Lang.isNull(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                    value = '?';
                } else {
                    haveAValue = true;
                }
                result += value;
            }
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
    
    _followPath(object, attributePath, startIndex) {
        //console.log(object);
        let i, attributeName, list;
        const len = attributePath.length;
        let result = object;
        
        let perItemFollowPath = (item) => { return this._followPath(item, attributePath, i+1); };
        
        for (i = startIndex; i < len; i++) {
            if (attributePath[i].endsWith("[]")) {
                attributeName = attributePath[i].substring(0, attributePath[i].length - 2);
                //console.log("list attribute " + attributeName);
                list = result[attributeName];
                return list.map(perItemFollowPath);
            } else {
                //console.log("value attribute: " + attributePath[i]);
                result = result[attributePath[i]];
            }
        }
        return result;
    }
    
	getAttributeValue(name) {
        //console.log(name);
        const voa = this.valueObjectAttributes[name];
        if (Lang.isNull(voa["attributePath"])) {
            return this.values[voa["name"]];
        } else {
            const attributePath = voa["attributePath"];
            return this._followPath(this.object, attributePath, 0);
        }
    }

	setAttributeValue(name, value, publishChanges = true) {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.text + "'");
        const patientSetMethod = voa["patientSetMethod"];
        const setMethod = voa["setMethod"];
        if (Lang.isUndefined(patientSetMethod)) {
            if (Lang.isUndefined(setMethod)) {
                this.values[name] = value;
            } else {
                this.object[setMethod](value);
            }
        } else {
            //console.log(this.object);
            if (voa["type"] === "list" && !Lang.isArray(value)) {
                let list = this.getAttributeValue(name);
                list.push(value);
                Patient[patientSetMethod](this.object, list);
            } else {
                Patient[patientSetMethod](this.object, value);
            }
        }
        if (this.isContext()) this.updateContextStatus();
		if (this.onUpdate) this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
	}
    
    getLabel() {
        return this.metadata["name"];
    }
    
    getText() {
        return "#" + this.metadata["name"];
    }
    
    getId() {
        return this.metadata["id"];
    }

    updatePatient(patient, contextManager) {
/*        let attributeSpec;
        const allSettableDataFields = Object.keys(this.valueObjectAttributes).filter((attribute) => {
            attributeSpec = this.valueObjectAttributes[attribute];
            return (!Lang.isUndefined(attributeSpec["childShortcut"]));
        });*/
        
        const updatePatientSpec = this.metadata["updatePatient"];
        if (updatePatientSpec) {
            //{"object":"patient", "method": "addObservationToCondition", "args": [ "$valueObject", "$parentValueObject"]}
            const obj = updatePatientSpec["object"];
            const method = updatePatientSpec["method"];
            const argSpecs = updatePatientSpec["args"];
            let args = argSpecs.map((argSpec) => {
                if (argSpec === "$valueObject") return this.object;
                if (argSpec === "$parentValueObject") return this.parentContext.getValueObject();
                return argSpec;
            });
            if (obj === "patient") {
                patient[method](...args);
            } else {
                console.error("unsupported object type: " + obj + " for updatePatient");
            }
        } else {
            if (this.isObjectNew) {
                patient.addEntryToPatientWithPatientFocalSubject(this.object);
                this.isObjectNew = false;
            }
        }
    }
}