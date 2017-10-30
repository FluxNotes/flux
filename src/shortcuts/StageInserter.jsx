import InserterShortcut from './InserterShortcut';
import TNMStage from '../model/shr/oncology/TNMStage';

export default class StageInserter extends InserterShortcut {
	determineText(contextManager) {		
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		let staging = this.parentContext.getValueObject();
		return `stage ${staging.value.coding[0].displayText.value}`;
	}
	
    static validateInContext(context) {
        return context.getValueObject() instanceof TNMStage;
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
	
	static getStringTriggers() {
		return [{name: "@stage", description: "Patient's stage"}];
	}
}