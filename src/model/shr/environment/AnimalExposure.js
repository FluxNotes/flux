import ExposureToSubstance from './ExposureToSubstance';

/** Generated from SHR definition for shr.environment.AnimalExposure */
class AnimalExposure extends ExposureToSubstance {

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
   * Getter for shr.environment.ExposureSourceOrVector
   */
  get exposureSourceOrVector() {
    return this._exposureSourceOrVector;
  }

  /**
   * Setter for shr.environment.ExposureSourceOrVector
   */
  set exposureSourceOrVector(exposureSourceOrVectorVal) {
    this._exposureSourceOrVector = exposureSourceOrVectorVal;
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

}

export default AnimalExposure;
