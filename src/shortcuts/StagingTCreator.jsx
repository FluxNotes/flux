import CreatorShortcut from './CreatorShortcut';
const lookup = require('../lib/staging_lookup');

export default class StagingTCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		this.parentContext.setAttributeValue("T", trigger.substring(1), false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("T", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#staging-t";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("Staging T values invalid without #staging. Use #staging to add a new staging to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#staging");
		if (parentContext.getAttributeValue("T").length > 0) {
			errors.push("Staging T value already specified. Only one T value allowed per staging.");
		}
		return errors;
	}

	static getTriggers() {
		const ts = lookup.getTsNamesForEdition(7);
		let result = [];
		ts.forEach((val) => {
			result.push("#" + val);
		});
		return result;
	}
}