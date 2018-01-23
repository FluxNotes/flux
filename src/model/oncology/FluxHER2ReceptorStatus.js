import HER2ReceptorStatus from '../shr/oncology/HER2ReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

class FluxHER2ReceptorStatus {
    constructor(json) {
        this._her2ReceptorStatus = HER2ReceptorStatus.fromJSON(json);
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        return this._her2ReceptorStatus.value.coding[0].displayText.value;
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._her2ReceptorStatus.value = lookup.getReceptorCodeableConcept(statusVal);
    }
}

export default FluxHER2ReceptorStatus;