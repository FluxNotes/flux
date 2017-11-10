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
    
	determineText(contextManager) {
		//return contextManager.getPatient().getAge();
        //"getData": [ {"object": "patient", "method": "getAge"}],
        const callSpec = this.metadata["getData"];
        let result;
        const callObject = callSpec["object"];
        if (callObject === "patient") {
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