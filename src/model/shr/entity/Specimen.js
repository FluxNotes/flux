import { setPropertiesFromJSON, createInstanceFromFHIR } from '../../json-helper';

import Entity from './Entity';

/**
 * Generated class for shr.entity.Specimen.
 * @extends Entity
 */
class Specimen extends Entity {

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
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/entity/Specimen' } };
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
   * Serializes an instance of the Specimen class to a FHIR object.
   * The FHIR is expected to be valid against the Specimen FHIR profile, but no validation checks are performed.
   * @param {boolean} asExtension - Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension=false) {
    let inst = {};
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR(true) : this.partOf);
    }
    if (this.collectionTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.collectionTime.toFHIR === 'function' ? this.collectionTime.toFHIR(true) : this.collectionTime);
    }
    if (this.collectionMethod != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.collectionMethod.toFHIR === 'function' ? this.collectionMethod.toFHIR(true) : this.collectionMethod);
    }
    if (this.collectionSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.collectionSite.toFHIR === 'function' ? this.collectionSite.toFHIR(true) : this.collectionSite);
    }
    if (this.specimenTreatment != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specimenTreatment.toFHIR === 'function' ? this.specimenTreatment.toFHIR(true) : this.specimenTreatment);
    }
    if (this.handlingRisk != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.handlingRisk.toFHIR === 'function' ? this.handlingRisk.toFHIR(true) : this.handlingRisk);
    }
    if (this.specialHandling != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(typeof this.specialHandling.toFHIR === 'function' ? this.specialHandling.toFHIR(true) : this.specialHandling);
    }
    if (this.accessionIdentifier != null) {
      inst['accessionIdentifier'] = typeof this.accessionIdentifier.toFHIR === 'function' ? this.accessionIdentifier.toFHIR() : this.accessionIdentifier;
    }
    if (this.specimenStatus != null) {
      inst['status'] = typeof this.specimenStatus.toFHIR === 'function' ? this.specimenStatus.toFHIR() : this.specimenStatus;
    }
    if (this.type != null) {
      inst['type'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.collectionSource != null) {
      inst['subject'] = typeof this.collectionSource.toFHIR === 'function' ? this.collectionSource.toFHIR() : this.collectionSource;
    }
    if (this.receivedTime != null) {
      inst['receivedTime'] = typeof this.receivedTime.toFHIR === 'function' ? this.receivedTime.toFHIR() : this.receivedTime;
    }
    if (this.sourceSpecimen != null) {
      inst['parent'] = typeof this.sourceSpecimen.toFHIR === 'function' ? this.sourceSpecimen.toFHIR() : this.sourceSpecimen;
    }
    if (this.specimenContainer != null && this.specimenContainer.identifier != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['identifier'] = inst ['container']['identifier'] || [];
      inst['container']['identifier'] = inst['container']['identifier'].concat(this.specimenContainer.identifier.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.specimenContainer != null && this.specimenContainer.commentOrDescription != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['description'] = inst ['container']['description'] || [];
      inst['container']['description'] = inst['container']['description'].concat(this.specimenContainer.commentOrDescription.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.specimenContainer != null && this.specimenContainer.type != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['type'] = inst ['container']['type'] || [];
      inst['container']['type'] = inst['container']['type'].concat(this.specimenContainer.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.specimenContainer != null && this.specimenContainer.capacity != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['capacity'] = inst ['container']['capacity'] || [];
      inst['container']['capacity'] = inst['container']['capacity'].concat(this.specimenContainer.capacity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.specimenContainer != null && this.specimenContainer.specimenQuantity != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['specimenQuantity'] = inst ['container']['specimenQuantity'] || [];
      inst['container']['specimenQuantity'] = inst['container']['specimenQuantity'].concat(this.specimenContainer.specimenQuantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.specimenContainer != null && this.specimenContainer.additive != null) {
      if(inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['additive[x]'] = inst ['container']['additive[x]'] || [];
      inst['container']['additive[x]'] = inst['container']['additive[x]'].concat(this.specimenContainer.additive.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://example.com/fhir/StructureDefinition/shr-entity-Specimen-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the Specimen class.
   * The FHIR must be valid against the Specimen FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {Specimen} An instance of Specimen populated with the FHIR data
   */
  static fromFHIR(fhir, asExtension=false) {
    const inst = new Specimen();
    if (fhir['extension'] != null) {
      const match = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-entity-PartOf-extension');
      if (match != null) {
        inst.partOf = createInstanceFromFHIR('shr.entity.PartOf', match, true);
      }
    }
    if (fhir['accessionIdentifier'] != null) {
      inst.accessionIdentifier = createInstanceFromFHIR('shr.entity.AccessionIdentifier', fhir['accessionIdentifier']);
    }
    if (fhir['status'] != null) {
      inst.specimenStatus = createInstanceFromFHIR('shr.entity.SpecimenStatus', fhir['status']);
    }
    if (fhir['type'] != null) {
      inst.type = createInstanceFromFHIR('shr.core.Type', fhir['type']);
    }
    if (fhir['subject'] != null) {
      inst.collectionSource = createInstanceFromFHIR('shr.entity.CollectionSource', fhir['subject']);
    }
    if (fhir['receivedTime'] != null) {
      inst.receivedTime = createInstanceFromFHIR('shr.core.ReceivedTime', fhir['receivedTime']);
    }
    if (fhir['parent'] != null) {
      inst.sourceSpecimen = createInstanceFromFHIR('shr.entity.SourceSpecimen', fhir['parent']);
    }
    if (fhir['container'] != null && fhir['container']['identifier'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.identifier = createInstanceFromFHIR('shr.core.Identifier', fhir['container']['identifier']);
    }
    if (fhir['container'] != null && fhir['container']['description'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.commentOrDescription = createInstanceFromFHIR('shr.core.CommentOrDescription', fhir['container']['description']);
    }
    if (fhir['container'] != null && fhir['container']['type'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.type = createInstanceFromFHIR('shr.core.Type', fhir['container']['type']);
    }
    if (fhir['container'] != null && fhir['container']['capacity'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.capacity = createInstanceFromFHIR('shr.entity.Capacity', fhir['container']['capacity']);
    }
    if (fhir['container'] != null && fhir['container']['specimenQuantity'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.specimenQuantity = createInstanceFromFHIR('shr.entity.SpecimenQuantity', fhir['container']['specimenQuantity']);
    }
    if (fhir['container'] != null && fhir['container']['additiveCodeableConcept'] != null) {
      if(inst.specimenContainer == null) {
        inst.specimenContainer = createInstanceFromFHIR('shr.entity.SpecimenContainer', {});
      }
      inst.specimenContainer.additive = inst.specimenContainer.additive || [];
      inst.specimenContainer.additive = inst.specimenContainer.additive.concat(fhir['container']['additiveCodeableConcept'].map(f => createInstanceFromFHIR('shr.entity.Additive', f)));
    }
    if (asExtension) {
      inst.value = fhir['valueReference'];
    }
    return inst;
  }

}
export default Specimen;
