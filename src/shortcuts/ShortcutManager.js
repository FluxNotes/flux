import Lang from 'lodash'
import ProgressionShortcut from './ProgressionShortcut';
import StagingShortcut from './StagingShortcut';
import ToxicityShortcut from './ToxicityShortcut';

class ShortcutManager {
	shortcuts = {
		progression: ProgressionShortcut,
		staging: StagingShortcut,
		toxicity: ToxicityShortcut
	};
	
	constructor(shortcutList) {
		this.shortcutList = shortcutList;
	}
	
	getSupportedShortcuts() {
		return this.shortcutList;
	}
	
	createShortcut(shortcutType, onUpdate, object) {
		//let className = shortcutType.charAt(0).toUpperCase() + shortcutType.slice(1).toLowerCase() + "Shortcut";
		//return instantiate(className, [onUpdate, object]);
		//return new constructor(className, onUpdate, object);
		//return new className(onUpdate, object);
		if (!Lang.includes(this.shortcutList, shortcutType.toLowerCase())) {
			throw new Error("Invalid shortcut type: " + shortcutType);
		}
		return new this.shortcuts[shortcutType.toLowerCase()](onUpdate, object);
	}

}

export default ShortcutManager;