import { setPropertiesFromJSON } from '../../json-helper';

import SurgicalProcedure from './SurgicalProcedure';

/**
 * Generated class for shr.procedure.SurgicalProcedureRequestedAgainst.
 * @extends SurgicalProcedure
 */
class SurgicalProcedureRequestedAgainst extends SurgicalProcedure {

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
   * @returns {SurgicalProcedureRequestedAgainst} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the RequestedAgainstContext.
   * @returns {RequestedAgainstContext} The shr.action.RequestedAgainstContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the RequestedAgainstContext.
   * This field/value is required.
   * @param {RequestedAgainstContext} actionContext - The shr.action.RequestedAgainstContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the RequestedAgainstContext and return 'this' for chaining.
   * This field/value is required.
   * @param {RequestedAgainstContext} actionContext - The shr.action.RequestedAgainstContext
   * @returns {SurgicalProcedureRequestedAgainst} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedureRequestedAgainst class.
   * The JSON must be valid against the SurgicalProcedureRequestedAgainst JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedureRequestedAgainst} An instance of SurgicalProcedureRequestedAgainst populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SurgicalProcedureRequestedAgainst();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedureRequestedAgainst class to a JSON object.
   * The JSON is expected to be valid against the SurgicalProcedureRequestedAgainst JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/SurgicalProcedureRequestedAgainst' };
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
    if (this.bodySite != null) {
      inst['BodySite'] = this.bodySite.map(f => f.toJSON());
    }
    if (this.associatedStudy != null) {
      inst['AssociatedStudy'] = typeof this.associatedStudy.toJSON === 'function' ? this.associatedStudy.toJSON() : this.associatedStudy;
    }
    if (this.partOf != null) {
      inst['PartOf'] = typeof this.partOf.toJSON === 'function' ? this.partOf.toJSON() : this.partOf;
    }
    if (this.annotation != null) {
      inst['Annotation'] = this.annotation.map(f => f.toJSON());
    }
    if (this.directSite != null) {
      inst['DirectSite'] = this.directSite.map(f => f.toJSON());
    }
    if (this.directSiteCode != null) {
      inst['DirectSiteCode'] = this.directSiteCode.map(f => f.toJSON());
    }
    if (this.indirectSite != null) {
      inst['IndirectSite'] = this.indirectSite.map(f => f.toJSON());
    }
    if (this.indirectSiteCode != null) {
      inst['IndirectSiteCode'] = this.indirectSiteCode.map(f => f.toJSON());
    }
    if (this.surgicalApproach != null) {
      inst['SurgicalApproach'] = this.surgicalApproach.map(f => f.toJSON());
    }
    if (this.access != null) {
      inst['Access'] = this.access.map(f => f.toJSON());
    }
    if (this.usingDevice != null) {
      inst['UsingDevice'] = this.usingDevice.map(f => f.toJSON());
    }
    if (this.usingDeviceCode != null) {
      inst['UsingDeviceCode'] = this.usingDeviceCode.map(f => f.toJSON());
    }
    if (this.usingAccessDevice != null) {
      inst['UsingAccessDevice'] = this.usingAccessDevice.map(f => f.toJSON());
    }
    if (this.usingAccessDeviceCode != null) {
      inst['UsingAccessDeviceCode'] = this.usingAccessDeviceCode.map(f => f.toJSON());
    }
    if (this.indirectDevice != null) {
      inst['IndirectDevice'] = this.indirectDevice.map(f => f.toJSON());
    }
    if (this.indirectDeviceCode != null) {
      inst['IndirectDeviceCode'] = this.indirectDeviceCode.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedureRequestedAgainst class to a FHIR object.
   * The FHIR is expected to be valid against the SurgicalProcedureRequestedAgainst FHIR profile, but no validation checks are performed.
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
    if (this.bodySite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.bodySite.toFHIR(true));
    }
    if (this.associatedStudy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.associatedStudy.toFHIR(true));
    }
    if (this.partOf != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.partOf.toFHIR(true));
    }
    if (this.annotation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.annotation.toFHIR(true));
    }
    if (this.directSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.directSite.toFHIR(true));
    }
    if (this.directSiteCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.directSiteCode.toFHIR(true));
    }
    if (this.indirectSite != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.indirectSite.toFHIR(true));
    }
    if (this.indirectSiteCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.indirectSiteCode.toFHIR(true));
    }
    if (this.surgicalApproach != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.surgicalApproach.toFHIR(true));
    }
    if (this.access != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.access.toFHIR(true));
    }
    if (this.usingDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.usingDevice.toFHIR(true));
    }
    if (this.usingDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.usingDeviceCode.toFHIR(true));
    }
    if (this.usingAccessDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.usingAccessDevice.toFHIR(true));
    }
    if (this.usingAccessDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.usingAccessDeviceCode.toFHIR(true));
    }
    if (this.indirectDevice != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.indirectDevice.toFHIR(true));
    }
    if (this.indirectDeviceCode != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.indirectDeviceCode.toFHIR(true));
    }
    return inst;
  }
}
export default SurgicalProcedureRequestedAgainst;
