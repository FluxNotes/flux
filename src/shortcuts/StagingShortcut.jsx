// React Imports:
import React from 'react';
import Shortcut from './Shortcut';
// Application Imports
import StagingForm from '../forms/StagingForm';
// Lodash
import Lang from 'lodash'

class StagingShortcut extends Shortcut {
    // onUpdate is passed from React components that need to be notified when the staging value(s) change
    // staging is optional and specifies an existing staging value being edited. Not used in no-patient mode
    constructor(onUpdate, staging) {
        super();
        if (Lang.isUndefined(staging)) { 
            staging = ({
                id: Math.floor(Math.random() * Date.now()),
				tumorSize: '',
				nodeSize: '',
				metastasis: ''
            });
        }
        this.staging = Lang.clone(staging);
        this.onUpdate = onUpdate;
        //this.handleStagingUpdate = this.handleStagingUpdate.bind(this);
		this.updateValue = this.updateValue.bind(this);
        // console.log(`constructor for a new Staging object`)
    }
    /* 
     * Returns "staging"
     */
    getShortcutType() { 
        return "staging";
    }
    /* 
     * Translate staging Staging information into a string 
     */
    getTumorSizeString(curStaging) { 
        let tString = ``;
        if (Lang.isNull(curStaging.tumorSize) || Lang.isUndefined(curStaging.tumorSize)) { 
            tString = `?`;
        } else { 
            tString = `${curStaging.tumorSize}`
        }
        return tString;
    }

    /* 
     * Translate staging node size into a string 
     */
    getNodeSizeString(curStaging) { 
        let nString = ``;
        if (Lang.isNull(curStaging.nodeSize) || Lang.isUndefined(curStaging.nodeSize)) { 
            nString = `?`;
        } else { 
            nString = `${curStaging.nodeSize}`
        }
        return nString;
    }

    /* 
     * Translate staging metastasis into a string 
     */
    getMetastasisString(curStaging) { 
        let mString = ``;
        if (Lang.isNull(curStaging.metastasis) || Lang.isUndefined(curStaging.metastasis)) { 
            mString = `?`;
        } else { 
            mString = `${curStaging.metastasis}`
        }
        return mString;
    }
    
    /* 
     * Translate the current shortcut into a string
     */
    getAsString() { 
        if(!Lang.isNull(this.staging)) { 
            if((Lang.isNull(this.staging.tumorSize)  || Lang.isUndefined(this.staging.tumorSize)) &&
               (Lang.isNull(this.staging.nodeSize)   || Lang.isUndefined(this.staging.nodeSize)) &&
               (Lang.isNull(this.staging.metastasis) || Lang.isUndefined(this.staging.metastasis)))
            {
                return `#staging`;
            } else { 
                const tString = this.getTumorSizeString(this.staging);
                const nString = this.getNodeSizeString(this.staging);
                const mString = this.getMetastasisString(this.staging);
                // Don't put any spaces -- the spaces should be dictated by the current reason and date
                return `#staging[T${tString}N${nString}M${mString}]`;
            }
        }
    }
    
    /* 
     * Return the form for staging
     */
    getForm() {
        return (
            <StagingForm
                // Update functions
                //onStagingUpdate={this.handleStagingUpdate}
				updateValue={this.updateValue}
                // Properties
                staging={this.staging}
            />
        );      
    }

	getStructuredFieldSpecification() {
		return [	{ type: 'staticText', 	spec: { text:'#staging['}},
					{ type: 'dropDown',   	spec: { name: 'T', items: ['Tis', 'T0', 'T1', 'T2', 'T3','T4'] }},
					{ type: 'dropDown',   	spec: { name: 'N', items: ['N0', 'N1mi', 'N1', 'N2', 'N3'] }},
					{ type: 'dropDown', 	spec: { name: 'M', items: ['M0', 'M1'] }},
					{ type: 'staticText',	spec: { text:']'}} ];
	}
	
	updateValue(name, value, publishChanges = true) {
		//console.log("StagingShortcut.updateValue START");
		if (name === "T") {
			this.staging.tumorSize = value;
		} else if (name === "N") {
			this.staging.nodeSize = value;
		} else if (name === "M") {
			this.staging.metastasis = value;
		} else {
			console.log("Error: Unexpected value selected in staging dropdown: " + name);
			return;
		}
		this.onUpdate(this);
		if (publishChanges) {
			this.notifyValueChangeHandlers(name);
		}
		//console.log("StagingShortcut.updateValue DONE");
	}

	getValue(name) {
		if (name === "T") {
			return this.staging.tumorSize;
		} else if (name === "N") {
			return this.staging.nodeSize;
		} else if (name === "M") {
			return this.staging.metastasis;
		} else {
			console.log("Error: Unexpected value selected in staging dropdown: " + name);
			return null;
		}
	}

	/* this is not correct right now. it should creating new staging with an associated date (occurrenceTime)
	   unless it's an update to one it already created.
	   also it should be finding the condition based on context in the note not just used the last breast cancer
	   one
	 */
	updatePatient(patient, contextManager) {
		//console.log("updatePatient START")
		if (!Lang.isNull(this.staging.tumorSize) && this.staging.tumorSize.length > 0 &&
			!Lang.isNull(this.staging.nodeSize) && this.staging.nodeSize.length > 0 &&
			!Lang.isNull(this.staging.metastasis) && this.staging.metastasis.length > 0)
		{
			console.log("have full staging value to update in patient model. need context. can assume patient but need condition.")
			let condition = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
			//let condition = patient.getLastBreastCancerCondition();
			let staging = patient.getMostRecentStagingForCondition(condition);
			if (Lang.isNull(staging) || Lang.isUndefined(staging)) {
				staging = patient.createNewTNMStageObservation(this.staging.tumorSize, this.staging.nodeSize, this.staging.metastasis);
				if (Lang.isNull(staging)) return;
				patient.addObservationToCondition(staging, condition);
			} else {
				patient.updateTNMStage(staging, this.staging.tumorSize, this.staging.nodeSize, this.staging.metastasis);
			}
			//console.log("updatePatient DONE (updated)")
			//return;
		}
		//console.log("updatePatient DONE (no update)");
	}

	validateInCurrentContext(contextManager) {
		let errors = [];
		let condition = contextManager.getContextObjectOfType("http://standardhealthrecord.org/oncology/BreastCancer");
		if (Lang.isNull(condition)) {
			errors.push("#staging invalid without a breast cancer condition. Use @condition to add the condition to your narrative.");
		}
		return errors;
	}
}

export default StagingShortcut;