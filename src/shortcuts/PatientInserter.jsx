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
	static getTriggers() {
		return [ {name:"@patient", description: "Desciption of basic patient information"} ];
	}
}