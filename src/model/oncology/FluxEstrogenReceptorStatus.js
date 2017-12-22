import EstrogenReceptorStatus from '../shr/oncology/EstrogenReceptorStatus';
import lookup from '../../lib/receptor_lookup.jsx';

// FluxEstrogenReceptorStatus class to hide codeableconcepts
class FluxEstrogenReceptorStatus extends EstrogenReceptorStatus {
    
  /**
   * Getter for shr.oncology.ReceptorType
   */
  get status() {
    return this.value.coding[0].displayText.value; //er.value.coding[0].displayText.value.value
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set status(statusVal) {
    this.value = lookup.getReceptorCodeableConcept(statusVal);
  }
}

export default FluxEstrogenReceptorStatus;