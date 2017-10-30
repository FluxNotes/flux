/** Generated from SHR definition for shr.encounter.EncounterType */
class EncounterType {

  /**
   * Convenience getter for value (accesses this.coding)
   */
  get value() {
    return this.coding;
  }

  /**
   * Convenience setter for value (sets this.coding)
   */
  set value(val) {
    this.coding = val;
  }

  /**
   * Getter for shr.core.Coding
   */
  get coding() {
    return this._coding;
  }

  /**
   * Setter for shr.core.Coding
   */
  set coding(codingVal) {
    this._coding = codingVal;
  }

}

export default EncounterType;
