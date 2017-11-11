import InserterShortcut from './InserterShortcut';
import Lang from 'lodash';

export default class InsertValue extends InserterShortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
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
/*
"params":{"age": {"object": "patient", "method": "getAge"},
                          "gender": {"object": "patient", "method": "getGender"},
                          "name": {"object": "patient", "method": "getName"}
                         }
*/
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
            //"getData": [ {"object": "patient", "method": "getAge"}],
            result = contextManager.getPatient()[callSpec["method"]]();
            if (Lang.isArray(result)) {
                const itemKey = callSpec["itemKey"].split(".");
                const itemContext = callSpec["itemContext"].split(".");
                return result.map((item) => {
                    return {key: this._getValueUsingPath(item, itemKey), 
                            context: this._getValueUsingPath(item, itemContext), 
                            object: item};
                });
            }
            return result;
        } else if (callObject === "parent") {
        //   "getData": {"object": "parent", "attribute": "stage"},
            const attribute = callSpec["attribute"];
            //console.log(this.contextManager.getActiveContexts());
            return this.contextManager.getActiveContexts()[0].getAttributeValue(attribute);
        } else {
            console.error("not support yet " + callSpec.object + " / " + callSpec.method);
        }
        return null;
    }
    
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
}