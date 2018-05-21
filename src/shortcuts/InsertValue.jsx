import Shortcut from './Shortcut';
import Lang from 'lodash';

export default class InsertValue extends Shortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super();
        this.metadata = metadata;
        this.text = null;
    }

    initialize(contextManager, trigger = undefined, updatePatient = true, shortcutData = "") {
        super.initialize(contextManager, trigger, updatePatient);
        let text = this.determineText(contextManager);
        if (Lang.isArray(text)) {
            this.flagForTextSelection(text);
        } else {
            if (shortcutData.length > 0) this.setText(shortcutData);
            else this.setText(text);
        }

        if (this.needToSelectValueFromMultipleOptions() && shortcutData.length > 0) {
            this.text = shortcutData;
            const portalOptions = this.getValueSelectionOptions();
            portalOptions.forEach((option) => {
                if (option.context === shortcutData) {
                    this.setValueObject(option.object);
                }
            });
        }
    }

	getPrefixCharacter() {
		return "@";
	}

    _getValueUsingPath(item, attributePath) {
        let result = item, i;
        for (i = 0; i < attributePath.length; i++) {
            result = result[attributePath[i]];
        }
        return result;
    }
    
    _resolveCallSpec(callSpec, contextManager) {
        let result;
        const callObject = callSpec["object"];
        const string = callSpec["string"];
        if (Lang.isUndefined(callObject)) {
            if (!Lang.isUndefined(string)) {
                const params = callSpec["params"];
                result = "";
                let start = 0, callId;
                let index = string.indexOf("${"), index2;
                while (index !== -1) {
                    if (start !== index) result += string.substring(start, index);
                    index2 = string.indexOf("}", index+2);
                    callId = string.substring(index+2, index2);
                    result += this._resolveCallSpec(params[callId], contextManager);
                    start = index2 + 1;
                    if (start < string.length) {
                        index = string.indexOf("${", index2);
                    } else {
                        index = -1;
                    }
                }
                if (start < string.length) {
                    result += string.substring(start);
                }
                return result;
            } else {
                console.error("not supported yet " + callSpec);
            }
        } else if (callObject === "patient") {
            //"getData": [ {"object": "patient", "method": "getAge"}]
            result = contextManager.getPatient()[callSpec["method"]]();
            if (Lang.isArray(result)) {
                if (!Lang.isUndefined(callSpec["itemKey"])) {
                    const itemKey = callSpec["itemKey"].split(".");
                    const itemContext = callSpec["itemContext"].split(".");
                    const itemDate = callSpec["itemDate"];

                    console.log("Item date");
                    console.log(itemDate);
                    return result.map((item) => {
                    console.log("Item occurrence time");
                        console.log(item[itemDate]);
                        // console.log(this._getValueUsingPath(item, itemDate));
                        return {key: this._getValueUsingPath(item, itemKey), 
                                context: this._getValueUsingPath(item, itemContext), 
                                object: item,
                                date: item[itemDate]};
                    });
                } else {
                    let listItems = callSpec["listItems"];
                    listItems = listItems.map((listItem) => {
                        return listItem.split(".");
                    });
                    const numMedications = result.length - 1;
                    const numListItems = listItems.length - 1;
                    let strResult = "";
                    result.forEach((item, itemIndex) => {
                        listItems.forEach((itemKey, attrIndex) => {
                            let nextSubstring = this._getValueUsingPath(item, itemKey);
                            if (!Lang.isUndefined(nextSubstring) && !Lang.isNull(nextSubstring)) strResult += nextSubstring;
                            if (attrIndex < numListItems) strResult += " ";
                        });
                        if (itemIndex < numMedications) {
                            strResult += "\r\n";
                        }
                    });
                    result = strResult;
                }
            }
            return result;
        } else if (callObject === "parent") {
        //   "getData": {"object": "parent", "attribute": "stage"},
            const attribute = callSpec["attribute"];
            return this.contextManager.getActiveContextOfType(this.metadata.knownParentContexts).getAttributeValue(attribute);
        } else if (callObject === "$parentValueObject") {
            const patient = this.contextManager.getPatient();
            return this.contextManager.getActiveContextOfType(this.metadata.knownParentContexts).getValueObject()[callSpec["method"]](patient);
        } else {
            console.error("not support yet " + callSpec.object + " / " + callSpec.method);
        }
        return null;
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
        const callSpec = this.metadata["getData"];
        return this._resolveCallSpec(callSpec, contextManager);
	}
    
    getShortcutType() { 
        return this.metadata["id"];
    }
 
    isContext() {
        return this.metadata.isContext;
    }

	getLabel() {
		return this.getText();
	}

    getId() {
        return this.metadata["id"];
    }

	getText() {
		return this.text;
    }
    
    getResultText() {
        let text = this.text;
        if (typeof text === "string" && text.startsWith(this.getPrefixCharacter())) {
            text = text.substring(1);
        }
        return `${this.initiatingTrigger}[[${text}]]`;
    }
		
	setText(text) {
		this.text = text;
	}
}