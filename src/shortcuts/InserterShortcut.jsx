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
			this.flagForTextSelection(text);
		} else {
			this.setText(text);
		}
	}

    /*
     * Determines the text to display for this particular inserter shortcut. Some shortcuts
     * will return a string value, but others can returns a list of possible options for the
     * user to select from. Each item in that list must be a javascript object like this:
     *   {  key: <identifier for item>, 
            context: <label or title to display to user>, 
            object: <full SHR data object represented>
         }
     */
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