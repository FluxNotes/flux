import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

/**
 * Generated class for shr.base.Attribution.
 */
class Attribution {

  /**
   * Get the EntityOrRole.
   * @returns {EntityOrRole} The shr.entity.EntityOrRole
   */
  get entityOrRole() {
    return this._entityOrRole;
  }

  /**
   * Set the EntityOrRole.
   * This field/value is required.
   * @param {EntityOrRole} entityOrRole - The shr.entity.EntityOrRole
   */
  set entityOrRole(entityOrRole) {
    this._entityOrRole = entityOrRole;
  }

  /**
   * Set the EntityOrRole and return 'this' for chaining.
   * This field/value is required.
   * @param {EntityOrRole} entityOrRole - The shr.entity.EntityOrRole
   * @returns {Attribution} this.
   */
  withEntityOrRole(entityOrRole) {
    this.entityOrRole = entityOrRole; return this;
  }

  /**
   * Get the RecordedOn.
   * @returns {RecordedOn} The shr.base.RecordedOn
   */
  get recordedOn() {
    return this._recordedOn;
  }

  /**
   * Set the RecordedOn.
   * @param {RecordedOn} recordedOn - The shr.base.RecordedOn
   */
  set recordedOn(recordedOn) {
    this._recordedOn = recordedOn;
  }

  /**
   * Set the RecordedOn and return 'this' for chaining.
   * @param {RecordedOn} recordedOn - The shr.base.RecordedOn
   * @returns {Attribution} this.
   */
  withRecordedOn(recordedOn) {
    this.recordedOn = recordedOn; return this;
  }

  /**
   * Get the Signature.
   * @returns {Signature} The shr.core.Signature
   */
  get signature() {
    return this._signature;
  }

  /**
   * Set the Signature.
   * @param {Signature} signature - The shr.core.Signature
   */
  set signature(signature) {
    this._signature = signature;
  }

  /**
   * Set the Signature and return 'this' for chaining.
   * @param {Signature} signature - The shr.core.Signature
   * @returns {Attribution} this.
   */
  withSignature(signature) {
    this.signature = signature; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Attribution class.
   * The JSON must be valid against the Attribution JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Attribution} An instance of Attribution populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Attribution();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Attribution class to a JSON object.
   * The JSON is expected to be valid against the Attribution JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/base/Attribution' } };
    if (this.entityOrRole != null) {
      inst['EntityOrRole'] = typeof this.entityOrRole.toJSON === 'function' ? this.entityOrRole.toJSON() : this.entityOrRole;
    }
    if (this.recordedOn != null) {
      inst['RecordedOn'] = typeof this.recordedOn.toJSON === 'function' ? this.recordedOn.toJSON() : this.recordedOn;
    }
    if (this.signature != null) {
      inst['Signature'] = typeof this.signature.toJSON === 'function' ? this.signature.toJSON() : this.signature;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Attribution class to a FHIR object.
   * The FHIR is expected to be valid against the Attribution FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (asExtension) {
      if (this.entityOrRole != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.entityOrRole.toFHIR(true));
      }
      if (this.recordedOn != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.recordedOn.toFHIR(true));
      }
      if (this.signature != null) {
        inst['extension'] = inst['extension'] || [];
        inst['extension'].push(this.signature.toFHIR(true));
      }
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-base-Attribution-extension';
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Attribution class.
   * The FHIR must be valid against the Attribution FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Attribution} An instance of Attribution populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Attribution();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-EntityOrRole-extension');
      if (match_1 != null) {
        inst.entityOrRole = createInstanceFromFHIR('shr.entity.EntityOrRole', match_1, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-RecordedOn-extension');
      if (match_2 != null) {
        inst.recordedOn = createInstanceFromFHIR('shr.base.RecordedOn', match_2, true);
      }
      const match_3 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Signature-extension');
      if (match_3 != null) {
        inst.signature = createInstanceFromFHIR('shr.core.Signature', match_3, true);
      }
    }
    return inst;
  }

}
export default Attribution;
