import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class CreatorShortcut extends Shortcut {
	getPrefixCharacter() {
		return "#";
	}
	
	initialize(contextManager) {
		super.initialize(contextManager);
        let text = this.determineText(contextManager);
        if (Lang.isArray(text)) {
			this.flagForTextSelection(text);
		} else {
			this.setText(text);
		}
	}
    
    determineText(contextManager) {
        return null;
    }
    
    setText(text) {
		this.text = text;
	}
}