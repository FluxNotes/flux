import FluxAdverseEvent from './FluxAdverseEvent';
import ToxicReaction from '../shr/adverse/ToxicReaction';

// FluxToxicReaction class to hide codeableconcepts
class FluxToxicReaction extends FluxAdverseEvent {
    constructor(json) {
        super(json);

        this._adverseEvent = ToxicReaction.fromJSON(json);
    }
}

export default FluxToxicReaction;