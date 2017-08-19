import CreatorShortcut from './CreatorShortcut';
const lookup = require('../lib/toxicity_lookup');

export default class ToxicityAdverseEventCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
        let adverseEventString = trigger.substring(1).replace("-", " ");
		this.parentContext = contextManager.getActiveContextOfType("#toxicity");
		this.parentContext.setAttributeValue("adverseEvent", adverseEventString, false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("adverseEvent", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#toxicity-adverse-event";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#toxicity")) {
			errors.push("Toxicity adverse event values invalid without #toxicity. Use #toxicity to add a new toxicity to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#toxicity");
		if (parentContext.getAttributeValue("adverseEvent").length > 0) {
			errors.push("Toxicity adverse event value already specified. Only one adverse event value allowed per toxicity.");
		}
		return errors;
	}
	
	static getTriggers() {
		const statusOptions = lookup.getAdverseEventOptions();
		let result = [];
		statusOptions.forEach((val) => {
			result.push("#" + val.name.replace(" ", "-"));
		});
		return result;
	}
}