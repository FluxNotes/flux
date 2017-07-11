// React Imports:
import React from 'react';
// Our components
import Shortcut from './Shortcut';
import ToxicityForm from '../forms/ToxicityForm';

import Lang from 'lodash'

class ToxicityShortcut extends Shortcut {
    constructor(onUpdate, toxicity) {
        super();
        if (Lang.isUndefined(toxicity)) { 
            toxicity = ({
                id: Math.floor(Math.random() * Date.now()),
                grade: null,
                adverseEvent: null,
                startDate: new Date()
            });
        }
        this.toxicity = toxicity;
        this.onUpdate = onUpdate;
        console.log(`constructor for a new Toxicity object`)
        // more Toxicity-specific stuff here, maybe
    }
    getAsString() { 
        if (Lang.isNull(this.toxicity.grade) && Lang.isNull(this.toxicity.adverseEvent)) {
            // No Toxicity information -- in this case we just want a hash
            return `#toxicity`;
        } else { 
            const gradeString = `Grade ${this.toxicity.grade}`;
            const adverseEventString = ` ${this.toxicity.adverseEvent}`;
            const today = new Date();
            let dateString;
            if (!Lang.isUndefined(this.toxicity.startDate)) {
                dateString = (this.toxicity.startDate.getDate() === today.getDate()) ? `` : ` as of ${this.toxicity.startDate}`;
            } else {
                dateString = "";
            } 
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#toxicity[${gradeString}${adverseEventString}${dateString}]`;
        }
    }

    handleToxicityUpdate = (p) => { 
        console.log(`Updated toxicity:`);
        console.log(p);
        this.toxicity.grade = p.grade;
        this.toxicity.adverseEvent = p.adverseEvent;
        this.toxicity.startDate = p.startDate;
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
