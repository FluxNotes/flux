import VitalSign from './VitalSign';

/** Generated from SHR definition for shr.vital.BloodPressure */
class BloodPressure extends VitalSign {

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
   * Getter for shr.core.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Setter for shr.core.BodySite
   */
  set bodySite(bodySiteVal) {
    this._bodySite = bodySiteVal;
  }

  /**
   * Getter for shr.lab.TestMethod
   */
  get testMethod() {
    return this._testMethod;
  }

  /**
   * Setter for shr.lab.TestMethod
   */
  set testMethod(testMethodVal) {
    this._testMethod = testMethodVal;
  }

  /**
   * Getter for shr.observation.ObservationQualifier
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Setter for shr.observation.ObservationQualifier
   */
  set observationQualifier(observationQualifierVal) {
    this._observationQualifier = observationQualifierVal;
  }

  /**
   * Getter for shr.vital.SystolicPressure
   */
  get systolicPressure() {
    return this._systolicPressure;
  }

  /**
   * Setter for shr.vital.SystolicPressure
   */
  set systolicPressure(systolicPressureVal) {
    this._systolicPressure = systolicPressureVal;
  }

  /**
   * Getter for shr.vital.DiastolicPressure
   */
  get diastolicPressure() {
    return this._diastolicPressure;
  }

  /**
   * Setter for shr.vital.DiastolicPressure
   */
  set diastolicPressure(diastolicPressureVal) {
    this._diastolicPressure = diastolicPressureVal;
  }

  /**
   * Getter for shr.vital.HeadTiltAngle
   */
  get headTiltAngle() {
    return this._headTiltAngle;
  }

  /**
   * Setter for shr.vital.HeadTiltAngle
   */
  set headTiltAngle(headTiltAngleVal) {
    this._headTiltAngle = headTiltAngleVal;
  }

}

export default BloodPressure;
