import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.ProcedureRequested.
 * @extends ProcedureAction
 */
class ProcedureRequested extends ProcedureAction {

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
   * @returns {ProcedureRequested} this.
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
   * @returns {ProcedureRequested} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Get the PartOf.
   * @returns {PartOf} The shr.entity.PartOf
   */
  get partOf() {
    return this._partOf;
  }

  /**
   * Set the PartOf.
   * @param {PartOf} partOf - The shr.entity.PartOf
   */
  set partOf(partOf) {
    this._partOf = partOf;
  }

  /**
   * Set the PartOf and return 'this' for chaining.
   * @param {PartOf} partOf - The shr.entity.PartOf
   * @returns {ProcedureRequested} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureRequested class.
   * The JSON must be valid against the ProcedureRequested JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureRequested} An instance of ProcedureRequested populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ProcedureRequested();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureRequested class to a JSON object.
   * The JSON is expected to be valid against the ProcedureRequested JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/ProcedureRequested' };
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
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureRequested class to a FHIR object.
   * The FHIR is expected to be valid against the ProcedureRequested FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'ProcedureRequest';
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.associatedStudy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.associatedStudy.toFHIR(true));
    }
    if (this.annotation != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.annotation.toFHIR(true));
    }
    if (this.category != null) {
      inst['category'] = inst['category'] || [];
      inst['category'].concat(this.category.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.type != null) {
      inst['code'] = typeof this.type.toFHIR === 'function' ? this.type.toFHIR() : this.type;
    }
    if (this.subject != null) {
      inst['subject'] = typeof this.subject.toFHIR === 'function' ? this.subject.toFHIR() : this.subject;
    }
    if (this.relatedEncounter != null) {
      inst['context'] = typeof this.relatedEncounter.toFHIR === 'function' ? this.relatedEncounter.toFHIR() : this.relatedEncounter;
    }
    if (this.author != null) {
      inst['requester'] = typeof this.author.toFHIR === 'function' ? this.author.toFHIR() : this.author;
    }
    if (this.bodySite != null) {
      inst['bodySite'] = inst['bodySite'] || [];
      inst['bodySite'].concat(this.bodySite.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    return inst;
  }
}
export default ProcedureRequested;
