import { setPropertiesFromJSON } from '../../json-helper';

import Entity from '../entity/Entity';

/**
 * Generated class for shr.core.Location.
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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/Location' } };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    return inst;
  }
}
export default Location;
