import { setPropertiesFromJSON } from '../../json-helper';

import ImmunizationAction from './ImmunizationAction';

/**
 * Generated class for shr.immunization.ImmunizationGiven.
 * @extends ImmunizationAction
 */
class ImmunizationGiven extends ImmunizationAction {

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
   * @returns {ImmunizationGiven} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the PerformedContext.
   * @returns {PerformedContext} The shr.action.PerformedContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the PerformedContext.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the PerformedContext and return 'this' for chaining.
   * This field/value is required.
   * @param {PerformedContext} actionContext - The shr.action.PerformedContext
   * @returns {ImmunizationGiven} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  // Ommitting getter/setter for TBD: DoseSequenceNumber

  /**
   * Deserializes JSON data to an instance of the ImmunizationGiven class.
   * The JSON must be valid against the ImmunizationGiven JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImmunizationGiven} An instance of ImmunizationGiven populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ImmunizationGiven();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ImmunizationGiven class to a JSON object.
   * The JSON is expected to be valid against the ImmunizationGiven JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/immunization/ImmunizationGiven' };
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
    if (this.vaccine != null) {
      inst['Vaccine'] = typeof this.vaccine.toJSON === 'function' ? this.vaccine.toJSON() : this.vaccine;
    }
    if (this.bodySite != null) {
      inst['BodySite'] = typeof this.bodySite.toJSON === 'function' ? this.bodySite.toJSON() : this.bodySite;
    }
    if (this.routeIntoBody != null) {
      inst['RouteIntoBody'] = typeof this.routeIntoBody.toJSON === 'function' ? this.routeIntoBody.toJSON() : this.routeIntoBody;
    }
    if (this.doseAmount != null) {
      inst['DoseAmount'] = typeof this.doseAmount.toJSON === 'function' ? this.doseAmount.toJSON() : this.doseAmount;
    }
    if (this.outcome != null) {
      inst['Outcome'] = this.outcome.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ImmunizationGiven class to a FHIR object.
   * The FHIR is expected to be valid against the ImmunizationGiven FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Immunization';
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
    if (this.outcome != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.outcome.toFHIR(true));
    }
    if (this.vaccine != null && this.vaccine.type != null) {
      inst['vaccineCode'] = typeof this.vaccine.type.toFHIR === 'function' ? this.vaccine.type.toFHIR() : this.vaccine.type;
    }
    if (this.relatedEncounter != null) {
      inst['encounter'] = typeof this.relatedEncounter.toFHIR === 'function' ? this.relatedEncounter.toFHIR() : this.relatedEncounter;
    }
    if (this.vaccine != null && this.vaccine.manufacturer != null) {
      inst['manufacturer'] = typeof this.vaccine.manufacturer.toFHIR === 'function' ? this.vaccine.manufacturer.toFHIR() : this.vaccine.manufacturer;
    }
    if (this.vaccine != null && this.vaccine.lotNumber != null) {
      inst['lotNumber'] = typeof this.vaccine.lotNumber.toFHIR === 'function' ? this.vaccine.lotNumber.toFHIR() : this.vaccine.lotNumber;
    }
    if (this.vaccine != null && this.vaccine.expirationDate != null) {
      inst['expirationDate'] = typeof this.vaccine.expirationDate.toFHIR === 'function' ? this.vaccine.expirationDate.toFHIR() : this.vaccine.expirationDate;
    }
    if (this.bodySite != null) {
      inst['site'] = typeof this.bodySite.toFHIR === 'function' ? this.bodySite.toFHIR() : this.bodySite;
    }
    if (this.routeIntoBody != null) {
      inst['route'] = typeof this.routeIntoBody.toFHIR === 'function' ? this.routeIntoBody.toFHIR() : this.routeIntoBody;
    }
    if (this.doseAmount != null) {
      inst['doseQuantity'] = typeof this.doseAmount.toFHIR === 'function' ? this.doseAmount.toFHIR() : this.doseAmount;
    }
    return inst;
  }
}
export default ImmunizationGiven;
