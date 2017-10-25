import Panel from '../observation/Panel';

/** Generated from SHR definition for shr.environment.EnvironmentalExposures */
class EnvironmentalExposures extends Panel {

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
   * Getter for Reference<shr.environment.AnimalExposure>[]
   */
  get animalExposure() {
    return this._animalExposure;
  }

  /**
   * Setter for Reference<shr.environment.AnimalExposure>[]
   */
  set animalExposure(animalExposureVal) {
    this._animalExposure = animalExposureVal;
  }

}

export default EnvironmentalExposures;
