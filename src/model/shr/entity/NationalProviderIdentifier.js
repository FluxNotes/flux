import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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

  /**
   * Serializes an instance of the NationalProviderIdentifier class to a FHIR object.
   * The FHIR is expected to be valid against the NationalProviderIdentifier FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.purpose != null) {
      inst['use'] = typeof this.purpose.toFHIR === 'function' ? this.purpose.toFHIR() : this.purpose;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.codeSystem != null) {
      inst['system'] = typeof this.codeSystem.toFHIR === 'function' ? this.codeSystem.toFHIR() : this.codeSystem;
    }
    if (this.value != null) {
      inst['value'] = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
    }
    if (this.effectiveTimePeriod != null) {
      inst['period'] = typeof this.effectiveTimePeriod.toFHIR === 'function' ? this.effectiveTimePeriod.toFHIR() : this.effectiveTimePeriod;
    }
    if (this.issuer != null) {
      inst['assigner'] = typeof this.issuer.toFHIR === 'function' ? this.issuer.toFHIR() : this.issuer;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the NationalProviderIdentifier class.
   * The FHIR must be valid against the NationalProviderIdentifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {NationalProviderIdentifier} An instance of NationalProviderIdentifier populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new NationalProviderIdentifier();
    if (fhir['use'] != null) {
      inst.purpose = createInstanceFromFHIR('shr.core.Purpose', fhir['use']);
    }
    if (fhir['type'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['type']);
    }
    if (fhir['system'] != null) {
      inst.codeSystem = createInstanceFromFHIR('shr.core.CodeSystem', fhir['system']);
    }
    if (fhir['value'] != null) {
      inst.value = fhir['value'];
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period']);
    }
    if (fhir['assigner'] != null) {
      inst.issuer = createInstanceFromFHIR('shr.core.Issuer', fhir['assigner']);
    }
    return inst;
  }

}
export default NationalProviderIdentifier;
