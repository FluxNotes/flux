import CreatorShortcut from './CreatorShortcut';
import Patient from '../patient/Patient';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';
import ClinicalTrialTitleCreator from './ClinicalTrialTitleCreator';
import Lang from 'lodash';
import moment from 'moment';

class ClinicalTrialCreator extends CreatorShortcut {
    constructor(onUpdate, clinicalTrial) {
        super();
        if (Lang.isUndefined(clinicalTrial)) {
            this.clinicalTrial = Patient.createNewStudyEnrollment();
            this.isClinicalTrialNew = true;
        } else {
            this.clinicalTrial = clinicalTrial;
            this.isClinicalTrialNew = false;
        }
        this.setValueObject(this.clinicalTrial);
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
        return "#clinical trial";
    }
    
    getClinicalTrialNameString(curClinicalTrial) {
        let nameString;
        if (Lang.isUndefined(curClinicalTrial) || 
            Lang.isUndefined(curClinicalTrial.title) ||
            curClinicalTrial.title.length === 0) {
            nameString = ``;    
        } else {
            const allTrials = ClinicalTrialsList.getAllTrials();
            const curTrial = allTrials.find(trial => trial.id === curClinicalTrial.title);
            nameString = ` #${curTrial.name}`;
        }
        return nameString;
    }
    
    getEnrollmentDateString(curClinicalTrial) {
        let dateString;
        if (curClinicalTrial.enrollmentDate) {
            const formattedDate = moment(curClinicalTrial.enrollmentDate, 'D MMM YYYY').format('MM/DD/YYYY');
            dateString = ` #enrolled on #${formattedDate}`;
        } else {
            dateString = ``;
        }
        return dateString;
    }
    
    getEndDateString(curClinicalTrial) {
        let dateString;
        if (curClinicalTrial.endDate) {
            const formattedDate = moment(curClinicalTrial.endDate, 'D MMM YYYY').format("MM/DD/YYYY");
            dateString = ` #ended on #${formattedDate}`;
        } else {
            dateString = ``;
        }
        return dateString;
    }
    
    getAsString() {
        if (Lang.isUndefined(this.clinicalTrial.title) || (this.clinicalTrial.title.length === 0)) {
            return `#clinical trial`;
        } else {
            const clinicalTrialString = this.getClinicalTrialNameString(this.clinicalTrial);
            const enrollmentDate = this.getEnrollmentDateString(this.clinicalTrial);
            const endDate = this.getEndDateString(this.clinicalTrial);
            return `#clinical trial${clinicalTrialString}${enrollmentDate}${endDate}`;
        }
    }
    
    getFormSpec() {
        return {
            tagName: 'ClinicalTrialForm',
            props: {
                updateValue: this.setAttributeValue,
                clinicalTrial: this.clinicalTrial,
                ...this.configuration
            },
            children: []
        };
    }
    
    setAttributeValue(name, value, publishChanges) {
        if (name === "title") {
            Patient.updateTitleForStudyEnrollment(this.clinicalTrial, value);
        } else if (name === "identifier") {
            Patient.updateIdentifierForStudyEnrollment(this.clinicalTrial, value);
        } else if (name === "enrollmentDate") {
            Patient.updateEnrollmentDateForStudyEnrollment(this.clinicalTrial, value);
        } else if (name === "endDate") {
            Patient.updateEndDateForStudyEnrollment(this.clinicalTrial, value);
        } else {
            console.error(`Error: Unexpected value selected for clinical trial: ${name}`);
            return;
        }
        if (this.isContext()) this.updateContextStatus();
        if (this.onUpdate) this.onUpdate(this);
        if (publishChanges) {
            this.notifyValueChangeHandlers(name);
        }
    }
    
    getAttributeValue(name) {
        if (name === "title") {
            return this.clinicalTrial.title;
        } else if (name === "identifier") {
            return this.clinicalTrial.identifier;
        } else if (name === "enrollmentDate") {
            return this.clinicalTrial.enrollmentDate;
        } else if (name === "endDate") {
            return this.clinicalTrial.endDate;
        } else {
            console.error(`Error: Unexpected value requested for clinical trial: ${name}`);
            return null;
        }
    }
    
    updatePatient(patient, contextManager) {
        if (this.clinicalTrial.title.length === 0) return; // Not complete value
        if (this.isClinicalTrialNew) {
            patient.addEntryToPatient(this.clinicalTrial);
            this.isClinicalTrialNew = false;
        }
    }
    
    static validateInContext(context) {
        // TODO: Check on this validation. It should always be valid because in patient context
        return;
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        return errors;
    }
    
    shouldBeInContext() {
        return ((this.getAttributeValue("title").length === 0))
        // (this.getAttributeValue("enrollmentDate").length === 0) ||
        // (this.getAttributeValue("endDate").length === 0)) // TODO the two dates will probably need separate flags (asOf)
    }
    
    getValidChildShortcuts() {
        let result = [];
        if (this.getAttributeValue("title").length === 0) result.push(ClinicalTrialTitleCreator);
        // if (this.getAttributeValue("enrollmentDate").length === 0) result.push(ClinicalTrialEnrollmentDateCreator); // TODO: Not created yet - probably needs to be the flag (asOf)
        // if (this.getAttributeValue("endDate").length === 0) result.push(ClinicalTrialEndDateCreateor) //TODO: Not created yet - probably needs to be the flag (asOf)
        return result;
    }
    
    isContext() {
        return true;
    }
    
    getLabel() {
        return this.getShortcutType();
    }
    
    static getTriggers() {
        return [{ name: "#clinical trial", description: 'Prompts you to choose a clinical trial'}];
    }
    
    static getDescription() {
        return 'this is a description';
    }
}

export default ClinicalTrialCreator;