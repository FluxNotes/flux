/** Generated from SHR definition for shr.core.Title */
class Title {

  constructor(json) {
      if (json) {
          if (json.value) this.string = json.value;
          if (json.value) this._string = json.value;
      }
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

export default Title;
