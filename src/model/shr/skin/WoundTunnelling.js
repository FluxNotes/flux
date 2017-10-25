import ObservationComponent from '../observation/ObservationComponent';

/** Generated from SHR definition for shr.skin.WoundTunnelling */
class WoundTunnelling extends ObservationComponent {

  /**
   * Convenience getter for value (accesses this.boolean)
   */
  get value() {
    return this.boolean;
  }

  /**
   * Convenience setter for value (sets this.boolean)
   */
  set value(val) {
    this.boolean = val;
  }

  /**
   * Getter for boolean
   */
  get boolean() {
    return this._boolean;
  }

  /**
   * Setter for boolean
   */
  set boolean(booleanVal) {
    this._boolean = booleanVal;
  }

  /**
   * Getter for shr.core.ClockDirection
   */
  get clockDirection() {
    return this._clockDirection;
  }

  /**
   * Setter for shr.core.ClockDirection
   */
  set clockDirection(clockDirectionVal) {
    this._clockDirection = clockDirectionVal;
  }

  /**
   * Getter for shr.core.Length
   */
  get length() {
    return this._length;
  }

  /**
   * Setter for shr.core.Length
   */
  set length(lengthVal) {
    this._length = lengthVal;
  }

}

export default WoundTunnelling;
