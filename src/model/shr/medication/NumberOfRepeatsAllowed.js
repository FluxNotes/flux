/** Generated from SHR definition for shr.medication.NumberOfRepeatsAllowed */
class NumberOfRepeatsAllowed {
    constructor(json) {
        if (json) {
            if (json) this.value = json;
        }
    }

  /**
   * Convenience getter for value (accesses this.positiveInt)
   */
  get value() {
    return this.positiveInt;
  }

  /**
   * Convenience setter for value (sets this.positiveInt)
   */
  set value(val) {
    this.positiveInt = val;
  }

  /**
   * Getter for positiveInt
   */
  get positiveInt() {
    return this._positiveInt;
  }

  /**
   * Setter for positiveInt
   */
  set positiveInt(positiveIntVal) {
    this._positiveInt = positiveIntVal;
  }

}

export default NumberOfRepeatsAllowed;
