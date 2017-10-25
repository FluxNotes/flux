import InserterShortcut from './InserterShortcut';

export default class InsertValue extends InserterShortcut {
    constructor(onUpdate, metadata) {
        super();
        this.metadata = metadata;
    }
    
	determineText(contextManager) {
		//return contextManager.getPatient().getAge();
        //"getData": [ {"object": "patient", "method": "getAge"}],
        const getDataMetadata = this.metadata["getData"];
        let result = "";
        getDataMetadata.forEach((callSpec) => {
            if (callSpec["object"] === "patient") {
                result += contextManager.getPatient()[callSpec["method"]]();
            } else {
                console.error("not support yet " + callSpec.object + " / " + callSpec.method);
            }
        });
        return result;
	}
    getShortcutType() { 
        return this.metadata["id"];
    }
}