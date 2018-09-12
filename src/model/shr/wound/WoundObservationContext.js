import { setPropertiesFromJSON } from '../../json-helper';

import ObservationContext from '../../cimi/context/ObservationContext';

/**
 * Generated class for shr.wound.WoundObservationContext.
 * @extends ObservationContext
 */
class WoundObservationContext extends ObservationContext {

  /**
   * Get the WoundAssessmentInterpretation.
   * @returns {WoundAssessmentInterpretation} The shr.wound.WoundAssessmentInterpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Set the WoundAssessmentInterpretation.
   * @param {WoundAssessmentInterpretation} interpretation - The shr.wound.WoundAssessmentInterpretation
   */
  set interpretation(interpretation) {
    this._interpretation = interpretation;
  }

  /**
   * Set the WoundAssessmentInterpretation and return 'this' for chaining.
   * @param {WoundAssessmentInterpretation} interpretation - The shr.wound.WoundAssessmentInterpretation
   * @returns {WoundObservationContext} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
  }

  /**
   * Get the ResultValue.
   * @returns {ResultValue} The cimi.context.ResultValue
   */
  get resultValue() {
    return this._resultValue;
  }

  /**
   * Set the ResultValue.
   * @param {ResultValue} resultValue - The cimi.context.ResultValue
   */
  set resultValue(resultValue) {
    this._resultValue = resultValue;
  }

  /**
   * Set the ResultValue and return 'this' for chaining.
   * @param {ResultValue} resultValue - The cimi.context.ResultValue
   * @returns {WoundObservationContext} this.
   */
  withResultValue(resultValue) {
    this.resultValue = resultValue; return this;
  }

  /**
   * Get the ExceptionValue.
   * @returns {ExceptionValue} The cimi.context.ExceptionValue
   */
  get exceptionValue() {
    return this._exceptionValue;
  }

  /**
   * Set the ExceptionValue.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   */
  set exceptionValue(exceptionValue) {
    this._exceptionValue = exceptionValue;
  }

  /**
   * Set the ExceptionValue and return 'this' for chaining.
   * @param {ExceptionValue} exceptionValue - The cimi.context.ExceptionValue
   * @returns {WoundObservationContext} this.
   */
  withExceptionValue(exceptionValue) {
    this.exceptionValue = exceptionValue; return this;
  }

  /**
   * Get the WoundTrend.
   * @returns {WoundTrend} The shr.wound.WoundTrend
   */
  get deltaFlag() {
    return this._deltaFlag;
  }

  /**
   * Set the WoundTrend.
   * @param {WoundTrend} deltaFlag - The shr.wound.WoundTrend
   */
  set deltaFlag(deltaFlag) {
    this._deltaFlag = deltaFlag;
  }

  /**
   * Set the WoundTrend and return 'this' for chaining.
   * @param {WoundTrend} deltaFlag - The shr.wound.WoundTrend
   * @returns {WoundObservationContext} this.
   */
  withDeltaFlag(deltaFlag) {
    this.deltaFlag = deltaFlag; return this;
  }

  /**
   * Deserializes JSON data to an instance of the WoundObservationContext class.
   * The JSON must be valid against the WoundObservationContext JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundObservationContext} An instance of WoundObservationContext populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new WoundObservationContext();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the WoundObservationContext class to a JSON object.
   * The JSON is expected to be valid against the WoundObservationContext JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/wound/WoundObservationContext' } };
    if (this.contextCode != null) {
      inst['ContextCode'] = typeof this.contextCode.toJSON === 'function' ? this.contextCode.toJSON() : this.contextCode;
    }
    if (this.encounter != null) {
      inst['Encounter'] = typeof this.encounter.toJSON === 'function' ? this.encounter.toJSON() : this.encounter;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.relevantTime != null) {
      inst['RelevantTime'] = typeof this.relevantTime.toJSON === 'function' ? this.relevantTime.toJSON() : this.relevantTime;
    }
    if (this.resultValue != null) {
      inst['ResultValue'] = typeof this.resultValue.toJSON === 'function' ? this.resultValue.toJSON() : this.resultValue;
    }
    if (this.exceptionValue != null) {
      inst['ExceptionValue'] = typeof this.exceptionValue.toJSON === 'function' ? this.exceptionValue.toJSON() : this.exceptionValue;
    }
    if (this.deltaFlag != null) {
      inst['DeltaFlag'] = typeof this.deltaFlag.toJSON === 'function' ? this.deltaFlag.toJSON() : this.deltaFlag;
    }
    if (this.issued != null) {
      inst['Issued'] = typeof this.issued.toJSON === 'function' ? this.issued.toJSON() : this.issued;
    }
    if (this.observer != null) {
      inst['Observer'] = this.observer.map(f => f.toJSON());
    }
    return inst;
  }
}
export default WoundObservationContext;
