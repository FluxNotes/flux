import Observation from '../observation/Observation';

/** Generated from SHR definition for shr.environment.ExposureToSubstance */
class ExposureToSubstance extends Observation {

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
   * Getter for shr.core.Substance
   */
  get substance() {
    return this._substance;
  }

  /**
   * Setter for shr.core.Substance
   */
  set substance(substanceVal) {
    this._substance = substanceVal;
  }

  /**
   * Getter for shr.base.Category
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.environment.ExposureSourceOrVector[]
   */
  get exposureSourceOrVector() {
    return this._exposureSourceOrVector;
  }

  /**
   * Setter for shr.environment.ExposureSourceOrVector[]
   */
  set exposureSourceOrVector(exposureSourceOrVectorVal) {
    this._exposureSourceOrVector = exposureSourceOrVectorVal;
  }

  // Ommitting getter/setter for field: TBD<AmountOrDosage>

  /**
   * Getter for shr.environment.ExposureReason
   */
  get exposureReason() {
    return this._exposureReason;
  }

  /**
   * Setter for shr.environment.ExposureReason
   */
  set exposureReason(exposureReasonVal) {
    this._exposureReason = exposureReasonVal;
  }

  /**
   * Getter for shr.environment.ExposureMethod
   */
  get exposureMethod() {
    return this._exposureMethod;
  }

  /**
   * Setter for shr.environment.ExposureMethod
   */
  set exposureMethod(exposureMethodVal) {
    this._exposureMethod = exposureMethodVal;
  }

  /**
   * Getter for shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Setter for shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBodyVal) {
    this._routeIntoBody = routeIntoBodyVal;
  }

  /**
   * Getter for shr.lab.Test[]
   */
  get test() {
    return this._test;
  }

  /**
   * Setter for shr.lab.Test[]
   */
  set test(testVal) {
    this._test = testVal;
  }

  // Ommitting getter/setter for field: TBD<Impact>[]

}

export default ExposureToSubstance;
