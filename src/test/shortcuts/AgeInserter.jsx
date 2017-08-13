import InserterShortcut from './InserterShortcut';

export default class AgeInserter extends InserterShortcut {
	determineValue(contextManager) {
		return contextManager.getPatient().getAge();
	}
    getShortcutType() { 
        return "age";
    }
	static getTrigger() {
		return "@age"
	}
}