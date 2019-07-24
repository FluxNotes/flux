// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid } from '../../json-helper';

import ClassRegistry from '../../ClassRegistry';

/**
 * Generated class for shr.core.SpecimenContainer.
 */
class SpecimenContainer {

  /**
   * Get the Identifier array.
   * @returns {Array<Identifier>} The shr.core.Identifier array
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier array.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier array and return 'this' for chaining.
   * @param {Array<Identifier>} identifier - The shr.core.Identifier array
   * @returns {SpecimenContainer} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
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
   * @returns {SpecimenContainer} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {SpecimenContainer} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the Capacity.
   * @returns {Capacity} The shr.core.Capacity
   */
  get capacity() {
    return this._capacity;
  }

  /**
   * Set the Capacity.
   * @param {Capacity} capacity - The shr.core.Capacity
   */
  set capacity(capacity) {
    this._capacity = capacity;
  }

  /**
   * Set the Capacity and return 'this' for chaining.
   * @param {Capacity} capacity - The shr.core.Capacity
   * @returns {SpecimenContainer} this.
   */
  withCapacity(capacity) {
    this.capacity = capacity; return this;
  }

  /**
   * Get the SpecimenQuantity.
   * @returns {SpecimenQuantity} The shr.core.SpecimenQuantity
   */
  get specimenQuantity() {
    return this._specimenQuantity;
  }

  /**
   * Set the SpecimenQuantity.
   * @param {SpecimenQuantity} specimenQuantity - The shr.core.SpecimenQuantity
   */
  set specimenQuantity(specimenQuantity) {
    this._specimenQuantity = specimenQuantity;
  }

  /**
   * Set the SpecimenQuantity and return 'this' for chaining.
   * @param {SpecimenQuantity} specimenQuantity - The shr.core.SpecimenQuantity
   * @returns {SpecimenContainer} this.
   */
  withSpecimenQuantity(specimenQuantity) {
    this.specimenQuantity = specimenQuantity; return this;
  }

  /**
   * Get the Additive array.
   * @returns {Array<Additive>} The shr.core.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The shr.core.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Set the Additive array and return 'this' for chaining.
   * @param {Array<Additive>} additive - The shr.core.Additive array
   * @returns {SpecimenContainer} this.
   */
  withAdditive(additive) {
    this.additive = additive; return this;
  }

  /**
   * Get the SequenceNumber.
   * @returns {SequenceNumber} The shr.core.SequenceNumber
   */
  get sequenceNumber() {
    return this._sequenceNumber;
  }

  /**
   * Set the SequenceNumber.
   * @param {SequenceNumber} sequenceNumber - The shr.core.SequenceNumber
   */
  set sequenceNumber(sequenceNumber) {
    this._sequenceNumber = sequenceNumber;
  }

  /**
   * Set the SequenceNumber and return 'this' for chaining.
   * @param {SequenceNumber} sequenceNumber - The shr.core.SequenceNumber
   * @returns {SpecimenContainer} this.
   */
  withSequenceNumber(sequenceNumber) {
    this.sequenceNumber = sequenceNumber; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenContainer class.
   * The JSON must be valid against the SpecimenContainer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenContainer} An instance of SpecimenContainer populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('shr.core', 'SpecimenContainer');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the SpecimenContainer class to a JSON object.
   * The JSON is expected to be valid against the SpecimenContainer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/core/SpecimenContainer' } };
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.capacity != null) {
      inst['Capacity'] = typeof this.capacity.toJSON === 'function' ? this.capacity.toJSON() : this.capacity;
    }
    if (this.specimenQuantity != null) {
      inst['SpecimenQuantity'] = typeof this.specimenQuantity.toJSON === 'function' ? this.specimenQuantity.toJSON() : this.specimenQuantity;
    }
    if (this.additive != null) {
      inst['Additive'] = this.additive.map(f => f.toJSON());
    }
    if (this.sequenceNumber != null) {
      inst['SequenceNumber'] = typeof this.sequenceNumber.toJSON === 'function' ? this.sequenceNumber.toJSON() : this.sequenceNumber;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecimenContainer class.
   * The FHIR must be valid against the SpecimenContainer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SpecimenContainer} An instance of SpecimenContainer populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('shr.core', 'SpecimenContainer');
    const inst = new klass();
    return inst;
  }

}
export default SpecimenContainer;
