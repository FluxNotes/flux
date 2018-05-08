import { setPropertiesFromJSON } from '../../json-helper';

import Finding from './Finding';

/**
 * Generated class for shr.finding.Observation.
 * @extends Finding
 */
class Observation extends Finding {

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
   * @returns {Observation} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @returns {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  get value() {
    return this._value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity.
   * @param {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Set the choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity and return 'this' for chaining.
   * @param {(Quantity|CodeableConcept|string|boolean|Range|Ratio|Attachment|time|dateTime|TimePeriod|IntegerQuantity)} value - The choice value; one of: shr.core.Quantity, shr.core.CodeableConcept, string, boolean, shr.core.Range, shr.core.Ratio, shr.core.Attachment, time, dateTime, shr.core.TimePeriod, shr.core.IntegerQuantity
   * @returns {Observation} this.
   */
  withValue(value) {
    this.value = value; return this;
  }

  /**
   * Get the FindingStatus.
   * @returns {FindingStatus} The shr.finding.FindingStatus
   */
  get findingStatus() {
    return this._findingStatus;
  }

  /**
   * Set the FindingStatus.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.finding.FindingStatus
   */
  set findingStatus(findingStatus) {
    this._findingStatus = findingStatus;
  }

  /**
   * Set the FindingStatus and return 'this' for chaining.
   * This field/value is required.
   * @param {FindingStatus} findingStatus - The shr.finding.FindingStatus
   * @returns {Observation} this.
   */
  withFindingStatus(findingStatus) {
    this.findingStatus = findingStatus; return this;
  }

  /**
   * Get the ValueAbsentReason.
   * @returns {ValueAbsentReason} The shr.finding.ValueAbsentReason
   */
  get valueAbsentReason() {
    return this._valueAbsentReason;
  }

  /**
   * Set the ValueAbsentReason.
   * @param {ValueAbsentReason} valueAbsentReason - The shr.finding.ValueAbsentReason
   */
  set valueAbsentReason(valueAbsentReason) {
    this._valueAbsentReason = valueAbsentReason;
  }

  /**
   * Set the ValueAbsentReason and return 'this' for chaining.
   * @param {ValueAbsentReason} valueAbsentReason - The shr.finding.ValueAbsentReason
   * @returns {Observation} this.
   */
  withValueAbsentReason(valueAbsentReason) {
    this.valueAbsentReason = valueAbsentReason; return this;
  }

  /**
   * Get the ObservationCode.
   * @returns {ObservationCode} The shr.finding.ObservationCode
   */
  get observationCode() {
    return this._observationCode;
  }

  /**
   * Set the ObservationCode.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   */
  set observationCode(observationCode) {
    this._observationCode = observationCode;
  }

  /**
   * Set the ObservationCode and return 'this' for chaining.
   * This field/value is required.
   * @param {ObservationCode} observationCode - The shr.finding.ObservationCode
   * @returns {Observation} this.
   */
  withObservationCode(observationCode) {
    this.observationCode = observationCode; return this;
  }

  /**
   * Get the ClinicallyRelevantTime.
   * @returns {ClinicallyRelevantTime} The shr.finding.ClinicallyRelevantTime
   */
  get clinicallyRelevantTime() {
    return this._clinicallyRelevantTime;
  }

  /**
   * Set the ClinicallyRelevantTime.
   * @param {ClinicallyRelevantTime} clinicallyRelevantTime - The shr.finding.ClinicallyRelevantTime
   */
  set clinicallyRelevantTime(clinicallyRelevantTime) {
    this._clinicallyRelevantTime = clinicallyRelevantTime;
  }

  /**
   * Set the ClinicallyRelevantTime and return 'this' for chaining.
   * @param {ClinicallyRelevantTime} clinicallyRelevantTime - The shr.finding.ClinicallyRelevantTime
   * @returns {Observation} this.
   */
  withClinicallyRelevantTime(clinicallyRelevantTime) {
    this.clinicallyRelevantTime = clinicallyRelevantTime; return this;
  }

  /**
   * Get the Category array.
   * @returns {Array<Category>} The shr.core.Category array
   */
  get category() {
    return this._category;
  }

  /**
   * Set the Category array.
   * @param {Array<Category>} category - The shr.core.Category array
   */
  set category(category) {
    this._category = category;
  }

  /**
   * Set the Category array and return 'this' for chaining.
   * @param {Array<Category>} category - The shr.core.Category array
   * @returns {Observation} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the BodySite.
   * @returns {BodySite} The shr.entity.BodySite
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite and return 'this' for chaining.
   * @param {BodySite} bodySite - The shr.entity.BodySite
   * @returns {Observation} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Get the ChangeFlag.
   * @returns {ChangeFlag} The shr.finding.ChangeFlag
   */
  get changeFlag() {
    return this._changeFlag;
  }

  /**
   * Set the ChangeFlag.
   * @param {ChangeFlag} changeFlag - The shr.finding.ChangeFlag
   */
  set changeFlag(changeFlag) {
    this._changeFlag = changeFlag;
  }

  /**
   * Set the ChangeFlag and return 'this' for chaining.
   * @param {ChangeFlag} changeFlag - The shr.finding.ChangeFlag
   * @returns {Observation} this.
   */
  withChangeFlag(changeFlag) {
    this.changeFlag = changeFlag; return this;
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
   * @returns {Observation} this.
   */
  withDetails(details) {
    this.details = details; return this;
  }

  /**
   * Get the Interpretation.
   * @returns {Interpretation} The shr.finding.Interpretation
   */
  get interpretation() {
    return this._interpretation;
  }

  /**
   * Set the Interpretation.
   * @param {Interpretation} interpretation - The shr.finding.Interpretation
   */
  set interpretation(interpretation) {
    this._interpretation = interpretation;
  }

  /**
   * Set the Interpretation and return 'this' for chaining.
   * @param {Interpretation} interpretation - The shr.finding.Interpretation
   * @returns {Observation} this.
   */
  withInterpretation(interpretation) {
    this.interpretation = interpretation; return this;
  }

  /**
   * Get the ObservationQualifier array.
   * @returns {Array<ObservationQualifier>} The shr.finding.ObservationQualifier array
   */
  get observationQualifier() {
    return this._observationQualifier;
  }

  /**
   * Set the ObservationQualifier array.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   */
  set observationQualifier(observationQualifier) {
    this._observationQualifier = observationQualifier;
  }

  /**
   * Set the ObservationQualifier array and return 'this' for chaining.
   * @param {Array<ObservationQualifier>} observationQualifier - The shr.finding.ObservationQualifier array
   * @returns {Observation} this.
   */
  withObservationQualifier(observationQualifier) {
    this.observationQualifier = observationQualifier; return this;
  }

  /**
   * Get the shr.entity.Specimen reference.
   * @returns {Reference} The shr.entity.Specimen reference
   */
  get specimen() {
    return this._specimen;
  }

  /**
   * Set the shr.entity.Specimen reference.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   */
  set specimen(specimen) {
    this._specimen = specimen;
  }

  /**
   * Set the shr.entity.Specimen reference and return 'this' for chaining.
   * @param {Reference} specimen - The shr.entity.Specimen reference
   * @returns {Observation} this.
   */
  withSpecimen(specimen) {
    this.specimen = specimen; return this;
  }

  /**
   * Get the shr.device.Device reference.
   * @returns {Reference} The shr.device.Device reference
   */
  get device() {
    return this._device;
  }

  /**
   * Set the shr.device.Device reference.
   * @param {Reference} device - The shr.device.Device reference
   */
  set device(device) {
    this._device = device;
  }

  /**
   * Set the shr.device.Device reference and return 'this' for chaining.
   * @param {Reference} device - The shr.device.Device reference
   * @returns {Observation} this.
   */
  withDevice(device) {
    this.device = device; return this;
  }

  /**
   * Get the ReferenceRange array.
   * @returns {Array<ReferenceRange>} The shr.finding.ReferenceRange array
   */
  get referenceRange() {
    return this._referenceRange;
  }

  /**
   * Set the ReferenceRange array.
   * @param {Array<ReferenceRange>} referenceRange - The shr.finding.ReferenceRange array
   */
  set referenceRange(referenceRange) {
    this._referenceRange = referenceRange;
  }

  /**
   * Set the ReferenceRange array and return 'this' for chaining.
   * @param {Array<ReferenceRange>} referenceRange - The shr.finding.ReferenceRange array
   * @returns {Observation} this.
   */
  withReferenceRange(referenceRange) {
    this.referenceRange = referenceRange; return this;
  }

  /**
   * Get the ObservationComponent array.
   * @returns {Array<ObservationComponent>} The shr.finding.ObservationComponent array
   */
  get observationComponent() {
    return this._observationComponent;
  }

  /**
   * Set the ObservationComponent array.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   */
  set observationComponent(observationComponent) {
    this._observationComponent = observationComponent;
  }

  /**
   * Set the ObservationComponent array and return 'this' for chaining.
   * @param {Array<ObservationComponent>} observationComponent - The shr.finding.ObservationComponent array
   * @returns {Observation} this.
   */
  withObservationComponent(observationComponent) {
    this.observationComponent = observationComponent; return this;
  }

  /**
   * Get the Members.
   * @returns {Members} The shr.finding.Members
   */
  get members() {
    return this._members;
  }

  /**
   * Set the Members.
   * This field/value is required.
   * @param {Members} members - The shr.finding.Members
   */
  set members(members) {
    this._members = members;
  }

  /**
   * Set the Members and return 'this' for chaining.
   * This field/value is required.
   * @param {Members} members - The shr.finding.Members
   * @returns {Observation} this.
   */
  withMembers(members) {
    this.members = members; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Observation class.
   * The JSON must be valid against the Observation JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Observation} An instance of Observation populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new Observation();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Observation class to a JSON object.
   * The JSON is expected to be valid against the Observation JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value' : 'http://standardhealthrecord.org/spec/shr/finding/Observation' };
    if (this.value != null) {
      inst['Value'] = typeof this.value.toJSON === 'function' ? this.value.toJSON() : this.value;
    }
    if (this.relatedEncounter != null) {
      inst['RelatedEncounter'] = typeof this.relatedEncounter.toJSON === 'function' ? this.relatedEncounter.toJSON() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['Author'] = typeof this.author.toJSON === 'function' ? this.author.toJSON() : this.author;
    }
    if (this.informant != null) {
      inst['Informant'] = typeof this.informant.toJSON === 'function' ? this.informant.toJSON() : this.informant;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.focalSubject != null) {
      inst['FocalSubject'] = typeof this.focalSubject.toJSON === 'function' ? this.focalSubject.toJSON() : this.focalSubject;
    }
    if (this.focalSubjectReference != null) {
      inst['FocalSubjectReference'] = typeof this.focalSubjectReference.toJSON === 'function' ? this.focalSubjectReference.toJSON() : this.focalSubjectReference;
    }
    if (this.findingMethod != null) {
      inst['FindingMethod'] = typeof this.findingMethod.toJSON === 'function' ? this.findingMethod.toJSON() : this.findingMethod;
    }
    if (this.findingStatus != null) {
      inst['FindingStatus'] = typeof this.findingStatus.toJSON === 'function' ? this.findingStatus.toJSON() : this.findingStatus;
    }
    if (this.evidence != null) {
      inst['Evidence'] = this.evidence.map(f => f.toJSON());
    }
    if (this.valueAbsentReason != null) {
      inst['ValueAbsentReason'] = typeof this.valueAbsentReason.toJSON === 'function' ? this.valueAbsentReason.toJSON() : this.valueAbsentReason;
    }
    if (this.observationCode != null) {
      inst['ObservationCode'] = typeof this.observationCode.toJSON === 'function' ? this.observationCode.toJSON() : this.observationCode;
    }
    if (this.clinicallyRelevantTime != null) {
      inst['ClinicallyRelevantTime'] = typeof this.clinicallyRelevantTime.toJSON === 'function' ? this.clinicallyRelevantTime.toJSON() : this.clinicallyRelevantTime;
    }
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.changeFlag != null) {
      inst['ChangeFlag'] = typeof this.changeFlag.toJSON === 'function' ? this.changeFlag.toJSON() : this.changeFlag;
    }
    if (this.details != null) {
      inst['Details'] = typeof this.details.toJSON === 'function' ? this.details.toJSON() : this.details;
    }
    if (this.interpretation != null) {
      inst['Interpretation'] = typeof this.interpretation.toJSON === 'function' ? this.interpretation.toJSON() : this.interpretation;
    }
    if (this.observationQualifier != null) {
      inst['ObservationQualifier'] = this.observationQualifier.map(f => f.toJSON());
    }
    if (this.specimen != null) {
      inst['Specimen'] = typeof this.specimen.toJSON === 'function' ? this.specimen.toJSON() : this.specimen;
    }
    if (this.device != null) {
      inst['Device'] = typeof this.device.toJSON === 'function' ? this.device.toJSON() : this.device;
    }
    if (this.referenceRange != null) {
      inst['ReferenceRange'] = this.referenceRange.map(f => f.toJSON());
    }
    if (this.observationComponent != null) {
      inst['ObservationComponent'] = this.observationComponent.map(f => f.toJSON());
    }
    if (this.members != null) {
      inst['Members'] = typeof this.members.toJSON === 'function' ? this.members.toJSON() : this.members;
    }
    return inst;
  }
}
export default Observation;
