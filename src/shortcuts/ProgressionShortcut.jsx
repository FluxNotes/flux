// React Imports:
import React from 'react';
import Shortcut from './Shortcut';
import ProgressionForm from '../forms/ProgressionForm';
import Lang from 'lodash'
import moment from 'moment';

//import moment from 'moment';

class ProgressionShortcut extends Shortcut {
    // onUpdate is passed from React components that need to be notified when the progression value(s) change
    // progression is optional and specifies an existing progression value being edited. Not used in no-patient mode
    constructor(onUpdate, progression) {
        super();
        if (Lang.isUndefined(progression)) { 
            progression = ({
                id: Math.floor(Math.random() * Date.now()),
                status: "",
                reason: [],
                startDate: moment(new Date())
            });
        }
        this.progression = Lang.clone(progression);
        this.onUpdate = onUpdate;
        console.log(`constructor for a new Progression shortcut object`)
    }
    /* 
     * Returns "progression"
     */
    getShortcutType() { 
        return "progression";
    }
    /* 
     * Translate progression status into a string 
     */
    getStatusString(curProgression) { 
        let statusString = ``;
        if (Lang.isEmpty(curProgression.status) || Lang.isUndefined(curProgression.status)) { 
            statusString = `?`;
        } else { 
            statusString = `${curProgression.status}`
        }
        return statusString;
    }

    /* 
     * Translate progression reasons into a string 
     */
    getReasonString(curProgression) { 
        let reasonString = ""; 
        if (!Lang.isUndefined(curProgression.reason)) {
            const numReasons = curProgression.reason.length;
            if (numReasons > 0) { 
                reasonString = `based on `;
                for (let i = 0; i < numReasons - 1; i++) { 
                    reasonString += curProgression.reason[i];
                    reasonString += `, `;
                }
                reasonString += curProgression.reason[numReasons - 1];
            } 
        }
        return reasonString
    }

    /* 
     * Translate progression date into a string 
     */
    getDateString(curProgression) { 
        const today = moment(new Date());
        let dateString;
        if (!Lang.isUndefined(curProgression.startDate)) {
            dateString = (curProgression.startDate.format('D') === today.format('D')) ? `` : `as of ${this.progression.startDate}`;
        } else {
            dateString = ``;
        }
        return dateString
    }
    
    /* 
     * Translate the current shortcut into a string
     */
    getAsString() { 
        if(Lang.isEmpty(this.progression.status) || Lang.isUndefined(this.progression.status)) { 
            // 1. No status -- this case we just want a hash
            if(Lang.isEmpty(this.progression.reason)) { 
                return `#progression`;
            } else {    
                // No status but reasons -- show what we can and provide blank for status 
                const statusString = this.getStatusString(this.progression);
                let reasonString   = this.getReasonString(this.progression);
                if (!Lang.isEmpty(reasonString)) {reasonString = ` ` + reasonString;}
                let dateString     = this.getDateString(this.progression);
                if (!Lang.isEmpty(dateString)) {dateString = ` ` + dateString;}
                return `#progression[${statusString}${reasonString}${dateString}]`;
            } 
        } else { 
            const statusString = this.getStatusString(this.progression);
            let reasonString   = this.getReasonString(this.progression);
            if (!Lang.isEmpty(reasonString)) {reasonString = ` ` + reasonString;}
            let dateString     = this.getDateString(this.progression);
            if (!Lang.isEmpty(dateString)) {dateString = ` ` + dateString;}
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#progression[${statusString}${reasonString}${dateString}]`;
        }
    }
    
    /* 
     * Return the form for progression
     */
    getForm() {
        return (
            <ProgressionForm
                // Update functions
                onProgressionUpdate={this.handleProgressionUpdate}
                // Properties
                progression={this.progression}
            />
        );      
    }
    
    handleProgressionUpdate = (p) => { 
        console.log(`Updated progression:`);
        console.log(p);
        this.progression.status = p.status;
        this.progression.reason = p.reason;
        this.progression.startDate = p.startDate;
        this.onUpdate(this);
        //console.log(this.progression);

 /*if (p !== "" && this.progression.some(existingProgression => existingProgression.id === p.id)) {
            console.log("this is an updated event");
            this.updateProgressionEvent(p.id, p);
        } else if (p !== "") { 
            console.log("this is a new progression event");
            this.addProgressionEvent(p)
        }*/
    }

}

export default ProgressionShortcut;
