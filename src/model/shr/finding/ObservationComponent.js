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
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity and return 'this' for chaining.
   * @param {(Quantity|CodeableConcept|string|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   * @returns {ObservationComponent} this.
   */
  withValue(value) {
    this.value = value; return this;
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
   * Set the ValueAbsentReason and return 'this' for chaining.
   * @param {ValueAbsentReason} valueAbsentReason - The shr.finding.ValueAbsentReason
   * @returns {ObservationComponent} this.
   */
  withValueAbsentReason(valueAbsentReason) {
    this.valueAbsentReason = valueAbsentReason; return this;
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
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {ObservationComponent} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
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
   * Set the Interpretation and return 'this' for chaining.
   * @param {Interpretation} interpretation - The shr.finding.Interpretation
   * @returns {ObservationComponent} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
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
   * Set the ReferenceRange array and return 'this' for chaining.
   * @param {Array<ReferenceRange>} referenceRange - The shr.finding.ReferenceRange array
   * @returns {ObservationComponent} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
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
  /**
   * Serializes an instance of the ObservationComponent class to a JSON object.
   * The JSON is expected to be valid against the ObservationComponent JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/ObservationComponent' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    return inst;
  }
}
export default ObservationComponent;
