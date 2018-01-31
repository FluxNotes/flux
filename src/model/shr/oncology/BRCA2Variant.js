import { setPropertiesFromJSON } from '../../json-helper';

import GeneticVariant from './GeneticVariant';

/**
 * Generated class for shr.oncology.BRCA2Variant.
 * @extends GeneticVariant
 */
class BRCA2Variant extends GeneticVariant {

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
   * Deserializes JSON data to an instance of the BRCA2Variant class.
   * The JSON must be valid against the BRCA2Variant JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BRCA2Variant} An instance of BRCA2Variant populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new BRCA2Variant();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default BRCA2Variant;
