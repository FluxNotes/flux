import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import FluxObservation from '../base/FluxObservation';
import Observation from '../shr/base/Observation';
import * as lookup from '../../../../lib/receptor_lookup.jsx';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxEstrogenReceptorStatus extends FluxObservation {
    constructor(json) {
        super();
        this._entry = this._observation = Observation.fromJSON(json);
        if (!this._observation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/base/Observation';
            this._observation.entryInfo = entry;
        }
    }

    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._observation.value) return null;
        return this._observation.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._observation.value = lookup.getReceptorValueCodeableConcept(statusVal);
    }

    toJSON() {
        return this._observation.toJSON();
    }
}

export default FluxEstrogenReceptorStatus;
