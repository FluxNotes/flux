import { setPropertiesFromJSON, uuid } from '../../json-helper';

/**
 * Generated class for shr.core.RecurrencePattern.
 */
class RecurrencePattern {

  /**
   * Get the RecurrenceInterval.
   * @returns {RecurrenceInterval} The shr.core.RecurrenceInterval
   */
  get recurrenceInterval() {
    return this._recurrenceInterval;
  }

  /**
   * Set the RecurrenceInterval.
   * @param {RecurrenceInterval} recurrenceInterval - The shr.core.RecurrenceInterval
   */
  set recurrenceInterval(recurrenceInterval) {
    this._recurrenceInterval = recurrenceInterval;
  }

  /**
   * Set the RecurrenceInterval and return 'this' for chaining.
   * @param {RecurrenceInterval} recurrenceInterval - The shr.core.RecurrenceInterval
   * @returns {RecurrencePattern} this.
   */
  withRecurrenceInterval(recurrenceInterval) {
    this.recurrenceInterval = recurrenceInterval; return this;
  }

  /**
   * Get the DayOfWeek array.
   * @returns {Array<DayOfWeek>} The shr.core.DayOfWeek array
   */
  get dayOfWeek() {
    return this._dayOfWeek;
  }

  /**
   * Set the DayOfWeek array.
   * @param {Array<DayOfWeek>} dayOfWeek - The shr.core.DayOfWeek array
   */
  set dayOfWeek(dayOfWeek) {
    this._dayOfWeek = dayOfWeek;
  }

  /**
   * Set the DayOfWeek array and return 'this' for chaining.
   * @param {Array<DayOfWeek>} dayOfWeek - The shr.core.DayOfWeek array
   * @returns {RecurrencePattern} this.
   */
  withDayOfWeek(dayOfWeek) {
    this.dayOfWeek = dayOfWeek; return this;
  }

  /**
   * Get the TimeOfDay array.
   * @returns {Array<TimeOfDay>} The shr.core.TimeOfDay array
   */
  get timeOfDay() {
    return this._timeOfDay;
  }

  /**
   * Set the TimeOfDay array.
   * @param {Array<TimeOfDay>} timeOfDay - The shr.core.TimeOfDay array
   */
  set timeOfDay(timeOfDay) {
    this._timeOfDay = timeOfDay;
  }

  /**
   * Set the TimeOfDay array and return 'this' for chaining.
   * @param {Array<TimeOfDay>} timeOfDay - The shr.core.TimeOfDay array
   * @returns {RecurrencePattern} this.
   */
  withTimeOfDay(timeOfDay) {
    this.timeOfDay = timeOfDay; return this;
  }

  /**
   * Get the DailyLifeEvent array.
   * @returns {Array<DailyLifeEvent>} The shr.core.DailyLifeEvent array
   */
  get dailyLifeEvent() {
    return this._dailyLifeEvent;
  }

  /**
   * Set the DailyLifeEvent array.
   * @param {Array<DailyLifeEvent>} dailyLifeEvent - The shr.core.DailyLifeEvent array
   */
  set dailyLifeEvent(dailyLifeEvent) {
    this._dailyLifeEvent = dailyLifeEvent;
  }

  /**
   * Set the DailyLifeEvent array and return 'this' for chaining.
   * @param {Array<DailyLifeEvent>} dailyLifeEvent - The shr.core.DailyLifeEvent array
   * @returns {RecurrencePattern} this.
   */
  withDailyLifeEvent(dailyLifeEvent) {
    this.dailyLifeEvent = dailyLifeEvent; return this;
  }

  /**
   * Get the LifeEventOffset.
   * @returns {LifeEventOffset} The shr.core.LifeEventOffset
   */
  get lifeEventOffset() {
    return this._lifeEventOffset;
  }

  /**
   * Set the LifeEventOffset.
   * @param {LifeEventOffset} lifeEventOffset - The shr.core.LifeEventOffset
   */
  set lifeEventOffset(lifeEventOffset) {
    this._lifeEventOffset = lifeEventOffset;
  }

  /**
   * Set the LifeEventOffset and return 'this' for chaining.
   * @param {LifeEventOffset} lifeEventOffset - The shr.core.LifeEventOffset
   * @returns {RecurrencePattern} this.
   */
  withLifeEventOffset(lifeEventOffset) {
    this.lifeEventOffset = lifeEventOffset; return this;
  }

  /**
   * Get the CountPerInterval.
   * @returns {CountPerInterval} The shr.core.CountPerInterval
   */
  get countPerInterval() {
    return this._countPerInterval;
  }

  /**
   * Set the CountPerInterval.
   * @param {CountPerInterval} countPerInterval - The shr.core.CountPerInterval
   */
  set countPerInterval(countPerInterval) {
    this._countPerInterval = countPerInterval;
  }

  /**
   * Set the CountPerInterval and return 'this' for chaining.
   * @param {CountPerInterval} countPerInterval - The shr.core.CountPerInterval
   * @returns {RecurrencePattern} this.
   */
  withCountPerInterval(countPerInterval) {
    this.countPerInterval = countPerInterval; return this;
  }

  /**
   * Deserializes JSON data to an instance of the RecurrencePattern class.
   * The JSON must be valid against the RecurrencePattern JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {RecurrencePattern} An instance of RecurrencePattern populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new RecurrencePattern();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the RecurrencePattern class to a JSON object.
   * The JSON is expected to be valid against the RecurrencePattern JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/RecurrencePattern' } };
    if (this.recurrenceInterval != null) {
      inst['RecurrenceInterval'] = typeof this.recurrenceInterval.toJSON === 'function' ? this.recurrenceInterval.toJSON() : this.recurrenceInterval;
    }
    if (this.dayOfWeek != null) {
      inst['DayOfWeek'] = this.dayOfWeek.map(f => f.toJSON());
    }
    if (this.timeOfDay != null) {
      inst['TimeOfDay'] = this.timeOfDay.map(f => f.toJSON());
    }
    if (this.dailyLifeEvent != null) {
      inst['DailyLifeEvent'] = this.dailyLifeEvent.map(f => f.toJSON());
    }
    if (this.lifeEventOffset != null) {
      inst['LifeEventOffset'] = typeof this.lifeEventOffset.toJSON === 'function' ? this.lifeEventOffset.toJSON() : this.lifeEventOffset;
    }
    if (this.countPerInterval != null) {
      inst['CountPerInterval'] = typeof this.countPerInterval.toJSON === 'function' ? this.countPerInterval.toJSON() : this.countPerInterval;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the RecurrencePattern class.
   * The FHIR must be valid against the RecurrencePattern FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {RecurrencePattern} An instance of RecurrencePattern populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new RecurrencePattern();
    return inst;
  }

}
export default RecurrencePattern;
