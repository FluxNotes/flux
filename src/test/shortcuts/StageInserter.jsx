import InserterShortcut from './InserterShortcut';
import Lang from 'lodash';

export default class StageInserter extends InserterShortcut {
	determineValue(contextManager) {
	
	//TODO: should only be valid if staging context exists. this needs to be rewritten
	// errors need to be returned, can't access state from here
	// function could return error list and just setValue on shortcut rather than returning value
	// or could return both in object {value: , errors: []}
		let cond = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		if (!Lang.isNull(cond)) {
			let patient = contextManager.getPatient();
			let stagingObservation = patient.getMostRecentStagingForCondition(cond);
			this.setState({
				errors: []
			});
			if (Lang.isNull(stagingObservation)) {
				return "unknown";
			}
			return stagingObservation.value.coding.displayText;
		} else {
			let errors = [ "@stage invalid without a breast cancer condition. Use @condition to add the condition to your narrative." ];
			this.setState({
				errors: errors
			});
			return "";
		}
	}
	validateInCurrentContext(contextManager) {
		console.log("validateInCurrentContext");
		let errors = [];
		if (!contextManager.isContextOfTypeActive("#staging")) {
			errors.push("@stage requires a staging context. Create a new staging via #staging.");
		}
		return errors;
	}
    getShortcutType() { 
        return "stage";
    }
	static getTrigger() {
		return "@stage"
	}
}