import InserterShortcut from './InserterShortcut';
import FluxTNMStage from '../model/oncology/FluxTNMStage';

export default class StageInserter extends InserterShortcut {
	determineText(contextManager) {		
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		let staging = this.parentContext.getValueObject();
		return `stage ${staging.staging}`;
	}
	
    static validateInContext(context) {
        return context.getValueObject() instanceof FluxTNMStage;
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