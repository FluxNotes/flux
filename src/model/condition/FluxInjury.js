import FluxCondition from './FluxCondition';
import Injury from '../shr/condition/Injury';

class FluxInjury extends FluxCondition {
    constructor(json) {
        super(json);
        this._condition = Injury.fromJSON(json);
    }
    /**
     *  function to build HPI Narrative
     *  Starts with initial summary of patient information
     *  Then details chronological history of patient's procedures, medications, and most recent progression
     */
    buildHpiNarrative(patient) {
        // Initial patient introduction section
        const name = patient.getName();
        const age = patient.getAge();
        const gender = patient.getGender();

        let hpiText = `${name} is a ${age} year old ${gender}.`;
        hpiText += ` Patient was diagnosed with ${this.type} on ${this.diagnosisDate}.`;
        
        hpiText = this.buildEventNarrative(hpiText, patient);
        
        return hpiText;
    }
}

export default FluxInjury;