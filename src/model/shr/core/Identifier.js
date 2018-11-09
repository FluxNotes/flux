import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Identifier.
 */
class Identifier {

  /**
   * Get the value (aliases string).
   * @returns {string} The string
   */
  get value() {
    return this._string;
  }

  /**
   * Set the value (aliases string).
   * This field/value is required.
   * @param {string} value - The string
   */
  set value(value) {
    this._string = value;
  }

  /**
   * Set the value (aliases string) and return 'this' for chaining.
   * This field/value is required.
   * @param {string} value - The string
   * @returns {Identifier} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the string.
   * @returns {string} The string
   */
  get string() {
    return this._string;
  }

  /**
   * Set the string.
   * This field/value is required.
   * @param {string} string - The string
   */
  set string(string) {
    this._string = string;
  }

  /**
   * Set the string and return 'this' for chaining.
   * This field/value is required.
   * @param {string} string - The string
   * @returns {Identifier} this.
   */
  withString(string) {
    this.string = string; return this;
  }

  /**
   * Get the Purpose.
   * @returns {Purpose} The shr.core.Purpose
   */
  get purpose() {
    return this._purpose;
  }

  /**
   * Set the Purpose.
   * @param {Purpose} purpose - The shr.core.Purpose
   */
  set purpose(purpose) {
    this._purpose = purpose;
  }

  /**
   * Set the Purpose and return 'this' for chaining.
   * @param {Purpose} purpose - The shr.core.Purpose
   * @returns {Identifier} this.
   */
  withPurpose(purpose) {
    this.purpose = purpose; return this;
  }

  /**
   * Get the Type.
   * @returns {Type} The shr.core.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.core.Type
   * @returns {Identifier} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CodeSystem.
   * @returns {CodeSystem} The shr.core.CodeSystem
   */
  get codeSystem() {
    return this._codeSystem;
  }

  /**
   * Set the CodeSystem.
   * @param {CodeSystem} codeSystem - The shr.core.CodeSystem
   */
  set codeSystem(codeSystem) {
    this._codeSystem = codeSystem;
  }

  /**
   * Set the CodeSystem and return 'this' for chaining.
   * @param {CodeSystem} codeSystem - The shr.core.CodeSystem
   * @returns {Identifier} this.
   */
  withCodeSystem(codeSystem) {
    this.codeSystem = codeSystem; return this;
  }

  /**
   * Get the EffectiveTimePeriod.
   * @returns {EffectiveTimePeriod} The shr.core.EffectiveTimePeriod
   */
  get effectiveTimePeriod() {
    return this._effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   */
  set effectiveTimePeriod(effectiveTimePeriod) {
    this._effectiveTimePeriod = effectiveTimePeriod;
  }

  /**
   * Set the EffectiveTimePeriod and return 'this' for chaining.
   * @param {EffectiveTimePeriod} effectiveTimePeriod - The shr.core.EffectiveTimePeriod
   * @returns {Identifier} this.
   */
  withEffectiveTimePeriod(effectiveTimePeriod) {
    this.effectiveTimePeriod = effectiveTimePeriod; return this;
  }

  /**
   * Get the Issuer.
   * @returns {Issuer} The shr.core.Issuer
   */
  get issuer() {
    return this._issuer;
  }

  /**
   * Set the Issuer.
   * @param {Issuer} issuer - The shr.core.Issuer
   */
  set issuer(issuer) {
    this._issuer = issuer;
  }

  /**
   * Set the Issuer and return 'this' for chaining.
   * @param {Issuer} issuer - The shr.core.Issuer
   * @returns {Identifier} this.
   */
  withIssuer(issuer) {
    this.issuer = issuer; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Identifier class.
   * The JSON must be valid against the Identifier JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Identifier} An instance of Identifier populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Identifier();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Identifier class to a JSON object.
   * The JSON is expected to be valid against the Identifier JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Identifier' } };
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
   * Serializes an instance of the Identifier class to a FHIR object.
   * The FHIR is expected to be valid against the Identifier FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-core-Identifier-extension';
      inst['valueIdentifier'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Identifier class.
   * The FHIR must be valid against the Identifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Identifier} An instance of Identifier populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Identifier();
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
    if (asExtension) {
      inst.value = fhir['valueIdentifier'];
    }
    return inst;
  }

}
export default Identifier;
