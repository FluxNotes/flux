import { setPropertiesFromJSON, createInstanceFromFHIR } from '../json-helper';

import ObjectIdentifier from '../shr/base/ObjectIdentifier';

/**
 * Generated class for sw.WoundIdentifier.
 * @extends ObjectIdentifier
 */
class WoundIdentifier extends ObjectIdentifier {

  /**
   * Deserializes JSON data to an instance of the WoundIdentifier class.
   * The JSON must be valid against the WoundIdentifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {WoundIdentifier} An instance of WoundIdentifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new WoundIdentifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the WoundIdentifier class to a JSON object.
   * The JSON is expected to be valid against the WoundIdentifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/sw/WoundIdentifier' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    return inst;
  }

  /**
   * Serializes an instance of the WoundIdentifier class to a FHIR object.
   * The FHIR is expected to be valid against the WoundIdentifier FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/sw-WoundIdentifier-extension';
      inst['valueIdentifier'] = this.value;
    }
    if (!asExtension && this.value != null) {
      if (this.value != null) {
        inst = typeof this.value.toFHIR === 'function' ? this.value.toFHIR() : this.value;
      }
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the WoundIdentifier class.
   * The FHIR must be valid against the WoundIdentifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {WoundIdentifier} An instance of WoundIdentifier populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new WoundIdentifier();
    if (asExtension) {
      inst.value = fhir['valueIdentifier'];
    }
    if (!asExtension && fhir != null) {
      inst.value = createInstanceFromFHIR('shr.core.Identifier', fhir);
    }
    return inst;
  }

}
export default WoundIdentifier;
