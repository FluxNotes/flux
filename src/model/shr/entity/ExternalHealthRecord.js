import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.ExternalHealthRecord.
 * @extends Entity
 */
class ExternalHealthRecord extends Entity {

  /**
   * Get the entry information.
   * @returns {Entry} The shr.base.Entry
   */
  get entryInfo() {
    return this._entryInfo;
  }

  /**
   * Set the entry information.
   * @param {Entry} entryInfo - The shr.base.Entry
   */
  set entryInfo(entryInfo) {
    this._entryInfo = entryInfo;
  }

  /**
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {ExternalHealthRecord} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * This field/value is required.
   * @param {Identifier} identifier - The shr.core.Identifier
   * @returns {ExternalHealthRecord} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
  }

  /**
   * Get the AccessTime.
   * @returns {AccessTime} The shr.entity.AccessTime
   */
  get accessTime() {
    return this._accessTime;
  }

  /**
   * Set the AccessTime.
   * This field/value is required.
   * @param {AccessTime} accessTime - The shr.entity.AccessTime
   */
  set accessTime(accessTime) {
    this._accessTime = accessTime;
  }

  /**
   * Set the AccessTime and return 'this' for chaining.
   * This field/value is required.
   * @param {AccessTime} accessTime - The shr.entity.AccessTime
   * @returns {ExternalHealthRecord} this.
   */
  withAccessTime(accessTime) {
    this.accessTime = accessTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ExternalHealthRecord class.
   * The JSON must be valid against the ExternalHealthRecord JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ExternalHealthRecord} An instance of ExternalHealthRecord populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ExternalHealthRecord();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ExternalHealthRecord class to a JSON object.
   * The JSON is expected to be valid against the ExternalHealthRecord JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/ExternalHealthRecord' };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.accessTime != null) {
      inst['AccessTime'] = typeof this.accessTime.toJSON === 'function' ? this.accessTime.toJSON() : this.accessTime;
    }
    return inst;
  }

  /**
   * Serializes an instance of the ExternalHealthRecord class to a FHIR object.
   * The FHIR is expected to be valid against the ExternalHealthRecord FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.identifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.identifier.toFHIR === 'function' ? this.identifier.toFHIR(true) : this.identifier);
    }
    if (this.accessTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.accessTime.toFHIR === 'function' ? this.accessTime.toFHIR(true) : this.accessTime);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ExternalHealthRecord class.
   * The FHIR must be valid against the ExternalHealthRecord FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {ExternalHealthRecord} An instance of ExternalHealthRecord populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new ExternalHealthRecord();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Identifier-extension');
      if (match != null) {
        inst.identifier = createInstanceFromFHIR('shr.core.Identifier', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-AccessTime-extension');
      if (match != null) {
        inst.accessTime = createInstanceFromFHIR('shr.entity.AccessTime', match, true);
      }
    }
    return inst;
  }

}
export default ExternalHealthRecord;
