import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';
import Lang from 'lodash';
import moment from 'moment';
import FluxDeceased from '../model/actor/FluxDeceased';

class DeceasedCreator extends CreatorShortcut {

    constructor(onUpdate, deceased) {
        super();

        if (Lang.isUndefined(deceased)) {
            this.deceased = new FluxDeceased();
            this.deceased.value = false;
            this.deceased.dateOfDeath = null;
            this.isDeceasedNew = true;
        } else {
            this.deceased = deceased;
            this.isDeceasedNew = false;
        }
        this.setValueObject(this.deceased);
        this.onUpdate = onUpdate;
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }

    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getPatientContext();
    }

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.removeChild(this);
        }
        return result;
    }

    getShortcutType() {
        return "#deceased";
    }

    getDateOfDeathString(deceased) {
        let dateString;
        if(deceased.dateOfDeath) {
            const formattedDate = moment(deceased.dateOfDeath, 'D MM YYYY').format('MM/DD/YYYY');
            dateString = `#${formattedDate}`;
        } else {
            dateString = ``;
        }
        return dateString;
    }

    // For copy button string
    // return the formatted date plus #deceased
    getAsString() {
        if((!this.deceased.value) || (!this.deceased.dateOfDeath)) {
            // Value is false or date of death is null, return just the hash
            return `#deceased`;
        } else {
            let dateOfDeathString = this.getDateOfDeathString(this.deceased);
            return `#deceased ${dateOfDeathString}`;
        }
    }

    getFormSpec() {

        return  {
            tagName: 'DeceasedForm',
            props:  {
                updateValue: this.setAttributeValue,
                deceased: this.deceased,
                ...this.configuration
            },
            children: []
        };
    }

    setAttributeValue(name, value, publishChanges) {

        if (name === "date") {
            this.deceased.value = true;
            this.deceased.dateOfDeath = value;
        } else {
            console.error("Error: Unexpected value selected for deceased: " + name);
            return;
        }
        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate) this.onUpdate(this);
        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }
    }

    getAttributeValue(name) {

        if (name === "date") {
            return this.deceased.dateOfDeath;
        } else {
            console.error("Error: Unexpected value requested for deceased: " + name);
            return null;
        }
    }

    updatePatient(patient, contextManager) {
        if (this.isDeceasedNew) {
            const personOfRecord = patient.getPersonOfRecord();
            personOfRecord.deceased = this.deceased;
            this.isDeceasedNew = false;
        }
    }

    static validateInContext(context){
        // In patient context so no need to validate
        return;
    }

    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }

    // No other shortcuts
    shouldBeInContext() {
        return (!this.getAttributeValue("date"));
    }

    getValidChildShortcuts() {
        let result = [];
        if (!this.getAttributeValue("date")) result.push(DateCreator);
        return result;
    }

    isContext() {
        return true;
    }

    getLabel() {
        return this.getShortcutType();
    }

    static getStringTriggers() {
        return [{ name: "#deceased", description: 'An indication that the person is no longer living, given by a date, ' +
        'time of death, or a boolean value which, when true, indicates the person is deceased.' }];
    }
}

export default DeceasedCreator;