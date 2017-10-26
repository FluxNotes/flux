import Condition from './Condition';
import Entry from '../base/Entry';

/** Generated from SHR definition for shr.condition.Injury */
class Injury extends Condition {
    constructor(json) {
        super(json);
        this._entryInfo = new Entry(json);
    }

  /**
   * Getter for entry information (shr.base.Entry)
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Setter for entry information (shr.base.Entry)
   */
  set entryInfo(entryVal) {
    this._entryInfo = entryVal;
  }

  /**
   * Getter for shr.core.Setting
   */
  get setting() {
    return this._setting;
  }

  /**
   * Setter for shr.core.Setting
   */
  set setting(settingVal) {
    this._setting = settingVal;
  }

  /**
   * Getter for shr.core.Location
   */
  get location() {
    return this._location;
  }

  /**
   * Setter for shr.core.Location
   */
  set location(locationVal) {
    this._location = locationVal;
  }

}

export default Injury;
