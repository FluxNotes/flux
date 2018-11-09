import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

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
   * Get the AdditionalText.
   * @returns {AdditionalText} The shr.base.AdditionalText
   */
  get additionalText() {
    return this._additionalText;
  }

  /**
   * Set the AdditionalText.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   */
  set additionalText(additionalText) {
    this._additionalText = additionalText;
  }

  /**
   * Set the AdditionalText and return 'this' for chaining.
   * @param {AdditionalText} additionalText - The shr.base.AdditionalText
   * @returns {SpecimenContainer} this.
   */
  withAdditionalText(additionalText) {
    this.additionalText = additionalText; return this;
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
  static fromJSON(json={}) {
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
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/SpecimenContainer' };
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
    }
    if (this.additionalText != null) {
      inst['AdditionalText'] = typeof this.additionalText.toJSON === 'function' ? this.additionalText.toJSON() : this.additionalText;
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
  toFHIR(asExtension=false) {
    let inst = {};
    inst['resourceType'] = 'DomainResource';
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.type != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.type.toFHIR === 'function' ? this.type.toFHIR(true) : this.type);
    }
    if (this.identifier != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.identifier.toFHIR === 'function' ? this.identifier.toFHIR(true) : this.identifier);
    }
    if (this.additionalText != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.additionalText.toFHIR === 'function' ? this.additionalText.toFHIR(true) : this.additionalText);
    }
    if (this.capacity != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.capacity.toFHIR === 'function' ? this.capacity.toFHIR(true) : this.capacity);
    }
    if (this.specimenQuantity != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specimenQuantity.toFHIR === 'function' ? this.specimenQuantity.toFHIR(true) : this.specimenQuantity);
    }
    if (this.additive != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.additive.toFHIR === 'function' ? this.additive.toFHIR(true) : this.additive);
    }
    if (this.sequenceNumber != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.sequenceNumber.toFHIR === 'function' ? this.sequenceNumber.toFHIR(true) : this.sequenceNumber);
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the SpecimenContainer class.
   * The FHIR must be valid against the SpecimenContainer FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {asExtension=false} Whether the provided instance is an extension
   * @returns {SpecimenContainer} An instance of SpecimenContainer populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new SpecimenContainer();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Type-extension');
      if (match != null) {
        inst.type = createInstanceFromFHIR('shr.core.Type', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-Identifier-extension');
      if (match != null) {
        inst.identifier = createInstanceFromFHIR('shr.core.Identifier', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-AdditionalText-extension');
      if (match != null) {
        inst.additionalText = createInstanceFromFHIR('shr.base.AdditionalText', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Capacity-extension');
      if (match != null) {
        inst.capacity = createInstanceFromFHIR('shr.entity.Capacity', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-SpecimenQuantity-extension');
      if (match != null) {
        inst.specimenQuantity = createInstanceFromFHIR('shr.entity.SpecimenQuantity', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-Additive-extension');
      if (match != null) {
        inst.additive = createInstanceFromFHIR('shr.entity.Additive', match, true);
      }
    }
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-SequenceNumber-extension');
      if (match != null) {
        inst.sequenceNumber = createInstanceFromFHIR('shr.entity.SequenceNumber', match, true);
      }
    }
    return inst;
  }

}
export default SpecimenContainer;
