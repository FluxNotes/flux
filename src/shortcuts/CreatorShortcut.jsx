import Shortcut from './Shortcut';

export default class CreatorShortcut extends Shortcut {
	getPrefixCharacter() {
		return "#";
	}
	
	initialize(contextManager) {
		super.initialize(contextManager);
	}
}