import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import EntityOrRole from './EntityOrRole';

/**
 * Generated class for shr.entity.Entity.
 * @extends EntityOrRole
 */
class Entity extends EntityOrRole {

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {Entity} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Entity class.
   * The JSON must be valid against the Entity JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Entity} An instance of Entity populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Entity();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Entity class to a JSON object.
   * The JSON is expected to be valid against the Entity JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/Entity' } };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Entity class to a FHIR object.
   * The FHIR is expected to be valid against the Entity FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Entity class.
   * The FHIR must be valid against the Entity FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Entity} An instance of Entity populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension = false) {
    const inst = new Entity();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    return inst;
  }

}
export default Entity;
