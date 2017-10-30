import TelephoneNumber from './TelephoneNumber';

/** Generated from SHR definition for shr.demographics.HomeTelephoneNumber */
class HomeTelephoneNumber extends TelephoneNumber {

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

export default HomeTelephoneNumber;
