import InserterShortcut from './InserterShortcut';

export default class PatientInserter extends InserterShortcut {
	determineValue(contextManager) {
		return 	contextManager.getPatient().getName() + " is a " + 
				contextManager.getPatient().getAge() + " year old " + 
				contextManager.getPatient().getGender();
	}
    getShortcutType() { 
        return "patient";
    }
	static getTrigger() {
		return "@patient"
	}
}