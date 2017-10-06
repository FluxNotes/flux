import CreatorShortcut from './CreatorShortcut';

const lookup = require('../lib/staging_lookup');

export default class StagingMCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
	}
	
	initialize(contextManager, trigger) {
		super.initialize(contextManager, trigger);
		this.text = trigger;
		this.parentContext = contextManager.getActiveContextOfType("#staging");
		this.parentContext.setAttributeValue("M", trigger.substring(1), false);
        this.parentContext.addChild(this);
	}
	
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("M", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
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
            return errors;
		}
		let parentContext = contextManager.getActiveContextOfType("#staging");
		if (parentContext.getAttributeValue("M").length > 0) {
			errors.push("Staging M value already specified. Only one M value allowed per staging.");
		}
		return errors;
	}
	
	static getStringTriggers() {
		const ms = lookup.getMsForEdition(7);
		let result = [];
		ms.forEach((val) => {
			result.push({name: "#" + val.name, description: val.description});
		});
		return result;
	}
    
    static getDescription() {
        return lookup.getDescription('metastasis')
    }
    static getShortcutGroupName(){
        return "Metastasis";
    }    
}