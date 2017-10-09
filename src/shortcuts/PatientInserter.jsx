import InserterShortcut from './InserterShortcut';

export default class PatientInserter extends InserterShortcut {
	determineText(contextManager) {
		return 	contextManager.getPatient().getName() + " is a " + 
				contextManager.getPatient().getAge() + " year old " + 
				contextManager.getPatient().getGender();
	}
    getShortcutType() { 
        return "@patient";
    }
	static getStringTriggers() {
		return [ {name:"@patient", description: "Basic patient information (e.g. Debra Hernandez672 is a 51 year old female)"} ];
	}
}