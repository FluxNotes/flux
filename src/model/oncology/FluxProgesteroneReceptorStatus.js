import ProgesteroneReceptorStatus from '../shr/oncology/ProgesteroneReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxProgesteroneReceptorStatus extends ProgesteroneReceptorStatus {
    
  /**
   * Getter for shr.oncology.ReceptorType
   */
  get status() {
    return this.value.coding[0].displayText.value;
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set status(statusVal) {
    this.value = lookup.getReceptorCodeableConcept(statusVal);
  }
}

export default FluxProgesteroneReceptorStatus;