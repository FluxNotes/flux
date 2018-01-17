import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.careplan.Goal.
 * @extends Entity
 */
class Goal extends Entity {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Get the Subject.
   * @returns {Subject} The shr.base.Subject
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the Subject.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Get the Title.
   * @returns {Title} The shr.core.Title
   */
  get title() {
    return this._title;
  }

  /**
   * Set the Title.
   * @param {Title} title - The shr.core.Title
   */
  set title(title) {
    this._title = title;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the Reason array.
   * @returns {Array<Reason>} The shr.core.Reason array
   */
  get reason() {
    return this._reason;
  }

  /**
   * Set the Reason array.
   * @param {Array<Reason>} reason - The shr.core.Reason array
   */
  set reason(reason) {
    this._reason = reason;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Get the ExpectedPerformanceTime.
   * @returns {ExpectedPerformanceTime} The shr.action.ExpectedPerformanceTime
   */
  get expectedPerformanceTime() {
    return this._expectedPerformanceTime;
  }

  /**
   * Set the ExpectedPerformanceTime.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.action.ExpectedPerformanceTime
   */
  set expectedPerformanceTime(expectedPerformanceTime) {
    this._expectedPerformanceTime = expectedPerformanceTime;
  }

  /**
   * Get the OccurrenceTimeOrPeriod.
   * @returns {OccurrenceTimeOrPeriod} The shr.core.OccurrenceTimeOrPeriod
   */
  get occurrenceTimeOrPeriod() {
    return this._occurrenceTimeOrPeriod;
  }

  /**
   * Set the OccurrenceTimeOrPeriod.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   */
  set occurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this._occurrenceTimeOrPeriod = occurrenceTimeOrPeriod;
  }

  /**
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Get the PlannedActivities array.
   * @returns {Array<PlannedActivities>} The shr.careplan.PlannedActivities array
   */
  get plannedActivities() {
    return this._plannedActivities;
  }

  /**
   * Set the PlannedActivities array.
   * @param {Array<PlannedActivities>} plannedActivities - The shr.careplan.PlannedActivities array
   */
  set plannedActivities(plannedActivities) {
    this._plannedActivities = plannedActivities;
  }

  /**
   * Get the ActualActivities array.
   * @returns {Array<ActualActivities>} The shr.careplan.ActualActivities array
   */
  get actualActivities() {
    return this._actualActivities;
  }

  /**
   * Set the ActualActivities array.
   * @param {Array<ActualActivities>} actualActivities - The shr.careplan.ActualActivities array
   */
  set actualActivities(actualActivities) {
    this._actualActivities = actualActivities;
  }

  /**
   * Get the Goal array.
   * @returns {Array<Goal>} The shr.careplan.Goal array
   */
  get goal() {
    return this._goal;
  }

  /**
   * Set the Goal array.
   * @param {Array<Goal>} goal - The shr.careplan.Goal array
   */
  set goal(goal) {
    this._goal = goal;
  }

  /**
   * Deserializes JSON data to an instance of the Goal class.
   * The JSON must be valid against the Goal JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Goal} An instance of Goal populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Goal();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default Goal;
