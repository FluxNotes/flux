import EstrogenReceptorStatus from '../shr/oncology/EstrogenReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxEstrogenReceptorStatus {
    constructor(json) {
        this._estrogenReceptorStatus = EstrogenReceptorStatus.fromJSON(json);
    }
    
    /**
     * Getter for shr.oncology.ReceptorType
     */
    get status() {
        if (!this._estrogenReceptorStatus.value) return null;
        return this._estrogenReceptorStatus.value.coding[0].displayText.value; 
    }

    /**
     * Setter for shr.oncology.ReceptorType
     */
    set status(statusVal) {
        this._estrogenReceptorStatus.value = lookup.getReceptorCodeableConcept(statusVal);
    }
}

export default FluxEstrogenReceptorStatus;