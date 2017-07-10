const Shortcut = require('./shortcut.js');

class Toxicity extends Shortcut {
    constructor(status="", reasons=[], observationDate=new Date()) {
        super();
        this.status = status;
        this.reasons = reasons; 
        this.observationDate = observationDate;
        console.log(`constructor for a new Toxicity object`)
        // more Toxicity-specific stuff here, maybe
    }
}

module.exports = Toxicity; 
