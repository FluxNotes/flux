import { setPropertiesFromJSON } from '../../json-helper';

import ProcedurePerformed from '../procedure/ProcedurePerformed';

/**
 * Generated class for shr.entity.SpecimenTreatment.
 * @extends ProcedurePerformed
 */
class SpecimenTreatment extends ProcedurePerformed {

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
   * @returns {SpecimenTreatment} this.
   */
  withEntryInfo(entryInfo) {
    this.entryInfo = entryInfo; return this;
  }

  /**
   * Get the Additive array.
   * @returns {Array<Additive>} The shr.entity.Additive array
   */
  get additive() {
    return this._additive;
  }

  /**
   * Set the Additive array.
   * @param {Array<Additive>} additive - The shr.entity.Additive array
   */
  set additive(additive) {
    this._additive = additive;
  }

  /**
   * Set the Additive array and return 'this' for chaining.
   * @param {Array<Additive>} additive - The shr.entity.Additive array
   * @returns {SpecimenTreatment} this.
   */
  withAdditive(additive) {
    this.additive = additive; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenTreatment class.
   * The JSON must be valid against the SpecimenTreatment JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenTreatment} An instance of SpecimenTreatment populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new SpecimenTreatment();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenTreatment class to a JSON object.
   * The JSON is expected to be valid against the SpecimenTreatment JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = this._entryInfo.toJSON();
    inst['EntryType'] = { 'Value': 'http://standardhealthrecord.org/spec/shr/entity/SpecimenTreatment' };
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
    if (this.additive != null) {
      inst['Additive'] = this.additive.map(f => f.toJSON());
    }
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenTreatment class to a FHIR object.
   * The FHIR is expected to be valid against the SpecimenTreatment FHIR profile, but no validation checks are performed.
   * @param {asExtension=false} Render this instance as an extension
   * @returns {object} a FHIR object populated with the data from the element
   */
  toFHIR(asExtension = false) {
    let inst = {};
    inst['resourceType'] = 'Procedure';
    if (this.author != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
    }
    if (this.informant != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
    }
    if (this.associatedStudy != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.associatedStudy.toFHIR(true));
    }
    if (this.additive != null) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.additive.toFHIR(true));
    }
    if (this.partOf != null) {
      inst['partOf'] = inst['partOf'] || [];
      inst['partOf'].push(typeof this.partOf.toFHIR === 'function' ? this.partOf.toFHIR() : this.partOf);
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
    if (this.bodySite != null) {
      inst['bodySite'] = inst['bodySite'] || [];
      inst['bodySite'].concat(this.bodySite.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (this.annotation != null) {
      inst['note'] = inst['note'] || [];
      inst['note'].concat(this.annotation.map(f => typeof f.toFHIR === 'function' ? f.toFHIR() : f));
    }
    if (asExtension) {
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-entity-SpecimenTreatment-extension';
      inst['valueReference'] = this.value;
    }
    return inst;
  }
}
export default SpecimenTreatment;
