/** Generated from SHR definition for shr.base.AssociatedEncounter */
class AssociatedEncounter {

  /**
   * Convenience getter for value (accesses this.encounter)
   */
  get value() {
    return this.encounter;
  }

  /**
   * Convenience setter for value (sets this.encounter)
   */
  set value(val) {
    this.encounter = val;
  }

  /**
   * Getter for Reference<shr.encounter.Encounter>
   */
  get encounter() {
    return this._encounter;
  }

  /**
   * Setter for Reference<shr.encounter.Encounter>
   */
  set encounter(encounterVal) {
    this._encounter = encounterVal;
  }

}

export default AssociatedEncounter;
