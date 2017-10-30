import Condition from '../condition/Condition';

/** Generated from SHR definition for shr.skin.PressureUlcer */
class PressureUlcer extends Condition {

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
   * Getter for shr.core.SpecificType
   */
  get specificType() {
    return this._specificType;
  }

  /**
   * Setter for shr.core.SpecificType
   */
  set specificType(specificTypeVal) {
    this._specificType = specificTypeVal;
  }

  /**
   * Getter for shr.core.BodySite[]
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite[]
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

  /**
   * Getter for shr.observation.Manifestation[]
   */
  get manifestation() {
    return this._manifestation;
  }

  /**
   * Setter for shr.observation.Manifestation[]
   */
  set manifestation(manifestationVal) {
    this._manifestation = manifestationVal;
  }

  /**
   * Getter for shr.skin.CausativeFactor[]
   */
  get causativeFactor() {
    return this._causativeFactor;
  }

  /**
   * Setter for shr.skin.CausativeFactor[]
   */
  set causativeFactor(causativeFactorVal) {
    this._causativeFactor = causativeFactorVal;
  }

  // Ommitting getter/setter for field: TBD<PressureUlcerIntervention>[]

}

export default PressureUlcer;
