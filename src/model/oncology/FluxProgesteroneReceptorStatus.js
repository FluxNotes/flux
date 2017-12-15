import ProgresteroneReceptorStatus from '../shr/oncology/ProgresteroneReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxProgresteroneReceptorStatus extends ProgresteroneReceptorStatus {
    
  /**
   * Getter for shr.oncology.ReceptorType
   */
  get receptorType() {
    return this._receptorType.value.coding[0].displayText.value;
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set receptorType(receptorTypeVal) {
    this._receptorType.value = lookup.getReceptorCodeableConcept(receptorTypeVal);
  }
}

export default FluxProgresteroneReceptorStatus;