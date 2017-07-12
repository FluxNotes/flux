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
        // more Toxicity-specific stuff here, maybe
    }
    getAsString() { 
        if (Lang.isEmpty(this.toxicity)) { 
            // No Toxicity information -- in this case we just want a hash
            return `#toxicity`;
        } else { 
            let allToxicities = "";
            const numToxicities = this.toxicity.length;
            for (let i = 0; i < numToxicities - 1; i++) {
                const curToxicity = this.toxicity[i];
                const gradeString = `Grade ${curToxicity.grade}`;
                const adverseEventString = ` ${curToxicity.adverseEvent}`;
                const today = new Date();
                let dateString;
                if (!Lang.isUndefined(curToxicity.startDate)) {
                    dateString = (curToxicity.startDate.getDate() === today.getDate()) ? `` : ` as of ${curToxicity.startDate}`;
                } else {
                    dateString = "";
                } 
                const fullToxString = `${gradeString}${adverseEventString}${dateString}`;
                allToxicities += fullToxString;
                allToxicities += ", ";
            }
            const curToxicity = this.toxicity[numToxicities - 1];
            const gradeString = `Grade ${curToxicity.grade}`;
            const adverseEventString = ` ${curToxicity.adverseEvent}`;
            const today = new Date();
            let dateString;
            if (!Lang.isUndefined(curToxicity.startDate)) {
                dateString = (curToxicity.startDate.getDate() === today.getDate()) ? `` : ` as of ${curToxicity.startDate}`;
            } else {
                dateString = "";
            } 
            const fullToxString = `${gradeString}${adverseEventString}${dateString}`;
            allToxicities += fullToxString;
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
            />
        );      
    }

}

export default ToxicityShortcut;
