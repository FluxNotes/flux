import FluxObjectFactory from '../model/FluxObjectFactory';
import PatientRecord from '../patient/PatientRecord';
import Shortcut from './Shortcut';
import Lang from 'lodash';
import moment from 'moment';

export default class UpdaterBase extends Shortcut {
    constructor(onUpdate, metadata, object) {
        super();
        this.metadata = metadata;
        //this.text = "#" + this.metadata["name"];
        if (Lang.isUndefined(object)) {
            this.object = null;
        } else {
            this.object = object;
        }
        this.isObjectNew = false;
        this.setValueObject(this.object);

        // get attribute descriptions
        const metadataVOA = this.metadata["valueObjectAttributes"];
        this.valueObjectAttributes = {};
        this.values = {};
        this.isSet = {};
        this.idAttributes = [];
        this._createAttributePaths(metadataVOA, this.valueObjectAttributes, this.values, this.isSet, null);

        const idMetadataVOA =this.metadata["idAttributes"];
        this._createAttributePaths(idMetadataVOA, this.valueObjectAttributes, this.values, this.isSet, this.idAttributes);

        this.idComplete = false;
        this.onUpdate = onUpdate;
        this.setAttributeValue = this.setAttributeValue.bind(this);
        this.getAttributeValue = this.getAttributeValue.bind(this);
    }

    _createAttributePaths(metadataVOA, valueObjectAttributes, values, isSet, idAttributes) {
        metadataVOA.forEach((attrib) => {
            isSet[attrib.name] = false;
            if (Lang.isUndefined(attrib["attribute"])) {
                values[attrib.name] = false;
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
            if (idAttributes) {
                idAttributes.push(attrib.name);
                attrib["isId"] = true;
            } else {
                attrib["isId"] = false;
            }
            valueObjectAttributes[attrib.name] = attrib;
        });
    }

    initialize(contextManager, trigger = undefined, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);

        const knownParent = this.metadata["knownParentContexts"];

        if (knownParent) {
            this.parentContext = contextManager.getActiveContextOfType(knownParent);
        } else   {
            this.parentContext = contextManager.getCurrentContext();
        }

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
        
        // defaulting
        const metadataVOA = this.metadata["valueObjectAttributes"];
        metadataVOA.forEach((attrib) => {
            if (attrib.isSettable && attrib.type !== "list") {
                this.setAttributeValue(attrib.name, null, true, updatePatient);
            }
        });
        const idMetadataVOA = this.metadata["idAttributes"];
        idMetadataVOA.forEach((attrib) => {
            this.setAttributeValue(attrib.name, null, true, updatePatient);
        });
    }

    isContext() {
        return this.metadata.isContext;
    }

    // should this shortcut instance be in context right now (in other words, should it be a tab in context tray)
    shouldBeInContext() {
        const voaList = this.metadata["valueObjectAttributes"].concat(this.metadata["idAttributes"]);
        let value, isSettable;
        let result = false;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) {
                if (Lang.isArray(value)) {
                    if (value.length < voa.numberOfItems) {
                        result = true;
                        return true;
                    }
                } else if (!(this.isSet[voa.name])) {
                    result = true;
                    return;
                }
            } else {
                if (value.length > 0) {
                    result = true;
                    return;
                }
            }
        });
        return result;
    }

    getShortcutType() {
        return this.metadata["id"];
    }

    getFormSpec() {
        return {
            tagName: this.metadata["form"],
            props: {
                updateValue: this.setAttributeValue,
                getValue: this.getAttributeValue,
                ...this.configuration
            },
            children: []
        };
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result && this.parentContext) {
            this.parentContext.removeChild(this);
        }
        return result;
    }

    _followPath(object, attributePath, startIndex) {
        let i, attributeName, list, index, start, end;
        const len = attributePath.length;
        let result = object;

        let perItemFollowPath = (item) => {
            return this._followPath(item, attributePath, i + 1);
        };

        for (i = startIndex; i < len; i++) {
            if (attributePath[i].endsWith("[]")) {
                attributeName = attributePath[i].substring(0, attributePath[i].length - 2);
                list = result[attributeName];
                if (Lang.isUndefined(list)) return null;
                return list.map(perItemFollowPath);
            } else if (attributePath[i].endsWith("]")) {
                start = attributePath[i].indexOf("[");
                end = attributePath[i].indexOf("]", start);
                attributeName = attributePath[i].substring(0, start);
                index = attributePath[i].substring(start + 1, end);
                list = result[attributeName];
                result = list[index];
            } else {
                result = result[attributePath[i]];
            }
            if (Lang.isUndefined(result)) return null;
        }
        return result;
    }
    
    getAttributeIsSet(name) {
        return this.isSet[name];
    }

    getAttributeValue(name) {
        return this.values[name];
    }

    _getAttributeValue(obj, name) {
        const voa = this.valueObjectAttributes[name];

        if (Lang.isNull(voa["attributePath"])) {
            return this.values[voa["name"]];
        } else {
            const attributePath = voa["attributePath"];
            return this._followPath(obj, attributePath, 0);
        }
    }

    isAttributeSupported(name) {
        return !Lang.isUndefined(this.valueObjectAttributes[name]);
    }

    setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.getText() + "'"); //this.text
        this.isSet[name] = (value != null);
        if (value == null && voa.default) {
            value = voa.default;
            if (value === "$today") {
                value = new moment().format('D MMM YYYY');
            }
        }
        this.values[name] = value;

        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate && updatePatient) this.onUpdate(this);
        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }
    }

    _setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.getText() + "'"); //this.text
        this.isSet[name] = (value != null);
        const patientSetMethod = voa["patientSetMethod"];
        const setMethod = voa["setMethod"];
        if (value == null && voa.default) {
            value = voa.default;
            if (value === "$today") {
                value = new moment().format('D MMM YYYY');
            }
        }
        if (Lang.isUndefined(patientSetMethod)) {
            if (Lang.isUndefined(setMethod)) {
                //this.values[name] = value;
            } else {
                if (voa["type"] === "list" && !Lang.isArray(value)) {
                    let list = this.getAttributeValue(name);
                    list.push(value);
                    Lang.set(this.object, setMethod, list);
                } else {
                    Lang.set(this.object, setMethod, value);
                }
            }
        } else {
            if (voa["type"] === "list" && !Lang.isArray(value)) {
                let list = this.getAttributeValue(name);
                list.push(value);
                PatientRecord[patientSetMethod](this.object, list);
            } else {
                PatientRecord[patientSetMethod](this.object, value);
            }
        }
    }


    getLabel() {
        return this.metadata["name"];
    }

    getText() {
        return this.getPrefixCharacter() + this.metadata["name"];
    }

    getId() {
        return this.metadata["id"];
    }

    callMethod(patient, spec, clinicalNote) {
        //{"object":"patient", "method": "addObservationToCondition", "args": [ "$valueObject", "$parentValueObject"]}
        const obj = spec["object"];
        const method = spec["method"];
        const listAttribute = spec["listAttribute"];
        const attribute = spec["attribute"];
        const argSpecs = spec["args"];
        let args = argSpecs.map((argSpec) => {
            if (argSpec === "$valueObject") return this.object;
            if (argSpec === "$parentValueObject") return this.parentContext.getValueObject();
            if (argSpec === "$clinicalNote") return clinicalNote;
            return argSpec;
        });
        if (Lang.isUndefined(listAttribute) && Lang.isUndefined(attribute)) {
            if (obj === "patient") {
                return patient[method](...args);
            } else if (obj === "$clinicalNote") {
                return clinicalNote[method](...args);
            } else if (obj === "$valueObject") {
                return this.object[method](...args);
            } else if (obj === "$parentValueObject") {
                return this.parentContext.getValueObject()[method](...args);
            } else {
                console.error("unsupported object type: " + obj + " for updatePatient");
            }
        } else if (Lang.isUndefined(listAttribute)) {
            if (args.length !== 1) {
                console.warn("attribute only supports a single argument which is the new value for the attribute: " + spec["id"]);
            }
            if (obj === "patient") {
                return patient[attribute] = args[0];
            } else if (obj === "$clinicalNote") {
                return clinicalNote[attribute] = args[0];
            } else if (obj === "$valueObject") {
                return this.object[attribute] = args[0];
            } else if (obj === "$parentValueObject") {
                return this.parentContext.getValueObject()[attribute] = args[0];
            } else {
                console.error("unsupported object type: " + obj + " for updatePatient");
            }
        } else {
            if (obj === "patient") {
                let list = Lang.get(patient, listAttribute);
                args.forEach((a) => list.push(a));
                Lang.set(patient, listAttribute, list);
                return this.object;
            } else if (obj === "$valueObject") {
                let list = Lang.get(this.object, listAttribute);
                args.forEach((a) => list.push(a));
                Lang.set(this.object, listAttribute, list);
                return this.object;
            } else if (obj === "$parentValueObject") {
                if (!Lang.isUndefined(this.parentContext)) {
                    let list = Lang.get(this.parentContext.getValueObject(), listAttribute);
                    args.forEach((a) => list.push(a));
                    Lang.set(this.parentContext.getValueObject(), listAttribute, list);
                    return this.object;
                }
            } else {
                console.error("unsupported object type: " + obj + " for updatePatient");
            }
        }
        return null;
    }

    getValueObject() {
        if (!this.valueObject) {
            this.object = FluxObjectFactory.createInstance({}, this.metadata["valueObject"], this.patient);
            Object.keys(this.valueObjectAttributes).forEach((voa) => {
                this._setAttributeValue(voa, this.values[voa]);
            });
            this.setValueObject(this.object);
        }
		return this.valueObject;
	}
    
    updatePatient(patient, contextManager, clinicalNote) {
        let idComplete = true;
        this.idAttributes.forEach((idAttrib) => {
            idComplete &= this.getAttributeIsSet(idAttrib);
        });
        if (!idComplete) {
            if (this.idComplete) {
                if (this.isObjectNew) {
                    this.patient.removeEntryFromPatient(this.object);
                    this.isObjectNew = false;
                    this.setValueObject(null);
                    this.object = null;
                } else {
                    const undoUpdatePatientSpecList = this.metadata["undoUpdatePatient"];
                    if (undoUpdatePatientSpecList) {
                        undoUpdatePatientSpecList.forEach((undoUpdatePatientSpec) => {
                            this.callMethod(this.patient, undoUpdatePatientSpec);
                        });
                    }
                }
            }
            this.idComplete = false;
            if (this.isContext()) this.updateContextStatus();
            return;
        }
        this.idComplete = true;
        const entryType = this.metadata["valueObject"];
        let entries = patient.getEntriesOfEntryType(entryType);
        let match, val;
        let filteredEntries = entries.filter((entry) => {
            match = true;
            this.idAttributes.forEach((idAttrib) => {
                val = this._getAttributeValue(entry, idAttrib);
                if (typeof val === 'string') {
                    match &= (val.toUpperCase() === this.values[idAttrib].toUpperCase());
                } else {
                    match &= (val === this.values[idAttrib]);
                }
            });
            return match;
        });

        if (filteredEntries.length === 0) {
            this.object = FluxObjectFactory.createInstance({}, this.metadata["valueObject"], patient);
            patient.addEntryToPatientWithPatientFocalSubject(this.object, clinicalNote);
            this.isObjectNew = true;
        } else {
            this.object = filteredEntries[0];
        }

        Object.keys(this.valueObjectAttributes).forEach((voa) => {
            if (!voa.isId || this.isObjectNew) {
                this._setAttributeValue(voa, this.values[voa]);
            }
        });

        const updatePatientSpecList = this.metadata["updatePatient"];
        if (updatePatientSpecList) {
            updatePatientSpecList.forEach((updatePatientSpec) => {
                this.callMethod(patient, updatePatientSpec, clinicalNote);
            });
        }
        this.setValueObject(this.object);

        if (this.isContext()) this.updateContextStatus();
//        if (this.onUpdate) this.onUpdate(this);
/*        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }*/

        this.patient = patient;
    }

    getPrefixCharacter() {
        return "#";
    }
}