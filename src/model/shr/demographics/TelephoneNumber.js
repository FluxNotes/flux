import Telecom from './Telecom';

/** Generated from SHR definition for shr.demographics.TelephoneNumber */
class TelephoneNumber extends Telecom {

  /**
   * Getter for shr.demographics.TelecomType
   */
  get telecomType() {
    return this._telecomType;
  }

  /**
   * Setter for shr.demographics.TelecomType
   */
  set telecomType(telecomTypeVal) {
    this._telecomType = telecomTypeVal;
  }

}

export default TelephoneNumber;
