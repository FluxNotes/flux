// React Imports:
import React from 'react';
// Our components
import CreatorShortcut from './CreatorShortcut';
import ToxicityForm from '../../forms/ToxicityForm';
// Import Lodash libraries
import Lang from 'lodash'

class ToxicityShortcut extends CreatorShortcut {
    constructor(onUpdate, toxicity) {
        super();
        if (Lang.isUndefined(toxicity)) {
            // Starts with an empty array.
            toxicity = []; 
            // toxicity = ({
            //     id: Math.floor(Math.random() * Date.now()),
            //     grade: null,
            //     adverseEvent: null,
            //     startDate: new Date()
            // });
        }
        this.toxicity = toxicity;
        this.onUpdate = onUpdate;
        console.log(`constructor for a new Toxicity object`)
    }
    /* 
     * Returns "toxicity"
     */
    getShortcutType() { 
        return "toxicity";
    }
    /* 
     * Get grade string for given toxicity
     */
    getGradeString = (curToxicity) => { 
        const gradeString = `${curToxicity.grade}`;
        return gradeString;
    }

    /* 
     * Get adverse event string string for given toxicity
     */
    getAdverseEventString = (curToxicity) => { 
        const adverseEventString = `${curToxicity.adverseEvent}`;
        return adverseEventString;
    }

    /* 
     * Get date string for a given toxicity 
     */
    getDateString = (curToxicity) => { 
        const today = new Date();
        let dateString;
        if (!Lang.isUndefined(curToxicity.startDate)) {
            dateString = (curToxicity.startDate.getDate() === today.getDate()) ? `` : `as of ${curToxicity.startDate}`;
        } else {
            dateString = "";
        } 
        return dateString;
    }

    /* 
     * Get string representation for a given toxicity
     */ 
    getToxAsString = (curToxicity) => { 
        const gradeString = this.getGradeString(curToxicity);
        let adverseEventString = this.getAdverseEventString(curToxicity);
        if(!Lang.isEmpty(adverseEventString)) { adverseEventString = ` ` + adverseEventString}
        let dateString = this.getDateString(curToxicity);
        if(!Lang.isEmpty(dateString)) { dateString = ` ` + dateString}

        const fullToxicityString = `${gradeString}${adverseEventString}${dateString}`;
        return fullToxicityString;
    }

    /* 
     * Get string representation for all toxicities, wrapped in toxicity tag
     */ 
    getAsString = () => { 
        if (Lang.isEmpty(this.toxicity)) { 
            // No Toxicity information -- in this case we just want a hash
            return `#toxicity`;
        } else { 
            let allToxicities = "";
            const numToxicities = this.toxicity.length;
            for (let i = 0; i < numToxicities - 1; i++) {
                const curToxicity = this.toxicity[i];
                const curToxicityString = this.getToxAsString(curToxicity);
                allToxicities += curToxicityString;
                allToxicities += ", ";
            }
            const curToxicity = this.toxicity[numToxicities - 1];
            const curToxicityString = this.getToxAsString(curToxicity);
            allToxicities += curToxicityString;
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#toxicity[${allToxicities}]`;
        }
    }

    handleToxicityUpdate = (t) => { 
        console.log(`Updated toxicity:`);
        console.log(t);
        this.toxicity = Lang.clone(t);
        this.onUpdate(this);
    } 

    getForm() {
        return (
            <ToxicityForm
                // Update functions
                onToxicityUpdate={this.handleToxicityUpdate}
                // Properties
                toxicity={this.toxicity}
                // Utilities
                getToxAsString={this.getToxAsString}
            />
        );      
    }

	getStructuredFieldSpecification() {
		return [	{ type: 'staticText', 	spec: { text:'#toxicity['}},
					{ type: 'dropDown',   	spec: { name: 'T', items: ['T0', 'T1', 'T2', 'T3'] }},
					{ type: 'dropDown',   	spec: { name: 'N', items: ['N0', 'N1', 'N2', 'N3'] }},
					{ type: 'dropDown', 	spec: { name: 'M', items: ['M0', 'M1'] }},
					{ type: 'staticText',	spec: { text:']'}} ];
	}

	updateValue(name, value) {

		this.onUpdate(this);
	}

	getValue(name) {
	
	}

	isContext() {
		return true;
	}
}

export default ToxicityShortcut;
