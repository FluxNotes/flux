import CreatorShortcut from './CreatorShortcut';
import ClinicalTrialsList from '../clinicalTrials/ClinicalTrialsList';

export default class ClinicalTrialTitleCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        this.parentContext = contextManager.getActiveContextOfType("#clinical trial");
        this.parentContext.addChild(this);
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("title", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    determineText(contextManager) {
        return ClinicalTrialsList.getAllTrials().map((trial) => {
            return { key: trial.id, context: trial.name, object: trial };
        }); 
    }
    
    setText(text) {
        if (text.startsWith('#')) {
            text = text.substring(1);
        }
        super.setText(text);
        this.parentContext.setAttributeValue("title", text, false);
    }
    
    getText() {
        return `#${this.text}`;
    }
    
    getShortcutType() {
        return "#title";
    }
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive("#clinical trial")) {
            errors.push("Clinical Trial title invalid withouth #clinical trial. Use #clinical trial to add a new clinical trial enrollment to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#clinical trial");
        if (parentContext.getAttributeValue("title").length > 0) {
            errors.push("Clinical Trial title already specified. Only one title value allowed per clinical trial enrollment.");
        }
        return errors;
    }
    
    static getTriggers() {
        let result = [{ name: "#title", description: "A distinguishing word or group of words naming an item."}];
        return result;
    }
    
    static getDescription() {
        return "A distinguishing word or group of words naming an item.";
    }
    
    static getShortcutGroupName() {
        return "Clinical Trial Title";
    }
}