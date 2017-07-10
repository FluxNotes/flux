const Lang = require('lodash/lang')
const Shortcut = require('./shortcut.js');

class Progression extends Shortcut {
    constructor(status=null, reason=[], observationDate=new Date()) {
        super();
        this.status = status;
        this.reason = reason; 
        this.observationDate = observationDate;
        console.log(`constructor for a new Progression object`)
        // more Progression-specific stuff here, maybe
    }

    updateAttr(name="", value="") { 
        // Let's validate our values a bit more intelligently.
        if (name.toLowerCase() === `status`) { 
            if(Lang.isString(name)) { 
                super.updateAttr(name, value);
            } else { 
                console.error(`Trying to set the status attribute of a progression value to ${value}, which isn't a type "string" but a type ${typeof(value)}`);
            }
        } else if (name.toLowerCase() === `reason`) { 
            if (Lang.isArray(value)) { 
                super.updateAttr(name, value);
            } else { 
                console.error(`Trying to set the reason attribute of a progression value to ${value}, which isn't a type "array" but a type ${typeof(value)}`);
            }
        } else if (name.toLowerCase() === `observationDate`) { 
            if(Lang.isDate(value)) {
                super.updateAttr(name, value);
            } else { 
                console.error(`Trying to set the observationDate attribute of a progression value to ${value}, which isn't a type "date" but a type ${typeof(value)}`);
            }
        } else {    
            console.error(`Trying to set the attribute ${name}, which isn't a valid attribute for Progression`);
        }
    }

    getAsString() { 
        if(Lang.isNull(this.status)) { 
            // 1. No status -- this case we just want a hash 
            return `#progression`;
        } else { 
            let reasonString = ""; 
            const numReasons = this.reason.length;
            if (numReasons > 0) { 
                reasonString = " based on ";
                for (let i = 0; i < numReasons - 1; i++) { 
                    reasonString += this.reason[i];
                    reasonString += `, `;
                }
                reasonString += reason[numReasons - 1];
            } 
            const today = new Date();
            const dateString = (this.observationDate.getDate() === today.getDate()) ? `` : ` as of ${this.observationDate}`;
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#progression[${this.status}${reasonString}${dateString}]`;
        }
    }
}

module.exports = Progression; 
