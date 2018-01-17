import { setPropertiesFromJSON } from '../../json-helper';

import Identifier from '../core/Identifier';

/**
 * Generated class for shr.entity.NationalProviderIdentifier.
 * @extends Identifier
 */
class NationalProviderIdentifier extends Identifier {

  /**
   * Deserializes JSON data to an instance of the NationalProviderIdentifier class.
   * The JSON must be valid against the NationalProviderIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {NationalProviderIdentifier} An instance of NationalProviderIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new NationalProviderIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default NationalProviderIdentifier;
