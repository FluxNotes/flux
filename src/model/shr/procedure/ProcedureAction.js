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
   * @param {Type} type - The shr.entity.Type
   */
  set type(type) {
    this._type = type;
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
}
export default ProcedureAction;
