import ReceptorStatusObservation from './ReceptorStatusObservation';

/** Generated from SHR definition for shr.oncology.EstrogenReceptorStatus */
class EstrogenReceptorStatus extends ReceptorStatusObservation {

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

export default EstrogenReceptorStatus;
