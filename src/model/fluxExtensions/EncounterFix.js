import Encounter from '../shr/encounter/Encounter';

export default class EncounterFix extends Encounter {
  toJSON() {
    if (!this._entryInfo) {
      // just a quick wrapper to ensure this._entryInfo.toJSON() is defined and returns an object
      this._entryInfo = { toJSON: () => ({}) };

      // note for future reference: this seems to only be necessary because in v01, Encounter is not an EntryElement, but it is in v05,
      // and so the entryInfo isn't getting populated in translation via the EntryMapper
    }
    return super.toJSON();
  }
}