import { setPropertiesFromJSON } from '../../json-helper';

import AssertionTopic from '../../cimi/topic/AssertionTopic';

/**
 * Generated class for shr.allergy.AdverseSensitivityTopic.
 * @extends AssertionTopic
 */
class AdverseSensitivityTopic extends AssertionTopic {

  /**
   * Get the AllergenIrritant.
   * @returns {AllergenIrritant} The shr.allergy.AllergenIrritant
   */
  get allergenIrritant() {
    return this._allergenIrritant;
  }

  /**
   * Set the AllergenIrritant.
   * @param {AllergenIrritant} allergenIrritant - The shr.allergy.AllergenIrritant
   */
  set allergenIrritant(allergenIrritant) {
    this._allergenIrritant = allergenIrritant;
  }

  /**
   * Set the AllergenIrritant and return 'this' for chaining.
   * @param {AllergenIrritant} allergenIrritant - The shr.allergy.AllergenIrritant
   * @returns {AdverseSensitivityTopic} this.
   */
  withAllergenIrritant(allergenIrritant) {
    this.allergenIrritant = allergenIrritant; return this;
  }

  /**
   * Get the SubstanceCategory array.
   * @returns {Array<SubstanceCategory>} The shr.allergy.SubstanceCategory array
   */
  get substanceCategory() {
    return this._substanceCategory;
  }

  /**
   * Set the SubstanceCategory array.
   * @param {Array<SubstanceCategory>} substanceCategory - The shr.allergy.SubstanceCategory array
   */
  set substanceCategory(substanceCategory) {
    this._substanceCategory = substanceCategory;
  }

  /**
   * Set the SubstanceCategory array and return 'this' for chaining.
   * @param {Array<SubstanceCategory>} substanceCategory - The shr.allergy.SubstanceCategory array
   * @returns {AdverseSensitivityTopic} this.
   */
  withSubstanceCategory(substanceCategory) {
    this.substanceCategory = substanceCategory; return this;
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
   * @returns {AdverseSensitivityTopic} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Deserializes JSON data to an instance of the AdverseSensitivityTopic class.
   * The JSON must be valid against the AdverseSensitivityTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {AdverseSensitivityTopic} An instance of AdverseSensitivityTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new AdverseSensitivityTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the AdverseSensitivityTopic class to a JSON object.
   * The JSON is expected to be valid against the AdverseSensitivityTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/allergy/AdverseSensitivityTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.allergenIrritant != null) {
      inst['AllergenIrritant'] = typeof this.allergenIrritant.toJSON === 'function' ? this.allergenIrritant.toJSON() : this.allergenIrritant;
    }
    if (this.substanceCategory != null) {
      inst['SubstanceCategory'] = this.substanceCategory.map(f => f.toJSON());
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    return inst;
  }
}
export default AdverseSensitivityTopic;
