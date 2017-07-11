// React Imports:
//import React, {Component} from 'react';
import Shortcut from './Shortcut';
//import Lang from 'lodash'

class ToxicityShortcut extends Shortcut {
    constructor(status="", reasons=[], observationDate=new Date()) {
        super();
        this.status = status;
        this.reasons = reasons; 
        this.observationDate = observationDate;
        console.log(`constructor for a new Toxicity object`)
        // more Toxicity-specific stuff here, maybe
    }
}

export default ToxicityShortcut;
