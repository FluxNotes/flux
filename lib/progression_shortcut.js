const Shortcut = require('./shortcut.js');

class Progression extends Shortcut {
    constructor(status="", reasons=[], observationDate=new Date()) {
        super();
        this.status = status;
        this.reasons = reasons; 
        this.observationDate = observationDate;
        console.log(this.observationDate);
        // more Progression-specific stuff here, maybe
    }
}

module.exports = Progression; 
