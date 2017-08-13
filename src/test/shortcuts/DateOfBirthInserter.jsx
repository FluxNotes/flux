import InserterShortcut from './InserterShortcut';

export default class DateOfBirthInserter extends InserterShortcut {
//{trigger: "dateofbirth", value: (cm) => { return cm.getPatient().getDateOfBirth().format("D.MMM.YYYY"); }},
	determineValue(contextManager) {
		return contextManager.getPatient().getDateOfBirth().format("D.MMM.YYYY");
	}

    getShortcutType() { 
        return "dateOfBirth";
    }
	static getTrigger() {
		return "@dateofbirth"
	}
}