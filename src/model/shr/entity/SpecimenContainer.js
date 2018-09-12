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
   * Set the entry information and return 'this' for chaining.
   * @param {Entry} entryInfo - The shr.base.Entry
   * @returns {SpecimenContainer} this.
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
   * @param {Identifier} identifier - The shr.core.Identifier
   */
  set identifier(identifier) {
    this._identifier = identifier;
  }

  /**
   * Set the Identifier and return 'this' for chaining.
   * @param {Identifier} identifier - The shr.core.Identifier
   * @returns {SpecimenContainer} this.
   */
  withIdentifier(identifier) {
    this.identifier = identifier; return this;
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
   * Set the Details and return 'this' for chaining.
   * @param {Details} details - The shr.core.Details
   * @returns {SpecimenContainer} this.
   */
  withDetails(details) {
    this.details = details; return this;
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
   * Set the Capacity and return 'this' for chaining.
   * @param {Capacity} capacity - The shr.entity.Capacity
   * @returns {SpecimenContainer} this.
   */
  withCapacity(capacity) {
    this.capacity = capacity; return this;
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
   * Set the SpecimenQuantity and return 'this' for chaining.
   * @param {SpecimenQuantity} specimenQuantity - The shr.entity.SpecimenQuantity
   * @returns {SpecimenContainer} this.
   */
  withSpecimenQuantity(specimenQuantity) {
    this.specimenQuantity = specimenQuantity; return this;
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
   * Set the Additive array and return 'this' for chaining.
   * @param {Array<Additive>} additive - The shr.entity.Additive array
   * @returns {SpecimenContainer} this.
   */
  withAdditive(additive) {
    this.additive = additive; return this;
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
   * Set the SequenceNumber and return 'this' for chaining.
   * @param {SequenceNumber} sequenceNumber - The shr.entity.SequenceNumber
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
  static fromJSON(json = {}) {
    const inst = new SpecimenContainer();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenContainer class to a JSON object.
   * The JSON is expected to be valid against the SpecimenContainer JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/SpecimenContainer' };
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
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
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
   * Serializes an instance of the SpecimenContainer class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenContainer FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Basic';
    if (this.relatedEncounter != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
    }
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
    }
    if (this.identifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.identifier.toFHIR(true));
    }
    if (this.details != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.details.toFHIR(true));
    }
    if (this.capacity != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.capacity.toFHIR(true));
    }
    if (this.specimenQuantity != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.specimenQuantity.toFHIR(true));
    }
    if (this.additive != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.additive.toFHIR(true));
    }
    if (this.sequenceNumber != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.sequenceNumber.toFHIR(true));
    }
    return inst;
  }
}
export default SpecimenContainer;
