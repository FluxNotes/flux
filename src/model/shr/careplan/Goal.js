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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {Goal} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Set the Subject and return 'this' for chaining.
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {Goal} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
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
   * Set the Title and return 'this' for chaining.
   * @param {Title} title - The shr.core.Title
   * @returns {Goal} this.
   */
  withTitle(title) {
    this.title = title; return this;
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
   * This field/value is required.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Set the Details and return 'this' for chaining.
   * This field/value is required.
   * @param {Details} details - The shr.core.Details
   * @returns {Goal} this.
   */
  withDetails(details) {
    this.details = details; return this;
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
   * Set the Reason array and return 'this' for chaining.
   * @param {Array<Reason>} reason - The shr.core.Reason array
   * @returns {Goal} this.
   */
  withReason(reason) {
    this.reason = reason; return this;
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
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {Goal} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * Set the ExpectedPerformanceTime and return 'this' for chaining.
   * @param {ExpectedPerformanceTime} expectedPerformanceTime - The shr.action.ExpectedPerformanceTime
   * @returns {Goal} this.
   */
  withExpectedPerformanceTime(expectedPerformanceTime) {
    this.expectedPerformanceTime = expectedPerformanceTime; return this;
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
   * Set the OccurrenceTimeOrPeriod and return 'this' for chaining.
   * @param {OccurrenceTimeOrPeriod} occurrenceTimeOrPeriod - The shr.core.OccurrenceTimeOrPeriod
   * @returns {Goal} this.
   */
  withOccurrenceTimeOrPeriod(occurrenceTimeOrPeriod) {
    this.occurrenceTimeOrPeriod = occurrenceTimeOrPeriod; return this;
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
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * This field/value is required.
   * @param {Status} status - The shr.action.Status
   * @returns {Goal} this.
   */
  withStatus(status) {
    this.status = status; return this;
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
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   * @returns {Goal} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
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
   * Set the PlannedActivities array and return 'this' for chaining.
   * @param {Array<PlannedActivities>} plannedActivities - The shr.careplan.PlannedActivities array
   * @returns {Goal} this.
   */
  withPlannedActivities(plannedActivities) {
    this.plannedActivities = plannedActivities; return this;
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
   * Set the ActualActivities array and return 'this' for chaining.
   * @param {Array<ActualActivities>} actualActivities - The shr.careplan.ActualActivities array
   * @returns {Goal} this.
   */
  withActualActivities(actualActivities) {
    this.actualActivities = actualActivities; return this;
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
   * Set the Goal array and return 'this' for chaining.
   * @param {Array<Goal>} goal - The shr.careplan.Goal array
   * @returns {Goal} this.
   */
  withGoal(goal) {
    this.goal = goal; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Goal class.
   * The JSON must be valid against the Goal JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Goal} An instance of Goal populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Goal();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Goal class to a JSON object.
   * The JSON is expected to be valid against the Goal JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/careplan/Goal' };
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.title != null) {
      inst['Title'] = typeof this.title.toJSON === 'function' ? this.title.toJSON() : this.title;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.reason != null) {
      inst['Reason'] = this.reason.map(f => f.toJSON());
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.expectedPerformanceTime != null) {
      inst['ExpectedPerformanceTime'] = typeof this.expectedPerformanceTime.toJSON === 'function' ? this.expectedPerformanceTime.toJSON() : this.expectedPerformanceTime;
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['OccurrenceTimeOrPeriod'] = typeof this.occurrenceTimeOrPeriod.toJSON === 'function' ? this.occurrenceTimeOrPeriod.toJSON() : this.occurrenceTimeOrPeriod;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.plannedActivities != null) {
      inst['PlannedActivities'] = this.plannedActivities.map(f => f.toJSON());
    }
    if (this.actualActivities != null) {
      inst['ActualActivities'] = this.actualActivities.map(f => f.toJSON());
    }
    if (this.goal != null) {
      inst['Goal'] = this.goal.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the Goal class to a FHIR object.
   * The FHIR is expected to be valid against the Goal FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.subject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.subject.toFHIR(true));
    }
    if (this.title != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.title.toFHIR(true));
    }
    if (this.details != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
    }
    if (this.reason != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.reason.toFHIR(true));
    }
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.expectedPerformanceTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.expectedPerformanceTime.toFHIR(true));
    }
    if (this.occurrenceTimeOrPeriod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.occurrenceTimeOrPeriod.toFHIR(true));
    }
    if (this.status != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.status.toFHIR(true));
    }
    if (this.annotation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.annotation.toFHIR(true));
    }
    if (this.plannedActivities != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.plannedActivities.toFHIR(true));
    }
    if (this.actualActivities != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actualActivities.toFHIR(true));
    }
    if (this.goal != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.goal.toFHIR(true));
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-careplan-Goal-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default Goal;
