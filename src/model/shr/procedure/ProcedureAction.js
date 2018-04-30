import { setPropertiesFromJSON } from '../../json-helper';

import Action from '../action/Action';

/**
 * Generated class for shr.procedure.ProcedureAction.
 * @extends Action
 */
class ProcedureAction extends Action {

  /**
   * Get the Type.
   * @returns {Type} The shr.entity.Type
   */
  get type() {
    return this._type;
  }

  /**
   * Set the Type.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
  }

  /**
   * Set the Type and return 'this' for chaining.
   * This field/value is required.
   * @param {Type} type - The shr.entity.Type
   * @returns {ProcedureAction} this.
   */
  withType(type) {
    this.type = type; return this;
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
   * @returns {ProcedureAction} this.
   */
  withCategory(category) {
    this.category = category; return this;
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
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   */
  set subject(subject) {
    this._subject = subject;
  }

  /**
   * Set the Subject and return 'this' for chaining.
   * This field/value is required.
   * @param {Subject} subject - The shr.base.Subject
   * @returns {ProcedureAction} this.
   */
  withSubject(subject) {
    this.subject = subject; return this;
  }

  /**
   * Get the BodySite array.
   * @returns {Array<BodySite>} The shr.entity.BodySite array
   */
  get bodySite() {
    return this._bodySite;
  }

  /**
   * Set the BodySite array.
   * @param {Array<BodySite>} bodySite - The shr.entity.BodySite array
   */
  set bodySite(bodySite) {
    this._bodySite = bodySite;
  }

  /**
   * Set the BodySite array and return 'this' for chaining.
   * @param {Array<BodySite>} bodySite - The shr.entity.BodySite array
   * @returns {ProcedureAction} this.
   */
  withBodySite(bodySite) {
    this.bodySite = bodySite; return this;
  }

  /**
   * Get the AssociatedStudy.
   * @returns {AssociatedStudy} The shr.procedure.AssociatedStudy
   */
  get associatedStudy() {
    return this._associatedStudy;
  }

  /**
   * Set the AssociatedStudy.
   * @param {AssociatedStudy} associatedStudy - The shr.procedure.AssociatedStudy
   */
  set associatedStudy(associatedStudy) {
    this._associatedStudy = associatedStudy;
  }

  /**
   * Set the AssociatedStudy and return 'this' for chaining.
   * @param {AssociatedStudy} associatedStudy - The shr.procedure.AssociatedStudy
   * @returns {ProcedureAction} this.
   */
  withAssociatedStudy(associatedStudy) {
    this.associatedStudy = associatedStudy; return this;
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
   * @returns {ProcedureAction} this.
   */
  withPartOf(partOf) {
    this.partOf = partOf; return this;
  }

  /**
   * Get the Annotation array.
   * @returns {Array<Annotation>} The shr.core.Annotation array
   */
  get annotation() {
    return this._annotation;
  }

  /**
   * Set the Annotation array.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   */
  set annotation(annotation) {
    this._annotation = annotation;
  }

  /**
   * Set the Annotation array and return 'this' for chaining.
   * @param {Array<Annotation>} annotation - The shr.core.Annotation array
   * @returns {ProcedureAction} this.
   */
  withAnnotation(annotation) {
    this.annotation = annotation; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ProcedureAction class.
   * The JSON must be valid against the ProcedureAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ProcedureAction} An instance of ProcedureAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ProcedureAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the ProcedureAction class to a JSON object.
   * The JSON is expected to be valid against the ProcedureAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/ProcedureAction' } };
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
}
export default ProcedureAction;
