import { setPropertiesFromJSON } from '../../json-helper';

/**
 * Generated class for shr.finding.ObservationComponent.
 */
class ObservationComponent {

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @returns {(Quantity|CodeableConcept|string|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Get the ValueAbsentReason.
   * @returns {ValueAbsentReason} The shr.finding.ValueAbsentReason
   */
  get valueAbsentReason() {
    return this._valueAbsentReason;
  }

  /**
   * Set the ValueAbsentReason.
   * @param {ValueAbsentReason} valueAbsentReason - The shr.finding.ValueAbsentReason
   */
  set valueAbsentReason(valueAbsentReason) {
    this._valueAbsentReason = valueAbsentReason;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Get the Interpretation.
   * @returns {Interpretation} The shr.finding.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Set the Interpretation.
   * @param {Interpretation} interpretation - The shr.finding.Interpretation
   */
  set interpretation(interpretation) {
    this._interpretation = interpretation;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The shr.finding.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The shr.finding.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Deserializes JSON data to an instance of the ObservationComponent class.
   * The JSON must be valid against the ObservationComponent JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ObservationComponent} An instance of ObservationComponent populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ObservationComponent();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default ObservationComponent;
