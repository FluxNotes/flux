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
        this.handleStagingUpdate = this.handleStagingUpdate.bind(this);
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
                onStagingUpdate={this.handleStagingUpdate}
                // Properties
                staging={this.staging}
            />
        );      
    }
    
    handleStagingUpdate = (s) => { 
        // console.log(`Updated staging:`);
        // console.log(s);
        this.staging.tumorSize = s.tumorSize;
        this.staging.nodeSize = s.nodeSize;
        this.staging.metastasis = s.metastasis;
        this.onUpdate(this);
        //console.log(this.staging);
    }

	getStructuredFieldSpecification() {
		return [	{ type: 'staticText', 	spec: { text:'#staging['}},
					{ type: 'dropDown',   	spec: { name: 'T', items: ['Tis', 'T0', 'T1', 'T2', 'T3','T4'] }},
					{ type: 'dropDown',   	spec: { name: 'N', items: ['N0', 'N1mi', 'N1', 'N2', 'N3'] }},
					{ type: 'dropDown', 	spec: { name: 'M', items: ['M0', 'M1'] }},
					{ type: 'staticText',	spec: { text:']'}} ];
	}
	
	updateValue(name, value) {
		if (name === "T") {
			this.staging.tumorSize = value.toUpperCase();
		} else if (name === "N") {
			this.staging.nodeSize = value.toUpperCase();
		} else if (name === "M") {
			this.staging.metastasis = value.toUpperCase();
		} else {
			console.log("Error: Unexpected value selected in staging dropdown: " + name);
			return;
		}
		this.onUpdate(this);
	}
}

export default StagingShortcut;