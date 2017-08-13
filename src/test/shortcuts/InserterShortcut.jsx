import Shortcut from './Shortcut';

export default class InserterShortcut extends Shortcut {
	constructor() {
		super();
		this.value = null;
	}
	getPrefixCharacter() {
		return "@";
	}
	
	initialize(contextManager) {
		this.setValue(this.determineValue(contextManager));
		//TODO handle list selection
	}

	determineValue(contextManager) {
		return null;
	}

	getValue() {
		return this.value;
	}
	
	getText() {
		return this.getValue();
	}
	
	setValue(value) {
		this.value = value;
	}
}