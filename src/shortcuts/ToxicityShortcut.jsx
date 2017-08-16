// React Imports:
import React from 'react';
// Our components
import Shortcut from './Shortcut';
import ToxicityForm from '../forms/ToxicityForm';
// Import Lodash libraries
import Lang from 'lodash'

class ToxicityShortcut extends Shortcut {
    constructor(onUpdate, toxicity) {
        super();
        if (Lang.isUndefined(toxicity)) {
            // Starts with an empty obj
            toxicity = {}; 
        }
        this.toxicity = toxicity;
        this.onUpdate = onUpdate;
        console.log(`constructor for a new Toxicity object`)
    }
    
    /*
     * Update a key:value pair
     */
    updateValue = (name, value) => {
        this.onUpdate(this);
    }

    /* 
     * Returns "toxicity"
     */
    getShortcutType = () => { 
        return "toxicity";
    }

    /* 
     * Get grade string for given toxicity
     */
    getGradeString = (curToxicity) => { 
        const gradeString = (Lang.isUndefined(curToxicity.grade)) ? 'Grade _' : `${curToxicity.grade}`;
        return gradeString;
    }

    /* 
     * Get adverse event string string for given toxicity
     */
    getAdverseEventString = (curToxicity) => { 
        const adverseEventString = (Lang.isUndefined(curToxicity.adverseEvent)) ? '?' : `${curToxicity.adverseEvent}`;
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
            const gradeString = this.getGradeString(this.toxicity);
            let adverseEventString = this.getAdverseEventString(this.toxicity);
            if(!Lang.isEmpty(adverseEventString)) { adverseEventString = ` ` + adverseEventString }
            let dateString = this.getDateString(this.toxicity);
            if(!Lang.isEmpty(dateString)) { dateString = ` ` + dateString }

            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#toxicity[${gradeString}${adverseEventString}${dateString}]`;
        }
    }

    /* 
     * Handle an update to this toxicity and the source toxicity
     */ 
    handleToxicityUpdate = (t) => { 
        this.toxicity = Lang.clone(t);
        this.onUpdate(this);
    }

    /* 
     * Return the Toxicity form with the props
     */ 
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

    /* 
     * Return the structured field specification
     */ 
    getStructuredFieldSpecification() {
        return [
            { type: 'staticText',   spec: { text:'#toxicity['}},        
            { type: 'dropDown',     spec: { name: 'T', items: ['T0', 'T1', 'T2', 'T3'] }},        
            { type: 'dropDown',     spec: { name: 'N', items: ['N0', 'N1', 'N2', 'N3'] }},        
            { type: 'dropDown',     spec: { name: 'M', items: ['M0', 'M1'] }},        
            { type: 'staticText',   spec: { text:']'}} 
        ];
    }
}

export default ToxicityShortcut;
