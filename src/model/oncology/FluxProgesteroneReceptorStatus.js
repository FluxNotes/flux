import Entry from '../shr/base/Entry';
import EntryType from '../shr/base/EntryType';
import FluxObservation from '../finding/FluxObservation';
import ProgesteroneReceptorStatus from '../shr/oncology/ProgesteroneReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

class FluxProgesteroneReceptorStatus extends FluxObservation {
    constructor(json) {
        super();
        this._entry = this._observation = ProgesteroneReceptorStatus.fromJSON(json);
        if (!this._observation.entryInfo) {
            let entry = new Entry();
            entry.entryType = new EntryType();
            entry.entryType.uri = 'http://standardhealthrecord.org/spec/shr/oncology/ProgesteroneReceptorStatus';
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
        this._observation.value = lookup.getReceptorCodeableConcept(statusVal);
    }
}

export default FluxProgesteroneReceptorStatus;