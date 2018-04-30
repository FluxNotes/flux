import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../base/Content';

/**
 * Generated class for shr.entity.Party.
 * @extends Content
 */
class Party extends Content {

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.entity.Type
   * @returns {Party} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Party class.
   * The JSON must be valid against the Party JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Party} An instance of Party populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Party();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Party class to a JSON object.
   * The JSON is expected to be valid against the Party JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Party' } };
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
export default Party;
