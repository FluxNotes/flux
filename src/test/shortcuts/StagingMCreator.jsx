import CreatorShortcut from './CreatorShortcut';

const lookup = require('../../lib/staging_lookup');

export default class StagingMCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		this.parentContext.setAttributeValue("M", trigger.substring(1), false);
	}
	
	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#staging-m";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("Staging M values invalid without #staging. Use #staging to add a new staging to your narrative.");
		}
		let parentContext = contextManager.getActiveContextOfType("#staging");
		if (parentContext.getAttributeValue("M").length > 0) {
			errors.push("Staging M value already specified. Only one M value allowed per staging.");
		}
		return errors;
	}
	
	static getTriggers() {
		const ms = lookup.getMsNamesForEdition(7);
		let result = [];
		ms.forEach((val) => {
			result.push("#" + val);
		});
		return result;
	}
}