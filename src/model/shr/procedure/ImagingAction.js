import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.ImagingAction.
 * @extends ProcedureAction
 */
class ImagingAction extends ProcedureAction {

  /**
   * Get the ImagingSubstance array.
   * @returns {Array<ImagingSubstance>} The shr.procedure.ImagingSubstance array
   */
  get imagingSubstance() {
    return this._imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   */
  set imagingSubstance(imagingSubstance) {
    this._imagingSubstance = imagingSubstance;
  }

  /**
   * Set the ImagingSubstance array and return 'this' for chaining.
   * @param {Array<ImagingSubstance>} imagingSubstance - The shr.procedure.ImagingSubstance array
   * @returns {ImagingAction} this.
   */
  withImagingSubstance(imagingSubstance) {
    this.imagingSubstance = imagingSubstance; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ImagingAction class.
   * The JSON must be valid against the ImagingAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ImagingAction} An instance of ImagingAction populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new ImagingAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ImagingAction class to a JSON object.
   * The JSON is expected to be valid against the ImagingAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/procedure/ImagingAction' } };
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
    if (this.imagingSubstance != null) {
      inst['ImagingSubstance'] = this.imagingSubstance.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the ImagingAction class to a FHIR object.
   * The FHIR is expected to be valid against the ImagingAction FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
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
    if (this.imagingSubstance != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.imagingSubstance.toFHIR(true));
    }
    return inst;
  }
}
export default ImagingAction;
