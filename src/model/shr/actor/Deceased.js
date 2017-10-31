import AgeAtDeath from './AgeAtDeath';

/** Generated from SHR definition for shr.actor.Deceased */
class Deceased {
    constructor(json) {
        if (json) {
            this.boolean = json.value;
            this._boolean = this.boolean;
            if (json.dateOfDeath) this._dateOfDeath = json.dateOfDeath;
            if (json.ageAtDeath) this._ageAtDeath = new AgeAtDeath(json.ageAtDeath);
        }
    }

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
   * Getter for shr.actor.DateOfDeath
   */
  get dateOfDeath() {
    return this._dateOfDeath;
  }

  /**
   * Setter for shr.actor.DateOfDeath
   */
  set dateOfDeath(dateOfDeathVal) {
    this._dateOfDeath = dateOfDeathVal;
  }

  /**
   * Getter for shr.actor.AgeAtDeath
   */
  get ageAtDeath() {
    return this._ageAtDeath;
  }

  /**
   * Setter for shr.actor.AgeAtDeath
   */
  set ageAtDeath(ageAtDeathVal) {
    this._ageAtDeath = ageAtDeathVal;
  }

}

export default Deceased;
