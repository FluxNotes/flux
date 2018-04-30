import { setPropertiesFromJSON } from '../../json-helper';

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
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {Specimen} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * Get the Status.
   * @returns {Status} The shr.action.Status
   */
  get status() {
    return this._status;
  }

  /**
   * Set the Status.
   * @param {Status} status - The shr.action.Status
   */
  set status(status) {
    this._status = status;
  }

  /**
   * Set the Status and return 'this' for chaining.
   * @param {Status} status - The shr.action.Status
   * @returns {Specimen} this.
   */
  withStatus(status) {
    this.status = status; return this;
  }

  /**
   * Get the Subject.
   * @returns {Subject} The shr.base.Subject
   */
  get subject() {
    return this._subject;
  }

  /**
   * Set the Subject.
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Set the Subject and return 'this' for chaining.
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {Specimen} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
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
   * Get the shr.procedure.SpecimenCollectionPerformed reference.
   * @returns {Reference} The shr.procedure.SpecimenCollectionPerformed reference
   */
  get specimenCollectionPerformed() {
    return this._specimenCollectionPerformed;
  }

  /**
   * Set the shr.procedure.SpecimenCollectionPerformed reference.
   * @param {Reference} specimenCollectionPerformed - The shr.procedure.SpecimenCollectionPerformed reference
   */
  set specimenCollectionPerformed(specimenCollectionPerformed) {
    this._specimenCollectionPerformed = specimenCollectionPerformed;
  }

  /**
   * Set the shr.procedure.SpecimenCollectionPerformed reference and return 'this' for chaining.
   * @param {Reference} specimenCollectionPerformed - The shr.procedure.SpecimenCollectionPerformed reference
   * @returns {Specimen} this.
   */
  withSpecimenCollectionPerformed(specimenCollectionPerformed) {
    this.specimenCollectionPerformed = specimenCollectionPerformed; return this;
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
    if (this.accessionIdentifier != null) {
      inst['AccessionIdentifier'] = typeof this.accessionIdentifier.toJSON === 'function' ? this.accessionIdentifier.toJSON() : this.accessionIdentifier;
    }
    if (this.status != null) {
      inst['Status'] = typeof this.status.toJSON === 'function' ? this.status.toJSON() : this.status;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.sourceSpecimen != null) {
      inst['SourceSpecimen'] = typeof this.sourceSpecimen.toJSON === 'function' ? this.sourceSpecimen.toJSON() : this.sourceSpecimen;
    }
    if (this.receivedTime != null) {
      inst['ReceivedTime'] = typeof this.receivedTime.toJSON === 'function' ? this.receivedTime.toJSON() : this.receivedTime;
    }
    if (this.specimenCollectionPerformed != null) {
      inst['SpecimenCollectionPerformed'] = typeof this.specimenCollectionPerformed.toJSON === 'function' ? this.specimenCollectionPerformed.toJSON() : this.specimenCollectionPerformed;
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
}
export default Specimen;
