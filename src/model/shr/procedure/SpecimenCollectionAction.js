import { setPropertiesFromJSON } from '../../json-helper';

import ProcedureAction from './ProcedureAction';

/**
 * Generated class for shr.procedure.SpecimenCollectionAction.
 * @extends ProcedureAction
 */
class SpecimenCollectionAction extends ProcedureAction {

  /**
   * Get the AmountOrSize array.
   * @returns {Array<AmountOrSize>} The shr.procedure.AmountOrSize array
   */
  get amountOrSize() {
    return this._amountOrSize;
  }

  /**
   * Set the AmountOrSize array.
   * @param {Array<AmountOrSize>} amountOrSize - The shr.procedure.AmountOrSize array
   */
  set amountOrSize(amountOrSize) {
    this._amountOrSize = amountOrSize;
  }

  /**
   * Set the AmountOrSize array and return 'this' for chaining.
   * @param {Array<AmountOrSize>} amountOrSize - The shr.procedure.AmountOrSize array
   * @returns {SpecimenCollectionAction} this.
   */
  withAmountOrSize(amountOrSize) {
    this.amountOrSize = amountOrSize; return this;
  }

  /**
   * Deserializes JSON data to an instance of the SpecimenCollectionAction class.
   * The JSON must be valid against the SpecimenCollectionAction JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {SpecimenCollectionAction} An instance of SpecimenCollectionAction populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new SpecimenCollectionAction();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the SpecimenCollectionAction class to a JSON object.
   * The JSON is expected to be valid against the SpecimenCollectionAction JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/procedure/SpecimenCollectionAction' } };
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
    if (this.amountOrSize != null) {
      inst['AmountOrSize'] = this.amountOrSize.map(f => f.toJSON());
    }
    return inst;
  }
}
export default SpecimenCollectionAction;
