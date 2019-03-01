import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.core.Coding.
 */
class Coding {

  /**
   * Get the Code.
   * @returns {Code} The shr.core.Code
   */
  get code() {
    return this._code;
  }

  /**
   * Set the Code.
   * @param {Code} code - The shr.core.Code
   */
  set code(code) {
    this._code = code;
  }

  set value(code) {
    this._code = code;
  }

  /**
   * Set the Code and return 'this' for chaining.
   * @param {Code} code - The shr.core.Code
   * @returns {Coding} this.
   */
  withCode(code) {
    this.code = code; return this;
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
   * @returns {Coding} this.
   */
  withCodeSystem(codeSystem) {
    this.codeSystem = codeSystem; return this;
  }

  /**
   * Get the CodeSystemVersion.
   * @returns {CodeSystemVersion} The shr.core.CodeSystemVersion
   */
  get codeSystemVersion() {
    return this._codeSystemVersion;
  }

  /**
   * Set the CodeSystemVersion.
   * @param {CodeSystemVersion} codeSystemVersion - The shr.core.CodeSystemVersion
   */
  set codeSystemVersion(codeSystemVersion) {
    this._codeSystemVersion = codeSystemVersion;
  }

  /**
   * Set the CodeSystemVersion and return 'this' for chaining.
   * @param {CodeSystemVersion} codeSystemVersion - The shr.core.CodeSystemVersion
   * @returns {Coding} this.
   */
  withCodeSystemVersion(codeSystemVersion) {
    this.codeSystemVersion = codeSystemVersion; return this;
  }

  /**
   * Get the DisplayText.
   * @returns {DisplayText} The shr.core.DisplayText
   */
  get displayText() {
    return this._displayText;
  }

  /**
   * Set the DisplayText.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   */
  set displayText(displayText) {
    this._displayText = displayText;
  }

  /**
   * Set the DisplayText and return 'this' for chaining.
   * @param {DisplayText} displayText - The shr.core.DisplayText
   * @returns {Coding} this.
   */
  withDisplayText(displayText) {
    this.displayText = displayText; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Coding class.
   * The JSON must be valid against the Coding JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Coding} An instance of Coding populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Coding();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Coding class to a JSON object.
   * The JSON is expected to be valid against the Coding JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/core/Coding' } };
    if (this.code != null) {
      inst['Code'] = typeof this.code.toJSON === 'function' ? this.code.toJSON() : this.code;
    }
    if (this.codeSystem != null) {
      inst['CodeSystem'] = typeof this.codeSystem.toJSON === 'function' ? this.codeSystem.toJSON() : this.codeSystem;
    }
    if (this.codeSystemVersion != null) {
      inst['CodeSystemVersion'] = typeof this.codeSystemVersion.toJSON === 'function' ? this.codeSystemVersion.toJSON() : this.codeSystemVersion;
    }
    if (this.displayText != null) {
      inst['DisplayText'] = typeof this.displayText.toJSON === 'function' ? this.displayText.toJSON() : this.displayText;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Coding class to a FHIR object.
   * The FHIR is expected to be valid against the Coding FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.codeSystem != null) {
      inst['system'] = typeof this.codeSystem.toFHIR === 'function' ? this.codeSystem.toFHIR() : this.codeSystem;
    }
    if (this.codeSystemVersion != null) {
      inst['version'] = typeof this.codeSystemVersion.toFHIR === 'function' ? this.codeSystemVersion.toFHIR() : this.codeSystemVersion;
    }
    if (this.code != null) {
      inst['code'] = typeof this.code.toFHIR === 'function' ? this.code.toFHIR() : this.code;
    }
    if (this.displayText != null) {
      inst['display'] = typeof this.displayText.toFHIR === 'function' ? this.displayText.toFHIR() : this.displayText;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Coding class.
   * The FHIR must be valid against the Coding FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Coding} An instance of Coding populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Coding();
    if (fhir['system'] != null) {
      inst.codeSystem = createInstanceFromFHIR('shr.core.CodeSystem', fhir['system']);
    }
    if (fhir['version'] != null) {
      inst.codeSystemVersion = createInstanceFromFHIR('shr.core.CodeSystemVersion', fhir['version']);
    }
    if (fhir['code'] != null) {
      inst.code = createInstanceFromFHIR('shr.core.Code', fhir['code']);
    }
    if (fhir['display'] != null) {
      inst.displayText = createInstanceFromFHIR('shr.core.DisplayText', fhir['display']);
    }
    return inst;
  }

}
export default Coding;
