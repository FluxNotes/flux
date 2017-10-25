/** Generated from SHR definition for shr.observation.ObservationComponent */
class ObservationComponent {

  /**
   * Getter for choice value
   * - shr.core.Quantity
   * - shr.core.CodeableConcept
   * - string
   * - boolean
   * - shr.core.Range
   * - shr.core.Ratio
   * - time
   * - dateTime
   * - shr.core.TimePeriod
   */
  get value() {
    return this._value;
  }

  /**
   * Setter for choice value
   * - shr.core.Quantity
   * - shr.core.CodeableConcept
   * - string
   * - boolean
   * - shr.core.Range
   * - shr.core.Ratio
   * - time
   * - dateTime
   * - shr.core.TimePeriod
   */
  set value(val) {
    this._value = val;
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
   * Getter for shr.observation.DataAbsentReason
   */
  get dataAbsentReason() {
    return this._dataAbsentReason;
  }

  /**
   * Setter for shr.observation.DataAbsentReason
   */
  set dataAbsentReason(dataAbsentReasonVal) {
    this._dataAbsentReason = dataAbsentReasonVal;
  }

  /**
   * Getter for shr.lab.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Setter for shr.lab.Interpretation
   */
  set interpretation(interpretationVal) {
    this._interpretation = interpretationVal;
  }

  /**
   * Getter for shr.observation.ReferenceRange[]
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Setter for shr.observation.ReferenceRange[]
   */
  set referenceRange(referenceRangeVal) {
    this._referenceRange = referenceRangeVal;
  }

}

export default ObservationComponent;
