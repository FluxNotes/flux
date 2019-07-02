import FluxObjectFactory from '../model/FluxObjectFactory';
import PatientRecord from '../patient/PatientRecord';
import EntryShortcut from './EntryShortcut';
import Lang from 'lodash';
import moment from 'moment';

export default class UpdaterBase extends EntryShortcut {
    constructor(onUpdate, metadata, object) {
        super(metadata);
        if (Lang.isUndefined(object)) {
            this.object = null;
        } else {
            this.object = object;
        }
        this.isObjectNew = false;
        this.setValueObject(this.object);
        this.isSetByLabel = {};
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

        const idMetadataVOA = this.metadata["idAttributes"];
        idMetadataVOA.forEach((attrib) => {
            this.setAttributeValue(attrib.name, null, true, updatePatient);
        });
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

    getAttributeValue(name) {
        return this.values[name];
    }

    setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
        const voa = this.valueObjectAttributes[name];
        if (Lang.isUndefined(voa)) throw new Error("Unknown attribute '" + name + "' for structured phrase '" + this.getText() + "'"); //this.text
        this.isSet[name] = (value != null);
        if (value===null && voa.default) {
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
        if (value===null && voa.default) {
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

    getAttributeIsSetByLabel(name) {
        return this.isSetByLabel[name];
    }

    setAttributeIsSetByLabel(name, val) {
        this.isSetByLabel[name] = val;
    }

}