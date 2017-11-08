import ToxicReactionToTreatment from '../shr/oncology/ToxicReactionToTreatment';
import FluxAdverseEvent from '../adverse/FluxAdverseEvent';

// FluxToxicReactionToTreatment class to hide codeableconcepts
class FluxToxicReactionToTreatment extends ToxicReactionToTreatment {
    constructor(json) {
        super(json);

        if(json && json.adverseEvent) {
            this._adverseEvent = new FluxAdverseEvent(json.adverseEvent);
        } else {
            this._adverseEvent = new FluxAdverseEvent();
        }
    }
}

export default FluxToxicReactionToTreatment;