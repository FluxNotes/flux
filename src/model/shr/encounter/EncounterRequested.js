import { setPropertiesFromJSON } from '../../json-helper';

import Encounter from './Encounter';

/**
 * Generated class for shr.encounter.EncounterRequested.
 * @extends Encounter
 */
class EncounterRequested extends Encounter {

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
   * @returns {EncounterRequested} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RequestedContext.
   * @returns {RequestedContext} The shr.action.RequestedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedContext.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the RequestedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedContext} actionContext - The shr.action.RequestedContext
   * @returns {EncounterRequested} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  // Ommitting getter/setter for TBD: HealthConcern

  // Ommitting getter/setter for TBD: PertinentFindings

  // Ommitting getter/setter for TBD: Diagnosis

  // Ommitting getter/setter for TBD: FullClinicalNote

  // Ommitting getter/setter for TBD: ClinicalSummary

  // Ommitting getter/setter for TBD: TreatmentServiceRendered

  // Ommitting getter/setter for TBD: CompletionStatus

  /**
   * Deserializes JSON data to an instance of the EncounterRequested class.
   * The JSON must be valid against the EncounterRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {EncounterRequested} An instance of EncounterRequested populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new EncounterRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the EncounterRequested class to a JSON object.
   * The JSON is expected to be valid against the EncounterRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/encounter/EncounterRequested' };
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
    if (this.category != null) {
      inst['Category'] = this.category.map(f => f.toJSON());
    }
    if (this.actionContext != null) {
      inst['ActionContext'] = typeof this.actionContext.toJSON === 'function' ? this.actionContext.toJSON() : this.actionContext;
    }
    if (this.subject != null) {
      inst['Subject'] = typeof this.subject.toJSON === 'function' ? this.subject.toJSON() : this.subject;
    }
    if (this.referralDate != null) {
      inst['ReferralDate'] = typeof this.referralDate.toJSON === 'function' ? this.referralDate.toJSON() : this.referralDate;
    }
    if (this.referralSourceType != null) {
      inst['ReferralSourceType'] = typeof this.referralSourceType.toJSON === 'function' ? this.referralSourceType.toJSON() : this.referralSourceType;
    }
    if (this.typeAsaCoding != null) {
      inst['TypeAsaCoding'] = typeof this.typeAsaCoding.toJSON === 'function' ? this.typeAsaCoding.toJSON() : this.typeAsaCoding;
    }
    if (this.serviceGiven != null) {
      inst['ServiceGiven'] = this.serviceGiven.map(f => f.toJSON());
    }
    if (this.serviceProvider != null) {
      inst['ServiceProvider'] = typeof this.serviceProvider.toJSON === 'function' ? this.serviceProvider.toJSON() : this.serviceProvider;
    }
    if (this.treatmentCooperation != null) {
      inst['TreatmentCooperation'] = typeof this.treatmentCooperation.toJSON === 'function' ? this.treatmentCooperation.toJSON() : this.treatmentCooperation;
    }
    if (this.paymentSource != null) {
      inst['PaymentSource'] = typeof this.paymentSource.toJSON === 'function' ? this.paymentSource.toJSON() : this.paymentSource;
    }
    return inst;
  }
  /**
   * Serializes an instance of the EncounterRequested class to a FHIR object.
   * The FHIR is expected to be valid against the EncounterRequested FHIR profile, but no validation checks are performed.
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
    if (this.category != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
    }
    if (this.subject != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.subject.toFHIR(true));
    }
    if (this.referralDate != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.referralDate.toFHIR(true));
    }
    if (this.referralSourceType != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.referralSourceType.toFHIR(true));
    }
    if (this.typeAsaCoding != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.typeAsaCoding.toFHIR(true));
    }
    if (this.serviceGiven != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.serviceGiven.toFHIR(true));
    }
    if (this.serviceProvider != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.serviceProvider.toFHIR(true));
    }
    if (this.treatmentCooperation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.treatmentCooperation.toFHIR(true));
    }
    if (this.paymentSource != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.paymentSource.toFHIR(true));
    }
    return inst;
  }
}
export default EncounterRequested;
