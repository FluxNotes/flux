import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.immunization.ImmunizationAction.
 * @extends Action
 */
class ImmunizationAction extends Action {

  /**
   * Get the Vaccine.
   * @returns {Vaccine} The shr.immunization.Vaccine
   */
  get vaccine() {
    return this._vaccine;
  }

  /**
   * Set the Vaccine.
   * This field/value is required.
   * @param {Vaccine} vaccine - The shr.immunization.Vaccine
   */
  set vaccine(vaccine) {
    this._vaccine = vaccine;
  }

  /**
   * Set the Vaccine and return 'this' for chaining.
   * This field/value is required.
   * @param {Vaccine} vaccine - The shr.immunization.Vaccine
   * @returns {ImmunizationAction} this.
   */
  withVaccine(vaccine) {
    this.vaccine = vaccine; return this;
  }

  /**
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite and return 'this' for chaining.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   * @returns {ImmunizationAction} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Get the RouteIntoBody.
   * @returns {RouteIntoBody} The shr.medication.RouteIntoBody
   */
  get routeIntoBody() {
    return this._routeIntoBody;
  }

  /**
   * Set the RouteIntoBody.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   */
  set routeIntoBody(routeIntoBody) {
    this._routeIntoBody = routeIntoBody;
  }

  /**
   * Set the RouteIntoBody and return 'this' for chaining.
   * @param {RouteIntoBody} routeIntoBody - The shr.medication.RouteIntoBody
   * @returns {ImmunizationAction} this.
   */
  withRouteIntoBody(routeIntoBody) {
    this.routeIntoBody = routeIntoBody; return this;
  }

  /**
   * Get the DoseAmount.
   * @returns {DoseAmount} The shr.medication.DoseAmount
   */
  get doseAmount() {
    return this._doseAmount;
  }

  /**
   * Set the DoseAmount.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   */
  set doseAmount(doseAmount) {
    this._doseAmount = doseAmount;
  }

  /**
   * Set the DoseAmount and return 'this' for chaining.
   * @param {DoseAmount} doseAmount - The shr.medication.DoseAmount
   * @returns {ImmunizationAction} this.
   */
  withDoseAmount(doseAmount) {
    this.doseAmount = doseAmount; return this;
  }

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Get the Outcome array.
   * @returns {Array<Outcome>} The shr.action.Outcome array
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome array.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome array and return 'this' for chaining.
   * @param {Array<Outcome>} outcome - The shr.action.Outcome array
   * @returns {ImmunizationAction} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImmunizationAction class.
   * The JSON must be valid against the ImmunizationAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationAction} An instance of ImmunizationAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ImmunizationAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ImmunizationAction class to a JSON object.
   * The JSON is expected to be valid against the ImmunizationAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/immunization/ImmunizationAction' } };
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
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.vaccine != null) {
      inst['Vaccine'] = typeof this.vaccine.toJSON === 'function' ? this.vaccine.toJSON() : this.vaccine;
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    if (this.doseAmount != null) {
      inst['DoseAmount'] = typeof this.doseAmount.toJSON === 'function' ? this.doseAmount.toJSON() : this.doseAmount;
    }
    if (this.outcome != null) {
      inst['Outcome'] = this.outcome.map(f => f.toJSON());
    }
    return inst;
  }
}
export default ImmunizationAction;
