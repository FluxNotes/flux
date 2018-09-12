import { setPropertiesFromJSON } from '../../json-helper';

import MedicationUseTopic from '../../cimi/medication/MedicationUseTopic';

/**
 * Generated class for shr.immunization.ImmunizationTopic.
 * @extends MedicationUseTopic
 */
class ImmunizationTopic extends MedicationUseTopic {

  /**
   * Get the Vaccine.
   * @returns {Vaccine} The shr.immunization.Vaccine
   */
  get medication() {
    return this._medication;
  }

  /**
   * Set the Vaccine.
   * This field/value is required.
   * @param {Vaccine} medication - The shr.immunization.Vaccine
   */
  set medication(medication) {
    this._medication = medication;
  }

  /**
   * Set the Vaccine and return 'this' for chaining.
   * This field/value is required.
   * @param {Vaccine} medication - The shr.immunization.Vaccine
   * @returns {ImmunizationTopic} this.
   */
  withMedication(medication) {
    this.medication = medication; return this;
  }

  /**
   * Get the AnatomicalLocation.
   * @returns {AnatomicalLocation} The cimi.element.AnatomicalLocation
   */
  get anatomicalLocation() {
    return this._anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   */
  set anatomicalLocation(anatomicalLocation) {
    this._anatomicalLocation = anatomicalLocation;
  }

  /**
   * Set the AnatomicalLocation and return 'this' for chaining.
   * @param {AnatomicalLocation} anatomicalLocation - The cimi.element.AnatomicalLocation
   * @returns {ImmunizationTopic} this.
   */
  withAnatomicalLocation(anatomicalLocation) {
    this.anatomicalLocation = anatomicalLocation; return this;
  }

  /**
   * Get the DoseSequenceNumber.
   * @returns {DoseSequenceNumber} The shr.immunization.DoseSequenceNumber
   */
  get doseSequenceNumber() {
    return this._doseSequenceNumber;
  }

  /**
   * Set the DoseSequenceNumber.
   * @param {DoseSequenceNumber} doseSequenceNumber - The shr.immunization.DoseSequenceNumber
   */
  set doseSequenceNumber(doseSequenceNumber) {
    this._doseSequenceNumber = doseSequenceNumber;
  }

  /**
   * Set the DoseSequenceNumber and return 'this' for chaining.
   * @param {DoseSequenceNumber} doseSequenceNumber - The shr.immunization.DoseSequenceNumber
   * @returns {ImmunizationTopic} this.
   */
  withDoseSequenceNumber(doseSequenceNumber) {
    this.doseSequenceNumber = doseSequenceNumber; return this;
  }

  /**
   * Get the Outcome array.
   * @returns {Array<Outcome>} The cimi.context.Outcome array
   */
  get outcome() {
    return this._outcome;
  }

  /**
   * Set the Outcome array.
   * @param {Array<Outcome>} outcome - The cimi.context.Outcome array
   */
  set outcome(outcome) {
    this._outcome = outcome;
  }

  /**
   * Set the Outcome array and return 'this' for chaining.
   * @param {Array<Outcome>} outcome - The cimi.context.Outcome array
   * @returns {ImmunizationTopic} this.
   */
  withOutcome(outcome) {
    this.outcome = outcome; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImmunizationTopic class.
   * The JSON must be valid against the ImmunizationTopic JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationTopic} An instance of ImmunizationTopic populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ImmunizationTopic();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ImmunizationTopic class to a JSON object.
   * The JSON is expected to be valid against the ImmunizationTopic JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/immunization/ImmunizationTopic' } };
    if (this.topicCode != null) {
      inst['TopicCode'] = typeof this.topicCode.toJSON === 'function' ? this.topicCode.toJSON() : this.topicCode;
    }
    if (this.category != null) {
      inst['Category'] = typeof this.category.toJSON === 'function' ? this.category.toJSON() : this.category;
    }
    if (this.medication != null) {
      inst['Medication'] = typeof this.medication.toJSON === 'function' ? this.medication.toJSON() : this.medication;
    }
    if (this.dosage != null) {
      inst['Dosage'] = typeof this.dosage.toJSON === 'function' ? this.dosage.toJSON() : this.dosage;
    }
    if (this.anatomicalLocation != null) {
      inst['AnatomicalLocation'] = typeof this.anatomicalLocation.toJSON === 'function' ? this.anatomicalLocation.toJSON() : this.anatomicalLocation;
    }
    if (this.doseSequenceNumber != null) {
      inst['DoseSequenceNumber'] = typeof this.doseSequenceNumber.toJSON === 'function' ? this.doseSequenceNumber.toJSON() : this.doseSequenceNumber;
    }
    if (this.outcome != null) {
      inst['Outcome'] = this.outcome.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ImmunizationTopic class to a FHIR object.
   * The FHIR is expected to be valid against the ImmunizationTopic FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    return inst;
  }
}
export default ImmunizationTopic;
