import Lang from 'lodash';
import CreatorShortcut from './CreatorShortcut';
const lookup = require('../lib/progression_lookup');

export default class ProgressionReasonsCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
        let reasonString = trigger.substring(1);
		this.parentContext = contextManager.getActiveContextOfType("#progression");
        let currentReasons = this.parentContext.getAttributeValue("reasons");
        currentReasons.push(reasonString);
		this.parentContext.setAttributeValue("reasons", currentReasons, false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            let currentReasons = this.parentContext.getAttributeValue("reasons");
            let reasonToDelete = this.text.substring(1);
            let newReasons = currentReasons.filter((reason) => { return reason !== reasonToDelete });
            this.parentContext.setAttributeValue("reasons", newReasons, false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#progression-reasons";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#progression")) {
			errors.push("Progression reason values invalid without #progression. Use #progression to add a new progression to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#progression");
		if (parentContext.getAttributeValue("reasons").length > lookup.getReasonOptions().length) {
			errors.push("Progression reason values all already specified. Each reason value is allowed once per progression.");
		}
		return errors;
	}
	
    static getTriggers(parentContext = undefined) {
        let currentReasons = [];
        if (!Lang.isUndefined(parentContext)) {
            currentReasons = parentContext.getAttributeValue("reasons");
        }
		const reasonOptions = lookup.getReasonOptions(); // [ "Pathology", "Markers"]
		let result = [];
		reasonOptions.forEach((val) => {
            if (!currentReasons.includes(val.name)) {
                result.push({name: "#" + val.name});
            }
		});
		return result;
    }
}