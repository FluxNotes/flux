import { setPropertiesFromJSON } from '../../json-helper';

import Goal from './Goal';

/**
 * Generated class for shr.careplan.Objective.
 * @extends Goal
 */
class Objective extends Goal {

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
   * @returns {Objective} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the ResultTargeted.
   * @returns {ResultTargeted} The shr.careplan.ResultTargeted
   */
  get resultTargeted() {
    return this._resultTargeted;
  }

  /**
   * Set the ResultTargeted.
   * This field/value is required.
   * @param {ResultTargeted} resultTargeted - The shr.careplan.ResultTargeted
   */
  set resultTargeted(resultTargeted) {
    this._resultTargeted = resultTargeted;
  }

  /**
   * Set the ResultTargeted and return 'this' for chaining.
   * This field/value is required.
   * @param {ResultTargeted} resultTargeted - The shr.careplan.ResultTargeted
   * @returns {Objective} this.
   */
  withResultTargeted(resultTargeted) {
    this.resultTargeted = resultTargeted; return this;
  }

  /**
   * Get the ResultAchieved array.
   * @returns {Array<ResultAchieved>} The shr.careplan.ResultAchieved array
   */
  get resultAchieved() {
    return this._resultAchieved;
  }

  /**
   * Set the ResultAchieved array.
   * @param {Array<ResultAchieved>} resultAchieved - The shr.careplan.ResultAchieved array
   */
  set resultAchieved(resultAchieved) {
    this._resultAchieved = resultAchieved;
  }

  /**
   * Set the ResultAchieved array and return 'this' for chaining.
   * @param {Array<ResultAchieved>} resultAchieved - The shr.careplan.ResultAchieved array
   * @returns {Objective} this.
   */
  withResultAchieved(resultAchieved) {
    this.resultAchieved = resultAchieved; return this;
  }

  /**
   * Get the RelatedFinding array.
   * @returns {Array<RelatedFinding>} The shr.finding.RelatedFinding array
   */
  get relatedFinding() {
    return this._relatedFinding;
  }

  /**
   * Set the RelatedFinding array.
   * @param {Array<RelatedFinding>} relatedFinding - The shr.finding.RelatedFinding array
   */
  set relatedFinding(relatedFinding) {
    this._relatedFinding = relatedFinding;
  }

  /**
   * Set the RelatedFinding array and return 'this' for chaining.
   * @param {Array<RelatedFinding>} relatedFinding - The shr.finding.RelatedFinding array
   * @returns {Objective} this.
   */
  withRelatedFinding(relatedFinding) {
    this.relatedFinding = relatedFinding; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Objective class.
   * The JSON must be valid against the Objective JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Objective} An instance of Objective populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Objective();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Objective class to a JSON object.
   * The JSON is expected to be valid against the Objective JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/careplan/Objective' } };
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
    if (this.resultTargeted != null) {
      inst['ResultTargeted'] = typeof this.resultTargeted.toJSON === 'function' ? this.resultTargeted.toJSON() : this.resultTargeted;
    }
    if (this.resultAchieved != null) {
      inst['ResultAchieved'] = this.resultAchieved.map(f => f.toJSON());
    }
    if (this.relatedFinding != null) {
      inst['RelatedFinding'] = this.relatedFinding.map(f => f.toJSON());
    }
    return inst;
  }
}
export default Objective;
