import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.encounter.Encounter.
 * @extends Action
 */
class Encounter extends Action {

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
   * @returns {Encounter} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
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
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Set the Subject and return 'this' for chaining.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {Encounter} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
  }

  /**
   * Get the ReferralDate.
   * @returns {ReferralDate} The shr.encounter.ReferralDate
   */
  get referralDate() {
    return this._referralDate;
  }

  /**
   * Set the ReferralDate.
   * @param {ReferralDate} referralDate - The shr.encounter.ReferralDate
   */
  set referralDate(referralDate) {
    this._referralDate = referralDate;
  }

  /**
   * Set the ReferralDate and return 'this' for chaining.
   * @param {ReferralDate} referralDate - The shr.encounter.ReferralDate
   * @returns {Encounter} this.
   */
  withReferralDate(referralDate) {
    this.referralDate = referralDate; return this;
  }

  /**
   * Get the ReferralSourceType.
   * @returns {ReferralSourceType} The shr.encounter.ReferralSourceType
   */
  get referralSourceType() {
    return this._referralSourceType;
  }

  /**
   * Set the ReferralSourceType.
   * @param {ReferralSourceType} referralSourceType - The shr.encounter.ReferralSourceType
   */
  set referralSourceType(referralSourceType) {
    this._referralSourceType = referralSourceType;
  }

  /**
   * Set the ReferralSourceType and return 'this' for chaining.
   * @param {ReferralSourceType} referralSourceType - The shr.encounter.ReferralSourceType
   * @returns {Encounter} this.
   */
  withReferralSourceType(referralSourceType) {
    this.referralSourceType = referralSourceType; return this;
  }

  /**
   * Get the TypeAsaCoding.
   * @returns {TypeAsaCoding} The shr.core.TypeAsaCoding
   */
  get typeAsaCoding() {
    return this._typeAsaCoding;
  }

  /**
   * Set the TypeAsaCoding.
   * @param {TypeAsaCoding} typeAsaCoding - The shr.core.TypeAsaCoding
   */
  set typeAsaCoding(typeAsaCoding) {
    this._typeAsaCoding = typeAsaCoding;
  }

  /**
   * Set the TypeAsaCoding and return 'this' for chaining.
   * @param {TypeAsaCoding} typeAsaCoding - The shr.core.TypeAsaCoding
   * @returns {Encounter} this.
   */
  withTypeAsaCoding(typeAsaCoding) {
    this.typeAsaCoding = typeAsaCoding; return this;
  }

  /**
   * Get the ServiceGiven array.
   * @returns {Array<ServiceGiven>} The shr.encounter.ServiceGiven array
   */
  get serviceGiven() {
    return this._serviceGiven;
  }

  /**
   * Set the ServiceGiven array.
   * @param {Array<ServiceGiven>} serviceGiven - The shr.encounter.ServiceGiven array
   */
  set serviceGiven(serviceGiven) {
    this._serviceGiven = serviceGiven;
  }

  /**
   * Set the ServiceGiven array and return 'this' for chaining.
   * @param {Array<ServiceGiven>} serviceGiven - The shr.encounter.ServiceGiven array
   * @returns {Encounter} this.
   */
  withServiceGiven(serviceGiven) {
    this.serviceGiven = serviceGiven; return this;
  }

  /**
   * Get the ServiceProvider.
   * @returns {ServiceProvider} The shr.encounter.ServiceProvider
   */
  get serviceProvider() {
    return this._serviceProvider;
  }

  /**
   * Set the ServiceProvider.
   * @param {ServiceProvider} serviceProvider - The shr.encounter.ServiceProvider
   */
  set serviceProvider(serviceProvider) {
    this._serviceProvider = serviceProvider;
  }

  /**
   * Set the ServiceProvider and return 'this' for chaining.
   * @param {ServiceProvider} serviceProvider - The shr.encounter.ServiceProvider
   * @returns {Encounter} this.
   */
  withServiceProvider(serviceProvider) {
    this.serviceProvider = serviceProvider; return this;
  }

  /**
   * Get the TreatmentCooperation.
   * @returns {TreatmentCooperation} The shr.encounter.TreatmentCooperation
   */
  get treatmentCooperation() {
    return this._treatmentCooperation;
  }

  /**
   * Set the TreatmentCooperation.
   * @param {TreatmentCooperation} treatmentCooperation - The shr.encounter.TreatmentCooperation
   */
  set treatmentCooperation(treatmentCooperation) {
    this._treatmentCooperation = treatmentCooperation;
  }

  /**
   * Set the TreatmentCooperation and return 'this' for chaining.
   * @param {TreatmentCooperation} treatmentCooperation - The shr.encounter.TreatmentCooperation
   * @returns {Encounter} this.
   */
  withTreatmentCooperation(treatmentCooperation) {
    this.treatmentCooperation = treatmentCooperation; return this;
  }

  /**
   * Get the PaymentSource.
   * @returns {PaymentSource} The shr.encounter.PaymentSource
   */
  get paymentSource() {
    return this._paymentSource;
  }

  /**
   * Set the PaymentSource.
   * @param {PaymentSource} paymentSource - The shr.encounter.PaymentSource
   */
  set paymentSource(paymentSource) {
    this._paymentSource = paymentSource;
  }

  /**
   * Set the PaymentSource and return 'this' for chaining.
   * @param {PaymentSource} paymentSource - The shr.encounter.PaymentSource
   * @returns {Encounter} this.
   */
  withPaymentSource(paymentSource) {
    this.paymentSource = paymentSource; return this;
  }

  // Ommitting getter/setter for TBD: HealthConcern

  // Ommitting getter/setter for TBD: PertinentFindings

  // Ommitting getter/setter for TBD: Diagnosis

  // Ommitting getter/setter for TBD: FullClinicalNote

  // Ommitting getter/setter for TBD: ClinicalSummary

  // Ommitting getter/setter for TBD: TreatmentServiceRendered

  // Ommitting getter/setter for TBD: CompletionStatus

  /**
   * Deserializes JSON data to an instance of the Encounter class.
   * The JSON must be valid against the Encounter JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Encounter} An instance of Encounter populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Encounter();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Encounter class to a JSON object.
   * The JSON is expected to be valid against the Encounter JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/encounter/Encounter' };
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
   * Serializes an instance of the Encounter class to a FHIR object.
   * The FHIR is expected to be valid against the Encounter FHIR profile, but no validation checks are performed.
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
    if (this.actionContext != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actionContext.toFHIR(true));
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
export default Encounter;
