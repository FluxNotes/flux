import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.core.Identifier.
 */
class Identifier {

  /**
   * Get the Text.
   * @returns {Text} The shr.core.Text
   */
  get text() {
    return this._text;
  }

  /**
   * Set the Text.
   * @param {Text} text - The shr.core.Text
   */
  set text(text) {
    this._text = text;
  }

  /**
   * Set the Text and return 'this' for chaining.
   * @param {Text} text - The shr.core.Text
   * @returns {Identifier} this.
   */
  withText(text) {
    this.text = text; return this;
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
    if (this.text != null) {
      inst['Text'] = typeof this.text.toJSON === 'function' ? this.text.toJSON() : this.text;
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
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Identifier class.
   * The FHIR must be valid against the Identifier FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Identifier} An instance of Identifier populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Identifier();
    if (fhir['use'] != null) {
      inst.purpose = FHIRHelper.createInstanceFromFHIR('shr.core.Purpose', fhir['use'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['system'] != null) {
      inst.codeSystem = FHIRHelper.createInstanceFromFHIR('shr.core.CodeSystem', fhir['system'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['value'] != null) {
      inst.text = FHIRHelper.createInstanceFromFHIR('shr.core.Text', fhir['value'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['period'] != null) {
      inst.effectiveTimePeriod = FHIRHelper.createInstanceFromFHIR('shr.core.EffectiveTimePeriod', fhir['period'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (asExtension) {
      inst.value = fhir['valueIdentifier'];
    }
    return inst;
  }

}
export default Identifier;
