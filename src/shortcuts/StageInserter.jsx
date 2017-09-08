import InserterShortcut from './InserterShortcut';
import Patient from '../patient/Patient';

export default class StageInserter extends InserterShortcut {
	determineText(contextManager) {		
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		let staging = this.parentContext.getValueObject();
		return `stage ${staging.value.coding.displayText}`;
	}
	
    static validateInContext(context) {
        return (Patient.isEntryOfType(context.getValueObject(), "http://standardhealthrecord.org/oncology/TNMStage"));
    }
    
	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("Inserting stage is invalid without a defined staging to calculate from. Use #staging to add a new staging to your narrative.");
		}
		return errors;
	}
	
    getShortcutType() { 
        return "@stage";
    }
	
	static getTriggers() {
		return [{name: "@stage", description: "Patient's stage"}];
	}
}