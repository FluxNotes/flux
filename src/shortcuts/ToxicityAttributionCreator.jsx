import CreatorShortcut from './CreatorShortcut';
import lookup from '../lib/toxicity_lookup';

export default class ToxicityAttributionCreator extends CreatorShortcut {
    constructor(onUpdate, obj) {
        super();
    }
    
    initialize(contextManager, trigger) {
        super.initialize(contextManager, trigger);
        this.text = trigger;
        let attributionString = trigger.substring(1);
        this.parentContext = contextManager.getActiveContextOfType('#toxicity');
        this.parentContext.setAttributeValue('attribution', attributionString, false);
        this.parentContext.addChild(this);
    }
    
    onBeforeDeleted() {
        let result = super.onBeforeDeleted();
        if (result) {
            this.parentContext.setAttributeValue("attribution", "", false);
            this.parentContext.removeChild(this);
        }
        return result;
    }
    
    getText() {
        return this.text;
    }
    
    getShortcutType() {
        return '#toxicity-attribution';
    }
    
    
    validateInCurrentContext(contextManager) {
        let errors = [];
        if (!contextManager.isContextOfTypeActive('#toxicity')) {
            errors.push("Toxicity attribution values invalid without #toxicity. Use #toxicity to add a new toxicity to your narrative.");
            return errors;
        }
        let parentContext = contextManager.getActiveContextOfType("#toxicity");
        // TODO Can you choose more than one attribtuion? if so remove this error
        if (parentContext.getAttributeValue('attribution').length > 0) { 
            errors.push("Toxicity attribution value already specified. Only one attribution value allowed per toxicity.")
        }
        return errors;
    }
    
    static getTriggers(parentContext = undefined) {
        let attributionOptions = lookup.getAttributionOptions();
        let result = [];
        attributionOptions.forEach(attribution => result.push({name: "#" + attribution.name, description: attribution.description}));
        return result;
    }
    
    static getDescription() {
        return lookup.getDescription('attribution');
    }
    
    static getShortcutGroupName(){
        return "Attribution";
    }      
}