import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.encounter.Diagnosis.
 */
class Diagnosis {

  /**
   * Get the DiagnosisCode.
   * @returns {DiagnosisCode} The shr.encounter.DiagnosisCode
   */
  get diagnosisCode() {
    return this._diagnosisCode;
  }

  /**
   * Set the DiagnosisCode.
   * This field/value is required.
   * @param {DiagnosisCode} diagnosisCode - The shr.encounter.DiagnosisCode
   */
  set diagnosisCode(diagnosisCode) {
    this._diagnosisCode = diagnosisCode;
  }

  /**
   * Set the DiagnosisCode and return 'this' for chaining.
   * This field/value is required.
   * @param {DiagnosisCode} diagnosisCode - The shr.encounter.DiagnosisCode
   * @returns {Diagnosis} this.
   */
  withDiagnosisCode(diagnosisCode) {
    this.diagnosisCode = diagnosisCode; return this;
  }

  /**
   * Get the PriorityRank.
   * @returns {PriorityRank} The shr.core.PriorityRank
   */
  get priorityRank() {
    return this._priorityRank;
  }

  /**
   * Set the PriorityRank.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   */
  set priorityRank(priorityRank) {
    this._priorityRank = priorityRank;
  }

  /**
   * Set the PriorityRank and return 'this' for chaining.
   * @param {PriorityRank} priorityRank - The shr.core.PriorityRank
   * @returns {Diagnosis} this.
   */
  withPriorityRank(priorityRank) {
    this.priorityRank = priorityRank; return this;
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
   * @returns {Diagnosis} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Diagnosis class.
   * The JSON must be valid against the Diagnosis JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Diagnosis} An instance of Diagnosis populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Diagnosis();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Diagnosis class to a JSON object.
   * The JSON is expected to be valid against the Diagnosis JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/encounter/Diagnosis' } };
    if (this.diagnosisCode != null) {
      inst['DiagnosisCode'] = typeof this.diagnosisCode.toJSON === 'function' ? this.diagnosisCode.toJSON() : this.diagnosisCode;
    }
    if (this.priorityRank != null) {
      inst['PriorityRank'] = typeof this.priorityRank.toJSON === 'function' ? this.priorityRank.toJSON() : this.priorityRank;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Diagnosis class to a FHIR object.
   * The FHIR is expected to be valid against the Diagnosis FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.diagnosisCode != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.diagnosisCode.toFHIR(true));
      }
      if (this.priorityRank != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.priorityRank.toFHIR(true));
      }
      if (this.type != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.type.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-encounter-Diagnosis-extension';
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Diagnosis class.
   * The FHIR must be valid against the Diagnosis FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Diagnosis} An instance of Diagnosis populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Diagnosis();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-encounter-DiagnosisCode-extension');
      if (match_1 != null) {
        inst.diagnosisCode = createInstanceFromFHIR('shr.encounter.DiagnosisCode', match_1, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-PriorityRank-extension');
      if (match_2 != null) {
        inst.priorityRank = createInstanceFromFHIR('shr.core.PriorityRank', match_2, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Type-extension');
      if (match_3 != null) {
        inst.type = createInstanceFromFHIR('shr.core.Type', match_3, true);
      }
    }
    return inst;
  }

}
export default Diagnosis;
