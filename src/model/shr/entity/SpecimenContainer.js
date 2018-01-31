import { setPropertiesFromJSON } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.SpecimenContainer.
 * @extends Entity
 */
class SpecimenContainer extends Entity {

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
   * Get the Identifier.
   * @returns {Identifier} The shr.core.Identifier
   */
  get identifier() {
    return this._identifier;
  }

  /**
   * Set the Identifier.
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Get the Details.
   * @returns {Details} The shr.core.Details
   */
  get details() {
    return this._details;
  }

  /**
   * Set the Details.
   * @param {Details} details - The shr.core.Details
   */
  set details(details) {
    this._details = details;
  }

  /**
   * Get the Capacity.
   * @returns {Capacity} The shr.entity.Capacity
   */
  get capacity() {
    return this._capacity;
  }

  /**
   * Set the Capacity.
   * @param {Capacity} capacity - The shr.entity.Capacity
   */
  set capacity(capacity) {
    this._capacity = capacity;
  }

  /**
   * Get the SpecimenQuantity.
   * @returns {SpecimenQuantity} The shr.entity.SpecimenQuantity
   */
  get specimenQuantity() {
    return this._specimenQuantity;
  }

  /**
   * Set the SpecimenQuantity.
   * @param {SpecimenQuantity} specimenQuantity - The shr.entity.SpecimenQuantity
   */
  set specimenQuantity(specimenQuantity) {
    this._specimenQuantity = specimenQuantity;
  }

  /**
   * Get the Additive array.
   * @returns {Array<Additive>} The shr.entity.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The shr.entity.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Get the SequenceNumber.
   * @returns {SequenceNumber} The shr.entity.SequenceNumber
   */
  get sequenceNumber() {
    return this._sequenceNumber;
  }

  /**
   * Set the SequenceNumber.
   * @param {SequenceNumber} sequenceNumber - The shr.entity.SequenceNumber
   */
  set sequenceNumber(sequenceNumber) {
    this._sequenceNumber = sequenceNumber;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenContainer class.
   * The JSON must be valid against the SpecimenContainer JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenContainer} An instance of SpecimenContainer populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenContainer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
}
export default SpecimenContainer;
