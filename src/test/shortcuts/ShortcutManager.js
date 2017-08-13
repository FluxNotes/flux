import Lang from 'lodash'
import ProgressionCreator from './ProgressionCreator';
import StagingCreator from './StagingCreator';
import ToxicityCreator from './ToxicityCreator';
import ConditionInserter from './ConditionInserter';
import NameInserter from './NameInserter';
import AgeInserter from './AgeInserter';
import GenderInserter from './GenderInserter';
import PatientInserter from './PatientInserter';
import DateOfBirthInserter from './DateOfBirthInserter';
import StageInserter from './StageInserter';

class ShortcutManager {
	shortcuts = {
		'#progression': ProgressionCreator,
		'#staging': StagingCreator,
		'#toxicity': ToxicityCreator,
		'@condition': ConditionInserter,
		'@name': NameInserter,
		'@age': AgeInserter,
		'@gender': GenderInserter,
		'@patient': PatientInserter,
		'@dateofbirth': DateOfBirthInserter,
		'@stage': StageInserter
	};
	
	getAllShortcuts() {
		let result = [];
		for (var key in this.shortcuts) {
			result.push(this.shortcuts[key]);
		}
		return result;
	}
	
	constructor(shortcutList) {
		this.shortcutList = shortcutList;
	}
	
	getSupportedShortcuts() {
		return this.shortcutList;
	}
	
	createShortcut(shortcutType, onUpdate, object) {
		if (!Lang.includes(this.shortcutList, shortcutType.toLowerCase())) {
			throw new Error("Invalid shortcut type: " + shortcutType);
		}
		return new this.shortcuts[shortcutType.toLowerCase()](onUpdate, object);
	}
}

export default ShortcutManager;