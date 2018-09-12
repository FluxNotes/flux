import { setPropertiesFromJSON } from '../../json-helper';

import Content from '../base/Content';

/**
 * Generated class for shr.action.Action.
 * @extends Content
 */
class Action extends Content {

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
   * Set the Type and return 'this' for chaining.
   * @param {Type} type - The shr.entity.Type
   * @returns {Action} this.
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
   * @returns {Action} this.
   */
  withCategory(category) {
    this.category = category; return this;
  }

  /**
   * Get the ActionContext.
   * @returns {ActionContext} The shr.action.ActionContext
   */
  get actionContext() {
    return this._actionContext;
  }

  /**
   * Set the ActionContext.
   * This field/value is required.
   * @param {ActionContext} actionContext - The shr.action.ActionContext
   */
  set actionContext(actionContext) {
    this._actionContext = actionContext;
  }

  /**
   * Set the ActionContext and return 'this' for chaining.
   * This field/value is required.
   * @param {ActionContext} actionContext - The shr.action.ActionContext
   * @returns {Action} this.
   */
  withActionContext(actionContext) {
    this.actionContext = actionContext; return this;
  }

  /**
   * Deserializes JSON data to an instance of the Action class.
   * The JSON must be valid against the Action JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {Action} An instance of Action populated with the JSON data
   */
  static fromJSON(json = {}) {
    const inst = new Action();
    setPropertiesFromJSON(inst, json);
    return inst;
  }
  /**
   * Serializes an instance of the Action class to a JSON object.
   * The JSON is expected to be valid against the Action JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value': 'http://standardhealthrecord.org/spec/shr/action/Action' } };
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
    return inst;
  }
  /**
   * Serializes an instance of the Action class to a FHIR object.
   * The FHIR is expected to be valid against the Action FHIR profile, but no validation checks are performed.
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
    if (asExtension) {
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.relatedEncounter.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.author.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.informant.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.type.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.category.toFHIR(true));
      inst['extension'] = inst['extension'] || [];
      inst['extension'].push(this.actionContext.toFHIR(true));
      inst['url'] = 'http://standardhealthrecord.org/fhir/StructureDefinition/shr-action-Action-extension';
    }
    return inst;
  }
}
export default Action;
