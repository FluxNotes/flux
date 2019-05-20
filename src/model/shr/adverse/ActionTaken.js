import { setPropertiesFromJSON, uuid, FHIRHelper } from '../../json-helper';

/**
 * Generated class for shr.adverse.ActionTaken.
 */
class ActionTaken {

  /**
   * Get the CommentOrDescription.
   * @returns {CommentOrDescription} The shr.core.CommentOrDescription
   */
  get commentOrDescription() {
    return this._commentOrDescription;
  }

  /**
   * Set the CommentOrDescription.
   * This field/value is required.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   */
  set commentOrDescription(commentOrDescription) {
    this._commentOrDescription = commentOrDescription;
  }

  /**
   * Set the CommentOrDescription and return 'this' for chaining.
   * This field/value is required.
   * @param {CommentOrDescription} commentOrDescription - The shr.core.CommentOrDescription
   * @returns {ActionTaken} this.
   */
  withCommentOrDescription(commentOrDescription) {
    this.commentOrDescription = commentOrDescription; return this;
  }

  /**
   * Get the shr.base.ActionStatement reference.
   * @returns {Reference} The shr.base.ActionStatement reference
   */
  get actionStatement() {
    return this._actionStatement;
  }

  /**
   * Set the shr.base.ActionStatement reference.
   * @param {Reference} actionStatement - The shr.base.ActionStatement reference
   */
  set actionStatement(actionStatement) {
    this._actionStatement = actionStatement;
  }

  /**
   * Set the shr.base.ActionStatement reference and return 'this' for chaining.
   * @param {Reference} actionStatement - The shr.base.ActionStatement reference
   * @returns {ActionTaken} this.
   */
  withActionStatement(actionStatement) {
    this.actionStatement = actionStatement; return this;
  }

  /**
   * Deserializes JSON data to an instance of the ActionTaken class.
   * The JSON must be valid against the ActionTaken JSON schema, although this is not validated by the function.
   * @param {object} json - the JSON data to deserialize
   * @returns {ActionTaken} An instance of ActionTaken populated with the JSON data
   */
  static fromJSON(json={}) {
    const inst = new ActionTaken();
    setPropertiesFromJSON(inst, json);
    return inst;
  }

  /**
   * Serializes an instance of the ActionTaken class to a JSON object.
   * The JSON is expected to be valid against the ActionTaken JSON schema, but no validation checks are performed.
   * @returns {object} a JSON object populated with the data from the element
   */
  toJSON() {
    const inst = { 'EntryType': { 'Value' : 'http://standardhealthrecord.org/spec/shr/adverse/ActionTaken' } };
    if (this.commentOrDescription != null) {
      inst['CommentOrDescription'] = typeof this.commentOrDescription.toJSON === 'function' ? this.commentOrDescription.toJSON() : this.commentOrDescription;
    }
    if (this.actionStatement != null) {
      inst['ActionStatement'] = typeof this.actionStatement.toJSON === 'function' ? this.actionStatement.toJSON() : this.actionStatement;
    }
    return inst;
  }

  /**
   * Deserializes FHIR JSON data to an instance of the ActionTaken class.
   * The FHIR must be valid against the ActionTaken FHIR profile, although this is not validated by the function.
   * @param {object} fhir - the FHIR JSON data to deserialize
   * @param {string} shrId - a unique, persistent, permanent identifier for the overall health record belonging to the Patient; will be auto-generated if not provided
   * @param {Array} allEntries - the list of all entries that references in 'fhir' refer to
   * @param {object} mappedResources - any resources that have already been mapped to SHR objects. Format is { fhir_key: {shr_obj} }
   * @param {Array} referencesOut - list of all SHR ref() targets that were instantiated during this function call
   * @param {boolean} asExtension - Whether the provided instance is an extension
   * @returns {ActionTaken} An instance of ActionTaken populated with the FHIR data
   */
  static fromFHIR(fhir, shrId=uuid(), allEntries=[], mappedResources={}, referencesOut=[], asExtension=false) {
    const inst = new ActionTaken();
    if (asExtension) {
      const match_1 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-core-CommentOrDescription-extension');
      if (match_1 != null) {
        inst.commentOrDescription = FHIRHelper.createInstanceFromFHIR('shr.core.CommentOrDescription', match_1, shrId, allEntries, mappedResources, referencesOut, true);
      }
      const match_2 = fhir['extension'].find(e => e.url == 'http://example.com/fhir/StructureDefinition/shr-base-ActionStatement-extension');
      if (match_2 != null) {
        inst.actionStatement = FHIRHelper.createInstanceFromFHIR('shr.base.ActionStatement', match_2, shrId, allEntries, mappedResources, referencesOut, true);
      }
    }
    return inst;
  }

}
export default ActionTaken;
