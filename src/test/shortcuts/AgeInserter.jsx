import InserterShortcut from './InserterShortcut';

export default class AgeInserter extends InserterShortcut {
	determineText(contextManager) {
		return contextManager.getPatient().getAge();
	}
    getShortcutType() { 
        return "@age";
    }
	static getTriggers() {
		return [ "@age" ];
	}
}