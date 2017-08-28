import InserterShortcut from './InserterShortcut';

export default class NameInserter extends InserterShortcut {
	determineText(contextManager) {
		return contextManager.getPatient().getName();
	}
	
    getShortcutType() { 
        return "@name";
    }

	static getTriggers() {
		return [ {name:"@name"} ];
	}
}