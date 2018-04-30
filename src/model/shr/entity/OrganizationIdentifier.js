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
  /**
   * Serializes an instance of the OrganizationIdentifier class to a JSON object.
   * The JSON is expected to be valid against the OrganizationIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/OrganizationIdentifier' } };
    if (this.value != null) {
      inst['Value'] = this.value;
    }
    if (this.purpose != null) {
      inst['Purpose'] = typeof this.purpose.toJSON === 'function' ? this.purpose.toJSON() : this.purpose;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.effectiveTimePeriod != null) {
      inst['EffectiveTimePeriod'] = typeof this.effectiveTimePeriod.toJSON === 'function' ? this.effectiveTimePeriod.toJSON() : this.effectiveTimePeriod;
    }
    if (this.issuer != null) {
      inst['Issuer'] = typeof this.issuer.toJSON === 'function' ? this.issuer.toJSON() : this.issuer;
    }
    return inst;
  }
}
export default OrganizationIdentifier;
