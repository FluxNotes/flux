import ProgesteroneReceptorStatus from '../shr/oncology/ProgesteroneReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

class FluxProgesteroneReceptorStatus {
    constructor(json) {
        this._progesteroneReceptorStatus = ProgesteroneReceptorStatus.fromJSON(json);
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._progesteroneReceptorStatus.value) return null;
        return this._progesteroneReceptorStatus.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._progesteroneReceptorStatus.value = lookup.getReceptorCodeableConcept(statusVal);
    }
}

export default FluxProgesteroneReceptorStatus;