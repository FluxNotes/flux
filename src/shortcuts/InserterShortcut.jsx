import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class InserterShortcut extends Shortcut {
	constructor() {
		super();
		this.text = null;
	}
	getPrefixCharacter() {
		return "@";
	}
	
	initialize(contextManager) {
		super.initialize(contextManager);
		let text = this.determineText(contextManager);
		if (Lang.isArray(text)) {
			//TODO handle list selection
			let portalOptions = [];
			text.forEach((item) => {
				portalOptions.push({key: item.entryId, context: item.specificType.coding.displayText, object: item});
			});
			this.flagForTextSelection(portalOptions);
		} else {
			this.setText(text);
		}
	}

	determineText(contextManager) {
		return null;
	}

	getText() {
		return this.text;
	}
		
	setText(text) {
		this.text = text;
	}
}