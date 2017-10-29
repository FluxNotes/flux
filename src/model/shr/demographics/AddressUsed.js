import Address from '../core/Address';
import AddressUse from './AddressUse';
import EffectiveTimePeriod from '../core/EffectiveTimePeriod';
import Setting from '../core/Setting';

/** Generated from SHR definition for shr.demographics.AddressUsed */
class AddressUsed {
    constructor(json) {
        if (json) {
            this._address = new Address(json.value);
            this.address = this._address;
            if (json.addressUse) this._addressUse = json.addressUse.map((a) => new AddressUse(a));
            if (json.setting) this._setting = json.setting.map((s) => new Setting(s));
            if (json.effectiveTimePeriod) this._effectiveTimePeriod = new EffectiveTimePeriod(json.effectiveTimePeriod);
        }
    }

  /**
   * Convenience getter for value (accesses this.address)
   */
  get value() {
    return this.address;
  }

  /**
   * Convenience setter for value (sets this.address)
   */
  set value(val) {
    this.address = val;
  }

  /**
   * Getter for shr.core.Address
   */
  get address() {
    return this._address;
  }

  /**
   * Setter for shr.core.Address
   */
  set address(addressVal) {
    this._address = addressVal;
  }

  /**
   * Getter for shr.demographics.AddressUse[]
   */
  get addressUse() {
    return this._addressUse;
  }

  /**
   * Setter for shr.demographics.AddressUse[]
   */
  set addressUse(addressUseVal) {
    this._addressUse = addressUseVal;
  }

  /**
   * Getter for shr.core.Setting[]
   */
  get setting() {
    return this._setting;
  }

  /**
   * Setter for shr.core.Setting[]
   */
  set setting(settingVal) {
    this._setting = settingVal;
  }

  /**
   * Getter for shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Setter for shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriodVal) {
    this._effectiveTimePeriod = effectiveTimePeriodVal;
  }

}

export default AddressUsed;
