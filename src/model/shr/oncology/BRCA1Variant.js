import { setPropertiesFromJSON } from '../../json-helper';

import GeneticVariant from './GeneticVariant';

/**
 * Generated class for shr.oncology.BRCA1Variant.
 * @extends GeneticVariant
 */
class BRCA1Variant extends GeneticVariant {

  /**
   * Get the FocalSubject.
   * @returns {FocalSubject} The shr.finding.FocalSubject
   */
  get focalSubject() {
    return this._focalSubject;
  }

  /**
   * Set the FocalSubject.
   * @param {FocalSubject} focalSubject - The shr.finding.FocalSubject
   */
  set focalSubject(focalSubject) {
    this._focalSubject = focalSubject;
  }

  /**
   * Deserializes JSON data to an instance of the BRCA1Variant class.
   * The JSON must be valid against the BRCA1Variant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BRCA1Variant} An instance of BRCA1Variant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BRCA1Variant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BRCA1Variant;
