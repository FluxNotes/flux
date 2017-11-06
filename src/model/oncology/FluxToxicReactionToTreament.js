import ToxicReactionToTreatment from '../shr/oncology/ToxicReactionToTreatment';
import FluxAdverseEvent from '../adverse/FluxAdverseEvent';

// FluxToxicReactionToTreament class to hide codeableconcepts
class FluxToxicReactionToTreament extends ToxicReactionToTreatment {
    constructor(json) {
        super(json);

        if(json && json.adverseEvent) {
            this._adverseEvent = new FluxAdverseEvent(json.adverseEvent);
        } else {
            this._adverseEvent = new FluxAdverseEvent();
        }
    }
}

export default FluxToxicReactionToTreament;