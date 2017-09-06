import CreatorShortcut from './CreatorShortcut';

const lookup = require('../lib/staging_lookup');

export default class StagingNCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		this.parentContext.setAttributeValue("N", trigger.substring(1), false);
        this.parentContext.addChild(this);
	}

    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("N", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#staging-n";
    }

	static validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("Staging N values invalid without #staging. Use #staging to add a new staging to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#staging");
		if (parentContext.getAttributeValue("N").length > 0) {
			errors.push("Staging N value already specified. Only one N value allowed per staging.");
		}
		return errors;
	}
	static getTriggers() {
		const ns = lookup.getNsNamesForEdition(7);
		let result = [];
		ns.forEach((val) => {
			result.push("#" + val);
		});
		return result;
	}
}