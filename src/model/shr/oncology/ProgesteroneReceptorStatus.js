import Entry from '../base/Entry';
import ReceptorStatusObservation from './ReceptorStatusObservation';
import ReceptorType from './ReceptorType';
import SpecificType from '../core/SpecificType';

/** Generated from SHR definition for shr.oncology.ProgesteroneReceptorStatus */
class ProgesteroneReceptorStatus extends ReceptorStatusObservation {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
        if (json.specificType) this._specificType = new SpecificType(json.specificType);
        if (json.receptorType) this._receptorType = new ReceptorType(json.receptorType);
    }

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for shr.oncology.ReceptorType
   */
  get receptorType() {
    return this._receptorType;
  }

  /**
   * Setter for shr.oncology.ReceptorType
   */
  set receptorType(receptorTypeVal) {
    this._receptorType = receptorTypeVal;
  }

}

export default ProgesteroneReceptorStatus;
