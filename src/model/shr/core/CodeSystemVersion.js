/** Generated from SHR definition for shr.core.CodeSystemVersion */
class CodeSystemVersion {
    constructor(json) {
        this.string = json;
        this._string = json;
    }
  /**
   * Convenience getter for value (accesses this.string)
   */
  get value() {
    return this.string;
  }

  /**
   * Convenience setter for value (sets this.string)
   */
  set value(val) {
    this.string = val;
  }

  /**
   * Getter for string
   */
  get string() {
    return this._string;
  }

  /**
   * Setter for string
   */
  set string(stringVal) {
    this._string = stringVal;
  }

}

export default CodeSystemVersion;
