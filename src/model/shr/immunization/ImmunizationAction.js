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
   * @param {Vaccine} vaccine - The shr.immunization.Vaccine
   */
  set vaccine(vaccine) {
    this._vaccine = vaccine;
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
}
export default ImmunizationAction;
