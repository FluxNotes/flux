import InserterShortcut from './InserterShortcut';
import ProgressionCreator from './ProgressionCreator';
import ToxicityCreator from './ToxicityCreator';
import StagingCreator from './StagingCreator';

export default class ConditionInserter extends InserterShortcut {
	getValidChildShortcuts() {
		//return [ ProgressionCreator, ToxicityCreator, StagingCreator];
        let result = [];
        if (ProgressionCreator.validateInContext(this)) result.push(ProgressionCreator);
        if (StagingCreator.validateInContext(this)) result.push(StagingCreator);
        if (ToxicityCreator.validateInContext(this)) result.push(ToxicityCreator);
        return result;
	}
	getLabel() {
		return this.getText();
	}
	
	isContext() {
		return true;
	}
	
	determineText(contextManager) {
        return contextManager.getPatient().getConditions().map((item) => {
            return {key: item.entryId, context: item.specificType.coding.displayText, object: item};
        });
	}
    
	static getTriggers() {
		return [ "@condition" ];
	}
    getShortcutType() { 
        return "@condition";
    }
}