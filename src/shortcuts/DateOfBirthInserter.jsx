import InserterShortcut from './InserterShortcut';

export default class DateOfBirthInserter extends InserterShortcut {
//{trigger: "dateofbirth", value: (cm) => { return cm.getPatient().getDateOfBirth().format("D.MMM.YYYY"); }},
	determineText(contextManager) {
		return contextManager.getPatient().getDateOfBirth().format("D.MMM.YYYY");
	}

    getShortcutType() { 
        return "@dateOfbirth";
    }
	static getStringTriggers() {
		return [{name: "@dateofbirth", description: "Patient's date of birth in DD.MMM.YYYY format (e.g., 5 APR 1966)"}];
	}
}