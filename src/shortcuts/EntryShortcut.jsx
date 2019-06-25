import Shortcut from './Shortcut';
import PatientRecord from '../patient/PatientRecord';
import FluxObjectFactory from '../model/FluxObjectFactory';
import moment from 'moment';
import Lang from 'lodash';
import { createSentenceFromStructuredData } from './ShortcutUtils';

export default class EntryShortcut extends Shortcut {
    constructor(metadata) {
        super();
        this.metadata = metadata;
    }

    _initializeValueObject(metadata, patient, shortcutData) {
        if (Lang.isUndefined(shortcutData) || !shortcutData || Lang.isEmpty(shortcutData)) {
            this.object = FluxObjectFactory.createInstance({}, metadata["valueObject"], patient);
            this.isObjectNew = true;
        } else {
            const dataObj = JSON.parse(shortcutData);
            this.object = patient.getEntryById(dataObj.entryId);
            // We want to try and get this object -- if there is none, make a new one
            this.isObjectNew = !this.object;
            if (!this.object) {
                this.object = FluxObjectFactory.createInstance({}, metadata["valueObject"], patient);
            }
        }
        this.setValueObject(this.object);
    }

    _initializeValueObjectAttributes(metadata) {
        const metadataVOA = metadata["valueObjectAttributes"];
        this.valueObjectAttributes = {};
        this.values = {};
        this.isSet = {};
        metadataVOA.forEach((attrib) => {
            this.isSet[attrib.name] = false;
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
    }

    hasParentContext() {
        const knownParent = this.metadata["knownParentContexts"];
        if (knownParent === 'Patient') return true;
        return !Lang.isUndefined(this.parentContext) && !Lang.isNull(this.parentContext);
    }

    isContext() {
        return this.metadata.isContext;
    }

    // should this shortcut instance be in context right now (in other words, should it be a tab in context tray)
    shouldBeInContext() {
        const voaList = this.metadata["valueObjectAttributes"];
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

    establishParentContext(contextManager, relativeToShortcut = undefined) {
        super.initialize(contextManager);
        const knownParent = this.metadata["knownParentContexts"];

        if (Lang.isUndefined(relativeToShortcut)) {
            if (knownParent) {
                this.parentContext = contextManager.getActiveContextOfType(knownParent);
            } else {
                this.parentContext = contextManager.getCurrentContext();
            }
        } else {
            const potentialParents = contextManager.getContextsBeforeShortcut(this, knownParent);
            if (potentialParents && potentialParents.length > 0) {
                this.parentContext = potentialParents[0];
            } else {
                this.parentContext = undefined;
            }
        }

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
    }

    initialize(contextManager, trigger = undefined, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);
        if (contextManager) {
            this.establishParentContext(contextManager);
        }
        // defaulting
        const metadataVOA = this.metadata["valueObjectAttributes"];
        if (updatePatient) {
            metadataVOA.forEach((attrib) => {
                const curVal = this.getAttributeValue(attrib.name);
                if (Lang.isEmpty(curVal) && attrib.isSettable && attrib.type !== "list") {
                    this.setAttributeValue(attrib.name, null, true, updatePatient);
                }
            });
        }
    }

    hasData() {
        const voaList = this.metadata["valueObjectAttributes"];
        let value, isSettable;
        let result = false;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) {
                if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                } else {
                    result = true;
                }
            }
        });
        return result;
    }

    getEntryId() {
        return this.object.entryInfo.entryId ? this.object.entryInfo.entryId.id : null;
    }

    getAsStringWithStyling(isSigned) {
        return createSentenceFromStructuredData(this.metadata.structuredPhrase, this.getAttributeValue.bind(this), this.getDisplayText(), true, isSigned);
    }

    getAsString() {
        return createSentenceFromStructuredData(this.metadata.structuredPhrase, this.getAttributeValue.bind(this), this.getDisplayText(), false);
    }

    getAttributeIsSet(name) {
        return this.isSet[name];
    }

    isAttributeSupported(name) {
        return !Lang.isUndefined(this.valueObjectAttributes[name]);
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

    getAttributeValue(name) {
        return this._getAttributeValue(this.object, name);
    }

    setAttributeValue(name, value, publishChanges = true, updatePatient = true, currentChildText = '') {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.getDisplayText() + "'"); //this.text
        this.isSet[name] = (value !== null);
        const patientSetMethod = voa["patientSetMethod"];
        const setMethod = voa["setMethod"];
        if (value === null && voa.default) {
            value = voa.default;
            if (value === "$today") {
                value = new moment().format('D MMM YYYY');
            }
        }
        if (Lang.isUndefined(patientSetMethod)) {
            if (Lang.isUndefined(setMethod)) {
                this.values[name] = value;
            } else {
                if (voa["type"] === "list" && !Lang.isArray(value)) {
                    const list = this.getAttributeValue(name);

                    // If we are changing an existing child's value instead of adding a new one
                    // remove that child before adding the new value
                    if (Lang.includes(list, currentChildText)) {
                        list.splice(list.indexOf(currentChildText), 1);
                    }
                    list.push(value);
                    Lang.set(this.object, setMethod, list);
                } else {
                    Lang.set(this.object, setMethod, value);
                }
            }
        } else {
            if (voa["type"] === "list" && !Lang.isArray(value)) {
                const list = this.getAttributeValue(name);

                // If we are changing an existing child's value instead of adding a new one
                // remove that child before adding the new value
                if (Lang.includes(list, currentChildText)) {
                    list.splice(list.indexOf(currentChildText), 1);
                }
                list.push(value);
                PatientRecord[patientSetMethod](this.object, list);
            } else {
                PatientRecord[patientSetMethod](this.object, value);
            }
        }
        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate && updatePatient) this.onUpdate(this);
        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }
    }

    serialize() {
        if (Lang.isUndefined(this.object.entryInfo)) return this.initiatingTrigger;
        return `${this.initiatingTrigger}[[{"entryId":${this.getEntryId()}}]]`;
    }

    getDisplayText() {
        return this.initiatingTrigger.replace('#', '');
    }

    removeFromPatient() {
        console.log(this.patient);
        if (this.isObjectNew) return;
        const undoUpdatePatientSpecList = this.metadata["undoUpdatePatient"];
        if (undoUpdatePatientSpecList) {
            undoUpdatePatientSpecList.forEach((undoUpdatePatientSpec) => {
                this.callMethod(this.patient, undoUpdatePatientSpec);
            });
        } else {
            this.patient.removeEntryFromPatient(this.object);
        }
    }

    updatePatient(patient, contextManager, clinicalNote) {
        if (this.isObjectNew) {
            const updatePatientSpecList = this.metadata["updatePatient"];
            let result;
            if (updatePatientSpecList) {
                updatePatientSpecList.forEach((updatePatientSpec) => {
                    result = this.callMethod(patient, updatePatientSpec, clinicalNote);
                    if (Lang.isNull(result)) {
                        this.isObjectNew = false;
                        return;
                    }
                    if (result) {
                        if (Lang.isObject(result)) this.object = result;
                    }
                });
                if (Lang.isNull(result)) {
                    this.isObjectNew = false;
                    return;
                }
            } else {
                this.object = patient.addEntryToPatientWithPatientFocalSubject(this.object, clinicalNote);
            }
            this.isObjectNew = false;
        }
    }

    getPrefixCharacter() {
        return "#";
    }

    _followPath(object, attributePath, startIndex) {
        let i, attributeName, list, index, start, end;
        const len = attributePath.length;
        let result = object;

        const perItemFollowPath = (item) => {
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

    getFormSpec() {
        return {
            tagName: this.metadata["form"],
            props: {
                updateValue: this.setAttributeValue,
                object: this.object,
                ...this.configuration
            },
            children: []
        };
    }

    onBeforeDeleted() {
        const result = super.onBeforeDeleted();
        if (result && this.parentContext) {
            this.parentContext.removeChild(this);
        }
        this.removeFromPatient();
        return result;
    }

    callMethod(patient, spec, clinicalNote) {
        //{"object":"patient", "method": "addObservationToCondition", "args": [ "$valueObject", "$parentValueObject"]}
        const obj = spec["object"];
        const method = spec["method"];
        const listAttribute = spec["listAttribute"];
        const attribute = spec["attribute"];
        const argSpecs = spec["args"];
        const args = argSpecs.map((argSpec) => {
            if (argSpec === "$valueObject") return this.object;
            if (argSpec === "$parentValueObject") {

                if (!this.parentContext) {
                    console.error("no parent context for " + this.getId());
                    return null;
                }
                return this.parentContext.getValueObject();
            }
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
                if (!Lang.isUndefined(this.parentContext)) {
                    return this.parentContext.getValueObject()[method](...args);
                } else {
                    console.error("no parent context for " + this.getId());
                }
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
                const list = Lang.get(patient, listAttribute);
                args.forEach((a) => list.push(a));
                Lang.set(patient, listAttribute, list);
                return this.object;
            } else if (obj === "$valueObject") {
                const list = Lang.get(this.object, listAttribute);
                args.forEach((a) => list.push(a));
                Lang.set(this.object, listAttribute, list);
                return this.object;
            } else if (obj === "$parentValueObject") {
                if (!Lang.isUndefined(this.parentContext)) {
                    const list = Lang.get(this.parentContext.getValueObject(), listAttribute);
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
}
