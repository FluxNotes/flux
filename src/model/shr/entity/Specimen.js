import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Specimen.
 * @extends Entity
 */
class Specimen extends Entity {

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
   * @returns {Specimen} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the AccessionIdentifier.
   * @returns {AccessionIdentifier} The shr.entity.AccessionIdentifier
   */
  get accessionIdentifier() {
    return this._accessionIdentifier;
  }

  /**
   * Set the AccessionIdentifier.
   * @param {AccessionIdentifier} accessionIdentifier - The shr.entity.AccessionIdentifier
   */
  set accessionIdentifier(accessionIdentifier) {
    this._accessionIdentifier = accessionIdentifier;
  }

  /**
   * Set the AccessionIdentifier and return 'this' for chaining.
   * @param {AccessionIdentifier} accessionIdentifier - The shr.entity.AccessionIdentifier
   * @returns {Specimen} this.
   */
  withAccessionIdentifier(accessionIdentifier) {
    this.accessionIdentifier = accessionIdentifier; return this;
  }

  /**
   * Get the SpecimenStatus.
   * @returns {SpecimenStatus} The shr.entity.SpecimenStatus
   */
  get specimenStatus() {
    return this._specimenStatus;
  }

  /**
   * Set the SpecimenStatus.
   * @param {SpecimenStatus} specimenStatus - The shr.entity.SpecimenStatus
   */
  set specimenStatus(specimenStatus) {
    this._specimenStatus = specimenStatus;
  }

  /**
   * Set the SpecimenStatus and return 'this' for chaining.
   * @param {SpecimenStatus} specimenStatus - The shr.entity.SpecimenStatus
   * @returns {Specimen} this.
   */
  withSpecimenStatus(specimenStatus) {
    this.specimenStatus = specimenStatus; return this;
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
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.core.Type
   * @returns {Specimen} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CollectionSource.
   * @returns {CollectionSource} The shr.entity.CollectionSource
   */
  get collectionSource() {
    return this._collectionSource;
  }

  /**
   * Set the CollectionSource.
   * @param {CollectionSource} collectionSource - The shr.entity.CollectionSource
   */
  set collectionSource(collectionSource) {
    this._collectionSource = collectionSource;
  }

  /**
   * Set the CollectionSource and return 'this' for chaining.
   * @param {CollectionSource} collectionSource - The shr.entity.CollectionSource
   * @returns {Specimen} this.
   */
  withCollectionSource(collectionSource) {
    this.collectionSource = collectionSource; return this;
  }

  /**
   * Get the CollectionTime.
   * @returns {CollectionTime} The shr.entity.CollectionTime
   */
  get collectionTime() {
    return this._collectionTime;
  }

  /**
   * Set the CollectionTime.
   * @param {CollectionTime} collectionTime - The shr.entity.CollectionTime
   */
  set collectionTime(collectionTime) {
    this._collectionTime = collectionTime;
  }

  /**
   * Set the CollectionTime and return 'this' for chaining.
   * @param {CollectionTime} collectionTime - The shr.entity.CollectionTime
   * @returns {Specimen} this.
   */
  withCollectionTime(collectionTime) {
    this.collectionTime = collectionTime; return this;
  }

  /**
   * Get the CollectionMethod.
   * @returns {CollectionMethod} The shr.entity.CollectionMethod
   */
  get collectionMethod() {
    return this._collectionMethod;
  }

  /**
   * Set the CollectionMethod.
   * @param {CollectionMethod} collectionMethod - The shr.entity.CollectionMethod
   */
  set collectionMethod(collectionMethod) {
    this._collectionMethod = collectionMethod;
  }

  /**
   * Set the CollectionMethod and return 'this' for chaining.
   * @param {CollectionMethod} collectionMethod - The shr.entity.CollectionMethod
   * @returns {Specimen} this.
   */
  withCollectionMethod(collectionMethod) {
    this.collectionMethod = collectionMethod; return this;
  }

  /**
   * Get the CollectionSite.
   * @returns {CollectionSite} The shr.entity.CollectionSite
   */
  get collectionSite() {
    return this._collectionSite;
  }

  /**
   * Set the CollectionSite.
   * @param {CollectionSite} collectionSite - The shr.entity.CollectionSite
   */
  set collectionSite(collectionSite) {
    this._collectionSite = collectionSite;
  }

  /**
   * Set the CollectionSite and return 'this' for chaining.
   * @param {CollectionSite} collectionSite - The shr.entity.CollectionSite
   * @returns {Specimen} this.
   */
  withCollectionSite(collectionSite) {
    this.collectionSite = collectionSite; return this;
  }

  /**
   * Get the SourceSpecimen.
   * @returns {SourceSpecimen} The shr.entity.SourceSpecimen
   */
  get sourceSpecimen() {
    return this._sourceSpecimen;
  }

  /**
   * Set the SourceSpecimen.
   * @param {SourceSpecimen} sourceSpecimen - The shr.entity.SourceSpecimen
   */
  set sourceSpecimen(sourceSpecimen) {
    this._sourceSpecimen = sourceSpecimen;
  }

  /**
   * Set the SourceSpecimen and return 'this' for chaining.
   * @param {SourceSpecimen} sourceSpecimen - The shr.entity.SourceSpecimen
   * @returns {Specimen} this.
   */
  withSourceSpecimen(sourceSpecimen) {
    this.sourceSpecimen = sourceSpecimen; return this;
  }

  /**
   * Get the ReceivedTime.
   * @returns {ReceivedTime} The shr.core.ReceivedTime
   */
  get receivedTime() {
    return this._receivedTime;
  }

  /**
   * Set the ReceivedTime.
   * @param {ReceivedTime} receivedTime - The shr.core.ReceivedTime
   */
  set receivedTime(receivedTime) {
    this._receivedTime = receivedTime;
  }

  /**
   * Set the ReceivedTime and return 'this' for chaining.
   * @param {ReceivedTime} receivedTime - The shr.core.ReceivedTime
   * @returns {Specimen} this.
   */
  withReceivedTime(receivedTime) {
    this.receivedTime = receivedTime; return this;
  }

  /**
   * Get the shr.entity.SpecimenContainer reference array.
   * @returns {Array<Reference>} The shr.entity.SpecimenContainer reference array
   */
  get specimenContainer() {
    return this._specimenContainer;
  }

  /**
   * Set the shr.entity.SpecimenContainer reference array.
   * @param {Array<Reference>} specimenContainer - The shr.entity.SpecimenContainer reference array
   */
  set specimenContainer(specimenContainer) {
    this._specimenContainer = specimenContainer;
  }

  /**
   * Set the shr.entity.SpecimenContainer reference array and return 'this' for chaining.
   * @param {Array<Reference>} specimenContainer - The shr.entity.SpecimenContainer reference array
   * @returns {Specimen} this.
   */
  withSpecimenContainer(specimenContainer) {
    this.specimenContainer = specimenContainer; return this;
  }

  /**
   * Get the SpecimenTreatment array.
   * @returns {Array<SpecimenTreatment>} The shr.entity.SpecimenTreatment array
   */
  get specimenTreatment() {
    return this._specimenTreatment;
  }

  /**
   * Set the SpecimenTreatment array.
   * @param {Array<SpecimenTreatment>} specimenTreatment - The shr.entity.SpecimenTreatment array
   */
  set specimenTreatment(specimenTreatment) {
    this._specimenTreatment = specimenTreatment;
  }

  /**
   * Set the SpecimenTreatment array and return 'this' for chaining.
   * @param {Array<SpecimenTreatment>} specimenTreatment - The shr.entity.SpecimenTreatment array
   * @returns {Specimen} this.
   */
  withSpecimenTreatment(specimenTreatment) {
    this.specimenTreatment = specimenTreatment; return this;
  }

  /**
   * Get the HandlingRisk array.
   * @returns {Array<HandlingRisk>} The shr.entity.HandlingRisk array
   */
  get handlingRisk() {
    return this._handlingRisk;
  }

  /**
   * Set the HandlingRisk array.
   * @param {Array<HandlingRisk>} handlingRisk - The shr.entity.HandlingRisk array
   */
  set handlingRisk(handlingRisk) {
    this._handlingRisk = handlingRisk;
  }

  /**
   * Set the HandlingRisk array and return 'this' for chaining.
   * @param {Array<HandlingRisk>} handlingRisk - The shr.entity.HandlingRisk array
   * @returns {Specimen} this.
   */
  withHandlingRisk(handlingRisk) {
    this.handlingRisk = handlingRisk; return this;
  }

  /**
   * Get the SpecialHandling array.
   * @returns {Array<SpecialHandling>} The shr.entity.SpecialHandling array
   */
  get specialHandling() {
    return this._specialHandling;
  }

  /**
   * Set the SpecialHandling array.
   * @param {Array<SpecialHandling>} specialHandling - The shr.entity.SpecialHandling array
   */
  set specialHandling(specialHandling) {
    this._specialHandling = specialHandling;
  }

  /**
   * Set the SpecialHandling array and return 'this' for chaining.
   * @param {Array<SpecialHandling>} specialHandling - The shr.entity.SpecialHandling array
   * @returns {Specimen} this.
   */
  withSpecialHandling(specialHandling) {
    this.specialHandling = specialHandling; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Specimen class.
   * The JSON must be valid against the Specimen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Specimen} An instance of Specimen populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Specimen();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the Specimen class to a JSON object.
   * The JSON is expected to be valid against the Specimen JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Specimen' };
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
    if (this.accessionIdentifier != null) {
      inst['AccessionIdentifier'] = typeof this.accessionIdentifier.toJSON === 'function' ? this.accessionIdentifier.toJSON() : this.accessionIdentifier;
    }
    if (this.specimenStatus != null) {
      inst['SpecimenStatus'] = typeof this.specimenStatus.toJSON === 'function' ? this.specimenStatus.toJSON() : this.specimenStatus;
    }
    if (this.type != null) {
      inst['Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.collectionSource != null) {
      inst['CollectionSource'] = typeof this.collectionSource.toJSON === 'function' ? this.collectionSource.toJSON() : this.collectionSource;
    }
    if (this.collectionTime != null) {
      inst['CollectionTime'] = typeof this.collectionTime.toJSON === 'function' ? this.collectionTime.toJSON() : this.collectionTime;
    }
    if (this.collectionMethod != null) {
      inst['CollectionMethod'] = typeof this.collectionMethod.toJSON === 'function' ? this.collectionMethod.toJSON() : this.collectionMethod;
    }
    if (this.collectionSite != null) {
      inst['CollectionSite'] = typeof this.collectionSite.toJSON === 'function' ? this.collectionSite.toJSON() : this.collectionSite;
    }
    if (this.sourceSpecimen != null) {
      inst['SourceSpecimen'] = typeof this.sourceSpecimen.toJSON === 'function' ? this.sourceSpecimen.toJSON() : this.sourceSpecimen;
    }
    if (this.receivedTime != null) {
      inst['ReceivedTime'] = typeof this.receivedTime.toJSON === 'function' ? this.receivedTime.toJSON() : this.receivedTime;
    }
    if (this.specimenContainer != null) {
      inst['SpecimenContainer'] = this.specimenContainer.map(f => f.toJSON());
    }
    if (this.specimenTreatment != null) {
      inst['SpecimenTreatment'] = this.specimenTreatment.map(f => f.toJSON());
    }
    if (this.handlingRisk != null) {
      inst['HandlingRisk'] = this.handlingRisk.map(f => f.toJSON());
    }
    if (this.specialHandling != null) {
      inst['SpecialHandling'] = this.specialHandling.map(f => f.toJSON());
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Specimen class.
   * The FHIR must be valid against the Specimen FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Specimen} An instance of Specimen populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new Specimen();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {});
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId);
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid());
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/shr/entity/Specimen');
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
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-CollectionTime-extension') {
        inst.collectionTime = FHIRHelper.createInstanceFromFHIR('shr.entity.CollectionTime', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-CollectionMethod-extension') {
        inst.collectionMethod = FHIRHelper.createInstanceFromFHIR('shr.entity.CollectionMethod', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-CollectionSite-extension') {
        inst.collectionSite = FHIRHelper.createInstanceFromFHIR('shr.entity.CollectionSite', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-SpecimenTreatment-extension') {
        inst.specimenTreatment = inst.specimenTreatment || [];
        const inst_specimenTreatment = FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenTreatment', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.specimenTreatment.push(inst_specimenTreatment);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-HandlingRisk-extension') {
        inst.handlingRisk = inst.handlingRisk || [];
        const inst_handlingRisk = FHIRHelper.createInstanceFromFHIR('shr.entity.HandlingRisk', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.handlingRisk.push(inst_handlingRisk);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://example.com/fhir/StructureDefinition/shr-entity-SpecialHandling-extension') {
        inst.specialHandling = inst.specialHandling || [];
        const inst_specialHandling = FHIRHelper.createInstanceFromFHIR('shr.entity.SpecialHandling', fhir_extension, shrId, allEntries, mappedResources, referencesOut, true);
        inst.specialHandling.push(inst_specialHandling);
      }
    }
    if (fhir['status'] != null) {
      inst.specimenStatus = FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenStatus', fhir['status'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['type'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['parent'] != null && fhir['parent'][0] != null) {
      const entryId = fhir['parent'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Specimen', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.sourceSpecimen = mappedResources[entryId];
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.entity.Patient', referencedEntry['resource'], shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.collectionSource = mappedResources[entryId];
    }
    if (fhir['accessionIdentifier'] != null) {
      inst.accessionIdentifier = FHIRHelper.createInstanceFromFHIR('shr.entity.AccessionIdentifier', fhir['accessionIdentifier'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['receivedTime'] != null) {
      inst.receivedTime = FHIRHelper.createInstanceFromFHIR('shr.core.ReceivedTime', fhir['receivedTime'], shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['container'] != null && fhir['container'][0] != null) {
      for (const fhir_container_0_identifier of fhir['container'][0]['identifier'] || []) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_container_0_identifier, shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['container'][0]['description'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['container'][0]['description'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['container'][0]['type'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir['container'][0]['type'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['container'][0]['capacity'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.capacity = FHIRHelper.createInstanceFromFHIR('shr.entity.Capacity', fhir['container'][0]['capacity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['container'][0]['specimenQuantity'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.specimenQuantity = FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenQuantity', fhir['container'][0]['specimenQuantity'], shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['container'][0]['additiveCodeableConcept'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createReference( FHIRHelper.createInstanceFromFHIR('shr.entity.SpecimenContainer', {}, shrId), referencesOut);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.reference.additive = inst_specimenContainer.reference.additive || [];
        const inst_specimenContainer_reference_additive = FHIRHelper.createInstanceFromFHIR('shr.entity.Additive', fhir['container'][0]['additiveCodeableConcept'], shrId, allEntries, mappedResources, referencesOut, false);
        inst_specimenContainer.reference.additive.push(inst_specimenContainer_reference_additive);
      }
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Specimen;
