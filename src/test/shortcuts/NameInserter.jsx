import InserterShortcut from './InserterShortcut';

export default class NameInserter extends InserterShortcut {
	determineValue(contextManager) {
		return contextManager.getPatient().getName();
	}
	
    getShortcutType() { 
        return "name";
    }

	static getTrigger() {
		return "@name"
	}
}