const Lang = require('lodash/lang')
const Shortcut = require('./shortcut.js');

class Progression extends Shortcut {
    constructor(status=null, reason=[], observationDate=new Date()) {
        super();
        this.status = status;
        this.reason = reason; 
        this.observationDate = observationDate;
        this.today = new Date();
        console.log(`constructor for a new Progression object`)
        // more Progression-specific stuff here, maybe
    }

    getAsString() { 
        if(Lang.isNull(this.status)) { 
            // 1. No status -- this case we just want a hash 
            return `#progression`;
        } else { 
            let reasonString = ""; 
            const numReasons = reason.length;
            if (reason.length > 0) { 
                reasonString = " based on ";
                for (let i = 0; i < numReasons - 1; i++) { 
                    reasonString += reason[i];
                    reasonString += ", ";
                }
                reasonString += reason[numReasons - 1];
            } 
            const dateString = (this.observationDate.getDate() === today.getDate()) ? `` : ` as of ${this.observationDate}`;
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#progression[${this.status}${reasonString}${dateString}]`;
        }
    }
}

module.exports = Progression; 
