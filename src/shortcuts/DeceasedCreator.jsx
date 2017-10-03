import CreatorShortcut from './CreatorShortcut';
import Lang from 'lodash';

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
        this.setAttributeValue = this.setAttributeValue(this);
    }

    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.parentContext = contextManager.getPatientContext();
    }

    getShortcutType() {
        return "#deceased";
    }

    // For copy button string
    // return the formatted date plus #deceased
    getAsString() {
        if((!this.deceased.value) || (!this.deceased.dateOfDeath)) {
            // Value is false or date of death is null, return just the hash
            return `#deceased`;
        } else {

        }

    }


    // similar to progression creator.
    //
    // in updatepatient. check if deceased date of ddeath has been set and only update patient if it hasnt flag if new or not. if it hasnt been added yet. if disecesased new, patient.setdeceased, pass deceased object in, replace staging with decasesed
    //
}

export default DeceasedCreator;