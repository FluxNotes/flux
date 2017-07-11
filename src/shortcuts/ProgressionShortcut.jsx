// React Imports:
import React from 'react';
import Shortcut from './Shortcut';
import ProgressionForm from '../forms/ProgressionForm';
import Lang from 'lodash'
//import moment from 'moment';

class ProgressionShortcut extends Shortcut {
	// onUpdate is passed from React components that need to be notified when the progression value(s) change
	// progression is optional and specifies an existing progression value being edited. Not used in no-patient mode
    constructor(onUpdate, progression) {
        super();
		if (typeof progression === 'undefined') { 
		  progression = ({
                    id: Math.floor(Math.random() * Date.now()),
                    status: null,
                    reason: [],
                    startDate: new Date()
                });
		}
		this.state = {
		  progression: progression,
		};
		this.onUpdate = onUpdate;
		this.handleProgressionUpdate = this.handleProgressionUpdate.bind(this);
        console.log(`constructor for a new Progression object`)
        // more Progression-specific stuff here, maybe
    }
	
    getAsString() { 
        if(Lang.isNull(this.state.progression.status) || Lang.isUndefined(this.state.progression.status)) { 
            // 1. No status -- this case we just want a hash 
            return `#progression`;
        } else { 
            let reasonString = ""; 
			if (!Lang.isUndefined(this.state.progression.reason)) {
				console.log(this.state.progression.reason);
				const numReasons = this.state.progression.reason.length;
				if (numReasons > 0) { 
					reasonString = " based on ";
					for (let i = 0; i < numReasons - 1; i++) { 
						reasonString += this.state.progression.reason[i];
						reasonString += `, `;
					}
					reasonString += this.state.progression.reason[numReasons - 1];
				} 
			}
            const today = new Date();
			var dateString;
			if (!Lang.isUndefined(this.state.progression.startDate)) {
				dateString = (this.state.progression.startDate.getDate() === today.getDate()) ? `` : ` as of ${this.state.progression.startDate}`;
			} else {
				dateString = "";
			}
            // Don't put any spaces -- the spaces should be dictated by the current reason and date
            return `#progression[${this.state.progression.status}${reasonString}${dateString}]`;
        }
    }
	
	getForm() {
		return (
			<ProgressionForm
				// Update functions
				onProgressionUpdate={this.handleProgressionUpdate}
				// Properties
				progression={this.state.progression}
			/>
		);		
	}
	
	handleProgressionUpdate = (p) => { 
        console.log(`Updated progression:`);
        console.log(p);
		this.state.progression.status = p.status;
		this.state.progression.reason = p.reason;
		this.state.progression.startDate = p.startDate;
		this.onUpdate(this);
		//console.log(this.state.progression);

 /*if (p !== "" && this.state.progression.some(existingProgression => existingProgression.id === p.id)) {
            console.log("this is an updated event");
            this.updateProgressionEvent(p.id, p);
        } else if (p !== "") { 
            console.log("this is a new progression event");
            this.addProgressionEvent(p)
        }*/
    }

}

export default ProgressionShortcut;
