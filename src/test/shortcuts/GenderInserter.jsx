import InserterShortcut from './InserterShortcut';

export default class GenderInserter extends InserterShortcut {
	determineValue(contextManager) {
		return contextManager.getPatient().getGender();
	}
    getShortcutType() { 
        return "gender";
    }
	static getTrigger() {
		return "@gender"
	}
}