import ObservationComponent from '../observation/ObservationComponent';

/** Generated from SHR definition for shr.skin.WoundExudate */
class WoundExudate extends ObservationComponent {

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

  // Ommitting getter/setter for field: TBD<WoundExudateOdor>

  // Ommitting getter/setter for field: TBD<WoundExudateColor>

  // Ommitting getter/setter for field: TBD<DrainageAmount>

  // Ommitting getter/setter for field: TBD<WoundExudateAppearance>

}

export default WoundExudate;
