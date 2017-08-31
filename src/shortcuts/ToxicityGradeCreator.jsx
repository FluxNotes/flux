import CreatorShortcut from './CreatorShortcut';
import Lang from 'lodash';
const lookup = require('../lib/toxicity_lookup');

export default class ToxicityGradeCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
        let gradeString = trigger.substring(1);
		this.parentContext = contextManager.getActiveContextOfType("#toxicity");
		this.parentContext.setAttributeValue("grade", gradeString, false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("grade", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }

	getText() {
		return this.text;
	}
	
    getShortcutType() { 
        return "#toxicity-grade";
    }

	validateInCurrentContext(contextManager) {
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#toxicity")) {
			errors.push("Toxicity grade values invalid without #toxicity. Use #toxicity to add a new toxicity to your narrative.");
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#toxicity");
		if (parentContext.getAttributeValue("grade").length > 0) {
			errors.push("Toxicity grade value already specified. Only one grade value allowed per toxicity.");
		}
		return errors;
	}
	
	static getTriggers(parentContext = undefined) {
        let currentAdverseEvent = "", gradeOptions;
        if (!Lang.isUndefined(parentContext)) {
            currentAdverseEvent = parentContext.getAttributeValue("adverseEvent");
        }
        if (currentAdverseEvent.length === 0) {
            gradeOptions = lookup.getGradeOptions();
        } else {
            gradeOptions = lookup.getGradeOptionsForAdverseEvent(currentAdverseEvent);
        }
		let result = [];
		gradeOptions.forEach((val) => {
			result.push({name: "#" + val.name});
		});
		return result;
	}
    
    static getShortcutGroupDescription() {
        return lookup.getDescription('grade');
    }
    
    static getShortcutGroupName(){
        return "Grade";
    }      
}