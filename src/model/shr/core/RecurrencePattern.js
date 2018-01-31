import { setPropertiesFromJSON } from '../../json-helper';

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
}
export default RecurrencePattern;
