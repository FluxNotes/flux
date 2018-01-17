import { setPropertiesFromJSON } from '../../json-helper';

import Encounter from './Encounter';

/**
 * Generated class for shr.encounter.EncounterNotPerformed.
 * @extends Encounter
 */
class EncounterNotPerformed extends Encounter {

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
   * Get the NotPerformedContext.
   * @returns {NotPerformedContext} The shr.action.NotPerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the NotPerformedContext.
   * @param {NotPerformedContext} actionContext - The shr.action.NotPerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  // Ommitting getter/setter for TBD: HealthConcern

  // Ommitting getter/setter for TBD: PertinentFindings

  // Ommitting getter/setter for TBD: Diagnosis

  // Ommitting getter/setter for TBD: FullClinicalNote

  // Ommitting getter/setter for TBD: ClinicalSummary

  // Ommitting getter/setter for TBD: TreatmentServiceRendered

  // Ommitting getter/setter for TBD: CompletionStatus

  /**
   * Deserializes JSON data to an instance of the EncounterNotPerformed class.
   * The JSON must be valid against the EncounterNotPerformed JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EncounterNotPerformed} An instance of EncounterNotPerformed populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new EncounterNotPerformed();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default EncounterNotPerformed;
