import TelephoneNumber from './TelephoneNumber';

/** Generated from SHR definition for shr.demographics.WorkTelephoneNumber */
class WorkTelephoneNumber extends TelephoneNumber {

  /**
   * Getter for shr.demographics.TelecomQualifier
   */
  get telecomQualifier() {
    return this._telecomQualifier;
  }

  /**
   * Setter for shr.demographics.TelecomQualifier
   */
  set telecomQualifier(telecomQualifierVal) {
    this._telecomQualifier = telecomQualifierVal;
  }

}

export default WorkTelephoneNumber;
