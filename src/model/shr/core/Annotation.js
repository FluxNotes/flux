/** Generated from SHR definition for shr.core.Annotation */
class Annotation {

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

  /**
   * Getter for shr.base.Author
   */
  get author() {
    return this._author;
  }

  /**
   * Setter for shr.base.Author
   */
  set author(authorVal) {
    this._author = authorVal;
  }

  /**
   * Getter for shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Setter for shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTimeVal) {
    this._occurrenceTime = occurrenceTimeVal;
  }

}

export default Annotation;
