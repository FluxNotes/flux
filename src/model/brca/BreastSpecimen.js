// GENERATED CODE
// Manual modification is NOT RECOMMENDED as changes will be overwritten the next time the class is generated.

import { setPropertiesFromJSON, uuid, FHIRHelper } from '../json-helper';

import ClassRegistry from '../ClassRegistry';

import Specimen from '../shr/core/Specimen';

/**
 * Generated class for brca.BreastSpecimen.
 * @extends Specimen
 */
class BreastSpecimen extends Specimen {

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
   * @returns {BreastSpecimen} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.core.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.core.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.core.PartOf
   * @returns {BreastSpecimen} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the SpecimenType.
   * @returns {SpecimenType} The shr.core.SpecimenType
   */
  get specimenType() {
    return this._specimenType;
  }

  /**
   * Set the SpecimenType.
   * This field/value is required.
   * @param {SpecimenType} specimenType - The shr.core.SpecimenType
   */
  set specimenType(specimenType) {
    this._specimenType = specimenType;
  }

  /**
   * Set the SpecimenType and return 'this' for chaining.
   * This field/value is required.
   * @param {SpecimenType} specimenType - The shr.core.SpecimenType
   * @returns {BreastSpecimen} this.
   */
  withSpecimenType(specimenType) {
    this.specimenType = specimenType; return this;
  }

  /**
   * Get the CollectionMethod.
   * @returns {CollectionMethod} The shr.core.CollectionMethod
   */
  get collectionMethod() {
    return this._collectionMethod;
  }

  /**
   * Set the CollectionMethod.
   * @param {CollectionMethod} collectionMethod - The shr.core.CollectionMethod
   */
  set collectionMethod(collectionMethod) {
    this._collectionMethod = collectionMethod;
  }

  /**
   * Set the CollectionMethod and return 'this' for chaining.
   * @param {CollectionMethod} collectionMethod - The shr.core.CollectionMethod
   * @returns {BreastSpecimen} this.
   */
  withCollectionMethod(collectionMethod) {
    this.collectionMethod = collectionMethod; return this;
  }

  /**
   * Get the CollectionSite.
   * @returns {CollectionSite} The shr.core.CollectionSite
   */
  get collectionSite() {
    return this._collectionSite;
  }

  /**
   * Set the CollectionSite.
   * @param {CollectionSite} collectionSite - The shr.core.CollectionSite
   */
  set collectionSite(collectionSite) {
    this._collectionSite = collectionSite;
  }

  /**
   * Set the CollectionSite and return 'this' for chaining.
   * @param {CollectionSite} collectionSite - The shr.core.CollectionSite
   * @returns {BreastSpecimen} this.
   */
  withCollectionSite(collectionSite) {
    this.collectionSite = collectionSite; return this;
  }

  /**
   * Get the ColdIschemiaTime.
   * @returns {ColdIschemiaTime} The brca.ColdIschemiaTime
   */
  get coldIschemiaTime() {
    return this._coldIschemiaTime;
  }

  /**
   * Set the ColdIschemiaTime.
   * @param {ColdIschemiaTime} coldIschemiaTime - The brca.ColdIschemiaTime
   */
  set coldIschemiaTime(coldIschemiaTime) {
    this._coldIschemiaTime = coldIschemiaTime;
  }

  /**
   * Set the ColdIschemiaTime and return 'this' for chaining.
   * @param {ColdIschemiaTime} coldIschemiaTime - The brca.ColdIschemiaTime
   * @returns {BreastSpecimen} this.
   */
  withColdIschemiaTime(coldIschemiaTime) {
    this.coldIschemiaTime = coldIschemiaTime; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastSpecimen class.
   * The JSON must be valid against the BreastSpecimen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastSpecimen} An instance of BreastSpecimen populated with the JSON data
   */
  static fromJSON(json={}) {
    const klass = ClassRegistry.get('brca', 'BreastSpecimen');
    const inst = new klass();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the BreastSpecimen class to a JSON object.
   * The JSON is expected to be valid against the BreastSpecimen JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/brca/BreastSpecimen' };
    if (this.metadata != null) {
      inst['Metadata'] = typeof this.metadata.toJSON === 'function' ? this.metadata.toJSON() : this.metadata;
    }
    if (this.language != null) {
      inst['Language'] = typeof this.language.toJSON === 'function' ? this.language.toJSON() : this.language;
    }
    if (this.implicitRules != null) {
      inst['ImplicitRules'] = typeof this.implicitRules.toJSON === 'function' ? this.implicitRules.toJSON() : this.implicitRules;
    }
    if (this.narrative != null) {
      inst['Narrative'] = typeof this.narrative.toJSON === 'function' ? this.narrative.toJSON() : this.narrative;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.identifier != null) {
      inst['Identifier'] = this.identifier.map(f => f.toJSON());
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.accessionIdentifier != null) {
      inst['AccessionIdentifier'] = typeof this.accessionIdentifier.toJSON === 'function' ? this.accessionIdentifier.toJSON() : this.accessionIdentifier;
    }
    if (this.specimenType != null) {
      inst['SpecimenType'] = typeof this.specimenType.toJSON === 'function' ? this.specimenType.toJSON() : this.specimenType;
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
    if (this.amountOrSize != null) {
      inst['AmountOrSize'] = typeof this.amountOrSize.toJSON === 'function' ? this.amountOrSize.toJSON() : this.amountOrSize;
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
    if (this.coldIschemiaTime != null) {
      inst['ColdIschemiaTime'] = typeof this.coldIschemiaTime.toJSON === 'function' ? this.coldIschemiaTime.toJSON() : this.coldIschemiaTime;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the BreastSpecimen class.
   * The FHIR must be valid against the BreastSpecimen FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} fhirType - the type of the FHIR object that was passed in, in case not otherwise identifiable from the object itself
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {BreastSpecimen} An instance of BreastSpecimen populated with the FHIR data
   */
  static fromFHIR(fhir, fhirType, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const klass = ClassRegistry.get('brca', 'BreastSpecimen');
    const inst = new klass();
    inst.entryInfo = FHIRHelper.createInstanceFromFHIR('shr.base.Entry', {}, null);
    inst.entryInfo.shrId = FHIRHelper.createInstanceFromFHIR('shr.base.ShrId', shrId, 'string');
    inst.entryInfo.entryId = FHIRHelper.createInstanceFromFHIR('shr.base.EntryId', fhir['id'] || uuid(), 'string');
    inst.entryInfo.entryType = FHIRHelper.createInstanceFromFHIR('shr.base.EntryType', 'http://standardhealthrecord.org/spec/brca/BreastSpecimen', 'uri');
    if (fhir['meta'] != null) {
      if (fhir['meta']['versionId'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.versionId = FHIRHelper.createInstanceFromFHIR('shr.core.VersionId', fhir['meta']['versionId'], 'id', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['meta']['lastUpdated'] != null) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.lastUpdated = FHIRHelper.createInstanceFromFHIR('shr.core.LastUpdated', fhir['meta']['lastUpdated'], 'instant', shrId, allEntries, mappedResources, referencesOut, false);
      }
      for (const fhir_meta_profile of fhir['meta']['profile'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.profile = inst.metadata.profile || [];
        const inst_metadata_profile = FHIRHelper.createInstanceFromFHIR('shr.core.Profile', fhir_meta_profile, 'uri', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.profile.push(inst_metadata_profile);
      }
      for (const fhir_meta_security of fhir['meta']['security'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.securityLabel = inst.metadata.securityLabel || [];
        const inst_metadata_securityLabel = FHIRHelper.createInstanceFromFHIR('shr.core.SecurityLabel', fhir_meta_security, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.securityLabel.push(inst_metadata_securityLabel);
      }
      for (const fhir_meta_tag of fhir['meta']['tag'] || []) {
        inst.metadata = inst.metadata || FHIRHelper.createInstanceFromFHIR('shr.core.Metadata', {}, null, shrId);
        inst.metadata.tag = inst.metadata.tag || [];
        const inst_metadata_tag = FHIRHelper.createInstanceFromFHIR('shr.core.Tag', fhir_meta_tag, 'Coding', shrId, allEntries, mappedResources, referencesOut, false);
        inst.metadata.tag.push(inst_metadata_tag);
      }
    }
    if (fhir['implicitRules'] != null) {
      inst.implicitRules = FHIRHelper.createInstanceFromFHIR('shr.core.ImplicitRules', fhir['implicitRules'], 'uri', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['language'] != null) {
      inst.language = FHIRHelper.createInstanceFromFHIR('shr.core.Language', fhir['language'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['text'] != null) {
      inst.narrative = FHIRHelper.createInstanceFromFHIR('shr.core.Narrative', fhir['text'], 'Narrative', shrId, allEntries, mappedResources, referencesOut, false);
    }
    for (const fhir_extension of fhir['extension'] || []) {
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SpecimenTreatment-extension') {
        inst.specimenTreatment = inst.specimenTreatment || [];
        const inst_specimenTreatment = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenTreatment', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.specimenTreatment.push(inst_specimenTreatment);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-HandlingRisk-extension') {
        inst.handlingRisk = inst.handlingRisk || [];
        const inst_handlingRisk = FHIRHelper.createInstanceFromFHIR('shr.core.HandlingRisk', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.handlingRisk.push(inst_handlingRisk);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-SpecialHandling-extension') {
        inst.specialHandling = inst.specialHandling || [];
        const inst_specialHandling = FHIRHelper.createInstanceFromFHIR('shr.core.SpecialHandling', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
        inst.specialHandling.push(inst_specialHandling);
      }
      if (fhir_extension['url'] != null && fhir_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/brca-ColdIschemiaTime-extension') {
        inst.coldIschemiaTime = FHIRHelper.createInstanceFromFHIR('brca.ColdIschemiaTime', fhir_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    for (const fhir_identifier of fhir['identifier'] || []) {
      inst.identifier = inst.identifier || [];
      const inst_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
      inst.identifier.push(inst_identifier);
    }
    if (fhir['status'] != null) {
      inst.status = FHIRHelper.createInstanceFromFHIR('shr.core.Status', fhir['status'], 'code', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['type'] != null) {
      inst.specimenType = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenType', fhir['type'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['parent'] != null && fhir['parent'][0] != null) {
      const entryId = fhir['parent'][0]['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('brca.BreastSpecimen', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.partOf = mappedResources[entryId];
    }
    if (fhir['subject'] != null) {
      const entryId = fhir['subject']['reference'];
      if (!mappedResources[entryId]) {
        const referencedEntry = allEntries.find(e => e.fullUrl === entryId);
        if (referencedEntry) {
          mappedResources[entryId] = FHIRHelper.createInstanceFromFHIR('shr.core.Patient', referencedEntry['resource'], 'undefined', shrId, allEntries, mappedResources, referencesOut);
        }
      }
      inst.collectionSource = mappedResources[entryId];
    }
    if (fhir['accessionIdentifier'] != null) {
      inst.accessionIdentifier = FHIRHelper.createInstanceFromFHIR('shr.core.AccessionIdentifier', fhir['accessionIdentifier'], 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['receivedTime'] != null) {
      inst.receivedTime = FHIRHelper.createInstanceFromFHIR('shr.core.ReceivedTime', fhir['receivedTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
    }
    if (fhir['collection'] != null) {
      if (fhir['collection']['collectedDateTime'] != null) {
        inst.collectionTime = FHIRHelper.createInstanceFromFHIR('shr.core.CollectionTime', fhir['collection']['collectedDateTime'], 'dateTime', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['collection']['quantity'] != null) {
        inst.amountOrSize = FHIRHelper.createInstanceFromFHIR('shr.core.AmountOrSize', fhir['collection']['quantity'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['collection']['method'] != null) {
        inst.collectionMethod = FHIRHelper.createInstanceFromFHIR('shr.core.CollectionMethod', fhir['collection']['method'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir['collection']['bodySite'] != null) {
        inst.collectionSite = inst.collectionSite || FHIRHelper.createInstanceFromFHIR('shr.core.CollectionSite', {}, null, shrId);
        inst.collectionSite.value = inst.collectionSite.value || FHIRHelper.createInstanceFromFHIR('shr.core.BodyLocation', {}, null, shrId);
        inst.collectionSite.value.locationCode = FHIRHelper.createInstanceFromFHIR('shr.core.LocationCode', fhir['collection']['bodySite'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        for (const fhir_collection_bodySite_extension of fhir['collection']['bodySite']['extension'] || []) {
          if (fhir_collection_bodySite_extension['url'] != null && fhir_collection_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Laterality-extension') {
            inst.collectionSite.value.laterality = FHIRHelper.createInstanceFromFHIR('shr.core.Laterality', fhir_collection_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
          }
          if (fhir_collection_bodySite_extension['url'] != null && fhir_collection_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-Orientation-extension') {
            inst.collectionSite.value.orientation = FHIRHelper.createInstanceFromFHIR('shr.core.Orientation', fhir_collection_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
          }
          if (fhir_collection_bodySite_extension['url'] != null && fhir_collection_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension' && fhir_collection_bodySite_extension['url'] != null && fhir_collection_bodySite_extension['url'] === 'http://hl7.org/fhir/us/shr/DSTU2/StructureDefinition/shr-core-RelationToLandmark-extension') {
            inst.collectionSite.value.relationToLandmark = inst.collectionSite.value.relationToLandmark || [];
            const inst_collectionSite_value_relationToLandmark = FHIRHelper.createInstanceFromFHIR('shr.core.RelationToLandmark', fhir_collection_bodySite_extension, 'Extension', shrId, allEntries, mappedResources, referencesOut, true);
            inst.collectionSite.value.relationToLandmark.push(inst_collectionSite_value_relationToLandmark);
          }
        }
      }
    }
    for (const fhir_container of fhir['container'] || []) {
      for (const fhir_container_identifier of fhir_container['identifier'] || []) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.identifier = inst_specimenContainer.identifier || [];
        const inst_specimenContainer_identifier = FHIRHelper.createInstanceFromFHIR('shr.core.Identifier', fhir_container_identifier, 'Identifier', shrId, allEntries, mappedResources, referencesOut, false);
        inst_specimenContainer.identifier.push(inst_specimenContainer_identifier);
      }
      if (fhir_container['description'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', fhir_container['description'], 'string', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_container['type'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.type = FHIRHelper.createInstanceFromFHIR('shr.core.Type', fhir_container['type'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_container['capacity'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.capacity = FHIRHelper.createInstanceFromFHIR('shr.core.Capacity', fhir_container['capacity'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_container['specimenQuantity'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.specimenQuantity = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenQuantity', fhir_container['specimenQuantity'], 'Quantity', shrId, allEntries, mappedResources, referencesOut, false);
      }
      if (fhir_container['additiveCodeableConcept'] != null) {
        inst.specimenContainer = inst.specimenContainer || [];
        const inst_specimenContainer = FHIRHelper.createInstanceFromFHIR('shr.core.SpecimenContainer', {}, null, shrId);
        inst.specimenContainer.push(inst_specimenContainer);
        inst_specimenContainer.additive = inst_specimenContainer.additive || [];
        const inst_specimenContainer_additive = FHIRHelper.createInstanceFromFHIR('shr.core.Additive', fhir_container['additiveCodeableConcept'], 'CodeableConcept', shrId, allEntries, mappedResources, referencesOut, false);
        inst_specimenContainer.additive.push(inst_specimenContainer_additive);
      }
    }
    return inst;
  }

}
export default BreastSpecimen;
