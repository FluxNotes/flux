import Encounter from '../shr/encounter/Encounter';

export default class EncounterFix extends Encounter {
  toJSON() {
    if (!this._entryInfo) {
      // just a quick wrapper to ensure this._entryInfo.toJSON() is defined and returns an object
      this._entryInfo = { toJSON: () => ({}) };
    }
    return super.toJSON();
  }
}