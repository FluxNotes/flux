import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Location.
 * @extends Entity
 */
class Location extends Entity {

  /**
   * Get the choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation.
   * @returns {(Address|Geoposition|GeopoliticalLocation)} The choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation.
   * This field/value is required.
   * @param {(Address|Geoposition|GeopoliticalLocation)} value - The choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation and return 'this' for chaining.
   * This field/value is required.
   * @param {(Address|Geoposition|GeopoliticalLocation)} value - The choice value; one of: shr.core.Address, shr.core.Geoposition, shr.core.GeopoliticalLocation
   * @returns {Location} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Location class.
   * The JSON must be valid against the Location JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Location} An instance of Location populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Location();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Location class to a JSON object.
   * The JSON is expected to be valid against the Location JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Location' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    return inst;
  }

  /**
   * Serializes an instance of the Location class to a FHIR object.
   * The FHIR is expected to be valid against the Location FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-Location-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Location class.
   * The FHIR must be valid against the Location FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {Location} An instance of Location populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Location();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Location;
