import ObservationComponent from '../observation/ObservationComponent';

/** Generated from SHR definition for shr.skin.WoundUndermining */
class WoundUndermining extends ObservationComponent {

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

  // Ommitting getter/setter for field: TBD<WoundUnderminingLength>

}

export default WoundUndermining;
