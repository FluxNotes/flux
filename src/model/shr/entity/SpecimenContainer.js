import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

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
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.identifier != null) {
      inst['Identifier'] = typeof this.identifier.toJSON === 'function' ? this.identifier.toJSON() : this.identifier;
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
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {SpecimenContainer} An instance of SpecimenContainer populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new SpecimenContainer();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/SpecimenContainer');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.base.LastUpdated', fhir['meta']['lastUpdated'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.base.SecurityLabel', fhir_meta_security, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.base.Metadata', {}, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.base.Tag', fhir_meta_tag, shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.base.Narrative', fhir['text'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension') {
        inst.partOf = FHIRHelper.createInstanceFromFHIR('shr.entity.PartOf', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Type-extension') {
        inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-Identifier-extension') {
        inst.identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-core-CommentOrDescription-extension') {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Capacity-extension') {
        inst.capacity = FHIRHelper.createInstanceFromFHIR('shr.entity.Capacity', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-SpecimenQuantity-extension') {
        inst.specimenQuantity = FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenQuantity', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-Additive-extension') {
        inst.additive = inst.additive || [];
        const inst_additive = FHIRHelper.createInstanceFromFHIR('shr.entity.Additive', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.additive.push(inst_additive);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-SequenceNumber-extension') {
        inst.sequenceNumber = FHIRHelper.createInstanceFromFHIR('shr.entity.SequenceNumber', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default SpecimenContainer;
