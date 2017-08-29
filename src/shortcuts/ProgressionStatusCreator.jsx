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
		this.parentContext = contextManager.getActiveContextOfType("#progression");
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
		if (!contextManager.isContextOfTypeActive("#progression")) {
			errors.push("Progression Status values invalid without #progression. Use #progression to add a new progression to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#progression");
		if (parentContext.getAttributeValue("status").length > 0) {
			errors.push("Progression status value already specified. Only one status value allowed per progression.");
		}
		return errors;
	}
	
	static getTriggers() {
		const statusOptions = lookup.getStatusOptions();
		let result = [];
		statusOptions.forEach((val) => {
			result.push({name: "#" + val.name});
		});
		return result;
	}
    
    static getShortcutGroupDescription() {
        return lookup.getDescription('status');
    }
}