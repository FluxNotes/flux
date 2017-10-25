/** Generated from SHR definition for shr.core.HumanName */
class HumanName {

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
   * Getter for shr.core.HumanNamePrefix
   */
  get humanNamePrefix() {
    return this._humanNamePrefix;
  }

  /**
   * Setter for shr.core.HumanNamePrefix
   */
  set humanNamePrefix(humanNamePrefixVal) {
    this._humanNamePrefix = humanNamePrefixVal;
  }

  /**
   * Getter for shr.core.GivenName[]
   */
  get givenName() {
    return this._givenName;
  }

  /**
   * Setter for shr.core.GivenName[]
   */
  set givenName(givenNameVal) {
    this._givenName = givenNameVal;
  }

  /**
   * Getter for shr.core.FamilyName
   */
  get familyName() {
    return this._familyName;
  }

  /**
   * Setter for shr.core.FamilyName
   */
  set familyName(familyNameVal) {
    this._familyName = familyNameVal;
  }

  /**
   * Getter for shr.core.HumanNameSuffix[]
   */
  get humanNameSuffix() {
    return this._humanNameSuffix;
  }

  /**
   * Setter for shr.core.HumanNameSuffix[]
   */
  set humanNameSuffix(humanNameSuffixVal) {
    this._humanNameSuffix = humanNameSuffixVal;
  }

  /**
   * Getter for shr.core.HumanNameUse
   */
  get humanNameUse() {
    return this._humanNameUse;
  }

  /**
   * Setter for shr.core.HumanNameUse
   */
  set humanNameUse(humanNameUseVal) {
    this._humanNameUse = humanNameUseVal;
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

export default HumanName;
