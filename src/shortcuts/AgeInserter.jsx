import InserterShortcut from './InserterShortcut';

export default class AgeInserter extends InserterShortcut {
	determineText(contextManager) {
		return contextManager.getPatient().getAge();
	}
    getShortcutType() { 
        return "@age";
    }
	static getStringTriggers() {
		return [ {name:"@age", description: "Patient's age in years as of today"} ];
	}
}