import Category from '../base/Category';
import NonOccurrenceModifier from '../base/NonOccurrenceModifier';
import OccurrenceTime from '../core/OccurrenceTime';
import Participant from '../actor/Participant';
import Reason from '../core/Reason';
import SpecificType from '../core/SpecificType';
import Status from '../base/Status';

/** Generated from SHR definition for shr.base.Action */
class Action {
    constructor(json) {
        if (json.specificType) this._specificType = new SpecificType(json.specificType);
        this._status = new Status(json.status);
        if (json.category) this._category = json.category.map((c) => new Category(c));
        this._nonOccurrenceModifier = new NonOccurrenceModifier(json.nonOccurrenceModifier);
        if (json.reason) this._reason = json.reason.map((r) => new Reason(r));
        if (json.occurrenceTime) this._occurrenceTime = new OccurrenceTime(json.occurrenceTime);
        if (json.participant) this._participant = json.participant.map((p) => new Participant(p));
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
   * Getter for shr.base.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Setter for shr.base.Status
   */
  set status(statusVal) {
    this._status = statusVal;
  }

  /**
   * Getter for shr.base.Category[]
   */
  get category() {
    return this._category;
  }

  /**
   * Setter for shr.base.Category[]
   */
  set category(categoryVal) {
    this._category = categoryVal;
  }

  /**
   * Getter for shr.base.NonOccurrenceModifier
   */
  get nonOccurrenceModifier() {
    return this._nonOccurrenceModifier;
  }

  /**
   * Setter for shr.base.NonOccurrenceModifier
   */
  set nonOccurrenceModifier(nonOccurrenceModifierVal) {
    this._nonOccurrenceModifier = nonOccurrenceModifierVal;
  }

  /**
   * Getter for shr.core.Reason[]
   */
  get reason() {
    return this._reason;
  }

  /**
   * Setter for shr.core.Reason[]
   */
  set reason(reasonVal) {
    this._reason = reasonVal;
  }

  /**
   * Getter for shr.core.OccurrenceTime
   */
  get occurrenceTime() {
    return this._occurrenceTime;
  }

  /**
   * Setter for shr.core.OccurrenceTime
   */
  set occurrenceTime(occurrenceTimeVal) {
    this._occurrenceTime = occurrenceTimeVal;
  }

  /**
   * Getter for shr.actor.Participant[]
   */
  get participant() {
    return this._participant;
  }

  /**
   * Setter for shr.actor.Participant[]
   */
  set participant(participantVal) {
    this._participant = participantVal;
  }

}

export default Action;
