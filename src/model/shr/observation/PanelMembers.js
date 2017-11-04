import Reference from '../../Reference';

/** Generated from SHR definition for shr.observation.PanelMembers */
class PanelMembers {
    constructor(json) {
        this.observation = json.observation.map((o) => new Reference(o.shrId, o.entryId, o.entryType));
        this._observation = this.observation;
    }

  /**
   * Convenience getter for value (accesses this.observation)
   */
  get value() {
    return this.observation;
  }

  /**
   * Convenience setter for value (sets this.observation)
   */
  set value(val) {
    this.observation = val;
  }

  /**
   * Getter for Reference<shr.observation.Observation>[]
   */
  get observation() {
    return this._observation;
  }

  /**
   * Setter for Reference<shr.observation.Observation>[]
   */
  set observation(observationVal) {
    this._observation = observationVal;
  }

}

export default PanelMembers;
