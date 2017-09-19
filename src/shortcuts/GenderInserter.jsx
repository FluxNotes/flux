import InserterShortcut from './InserterShortcut';

export default class GenderInserter extends InserterShortcut {
	determineText(contextManager) {
		return contextManager.getPatient().getGender();
	}
    getShortcutType() { 
        return "@gender";
    }
	static getTriggers() {
		return [{name: "@gender", description: "Patient’s gender classification for administrative purposes (may differ from biological, clinical, or gender identity)"} ];
	}
}