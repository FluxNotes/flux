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
  /**
   * Serializes an instance of the NationalProviderIdentifier class to a JSON object.
   * The JSON is expected to be valid against the NationalProviderIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/NationalProviderIdentifier' } };
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
export default NationalProviderIdentifier;
