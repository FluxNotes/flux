import { setPropertiesFromJSON } from '../../json-helper';

import Identifier from './Identifier';

/**
 * Generated class for shr.core.OrganizationalIdentifier.
 * @extends Identifier
 */
class OrganizationalIdentifier extends Identifier {

  /**
   * Get the TimePeriod.
   * @returns {TimePeriod} The shr.core.TimePeriod
   */
  get timePeriod() {
    return this._timePeriod;
  }

  /**
   * Set the TimePeriod.
   * @param {TimePeriod} timePeriod - The shr.core.TimePeriod
   */
  set timePeriod(timePeriod) {
    this._timePeriod = timePeriod;
  }

  /**
   * Get the Organization.
   * @returns {Organization} The shr.entity.Organization
   */
  get organization() {
    return this._organization;
  }

  /**
   * Set the Organization.
   * @param {Organization} organization - The shr.entity.Organization
   */
  set organization(organization) {
    this._organization = organization;
  }

  /**
   * Deserializes JSON data to an instance of the OrganizationalIdentifier class.
   * The JSON must be valid against the OrganizationalIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {OrganizationalIdentifier} An instance of OrganizationalIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new OrganizationalIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default OrganizationalIdentifier;
