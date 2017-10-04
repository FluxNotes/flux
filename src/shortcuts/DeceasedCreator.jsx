import CreatorShortcut from './CreatorShortcut';
import DateCreator from './DateCreator';
import Patient from '../patient/Patient';
import Lang from 'lodash';
import moment from 'moment';

class DeceasedCreator extends CreatorShortcut {
    // onUpdate is passed from React components that need to be notified when date of death value changes
    // dateOfDeath is optional and specifies an existing dateOfDeath value being edited. Not used in no-patient mode

    constructor(onUpdate, deceased) {
        super();
        if (Lang.isUndefined(deceased)) {
            this.deceased = Patient.createNewDeceased();
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

    getShortcutType() {
        return "#deceased";
    }


    getDateOfDeathString(deceased) {
        let dateString;
        if(deceased.dateOfDeath) {
            const formattedDate = moment(deceased.dateOfDeath, 'D MM YYYY').format('MM/DD/YYYY');
            dateString = ` #${formattedDate}`;
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
            return `#deceased${dateOfDeathString}`;
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

    // getFormSpec() {
    //    return (
    //     <div>
    //         <h1>Deceased Form</h1>
    //     </div>
    //     );
    // }



    setAttributeValue(name, value, publishChanges) {
        console.log("setAttributeValue name: ");
        console.log(name);
        if (name === "dateOfDeath") {
            Patient.updateDateOfDeath(this.deceased, value);
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
        if (name === "dateOfDeath") {
            return this.deceased.dateOfDeath;
        } else {
            console.error("Error: Unexpected value requested for deceased: " + name);
            return null;
        }
    }

    updatePatient(patient, contextManager) {
       // if (this.deceased.dateOfDeath.length === 0) return; // not sure this is needed
       // let condition = this.parentContext.getValueObject(); // not in condition context
        if (this.isDeceasedNew) {
            patient.setDeceased(this.deceased);
            this.isDeceasedNew = false;
        }
    }

    // No other shortcuts
    shouldBeInContext() {
        return false;
    }

    getValidChildShortcuts() {
        let result = [];
        if (this.getAttributeValue("dateOfDeath").length === 0) result.push(DateCreator);
        return result;
    }

    isContext() {
        return true;
    }

    getLabel() {
        return this.getShortcutType();
    }

    static getTriggers() {
        return [{ name: "#deceased", description: 'Indication that person is no longer living' }];
    }

//. if disecesased new, patient.setdeceased, pass deceased object in, replace staging with decasesed
    //
}

export default DeceasedCreator;