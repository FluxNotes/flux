import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.SurgicalProcedure.
 * @extends ProcedureAction
 */
class SurgicalProcedure extends ProcedureAction {

  /**
   * Get the DirectSite array.
   * @returns {Array<DirectSite>} The shr.procedure.DirectSite array
   */
  get directSite() {
    return this._directSite;
  }

  /**
   * Set the DirectSite array.
   * @param {Array<DirectSite>} directSite - The shr.procedure.DirectSite array
   */
  set directSite(directSite) {
    this._directSite = directSite;
  }

  /**
   * Set the DirectSite array and return 'this' for chaining.
   * @param {Array<DirectSite>} directSite - The shr.procedure.DirectSite array
   * @returns {SurgicalProcedure} this.
   */
  withDirectSite(directSite) {
    this.directSite = directSite; return this;
  }

  /**
   * Get the DirectSiteCode array.
   * @returns {Array<DirectSiteCode>} The shr.procedure.DirectSiteCode array
   */
  get directSiteCode() {
    return this._directSiteCode;
  }

  /**
   * Set the DirectSiteCode array.
   * @param {Array<DirectSiteCode>} directSiteCode - The shr.procedure.DirectSiteCode array
   */
  set directSiteCode(directSiteCode) {
    this._directSiteCode = directSiteCode;
  }

  /**
   * Set the DirectSiteCode array and return 'this' for chaining.
   * @param {Array<DirectSiteCode>} directSiteCode - The shr.procedure.DirectSiteCode array
   * @returns {SurgicalProcedure} this.
   */
  withDirectSiteCode(directSiteCode) {
    this.directSiteCode = directSiteCode; return this;
  }

  /**
   * Get the IndirectSite array.
   * @returns {Array<IndirectSite>} The shr.procedure.IndirectSite array
   */
  get indirectSite() {
    return this._indirectSite;
  }

  /**
   * Set the IndirectSite array.
   * @param {Array<IndirectSite>} indirectSite - The shr.procedure.IndirectSite array
   */
  set indirectSite(indirectSite) {
    this._indirectSite = indirectSite;
  }

  /**
   * Set the IndirectSite array and return 'this' for chaining.
   * @param {Array<IndirectSite>} indirectSite - The shr.procedure.IndirectSite array
   * @returns {SurgicalProcedure} this.
   */
  withIndirectSite(indirectSite) {
    this.indirectSite = indirectSite; return this;
  }

  /**
   * Get the IndirectSiteCode array.
   * @returns {Array<IndirectSiteCode>} The shr.procedure.IndirectSiteCode array
   */
  get indirectSiteCode() {
    return this._indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The shr.procedure.IndirectSiteCode array
   */
  set indirectSiteCode(indirectSiteCode) {
    this._indirectSiteCode = indirectSiteCode;
  }

  /**
   * Set the IndirectSiteCode array and return 'this' for chaining.
   * @param {Array<IndirectSiteCode>} indirectSiteCode - The shr.procedure.IndirectSiteCode array
   * @returns {SurgicalProcedure} this.
   */
  withIndirectSiteCode(indirectSiteCode) {
    this.indirectSiteCode = indirectSiteCode; return this;
  }

  /**
   * Get the SurgicalApproach array.
   * @returns {Array<SurgicalApproach>} The shr.procedure.SurgicalApproach array
   */
  get surgicalApproach() {
    return this._surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array.
   * @param {Array<SurgicalApproach>} surgicalApproach - The shr.procedure.SurgicalApproach array
   */
  set surgicalApproach(surgicalApproach) {
    this._surgicalApproach = surgicalApproach;
  }

  /**
   * Set the SurgicalApproach array and return 'this' for chaining.
   * @param {Array<SurgicalApproach>} surgicalApproach - The shr.procedure.SurgicalApproach array
   * @returns {SurgicalProcedure} this.
   */
  withSurgicalApproach(surgicalApproach) {
    this.surgicalApproach = surgicalApproach; return this;
  }

  /**
   * Get the Access array.
   * @returns {Array<Access>} The shr.procedure.Access array
   */
  get access() {
    return this._access;
  }

  /**
   * Set the Access array.
   * @param {Array<Access>} access - The shr.procedure.Access array
   */
  set access(access) {
    this._access = access;
  }

  /**
   * Set the Access array and return 'this' for chaining.
   * @param {Array<Access>} access - The shr.procedure.Access array
   * @returns {SurgicalProcedure} this.
   */
  withAccess(access) {
    this.access = access; return this;
  }

  /**
   * Get the UsingDevice array.
   * @returns {Array<UsingDevice>} The shr.procedure.UsingDevice array
   */
  get usingDevice() {
    return this._usingDevice;
  }

  /**
   * Set the UsingDevice array.
   * @param {Array<UsingDevice>} usingDevice - The shr.procedure.UsingDevice array
   */
  set usingDevice(usingDevice) {
    this._usingDevice = usingDevice;
  }

  /**
   * Set the UsingDevice array and return 'this' for chaining.
   * @param {Array<UsingDevice>} usingDevice - The shr.procedure.UsingDevice array
   * @returns {SurgicalProcedure} this.
   */
  withUsingDevice(usingDevice) {
    this.usingDevice = usingDevice; return this;
  }

  /**
   * Get the UsingDeviceCode array.
   * @returns {Array<UsingDeviceCode>} The shr.procedure.UsingDeviceCode array
   */
  get usingDeviceCode() {
    return this._usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The shr.procedure.UsingDeviceCode array
   */
  set usingDeviceCode(usingDeviceCode) {
    this._usingDeviceCode = usingDeviceCode;
  }

  /**
   * Set the UsingDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingDeviceCode>} usingDeviceCode - The shr.procedure.UsingDeviceCode array
   * @returns {SurgicalProcedure} this.
   */
  withUsingDeviceCode(usingDeviceCode) {
    this.usingDeviceCode = usingDeviceCode; return this;
  }

  /**
   * Get the UsingAccessDevice array.
   * @returns {Array<UsingAccessDevice>} The shr.procedure.UsingAccessDevice array
   */
  get usingAccessDevice() {
    return this._usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The shr.procedure.UsingAccessDevice array
   */
  set usingAccessDevice(usingAccessDevice) {
    this._usingAccessDevice = usingAccessDevice;
  }

  /**
   * Set the UsingAccessDevice array and return 'this' for chaining.
   * @param {Array<UsingAccessDevice>} usingAccessDevice - The shr.procedure.UsingAccessDevice array
   * @returns {SurgicalProcedure} this.
   */
  withUsingAccessDevice(usingAccessDevice) {
    this.usingAccessDevice = usingAccessDevice; return this;
  }

  /**
   * Get the UsingAccessDeviceCode array.
   * @returns {Array<UsingAccessDeviceCode>} The shr.procedure.UsingAccessDeviceCode array
   */
  get usingAccessDeviceCode() {
    return this._usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The shr.procedure.UsingAccessDeviceCode array
   */
  set usingAccessDeviceCode(usingAccessDeviceCode) {
    this._usingAccessDeviceCode = usingAccessDeviceCode;
  }

  /**
   * Set the UsingAccessDeviceCode array and return 'this' for chaining.
   * @param {Array<UsingAccessDeviceCode>} usingAccessDeviceCode - The shr.procedure.UsingAccessDeviceCode array
   * @returns {SurgicalProcedure} this.
   */
  withUsingAccessDeviceCode(usingAccessDeviceCode) {
    this.usingAccessDeviceCode = usingAccessDeviceCode; return this;
  }

  /**
   * Get the IndirectDevice array.
   * @returns {Array<IndirectDevice>} The shr.procedure.IndirectDevice array
   */
  get indirectDevice() {
    return this._indirectDevice;
  }

  /**
   * Set the IndirectDevice array.
   * @param {Array<IndirectDevice>} indirectDevice - The shr.procedure.IndirectDevice array
   */
  set indirectDevice(indirectDevice) {
    this._indirectDevice = indirectDevice;
  }

  /**
   * Set the IndirectDevice array and return 'this' for chaining.
   * @param {Array<IndirectDevice>} indirectDevice - The shr.procedure.IndirectDevice array
   * @returns {SurgicalProcedure} this.
   */
  withIndirectDevice(indirectDevice) {
    this.indirectDevice = indirectDevice; return this;
  }

  /**
   * Get the IndirectDeviceCode array.
   * @returns {Array<IndirectDeviceCode>} The shr.procedure.IndirectDeviceCode array
   */
  get indirectDeviceCode() {
    return this._indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The shr.procedure.IndirectDeviceCode array
   */
  set indirectDeviceCode(indirectDeviceCode) {
    this._indirectDeviceCode = indirectDeviceCode;
  }

  /**
   * Set the IndirectDeviceCode array and return 'this' for chaining.
   * @param {Array<IndirectDeviceCode>} indirectDeviceCode - The shr.procedure.IndirectDeviceCode array
   * @returns {SurgicalProcedure} this.
   */
  withIndirectDeviceCode(indirectDeviceCode) {
    this.indirectDeviceCode = indirectDeviceCode; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SurgicalProcedure class.
   * The JSON must be valid against the SurgicalProcedure JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SurgicalProcedure} An instance of SurgicalProcedure populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SurgicalProcedure();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SurgicalProcedure class to a JSON object.
   * The JSON is expected to be valid against the SurgicalProcedure JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/SurgicalProcedure' } };
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
}
export default SurgicalProcedure;
