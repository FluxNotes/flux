import { setPropertiesFromJSON } from '../../json-helper';

import Identifier from '../core/Identifier';

/**
 * Generated class for shr.entity.OrganizationIdentifier.
 * @extends Identifier
 */
class OrganizationIdentifier extends Identifier {

  /**
   * Deserializes JSON data to an instance of the OrganizationIdentifier class.
   * The JSON must be valid against the OrganizationIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OrganizationIdentifier} An instance of OrganizationIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OrganizationIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OrganizationIdentifier;
