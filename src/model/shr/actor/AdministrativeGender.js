/** Generated from SHR definition for shr.actor.AdministrativeGender */
class AdministrativeGender {
    constructor(json) {
        this.value = json;
        this._code = json;
    }

  /**
   * Convenience getter for value (accesses this.code)
   */
  get value() {
    return this.code;
  }

  /**
   * Convenience setter for value (sets this.code)
   */
  set value(val) {
    this.code = val;
  }

  /**
   * Getter for code
   */
  get code() {
    return this._code;
  }

  /**
   * Setter for code
   */
  set code(codeVal) {
    this._code = codeVal;
  }

}

export default AdministrativeGender;
