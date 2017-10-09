import CreatorShortcut from './CreatorShortcut';
const lookup = require('../lib/progression_lookup');

export default class ProgressionStatusCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
        let statusString = trigger.substring(1);
		this.parentContext = contextManager.getActiveContextOfType("#disease status");
		this.parentContext.setAttributeValue("status", statusString, false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("status", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#progression-status";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#disease status")) {
			errors.push("Disease Status values invalid without #disease status. Use #disease status to add a new disease status to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#disease status");
		if (parentContext.getAttributeValue("status").length > 0) {
			errors.push("Disease status value already specified. Only one status value allowed per #disease status.");
		}
		return errors;
	}
	
	static getStringTriggers() {
		const statusOptions = lookup.getStatusOptions();
		let result = [];
		statusOptions.forEach((val) => {
			result.push({name: "#" + val.name, description: val.description});
		});
		return result;
	}
    
    static getDescription() {
        return lookup.getDescription('status');
    }
    
    static getShortcutGroupName(){
        return "Status";
    }      
}