import { setPropertiesFromJSON } from '../../json-helper';

import Specimen from '../../cimi/entity/Specimen';

/**
 * Generated class for shr.oncology.BreastLymphNodeSpecimen.
 * @extends Specimen
 */
class BreastLymphNodeSpecimen extends Specimen {

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
   * @returns {BreastLymphNodeSpecimen} this.
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
   * @returns {BreastLymphNodeSpecimen} this.
   */
  withType(type) {
    this.type = type; return this;
  }

  /**
   * Get the CollectionMethod.
   * @returns {CollectionMethod} The cimi.entity.CollectionMethod
   */
  get collectionMethod() {
    return this._collectionMethod;
  }

  /**
   * Set the CollectionMethod.
   * @param {CollectionMethod} collectionMethod - The cimi.entity.CollectionMethod
   */
  set collectionMethod(collectionMethod) {
    this._collectionMethod = collectionMethod;
  }

  /**
   * Set the CollectionMethod and return 'this' for chaining.
   * @param {CollectionMethod} collectionMethod - The cimi.entity.CollectionMethod
   * @returns {BreastLymphNodeSpecimen} this.
   */
  withCollectionMethod(collectionMethod) {
    this.collectionMethod = collectionMethod; return this;
  }

  /**
   * Get the CollectionSite.
   * @returns {CollectionSite} The cimi.entity.CollectionSite
   */
  get collectionSite() {
    return this._collectionSite;
  }

  /**
   * Set the CollectionSite.
   * @param {CollectionSite} collectionSite - The cimi.entity.CollectionSite
   */
  set collectionSite(collectionSite) {
    this._collectionSite = collectionSite;
  }

  /**
   * Set the CollectionSite and return 'this' for chaining.
   * @param {CollectionSite} collectionSite - The cimi.entity.CollectionSite
   * @returns {BreastLymphNodeSpecimen} this.
   */
  withCollectionSite(collectionSite) {
    this.collectionSite = collectionSite; return this;
  }

  /**
   * Get the SourceSpecimen.
   * @returns {SourceSpecimen} The cimi.entity.SourceSpecimen
   */
  get sourceSpecimen() {
    return this._sourceSpecimen;
  }

  /**
   * Set the SourceSpecimen.
   * @param {SourceSpecimen} sourceSpecimen - The cimi.entity.SourceSpecimen
   */
  set sourceSpecimen(sourceSpecimen) {
    this._sourceSpecimen = sourceSpecimen;
  }

  /**
   * Set the SourceSpecimen and return 'this' for chaining.
   * @param {SourceSpecimen} sourceSpecimen - The cimi.entity.SourceSpecimen
   * @returns {BreastLymphNodeSpecimen} this.
   */
  withSourceSpecimen(sourceSpecimen) {
    this.sourceSpecimen = sourceSpecimen; return this;
  }

  /**
   * Deserializes JSON data to an instance of the BreastLymphNodeSpecimen class.
   * The JSON must be valid against the BreastLymphNodeSpecimen JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {BreastLymphNodeSpecimen} An instance of BreastLymphNodeSpecimen populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new BreastLymphNodeSpecimen();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the BreastLymphNodeSpecimen class to a JSON object.
   * The JSON is expected to be valid against the BreastLymphNodeSpecimen JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['shr.base.EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/oncology/BreastLymphNodeSpecimen' };
    if (this.accessionIdentifier != null) {
      inst['cimi.entity.AccessionIdentifier'] = typeof this.accessionIdentifier.toJSON === 'function' ? this.accessionIdentifier.toJSON() : this.accessionIdentifier;
    }
    if (this.specimenStatus != null) {
      inst['cimi.entity.SpecimenStatus'] = typeof this.specimenStatus.toJSON === 'function' ? this.specimenStatus.toJSON() : this.specimenStatus;
    }
    if (this.type != null) {
      inst['shr.core.Type'] = typeof this.type.toJSON === 'function' ? this.type.toJSON() : this.type;
    }
    if (this.collectionSource != null) {
      inst['cimi.entity.CollectionSource'] = typeof this.collectionSource.toJSON === 'function' ? this.collectionSource.toJSON() : this.collectionSource;
    }
    if (this.collectionTime != null) {
      inst['cimi.entity.CollectionTime'] = typeof this.collectionTime.toJSON === 'function' ? this.collectionTime.toJSON() : this.collectionTime;
    }
    if (this.collectionMethod != null) {
      inst['cimi.entity.CollectionMethod'] = typeof this.collectionMethod.toJSON === 'function' ? this.collectionMethod.toJSON() : this.collectionMethod;
    }
    if (this.collectionSite != null) {
      inst['cimi.entity.CollectionSite'] = typeof this.collectionSite.toJSON === 'function' ? this.collectionSite.toJSON() : this.collectionSite;
    }
    if (this.sourceSpecimen != null) {
      inst['cimi.entity.SourceSpecimen'] = typeof this.sourceSpecimen.toJSON === 'function' ? this.sourceSpecimen.toJSON() : this.sourceSpecimen;
    }
    if (this.receivedTime != null) {
      inst['shr.core.ReceivedTime'] = typeof this.receivedTime.toJSON === 'function' ? this.receivedTime.toJSON() : this.receivedTime;
    }
    if (this.specimenContainer != null) {
      inst['cimi.entity.SpecimenContainer'] = this.specimenContainer.map(f => f.toJSON());
    }
    if (this.specimenTreatment != null) {
      inst['cimi.entity.SpecimenTreatment'] = this.specimenTreatment.map(f => f.toJSON());
    }
    if (this.handlingRisk != null) {
      inst['cimi.entity.HandlingRisk'] = this.handlingRisk.map(f => f.toJSON());
    }
    if (this.specialHandling != null) {
      inst['cimi.entity.SpecialHandling'] = this.specialHandling.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the BreastLymphNodeSpecimen class to a FHIR object.
   * The FHIR is expected to be valid against the BreastLymphNodeSpecimen FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Specimen';
    if (this.collectionTime != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.collectionTime.toFHIR(true));
    }
    if (this.collectionSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.collectionSite.toFHIR(true));
    }
    if (this.specimenTreatment != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.specimenTreatment.toFHIR(true));
    }
    if (this.handlingRisk != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.handlingRisk.toFHIR(true));
    }
    if (this.specialHandling != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.specialHandling.toFHIR(true));
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
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['identifier'] = this.specimenContainer.identifier.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    if (this.specimenContainer != null && this.specimenContainer.details != null) {
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['description'] = this.specimenContainer.details.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    if (this.specimenContainer != null && this.specimenContainer.type != null) {
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['type'] = this.specimenContainer.type.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    if (this.specimenContainer != null && this.specimenContainer.capacity != null) {
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['capacity'] = this.specimenContainer.capacity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    if (this.specimenContainer != null && this.specimenContainer.specimenQuantity != null) {
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['specimenQuantity'] = this.specimenContainer.specimenQuantity.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    if (this.specimenContainer != null && this.specimenContainer.additive != null) {
      if (inst['container'] === undefined) {
        inst['container'] = {};
      }
      inst['container']['additive[x]'] = this.specimenContainer.additive.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f);
    }
    return inst;
  }
}
export default BreastLymphNodeSpecimen;
